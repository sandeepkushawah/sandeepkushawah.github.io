# Publish the site: commit everything and push to GitHub (Pages rebuilds automatically).
# Usage (PowerShell, from the repo root):   .\deploy.ps1 -Message "What changed"
param([string]$Message = "Update site")
$ErrorActionPreference = "Stop"
Set-Location -Path $PSScriptRoot
if (Test-Path .git\index.lock) { Remove-Item .git\index.lock -Force }
git add -A
git commit -m $Message
git pull --rebase origin main
git push origin main
Write-Host "Pushed. The site updates at https://sandeepkushawah.github.io in about a minute."
