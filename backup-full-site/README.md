# MoWCapital Single Page Application

**Professional strategic advisory website - Ready for GoDaddy hosting!**

![MoWCapital](images/MoW-BigLogo.jpg)

## 🎯 Overview

This is a complete, production-ready single-page website for MoWCapital featuring:
- **One HTML file** - Easy to maintain and update
- **Man O War Theme** - Jade Black (#00A86B), Pure Black, and White
- **Fully Responsive** - Works perfectly on desktop, tablet, and mobile
- **No Backend Required** - Pure HTML/CSS/JavaScript (perfect for GoDaddy)
- **Fast Loading** - Optimized for performance
- **Contact Form Ready** - Integrated with Formspree (free email service)

## 📁 Project Structure

```
MowCapital-SPA/
├── index.html              # Main website file (single page)
├── css/
│   └── style.css          # Man O War theme styling
├── js/
│   └── main.js            # Interactive features & animations
├── images/
│   ├── MoW-BigLogo.jpg    # Hero section logo
│   ├── MoW-FlatLogo2.jpg  # Navigation & footer logo
│   ├── MoW-FavIcon.png    # Browser tab icon
│   └── MoW-OfficeBuilding.jpg  # Background images
├── GODADDY_DEPLOYMENT.md   # Complete hosting guide
├── FORMSPREE_SETUP.md      # Email integration guide
└── README.md               # This file
```

## ✨ Features

### Design
- 🎨 Man O War color theme (jade/black/white)
- 🖼️ Professional branding with all MoW logos
- 📱 100% mobile responsive design
- ✨ Smooth scroll animations (AOS library)
- 🎭 Interactive hover effects

### Sections
1. **Hero** - Eye-catching landing with MoW logo
2. **Stats** - Animated counters (clients, projects, experience)
3. **About** - Company overview and features
4. **Services** - 6 key services with icons
5. **Portfolio** - Filterable project showcase
6. **Testimonials** - Auto-rotating client reviews
7. **Contact** - Working form with email integration

### Functionality
- ✅ Smooth scroll navigation
- ✅ Active section highlighting in navbar
- ✅ Mobile hamburger menu
- ✅ Animated statistics counters
- ✅ Portfolio category filtering
- ✅ Auto-rotating testimonials
- ✅ Contact form with Formspree integration
- ✅ Back-to-top button
- ✅ SEO-friendly structure

## 🚀 Quick Start (Local Testing)

### Option 1: Double-Click
1. Simply double-click `index.html`
2. Opens in your default browser
3. Done! View your website locally

### Option 2: Live Server (Better)
1. Open folder in VS Code
2. Right-click `index.html`
3. Select "Open with Live Server"
4. Auto-refreshes when you make changes

## 📤 Deploy to GoDaddy (10 Minutes)

### Quick Steps:
1. **Access GoDaddy cPanel**
   - Login → My Products → Web Hosting → Manage

2. **Upload Files**
   - Open File Manager → Navigate to `public_html`
   - Upload all files from this folder (drag & drop)

3. **Test Your Site**
   - Visit your domain: `www.yourdomain.com`
   - Website should load immediately!

### Detailed Guide:
See **[GODADDY_DEPLOYMENT.md](GODADDY_DEPLOYMENT.md)** for:
- Step-by-step File Manager upload
- FTP upload alternative
- SSL certificate setup (HTTPS)
- Performance optimization
- Troubleshooting tips

## 📧 Email Integration (5 Minutes)

The contact form needs email configuration:

1. **Sign up for Formspree** (free)
   - Go to https://formspree.io/
   - Create account and new form

2. **Get Form ID**
   - Copy your form ID (e.g., `xyzabc123`)

3. **Update JavaScript**
   - Open `js/main.js`
   - Replace `YOUR_FORM_ID` with your actual ID
   - Save and re-upload to GoDaddy

### Detailed Guide:
See **[FORMSPREE_SETUP.md](FORMSPREE_SETUP.md)** for complete instructions.

## 🎨 Customization

### Update Text Content
1. Open `index.html` in any text editor
2. Find the section you want to change
3. Edit the text between HTML tags
4. Save and refresh browser to see changes

### Change Colors
1. Open `css/style.css`
2. Modify CSS variables at the top:
   ```css
   :root {
       --jade-black: #00A86B;  /* Change this */
       --pure-black: #000000;
       --white: #FFFFFF;
   }
   ```
3. Save to apply new colors

### Replace Images
1. Add your images to the `images/` folder
2. In `index.html`, update the `src` attributes:
   ```html
   <img src="images/your-new-image.jpg" alt="Description">
   ```

### Add More Services
1. Open `index.html`
2. Find the Services section
3. Copy a service card
4. Paste and modify the content
5. Change the icon (Font Awesome class)

## 🛠️ Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Custom styling with Flexbox & Grid
- **JavaScript (ES6+)** - Interactive features
- **Google Fonts** - Poppins font family
- **Font Awesome 6** - Icons
- **AOS Library** - Scroll animations
- **Formspree** - Contact form email delivery

## 📊 Browser Support

✅ Chrome (latest)
✅ Firefox (latest)
✅ Safari (latest)
✅ Edge (latest)
✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: Below 768px

## 🔧 Maintenance

### Regular Tasks:
- [ ] Check contact form submissions weekly
- [ ] Update portfolio items monthly
- [ ] Backup website files monthly
- [ ] Monitor website speed
- [ ] Update testimonials as received

### Optional Enhancements:
- [ ] Add Google Analytics tracking
- [ ] Set up Google Search Console
- [ ] Create custom 404 error page
- [ ] Add blog posts section
- [ ] Implement cookie consent banner

## 📈 Performance

Current optimization:
- ✅ Minified CSS & JS (can be done)
- ✅ Optimized images (compressed JPGs)
- ✅ Browser caching headers (via .htaccess)
- ✅ CDN for external libraries
- ✅ Lazy loading for images (native HTML)

Expected load time: **< 2 seconds** on 4G connection

## 🆘 Troubleshooting

### Website not loading on GoDaddy?
- Verify `index.html` is in `public_html` root
- Clear browser cache (Ctrl+Shift+Del)
- Check file permissions (644 for files, 755 for folders)

### Images not showing?
- Check image file names match exactly (case-sensitive)
- Verify images are in `images/` folder
- Test image paths in local browser first

### Contact form not working?
- Verify Formspree Form ID is correct
- Check browser console for errors (F12)
- Ensure Formspree account is active

### Animations not working?
- Check if AOS library loaded (view page source)
- Verify internet connection (AOS loaded from CDN)
- Test in different browser

## 📞 Support

**GoDaddy Hosting Support:**
- Phone: 1-480-505-8877
- Live Chat: Available 24/7
- Help Center: https://www.godaddy.com/help

**Formspree Support:**
- Docs: https://help.formspree.io/
- Email: support@formspree.io

## 📄 License

This project is created for MoWCapital business use.

## 🎉 You're Ready!

Your MoWCapital website is complete and ready to deploy! Follow the guides above to:

1. ✅ Test locally
2. ✅ Deploy to GoDaddy
3. ✅ Configure email
4. ✅ Go live!

**Questions?** Check the documentation files or contact your web developer.

---

**Version:** 1.0.0  
**Last Updated:** October 2025  
**Built with:** ❤️ and the Man O War theme
