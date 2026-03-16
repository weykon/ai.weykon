#!/bin/bash
set -e

# Colors
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

echo -e "${BLUE}🚀 Deploying ai.weykon.com...${NC}"
echo ""

# Build
echo -e "${YELLOW}🔨 Building...${NC}"
npm run build
echo ""

# Deploy to server
echo -e "${YELLOW}📤 Deploying to server...${NC}"
scp -r dist/* root@weykon2:/var/www/ai_weykon
echo ""

# Check SSL certificate expiry (optional check)
echo -e "${YELLOW}🔒 Checking SSL certificate...${NC}"
ssh root@weykon2 "openssl x509 -in /etc/letsencrypt/live/ai.weykon.com/cert.pem -noout -date 2>/dev/null || echo 'Certificate not found - run setup-ssl.sh first'"
echo ""

# Reload nginx
echo -e "${YELLOW}🔄 Reloading nginx...${NC}"
ssh root@weykon2 "systemctl reload nginx"
echo ""

echo -e "${GREEN}✅ Deployed to https://ai.weykon.com${NC}"
echo ""
echo -e "${BLUE}📋 Quick commands:${NC}"
echo "  • SSH: ssh root@weykon2"
echo "  • Logs: ssh root@weykon2 'tail -f /var/log/nginx/ai.weykon.error.log'"
echo "  • SSL Setup: ./setup-ssl.sh (run on server)"
