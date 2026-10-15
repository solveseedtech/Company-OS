param(
    [int]$Port = 3000
)

$server = [System.Net.Sockets.TcpListener]::new([System.Net.IPAddress]::Any, $Port)
try {
    $server.Start()
    Write-Host "Solve Seeds Technologies running at http://localhost:$Port/"
} catch {
    $Port = 8080
    $server = [System.Net.Sockets.TcpListener]::new([System.Net.IPAddress]::Any, $Port)
    $server.Start()
    Write-Host "Solve Seeds Technologies running at http://localhost:$Port/"
}

$mimeTypes = @{
    ".html" = "text/html; charset=utf-8"
    ".css"  = "text/css; charset=utf-8"
    ".js"   = "application/javascript; charset=utf-8"
    ".json" = "application/json; charset=utf-8"
    ".svg"  = "image/svg+xml"
    ".png"  = "image/png"
    ".jpg"  = "image/jpeg"
    ".ico"  = "image/x-icon"
}

while ($true) {
    try {
        $client = $server.AcceptTcpClient()
        $stream = $client.GetStream()
        
        $buffer = New-Object byte[] 4096
        $bytesRead = $stream.Read($buffer, 0, $buffer.Length)
        $requestText = [System.Text.Encoding]::UTF8.GetString($buffer, 0, $bytesRead)
        
        $requestLines = $requestText -split "`r?`n"
        if ($requestLines.Length -gt 0 -and $requestLines[0]) {
            $parts = $requestLines[0] -split "\s+"
            if ($parts.Length -ge 2) {
                $rawPath = $parts[1].Split("?")[0]
                if ($rawPath -eq "/" -or [string]::IsNullOrWhiteSpace($rawPath)) {
                    $rawPath = "/index.html"
                }
                $relPath = $rawPath.TrimStart("/").Replace("/", [System.IO.Path]::DirectorySeparatorChar)
                $filePath = Join-Path $PSScriptRoot $relPath

                if (Test-Path $filePath -PathType Leaf) {
                    $ext = [System.IO.Path]::GetExtension($filePath).ToLower()
                    $contentType = "application/octet-stream"
                    if ($mimeTypes.ContainsKey($ext)) {
                        $contentType = $mimeTypes[$ext]
                    }
                    $fileBytes = [System.IO.File]::ReadAllBytes($filePath)
                    $header = "HTTP/1.1 200 OK`r`nContent-Type: $contentType`r`nContent-Length: $($fileBytes.Length)`r`nAccess-Control-Allow-Origin: *`r`nConnection: close`r`n`r`n"
                    $headerBytes = [System.Text.Encoding]::UTF8.GetBytes($header)
                    $stream.Write($headerBytes, 0, $headerBytes.Length)
                    $stream.Write($fileBytes, 0, $fileBytes.Length)
                } else {
                    $notFound = "HTTP/1.1 404 Not Found`r`nContent-Type: text/plain`r`nContent-Length: 9`r`nConnection: close`r`n`r`nNot Found"
                    $errBytes = [System.Text.Encoding]::UTF8.GetBytes($notFound)
                    $stream.Write($errBytes, 0, $errBytes.Length)
                }
            }
        }
        $stream.Flush()
        $client.Close()
    } catch {
        # ignore error and continue
    }
}
