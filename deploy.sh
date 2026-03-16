#!/bin/bash
set -e

# Build
echo "Building..."
npm run build

# Deploy to server
echo "Deploying to server..."
scp -r dist/* root@weykon2:/var/www/ai_weykon

# Restart nginx
echo "Restarting nginx..."
ssh root@weykon2 "systemctl restart nginx"

echo "✅ Deployed to ai.weykon.com"
