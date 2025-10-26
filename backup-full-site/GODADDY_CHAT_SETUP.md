# 💬 GoDaddy Chat Widget Integration Guide

## Overview
GoDaddy provides a built-in chat widget that allows visitors to chat with you in real-time or leave messages when you're offline. This guide will help you integrate it into your MoW Capital website.

---

## 🎯 Method 1: GoDaddy Website Builder Chat (Easiest)

### Step 1: Enable Chat in GoDaddy Dashboard
1. Log in to your **GoDaddy account** at https://www.godaddy.com
2. Go to **My Products** → **Website Builder** (if using GoDaddy Website Builder)
3. Click on **Marketing** or **Tools**
4. Find and enable **Chat** or **Conversations**

### Step 2: Get Your Chat Widget Code
1. In the Chat settings, look for **Installation Code** or **Embed Code**
2. Copy the JavaScript code provided by GoDaddy
3. It will look something like this:
   ```javascript
   <script src="https://webchat.godaddy.com/YOUR_UNIQUE_ID.js"></script>
   ```

### Step 3: Add to Your Website
1. Open `index.html` in a text editor
2. Find the section marked `<!-- GoDaddy Website Chat Widget -->`
3. Replace the placeholder code with your actual GoDaddy chat code
4. Save the file

### Example Integration:
```html
<!-- GoDaddy Website Chat Widget -->
<script type="text/javascript">
    (function() {
        var chatWidget = document.createElement('script');
        chatWidget.type = 'text/javascript';
        chatWidget.async = true;
        chatWidget.src = 'https://webchat.godaddy.com/YOUR_ACTUAL_CHAT_ID.js';
        document.body.appendChild(chatWidget);
    })();
</script>
```

---

## 🚀 Method 2: Third-Party Chat Services (Alternative)

If GoDaddy doesn't provide a built-in chat widget, you can use these popular alternatives:

### Option A: Tawk.to (Free & Popular)
1. Sign up at https://www.tawk.to/
2. Create a new property
3. Get your widget code
4. Add to your website

**Benefits:**
- ✅ Completely free
- ✅ Mobile apps available
- ✅ Visitor monitoring
- ✅ Customizable appearance
- ✅ Multiple agents

**Integration Code:**
```html
<!--Start of Tawk.to Script-->
<script type="text/javascript">
var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/YOUR_TAWK_ID/YOUR_WIDGET_ID';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
})();
</script>
<!--End of Tawk.to Script-->
```

### Option B: Tidio (Modern & AI-Powered)
1. Sign up at https://www.tidio.com/
2. Install the widget
3. Customize with your emerald theme
4. Add to your website

**Benefits:**
- ✅ AI chatbot capabilities
- ✅ Email integration
- ✅ Visitor tracking
- ✅ Mobile responsive
- ✅ Free plan available

**Integration Code:**
```html
<script src="https://code.tidio.co/YOUR_TIDIO_KEY.js" async></script>
```

### Option C: Crisp Chat (Beautiful UI)
1. Sign up at https://crisp.chat/
2. Create your widget
3. Customize colors to match emerald theme
4. Add to your website

**Benefits:**
- ✅ Beautiful modern design
- ✅ Automated messages
- ✅ Team inbox
- ✅ CRM features
- ✅ Free plan available

**Integration Code:**
```html
<script type="text/javascript">
window.$crisp=[];window.CRISP_WEBSITE_ID="YOUR_CRISP_ID";
(function(){d=document;s=d.createElement("script");s.src="https://client.crisp.chat/l.js";
s.async=1;d.getElementsByTagName("head")[0].appendChild(s);})();
</script>
```

---

## 🎨 Customizing Chat Widget for Emerald Theme

### For Tawk.to Customization:
1. Go to Tawk.to Dashboard
2. Click **Administration** → **Chat Widget**
3. Customize colors:
   - **Primary Color**: `#50C878` (Emerald)
   - **Secondary Color**: `#000000` (Black)
   - **Button Color**: `#50C878` (Emerald)
4. Upload your MoW logo as chat avatar

### For Tidio Customization:
1. Go to Tidio Dashboard
2. Click **Settings** → **Channels** → **Live Chat**
3. Customize appearance:
   - **Widget Color**: `#50C878`
   - **Text Color**: `#000000`
   - **Position**: Bottom right
4. Add welcome message: "Welcome to MoW Capital! How can we help you today?"

### For Crisp Customization:
1. Go to Crisp Dashboard
2. Click **Settings** → **Website Settings** → **Chatbox Appearance**
3. Set theme color to: `#50C878`
4. Position: Bottom right
5. Add greeting: "👋 Welcome to MoW Capital - Strategic Advisory Excellence"

---

## 📱 Chat Widget Configuration Best Practices

### Position & Behavior
```javascript
// Already configured in your CSS!
// Chat button appears at:
// - Bottom: 100px (above back-to-top button)
// - Right: 30px
// - Z-index: 998 (below navbar but above content)
```

### Welcome Messages
Set these in your chat platform dashboard:
- **Online Message**: "Hello! We're here to help with your strategic advisory needs. How can we assist you today?"
- **Offline Message**: "We're currently offline, but leave us a message and we'll get back to you within 24 hours!"
- **Pre-chat Form**: Ask for Name, Email, Company (optional)

### Automated Responses
Consider setting up:
1. **Greeting**: Triggers after 5 seconds on homepage
2. **Exit Intent**: Appears when visitor tries to leave
3. **Return Visitor**: Custom message for returning visitors
4. **Business Hours**: Different messages for business/after hours

---

## 🔧 Installation Steps (General)

### Step 1: Choose Your Chat Platform
- GoDaddy built-in (if available)
- Tawk.to (recommended for free)
- Tidio (recommended for AI features)
- Crisp (recommended for design)

### Step 2: Sign Up and Configure
1. Create account on chosen platform
2. Set up your business details:
   - **Business Name**: MoW Capital
   - **Website**: yourdomain.com
   - **Industry**: Financial Services / Consulting
   - **Time Zone**: Your local timezone

### Step 3: Customize Appearance
1. Match emerald theme (`#50C878`)
2. Upload MoW logo
3. Set welcome messages
4. Configure offline behavior

### Step 4: Get Widget Code
1. Navigate to installation section
2. Copy the provided JavaScript code
3. Note your unique widget ID

### Step 5: Add to Website
1. Open `index.html`
2. Locate the chat widget section (before `</body>`)
3. Paste your actual widget code
4. Save file

### Step 6: Test
1. Open your website in browser
2. Verify chat button appears in bottom-right
3. Test opening the chat window
4. Send a test message
5. Verify colors match your theme

### Step 7: Deploy
1. Upload updated `index.html` to GoDaddy
2. Clear browser cache
3. Test on live website
4. Test on mobile devices

---

## 📊 Chat Widget Features Comparison

| Feature | GoDaddy | Tawk.to | Tidio | Crisp |
|---------|---------|---------|-------|-------|
| **Price** | Included* | Free | Free/Paid | Free/Paid |
| **Mobile App** | ✅ | ✅ | ✅ | ✅ |
| **Offline Messages** | ✅ | ✅ | ✅ | ✅ |
| **File Sharing** | ❓ | ✅ | ✅ | ✅ |
| **Chatbot/AI** | ❌ | Limited | ✅ | ✅ |
| **Customization** | Basic | Advanced | Advanced | Advanced |
| **Analytics** | Basic | ✅ | ✅ | ✅ |
| **Team Chat** | Limited | ✅ | ✅ | ✅ |
| **CRM Integration** | ❌ | Limited | ✅ | ✅ |
| **Email Integration** | ✅ | ✅ | ✅ | ✅ |

*GoDaddy chat availability depends on your hosting plan

---

## 💡 Pro Tips

### 1. Set Business Hours
Configure when you're available to chat:
- **Monday - Friday**: 9:00 AM - 6:00 PM
- **Saturday**: 10:00 AM - 2:00 PM
- **Sunday**: Closed

### 2. Enable Notifications
- Install mobile app for instant notifications
- Enable email notifications for offline messages
- Set up desktop notifications

### 3. Create Canned Responses
Pre-written responses for common questions:
- "Thank you for contacting MoW Capital..."
- "Our advisory services include..."
- "Let me connect you with our team..."

### 4. Monitor Chat Analytics
Track:
- Number of conversations
- Response times
- Visitor locations
- Popular pages
- Conversion rates

### 5. Integrate with Email
Forward chat transcripts to:
- info@mowcapital.com
- Your CRM system
- Your email inbox

---

## 🔒 Privacy & GDPR Compliance

### Add Privacy Notice
Update your website to include:
```html
<p>We use chat to provide better customer service. 
By using our chat, you agree to our 
<a href="#privacy">Privacy Policy</a>.</p>
```

### GDPR Compliance Features
Most chat platforms offer:
- ✅ Cookie consent integration
- ✅ Data deletion requests
- ✅ Chat transcript downloads
- ✅ EU data centers
- ✅ Privacy policy templates

---

## 🐛 Troubleshooting

### Chat Widget Not Appearing
1. Check JavaScript console for errors (F12)
2. Verify widget code is before `</body>` tag
3. Check if ad blocker is blocking chat
4. Clear browser cache and reload
5. Verify widget ID is correct

### Chat Button Overlapping Back-to-Top
Already fixed in CSS! Chat appears at 100px from bottom, back-to-top at 30px.

### Colors Not Matching Theme
1. Check chat platform dashboard settings
2. Set primary color to `#50C878`
3. Clear browser cache
4. Allow 5-10 minutes for changes to propagate

### Mobile Issues
1. Test responsiveness
2. Adjust position in platform settings
3. Consider hiding on very small screens
4. Test on actual devices, not just browser

---

## 📞 Support Resources

**GoDaddy Chat Support:**
- Help Center: https://www.godaddy.com/help
- Phone: 1-480-505-8877
- Live Chat: Available 24/7

**Tawk.to Support:**
- Help Center: https://help.tawk.to/
- Email: support@tawk.to
- Community Forum

**Tidio Support:**
- Help Center: https://help.tidio.com/
- Email: help@tidio.net
- Live Chat on their website

**Crisp Support:**
- Help Center: https://help.crisp.chat/
- Email: contact@crisp.chat
- Status Page: https://status.crisp.chat/

---

## ✅ Testing Checklist

After installation:
- [ ] Chat button appears in bottom-right corner
- [ ] Button uses emerald color (#50C878)
- [ ] Button doesn't overlap back-to-top button
- [ ] Chat window opens smoothly
- [ ] Welcome message displays correctly
- [ ] Can send test message
- [ ] Receives messages in dashboard
- [ ] Mobile app notifications work
- [ ] Email notifications work
- [ ] Works on mobile devices
- [ ] Works on different browsers
- [ ] Offline mode displays correctly
- [ ] Colors match website theme

---

## 🎉 Quick Start (Recommended: Tawk.to)

If you want to get started quickly with a free, reliable solution:

1. **Sign up**: https://www.tawk.to/
2. **Add property**: Enter your website domain
3. **Customize**: Set color to `#50C878` (emerald)
4. **Get code**: Copy the widget code from dashboard
5. **Install**: Paste code in `index.html` where indicated
6. **Upload**: Deploy to GoDaddy
7. **Test**: Visit your website and try the chat!

**Estimated Setup Time**: 10-15 minutes

---

## 📝 Example Welcome Message

When visitor opens chat:

```
👋 Welcome to Man O' War Capital!

We're here to provide strategic advisory excellence. 
How can we help power your next leap?

Our team specializes in:
• Strategic Planning
• Mergers & Acquisitions  
• Operational Excellence
• Financial Advisory

Feel free to ask us anything!
```

---

*Last Updated: October 24, 2025*
*Current Theme: Black, Gray & Emerald*
