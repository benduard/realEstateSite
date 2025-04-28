#!/bin/bash

# Get the current date and time for the commit message
DATETIME=$(date "+%Y-%m-%d %H:%M:%S")

# Add all changes
git add .

# Commit with timestamp
git commit -m "Update: $DATETIME"

# Push to the current branch
git push

echo "Changes pushed to GitHub successfully!" 