# Get the current date and time for the commit message
$datetime = Get-Date -Format "yyyy-MM-dd HH:mm:ss"

# Add all changes
git add .

# Commit with timestamp
git commit -m "Update: $datetime"

# Push to the current branch
git push

Write-Host "Changes pushed to GitHub successfully!" -ForegroundColor Green 