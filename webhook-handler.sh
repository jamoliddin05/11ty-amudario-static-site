#!/bin/bash

# Enable strict error handling
set -e

# Log file to track script execution
LOG_FILE="./webhook-handler.log"

# Branch to pull
BRANCH="gh-pages"

# Ensure the log file exists and is writable
if [ ! -f "$LOG_FILE" ]; then
    touch "$LOG_FILE"
    chmod 644 "$LOG_FILE"
fi

# Log the start of the script
echo "==== $(date): Starting webhook-handler.sh ====" >> "$LOG_FILE"

# Ensure we are in the current directory
echo "$(date): Using current directory $(pwd)" >> "$LOG_FILE"

# Ensure the branch is checked out
git fetch origin >> "$LOG_FILE" 2>&1
git checkout "$BRANCH" >> "$LOG_FILE" 2>&1

# Pull the latest changes
echo "$(date): Pulling latest changes from $BRANCH branch." >> "$LOG_FILE"
git pull origin "$BRANCH" >> "$LOG_FILE" 2>&1

# Log success
echo "$(date): Successfully updated $BRANCH branch." >> "$LOG_FILE"

# Exit script
echo "==== $(date): Finished webhook-handler.sh ====" >> "$LOG_FILE"
exit 0
