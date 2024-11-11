#!/bin/bash

# Ensure script is executed with the necessary arguments
if [ "$#" -ne 3 ]; then
    echo "Usage: $0 <directory> <user> <group>"
    exit 1
fi

DIRECTORY="$1"
USER="$2"
GROUP="$3"

# Change ownership recursively
echo "$(date): Changing ownership of $DIRECTORY to $USER:$GROUP."
chown -R "$USER:$GROUP" "$DIRECTORY"

# Change permissions to 777 recursively
echo "$(date): Changing permissions of $DIRECTORY to 777."
chmod -R 777 "$DIRECTORY"

# Log success
echo "$(date): Ownership and permissions updated for $DIRECTORY."
exit 0
