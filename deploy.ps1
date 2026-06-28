# ============================================================================
#  deploy.ps1 — publish the redesigned site to GitHub Pages
#  Usage (PowerShell, from the repo root):   .\deploy.ps1
# ============================================================================
$ErrorActionPreference = "Stop"
Set-Location -Path $PSScriptRoot

Write-Host "1/4  Clearing any stale git lock..."
if (Test-Path ".git\index.lock") { Remove-Item ".git\index.lock" -Force }

Write-Host "2/4  Staging the redesign + all images and assets..."
git add `
  _config.yml robots.txt SETUP-REDESIGN.md deploy.ps1 deploy.sh `
  _includes/modern-head.html _includes/modern-nav.html _includes/modern-footer.html `
  _layouts/home.html _layouts/page-modern.html _layouts/publication.html _layouts/portfolio.html _layouts/talk.html `
  _pages/about.md _pages/publications.html _pages/gallery.html _pages/talks.html _pages/portfolio.html _pages/cv.md _pages/contact.md `
  _publications _portfolio `
  _data/gallery.yml _data/timeline.yml _data/navigation.yml `
  assets/css/site.css assets/js/site.js `
  files images

Write-Host "3/4  Committing..."
git commit -m "Redesign site into a modern academic portfolio"

Write-Host "4/4  Pushing to origin/main..."
git push origin main

Write-Host ""
Write-Host "Done. GitHub Pages will rebuild in ~1 minute:  https://sandeepkushawah.github.io" -ForegroundColor Green
