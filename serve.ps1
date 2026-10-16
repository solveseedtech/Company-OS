param(
    [int]$Port = 3000
)

$serverScript = Join-Path $PSScriptRoot "server.ps1"
if (Test-Path $serverScript) {
    & $serverScript -Port $Port
} else {
    Write-Error "server.ps1 not found in $PSScriptRoot"
}
