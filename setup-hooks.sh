#!/bin/bash

HOOKS_DIR="git-hooks"
HOOK_NAME="pre-commit"
SCRIPT_URL="https://raw.githubusercontent.com/sumairruhani2/pb-messenger/main/.githooks/pre-commit"

echo "Setting up Git hooks..."

# Check if the hooks directory exists
if [ ! -d "$HOOKS_DIR" ]; then
  echo "Creating hooks directory: $HOOKS_DIR"
  mkdir -p "$HOOKS_DIR"
fi

# Download the pre-commit script
echo "Downloading $HOOK_NAME script..."
curl -o "$HOOKS_DIR/$HOOK_NAME" "$SCRIPT_URL"

# Make the script executable
chmod +x "$HOOKS_DIR/$HOOK_NAME"

echo "Git hooks set up successfully."
