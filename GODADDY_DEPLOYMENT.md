# 🚀 GoDaddy Hosting Deployment Guide

## Prerequisites
✅ GoDaddy hosting account (Shared, WordPress, or VPS hosting)  
✅ Your MoWCapital-SPA folder ready  
✅ FTP/File Manager access  

---

## Method 1: File Manager Upload (Easiest)

### Step 1: Access cPanel File Manager
1. Log in to your GoDaddy account at https://www.godaddy.com
2. Go to **My Products** → **Web Hosting** → **Manage**
3. In cPanel, find and click **File Manager**
4. Navigate to the `public_html` folder (this is your website root)

### Step 2: Clear Default Files
1. If you see any default GoDaddy files (index.html, coming-soon.html), delete them
2. This ensures your website loads correctly

### Step 3: Upload Your Website
1. Click the **Upload** button in File Manager
2. Select ALL files from your `MowCapital-SPA` folder:
   - `index.html`
   - `css/` folder (with style.css)
   - `js/` folder (with main.js)
   - `images/` folder (with all MoW logos)
3. Wait for upload to complete (should take 1-2 minutes)

### Step 4: Verify File Structure
Your `public_html` folder should look like this:
```
public_html/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── main.js
└── images/
    ├── MoW-BigLogo.jpg
    ├── MoW-FlatLogo2.jpg
    ├── MoW-FavIcon.png
    └── MoW-OfficeBuilding.jpg
```

### Step 5: Set Permissions
1. Select all uploaded files and folders
2. Right-click → **Change Permissions**
3. Set folders to `755` and files to `644`
4. Check **Recurse into subdirectories**
5. Click **Change Permissions**

### Step 6: Test Your Website
1. Open your domain in a browser (e.g., www.yourdomain.com)
2. You should see your MoWCapital website!
3. Test all sections: navigation, animations, contact form

---

## Method 2: FTP Upload (Alternative)

### Step 1: Get FTP Credentials
1. In GoDaddy cPanel, find **FTP Accounts**
2. Use the main FTP account or create a new one
3. Note down:
   - FTP Server (usually ftp.yourdomain.com)
   - Username
   - Password

### Step 2: Install FTP Client
Download one of these free FTP clients:
- **FileZilla** (Recommended): https://filezilla-project.org/
- **WinSCP** (Windows): https://winscp.net/
- **Cyberduck** (Mac): https://cyberduck.io/

### Step 3: Connect to GoDaddy
1. Open your FTP client
2. Enter your FTP credentials:
   - Host: ftp.yourdomain.com
   - Username: your FTP username
   - Password: your FTP password
   - Port: 21
3. Click **Connect**

### Step 4: Upload Files
1. In the left panel (local), navigate to your `MowCapital-SPA` folder
2. In the right panel (remote), navigate to `public_html`
3. Select all files from MowCapital-SPA
4. Drag and drop to `public_html` folder
5. Wait for upload to complete

---

## Domain Configuration

### If You Want to Use a Subdomain
Example: `mow.yourdomain.com`

1. In cPanel, go to **Domains** → **Subdomains**
2. Create a subdomain (e.g., "mow")
3. Set document root to a new folder (e.g., `public_html/mow`)
4. Upload your website files to this new folder instead

### If You Have Multiple Domains
1. In cPanel, go to **Domains** → **Addon Domains**
2. Add your domain
3. Set document root for that domain
4. Upload files to the specified folder

---

## SSL Certificate Setup (HTTPS)

### Enable Free SSL
1. In GoDaddy cPanel, find **SSL/TLS Status**
2. Select your domain
3. Click **Run AutoSSL**
4. Wait 5-10 minutes for certificate installation
5. Your site will be accessible via https://yourdomain.com

### Force HTTPS (Recommended)
Create a `.htaccess` file in `public_html`:

```apache
# Force HTTPS
RewriteEngine On
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

# Remove www (optional)
RewriteCond %{HTTP_HOST} ^www\.(.*)$ [NC]
RewriteRule ^(.*)$ https://%1/$1 [R=301,L]
```

Upload this file using File Manager or FTP.

---

## Performance Optimization

### Enable Gzip Compression
Add to your `.htaccess` file:

```apache
# Enable Gzip Compression
<IfModule mod_deflate.c>
    AddOutputFilterByType DEFLATE text/html text/css text/javascript application/javascript application/json
</IfModule>
```

### Browser Caching
Add to your `.htaccess` file:

```apache
# Browser Caching
<IfModule mod_expires.c>
    ExpiresActive On
    ExpiresByType image/jpg "access plus 1 year"
    ExpiresByType image/jpeg "access plus 1 year"
    ExpiresByType image/png "access plus 1 year"
    ExpiresByType text/css "access plus 1 month"
    ExpiresByType application/javascript "access plus 1 month"
</IfModule>
```

---

## Email Integration with Formspree

### Step 1: Set Up Formspree
1. Follow instructions in `FORMSPREE_SETUP.md`
2. Get your Formspree Form ID
3. Update `js/main.js` with your Form ID

### Step 2: Use Your Domain Email
1. In GoDaddy, go to **Email** → **Workspace Email**
2. Create an email like info@yourdomain.com
3. Use this email in Formspree settings
4. All contact form submissions will go to this email!

---

## Troubleshooting

### Problem: Website Shows 404 Error
**Solution:** 
- Ensure `index.html` is in `public_html` root
- Check file name is exactly `index.html` (lowercase)
- Clear browser cache (Ctrl+Shift+Delete)

### Problem: Images Not Loading
**Solution:**
- Check images are in `public_html/images/` folder
- Verify image file names match exactly (case-sensitive)
- Check file permissions are set to 644

### Problem: CSS/JavaScript Not Working
**Solution:**
- Verify folder structure is correct
- Check File Manager → View → Show Hidden Files
- Look for browser console errors (F12 key)

### Problem: Contact Form Not Working
**Solution:**
- Verify Formspree Form ID is correct in `js/main.js`
- Check browser console for errors
- Test Formspree account is active

### Problem: Website is Slow
**Solution:**
- Enable Gzip compression (see above)
- Enable browser caching (see above)
- Optimize images (compress large JPGs)
- Consider GoDaddy's CDN service

---

## Testing Checklist

After deployment, test these:
- ✅ Homepage loads correctly
- ✅ All logos appear (header, hero, footer)
- ✅ Navigation works and highlights active section
- ✅ Mobile menu works on small screens
- ✅ Scroll animations trigger
- ✅ Stats counters animate when scrolled to
- ✅ Portfolio filter buttons work
- ✅ Testimonials slider auto-rotates
- ✅ Contact form submits successfully
- ✅ Back-to-top button appears and works
- ✅ All external links open correctly
- ✅ Website looks good on mobile devices

---

## Maintenance

### Regular Updates
- Check Formspree submissions monthly
- Update content in `index.html` as needed
- Monitor website speed with Google PageSpeed Insights
- Backup website files monthly (Download via FTP)

### Analytics Setup (Optional)
Add Google Analytics to track visitors:
1. Create account at https://analytics.google.com
2. Get your tracking code
3. Add to `index.html` before `</head>` tag

---

## Support Resources

**GoDaddy Support:**
- Phone: 1-480-505-8877
- Help Center: https://www.godaddy.com/help
- Live Chat: Available 24/7 in your account

**Website Tools:**
- Test Speed: https://pagespeed.web.dev/
- Test Mobile: https://search.google.com/test/mobile-friendly
- Test SSL: https://www.ssllabs.com/ssltest/

**Need Help?**
Check the following files:
- `FORMSPREE_SETUP.md` - Email configuration
- `README.md` - Project overview

---

## 🎉 Congratulations!

Your MoWCapital website is now live on GoDaddy! Share your domain with clients and start growing your business online.

**Your website includes:**
✅ Professional single-page design  
✅ Man O War theme (jade/black/white)  
✅ Fully responsive (works on all devices)  
✅ Smooth animations and interactions  
✅ Working contact form (with Formspree)  
✅ SEO-friendly structure  
✅ Fast loading speed  

**Next Steps:**
1. Configure Formspree for email delivery
2. Update contact information in HTML
3. Add your own portfolio items and testimonials
4. Connect social media links
5. Set up Google Analytics (optional)

---
*Last Updated: October 2025*
