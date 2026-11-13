#!/usr/bin/env bash
# Publish the site: commit everything and push to GitHub (Pages rebuilds automatically).
# Usage:  ./deploy.sh "What changed"
set -e
cd "$(dirname "$0")"
MSG="${1:-Update site}"
rm -f .git/index.lock
git add -A
git commit -m "$MSG"
git pull --rebase origin main
git push origin main
echo "Pushed. The site updates at https://sandeepkushawah.github.io in about a minute."
