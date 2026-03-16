#!/bin/bash
set -e

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}🔒 SSL Setup for ai.weykon.com${NC}"
echo ""

# Check if running as root
if [ "$EUID" -ne 0 ]; then
    echo -e "${RED}❌ Please run as root (use sudo)${NC}"
    exit 1
fi

# Install certbot if not present
echo -e "${YELLOW}📦 Checking certbot...${NC}"
if ! command -v certbot &> /dev/null; then
    echo -e "${YELLOW}Installing certbot...${NC}"
    apt-get update
    apt-get install -y certbot python3-certbot-nginx
fi

# Create nginx config directory if not exists
mkdir -p /etc/nginx/sites-available
mkdir -p /etc/nginx/sites-enabled
mkdir -p /var/www/certbot

# Check if nginx config exists
if [ -f "/etc/nginx/sites-available/ai.weykon.com" ]; then
    echo -e "${YELLOW}⚠️  Nginx config already exists. Backup and overwrite? (y/n)${NC}"
    read -r response
    if [[ ! "$response" =~ ^[Yy]$ ]]; then
        echo -e "${RED}Aborted.${NC}"
        exit 1
    fi
    cp /etc/nginx/sites-available/ai.weykon.com /etc/nginx/sites-available/ai.weykon.com.bak
fi

# Copy nginx config
echo -e "${YELLOW}📄 Copying nginx config...${NC}"
cp nginx.conf /etc/nginx/sites-available/ai.weykon.com

# Test nginx config
echo -e "${YELLOW}🧪 Testing nginx configuration...${NC}"
nginx -t

# Enable site
if [ ! -L "/etc/nginx/sites-enabled/ai.weykon.com" ]; then
    ln -s /etc/nginx/sites-available/ai.weykon.com /etc/nginx/sites-enabled/
    echo -e "${GREEN}✅ Site enabled${NC}"
fi

# Reload nginx
echo -e "${YELLOW}🔄 Reloading nginx...${NC}"
systemctl reload nginx

# Get SSL certificate
echo -e "${BLUE}🔐 Obtaining SSL certificate from Let's Encrypt...${NC}"
echo -e "${YELLOW}Make sure DNS for ai.weykon.com points to this server!${NC}"
echo ""

certbot --nginx -d ai.weykon.com -d www.ai.weykon.com --non-interactive --agree-tos --email admin@weykon.com

# Set up auto-renewal cron job
echo -e "${YELLOW}⏰ Setting up auto-renewal...${NC}"

# Certbot usually installs a systemd timer or cron job automatically
# But let's verify and add a custom one as backup
if ! crontab -l 2>/dev/null | grep -q "certbot renew"; then
    (crontab -l 2>/dev/null; echo "0 3 * * * /usr/bin/certbot renew --quiet --nginx") | crontab -
    echo -e "${GREEN}✅ Auto-renewal cron job added${NC}"
else
    echo -e "${GREEN}✅ Auto-renewal already configured${NC}"
fi

# Test renewal (dry run)
echo -e "${YELLOW}🧪 Testing certificate renewal (dry run)...${NC}"
certbot renew --dry-run

echo ""
echo -e "${GREEN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${GREEN}✅ SSL Setup Complete!${NC}"
echo -e "${GREEN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo ""
echo -e "${BLUE}📋 Summary:${NC}"
echo -e "  • Domain: ai.weykon.com"
echo -e "  • Certificate: /etc/letsencrypt/live/ai.weykon.com/"
echo -e "  • Nginx config: /etc/nginx/sites-available/ai.weykon.com"
echo -e "  • Auto-renewal: Daily at 3:00 AM"
echo ""
echo -e "${BLUE}🔧 Useful commands:${NC}"
echo -e "  • Test renewal: certbot renew --dry-run"
echo -e "  • Force renewal: certbot renew --force-renewal"
echo -e "  • Check certificate: openssl x509 -in /etc/letsencrypt/live/ai.weykon.com/cert.pem -noout -text"
echo ""
echo -e "${GREEN}✨ SSL is ready!${NC}"
