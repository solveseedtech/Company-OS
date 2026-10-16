@echo off
title Solve Seeds Technologies Server
echo ===================================================
echo   Solve Seeds Technologies - Local Web Server
echo   Running on: http://localhost:3000/
echo ===================================================
echo.
start http://localhost:3000/
powershell -ExecutionPolicy Bypass -File .\serve.ps1 -Port 3000
pause
