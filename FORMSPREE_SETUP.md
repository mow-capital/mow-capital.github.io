# Contact Form Setup with Formspree

## What is Formspree?
Formspree is a free service that allows your static HTML contact forms to send emails without needing a backend server. Perfect for hosting on GoDaddy!

## Setup Instructions (5 minutes)

### Step 1: Create Formspree Account
1. Go to https://formspree.io/
2. Click "Sign Up" (it's FREE!)
3. Create an account with your email

### Step 2: Create a New Form
1. After logging in, click "+ New Form"
2. Give your form a name: "MoWCapital Contact Form"
3. Copy your Form ID (looks like: `xyzabc123`)

### Step 3: Update Your Website
1. Open `js/main.js` in a text editor
2. Find this line (around line 174):
   ```javascript
   const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
   ```
3. Replace `YOUR_FORM_ID` with your actual Form ID from Step 2
4. Save the file

### Step 4: Configure Email Notifications
1. In Formspree dashboard, click on your form
2. Go to "Settings" → "Email Notifications"
3. Add your email address (e.g., info@mowcapital.com)
4. You'll receive all form submissions to this email!

### Step 5: Test Your Form
1. Open `index.html` in your browser
2. Scroll to the Contact section
3. Fill out and submit the form
4. Check your email for the submission!

## Features Included
✅ **Free Plan Includes:**
- 50 submissions per month
- Email notifications
- Spam filtering
- File uploads support
- Custom thank you pages

✅ **Paid Plans ($10/month) Include:**
- Unlimited submissions
- Multiple emails
- Integrations (Slack, Zapier, etc.)
- Custom redirects

## Alternative: EmailJS (Also Free)
If you prefer EmailJS instead:
1. Go to https://www.emailjs.com/
2. Create account and add email service
3. Replace Formspree code with EmailJS SDK
4. Follow their documentation

## Need Help?
- Formspree Docs: https://help.formspree.io/
- EmailJS Docs: https://www.emailjs.com/docs/

---
**Note:** The contact form currently works in "demo mode" showing a success message. Configure Formspree to enable actual email delivery!
