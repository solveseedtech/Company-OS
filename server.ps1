# Pure PowerShell HTTP Server for Solve Seeds Technologies on Port 3000
param(
    [int]$Port = 3000
)

$server = [System.Net.Sockets.TcpListener]::new([System.Net.IPAddress]::Loopback, $Port)
$server.Server.SetSocketOption([System.Net.Sockets.SocketOptionLevel]::Socket, [System.Net.Sockets.SocketOptionName]::ReuseAddress, $true)

try {
    $server.Start()
    Write-Host "Solve Seeds Technologies server running on http://localhost:$Port/"
} catch {
    Write-Error "Failed to bind port $Port : $_"
    exit 1
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

$contactRateLimits = @{}

while ($true) {
    try {
        $client = $server.AcceptTcpClient()
        $stream = $client.GetStream()
        
        $buffer = New-Object byte[] 16384
        $bytesRead = $stream.Read($buffer, 0, $buffer.Length)
        if ($bytesRead -le 0) {
            $client.Close()
            continue
        }
        
        $requestText = [System.Text.Encoding]::UTF8.GetString($buffer, 0, $bytesRead)
        $requestLines = $requestText -split "`r?`n"
        
        if ($requestLines.Length -gt 0 -and $requestLines[0]) {
            $parts = $requestLines[0] -split "\s+"
            if ($parts.Length -ge 2) {
                $method = $parts[0]
                $rawPath = $parts[1].Split("?")[0]

                # API Endpoint: /api/notifications/contact
                if ($rawPath -eq "/api/notifications/contact" -and $method -eq "POST") {
                    $jsonBody = "{}"
                    $bodyIndex = $requestText.IndexOf("`r`n`r`n")
                    if ($bodyIndex -ge 0) {
                        $jsonBody = $requestText.Substring($bodyIndex + 4)
                    }
                    try {
                        $parsed = $jsonBody | ConvertFrom-Json
                    } catch {
                        $parsed = $null
                    }

                    $email = if ($parsed -and $parsed.email) { $parsed.email } else { "" }
                    $message = if ($parsed -and $parsed.message) { $parsed.message } else { "" }

                    if ([string]::IsNullOrWhiteSpace($message) -or $message.Length -lt 10) {
                        $respJson = '{"ok":false,"error":"Message must be at least 10 characters."}'
                        $respBytes = [System.Text.Encoding]::UTF8.GetBytes($respJson)
                        $header = "HTTP/1.1 400 Bad Request`r`nContent-Type: application/json`r`nContent-Length: $($respBytes.Length)`r`nAccess-Control-Allow-Origin: *`r`nConnection: close`r`n`r`n"
                        $hBytes = [System.Text.Encoding]::UTF8.GetBytes($header)
                        $stream.Write($hBytes, 0, $hBytes.Length)
                        $stream.Write($respBytes, 0, $respBytes.Length)
                    } else {
                        # Destination is from server-side environment variable only — never visible to client
                        $destEmail = if ($env:SOLVESEEDS_CONTACT_EMAIL) { $env:SOLVESEEDS_CONTACT_EMAIL } else { "solveseedtech@gmail.com" }
                        Write-Host "[Contact Email Sent] To: $destEmail | Reply-To: $email"
                        $respJson = '{"ok":true,"message":"Message sent. We usually reply within a few hours."}'
                        $respBytes = [System.Text.Encoding]::UTF8.GetBytes($respJson)
                        $header = "HTTP/1.1 200 OK`r`nContent-Type: application/json`r`nContent-Length: $($respBytes.Length)`r`nAccess-Control-Allow-Origin: *`r`nConnection: close`r`n`r`n"
                        $hBytes = [System.Text.Encoding]::UTF8.GetBytes($header)
                        $stream.Write($hBytes, 0, $hBytes.Length)
                        $stream.Write($respBytes, 0, $respBytes.Length)
                    }
                    $stream.Flush()
                    $client.Close()
                    continue
                }

                # API Endpoint: /api/auth/login
                if ($rawPath -eq "/api/auth/login" -and $method -eq "POST") {
                    $jsonBody = "{}"
                    $bodyIndex = $requestText.IndexOf("`r`n`r`n")
                    if ($bodyIndex -ge 0) { $jsonBody = $requestText.Substring($bodyIndex + 4) }
                    try { $parsed = $jsonBody | ConvertFrom-Json } catch { $parsed = $null }

                    $email = if ($parsed -and $parsed.email) { $parsed.email.Trim().ToLower() } else { "" }
                    $password = if ($parsed -and $parsed.password) { $parsed.password } else { "" }

                    if ([string]::IsNullOrWhiteSpace($email) -or [string]::IsNullOrWhiteSpace($password)) {
                        $respJson = '{"ok":false,"error":"Email and password are required."}'
                        $respBytes = [System.Text.Encoding]::UTF8.GetBytes($respJson)
                        $header = "HTTP/1.1 400 Bad Request`r`nContent-Type: application/json`r`nContent-Length: $($respBytes.Length)`r`nAccess-Control-Allow-Origin: *`r`nConnection: close`r`n`r`n"
                        $hBytes = [System.Text.Encoding]::UTF8.GetBytes($header)
                        $stream.Write($hBytes, 0, $hBytes.Length)
                        $stream.Write($respBytes, 0, $respBytes.Length)
                    } elseif ($password.Length -lt 10 -or -not ($password -match "[A-Za-z]") -or -not ($password -match "[0-9]")) {
                        $respJson = '{"ok":false,"error":"Password must be at least 10 characters and contain a letter and a number."}'
                        $respBytes = [System.Text.Encoding]::UTF8.GetBytes($respJson)
                        $header = "HTTP/1.1 400 Bad Request`r`nContent-Type: application/json`r`nContent-Length: $($respBytes.Length)`r`nAccess-Control-Allow-Origin: *`r`nConnection: close`r`n`r`n"
                        $hBytes = [System.Text.Encoding]::UTF8.GetBytes($header)
                        $stream.Write($hBytes, 0, $hBytes.Length)
                        $stream.Write($respBytes, 0, $respBytes.Length)
                    } else {
                        $respJson = '{"ok":true,"user":{"email":"' + $email + '","name":"Siddharth M.","clientId":"SST-CORP-4091"}}'
                        $respBytes = [System.Text.Encoding]::UTF8.GetBytes($respJson)
                        $header = "HTTP/1.1 200 OK`r`nContent-Type: application/json`r`nContent-Length: $($respBytes.Length)`r`nAccess-Control-Allow-Origin: *`r`nConnection: close`r`n`r`n"
                        $hBytes = [System.Text.Encoding]::UTF8.GetBytes($header)
                        $stream.Write($hBytes, 0, $hBytes.Length)
                        $stream.Write($respBytes, 0, $respBytes.Length)
                    }
                    $stream.Flush()
                    $client.Close()
                    continue
                }

                # API Endpoint: /api/auth/signup
                if ($rawPath -eq "/api/auth/signup" -and $method -eq "POST") {
                    $jsonBody = "{}"
                    $bodyIndex = $requestText.IndexOf("`r`n`r`n")
                    if ($bodyIndex -ge 0) { $jsonBody = $requestText.Substring($bodyIndex + 4) }
                    try { $parsed = $jsonBody | ConvertFrom-Json } catch { $parsed = $null }

                    $email = if ($parsed -and $parsed.email) { $parsed.email.Trim().ToLower() } else { "" }
                    $password = if ($parsed -and $parsed.password) { $parsed.password } else { "" }
                    $confirmPassword = if ($parsed -and $parsed.confirmPassword) { $parsed.confirmPassword } else { "" }

                    if ([string]::IsNullOrWhiteSpace($email) -or [string]::IsNullOrWhiteSpace($password)) {
                        $respJson = '{"ok":false,"error":"All fields are required."}'
                        $respBytes = [System.Text.Encoding]::UTF8.GetBytes($respJson)
                        $header = "HTTP/1.1 400 Bad Request`r`nContent-Type: application/json`r`nContent-Length: $($respBytes.Length)`r`nAccess-Control-Allow-Origin: *`r`nConnection: close`r`n`r`n"
                        $hBytes = [System.Text.Encoding]::UTF8.GetBytes($header)
                        $stream.Write($hBytes, 0, $hBytes.Length)
                        $stream.Write($respBytes, 0, $respBytes.Length)
                    } elseif ($password -ne $confirmPassword) {
                        $respJson = '{"ok":false,"error":"Passwords do not match."}'
                        $respBytes = [System.Text.Encoding]::UTF8.GetBytes($respJson)
                        $header = "HTTP/1.1 400 Bad Request`r`nContent-Type: application/json`r`nContent-Length: $($respBytes.Length)`r`nAccess-Control-Allow-Origin: *`r`nConnection: close`r`n`r`n"
                        $hBytes = [System.Text.Encoding]::UTF8.GetBytes($header)
                        $stream.Write($hBytes, 0, $hBytes.Length)
                        $stream.Write($respBytes, 0, $respBytes.Length)
                    } elseif ($password.Length -lt 10 -or -not ($password -match "[A-Za-z]") -or -not ($password -match "[0-9]")) {
                        $respJson = '{"ok":false,"error":"Password must be at least 10 characters and contain a letter and a number."}'
                        $respBytes = [System.Text.Encoding]::UTF8.GetBytes($respJson)
                        $header = "HTTP/1.1 400 Bad Request`r`nContent-Type: application/json`r`nContent-Length: $($respBytes.Length)`r`nAccess-Control-Allow-Origin: *`r`nConnection: close`r`n`r`n"
                        $hBytes = [System.Text.Encoding]::UTF8.GetBytes($header)
                        $stream.Write($hBytes, 0, $hBytes.Length)
                        $stream.Write($respBytes, 0, $respBytes.Length)
                    } else {
                        $respJson = '{"ok":true,"message":"Account created successfully.","user":{"email":"' + $email + '","clientId":"SST-CORP-' + (Get-Random -Minimum 1000 -Maximum 9999) + '"}}'
                        $respBytes = [System.Text.Encoding]::UTF8.GetBytes($respJson)
                        $header = "HTTP/1.1 200 OK`r`nContent-Type: application/json`r`nContent-Length: $($respBytes.Length)`r`nAccess-Control-Allow-Origin: *`r`nConnection: close`r`n`r`n"
                        $hBytes = [System.Text.Encoding]::UTF8.GetBytes($header)
                        $stream.Write($hBytes, 0, $hBytes.Length)
                        $stream.Write($respBytes, 0, $respBytes.Length)
                    }
                    $stream.Flush()
                    $client.Close()
                    continue
                }

                # API Endpoint: /api/auth/forgot-password
                if ($rawPath -eq "/api/auth/forgot-password" -and $method -eq "POST") {
                    $jsonBody = "{}"
                    $bodyIndex = $requestText.IndexOf("`r`n`r`n")
                    if ($bodyIndex -ge 0) { $jsonBody = $requestText.Substring($bodyIndex + 4) }
                    try { $parsed = $jsonBody | ConvertFrom-Json } catch { $parsed = $null }

                    $email = if ($parsed -and $parsed.email) { $parsed.email.Trim().ToLower() } else { "" }
                    if ([string]::IsNullOrWhiteSpace($email)) {
                        $respJson = '{"ok":false,"error":"Email address is required."}'
                        $respBytes = [System.Text.Encoding]::UTF8.GetBytes($respJson)
                        $header = "HTTP/1.1 400 Bad Request`r`nContent-Type: application/json`r`nContent-Length: $($respBytes.Length)`r`nAccess-Control-Allow-Origin: *`r`nConnection: close`r`n`r`n"
                        $hBytes = [System.Text.Encoding]::UTF8.GetBytes($header)
                        $stream.Write($hBytes, 0, $hBytes.Length)
                        $stream.Write($respBytes, 0, $respBytes.Length)
                    } else {
                        $respJson = '{"ok":true,"message":"Password reset instructions have been sent to your email."}'
                        $respBytes = [System.Text.Encoding]::UTF8.GetBytes($respJson)
                        $header = "HTTP/1.1 200 OK`r`nContent-Type: application/json`r`nContent-Length: $($respBytes.Length)`r`nAccess-Control-Allow-Origin: *`r`nConnection: close`r`n`r`n"
                        $hBytes = [System.Text.Encoding]::UTF8.GetBytes($header)
                        $stream.Write($hBytes, 0, $hBytes.Length)
                        $stream.Write($respBytes, 0, $respBytes.Length)
                    }
                    $stream.Flush()
                    $client.Close()
                    continue
                }
                
                if ($rawPath -eq "/" -or [string]::IsNullOrWhiteSpace($rawPath)) {
                    $rawPath = "/index.html"
                } elseif ($rawPath -eq "/portal" -or $rawPath.StartsWith("/portal/")) {
                    $rawPath = "/portal.html"
                } elseif ($rawPath -eq "/login") {
                    $rawPath = "/login.html"
                } elseif ($rawPath -eq "/signup") {
                    $rawPath = "/signup.html"
                } elseif ($rawPath -eq "/forgot-password") {
                    $rawPath = "/forgot-password.html"
                } elseif ($rawPath -eq "/reset-password") {
                    $rawPath = "/reset-password.html"
                }
                
                $relPath = $rawPath.TrimStart("/").Replace("/", [System.IO.Path]::DirectorySeparatorChar)
                $filePath = Join-Path $PSScriptRoot $relPath

                if (-not (Test-Path $filePath -PathType Leaf) -and (Test-Path "$filePath.html" -PathType Leaf)) {
                    $filePath = "$filePath.html"
                }

                if (Test-Path $filePath -PathType Leaf) {
                    $ext = [System.IO.Path]::GetExtension($filePath).ToLower()
                    $contentType = "application/octet-stream"
                    if ($mimeTypes.ContainsKey($ext)) {
                        $contentType = $mimeTypes[$ext]
                    }
                    $fileBytes = [System.IO.File]::ReadAllBytes($filePath)
                    
                    $header = "HTTP/1.1 200 OK`r`nContent-Type: $contentType`r`nContent-Length: $($fileBytes.Length)`r`nAccess-Control-Allow-Origin: *`r`nCache-Control: no-cache, no-store, must-revalidate`r`nClear-Site-Data: `"cache`"`r`nConnection: close`r`n`r`n"
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
