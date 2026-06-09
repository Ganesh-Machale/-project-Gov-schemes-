@echo off
echo ===================================================
echo   FIXING SERVER ISSUES (Killing stuck processes)
echo ===================================================
echo.

:: Kill all running Node.js processes to free up ports
taskkill /F /IM node.exe
echo.
echo All Node.js processes have been stopped.
echo.

echo ===================================================
echo   STARTING SERVER ON PORT 5002...
echo ===================================================
cd server
npm start
pause
