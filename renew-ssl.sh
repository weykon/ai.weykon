#!/bin/bash
set -e

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}🔒 SSL Renewal for ai.weykon.com${NC}"
echo ""

# Check if running as root
if [ "$EUID" -ne 0 ]; then
    echo -e "${RED}❌ Please run as root (use sudo)${NC}"
    exit 1
fi

# Renew certificates
echo -e "${YELLOW}🔄 Renewing SSL certificates...${NC}"
certbot renew --nginx --quiet

# Reload nginx to apply new certificates
echo -e "${YELLOW}🔄 Reloading nginx...${NC}"
systemctl reload nginx

echo ""
echo -e "${GREEN}✅ SSL renewal complete!${NC}"

# Show certificate expiry
echo -e "${BLUE}📅 Certificate expiry:${NC}"
openssl x509 -in /etc/letsencrypt/live/ai.weykon.com/cert.pem -noout -dates
