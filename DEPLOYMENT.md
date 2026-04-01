# Deployment Guide - A+ Learning Platform

This guide will help you deploy the A+ Learning application to **Render** (free hosting).

## Quick Deployment Steps (5 minutes)

### Step 1: Prepare Your Repository
Your app is already on GitHub at: https://github.com/emographics22/aplus-learning

✅ **Already done:** Code is pushed and ready!

---

### Step 2: Deploy to Render

1. **Go to Render:** https://render.com
2. **Sign Up/Login** (use GitHub for easy authentication)
3. **Create New Web Service**
   - Click "+" → New Web Service
   - Connect your GitHub repository: `emographics22/aplus-learning`
   - Authorize Render to access GitHub

4. **Configure Service**
   - **Name:** `aplus-learning`
   - **Runtime:** Node
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`
   - **Instance Type:** Free (this is fine for learning)

5. **Click "Create Web Service"**

6. **Wait for Deployment** (2-5 minutes)
   - You'll see a live URL appear like: `https://aplus-learning.onrender.com`

---

### Step 3: Share with Students

Once deployed, give students this link:
```
https://aplus-learning.onrender.com
```

They can:
- Register new accounts
- View quizzes
- Track progress
- Access PDF study materials

---

## What Students Can Do

### Registration & Login
- Create account with username/password
- Secure login page
- Account data stored in database

### Quiz Features
- View available quizzes (CompTIA A+)
- Take timed quizzes
- Track scores
- View detailed results

### Study Materials
- Access 9 CompTIA A+ study PDFs
- Topics include:
  - Operating Systems
  - Hardware & Network Troubleshooting
  - Security
  - Cloud Computing
  - Mobile Devices
  - And more...

### Progress Dashboard
- View quiz history
- Monitor improvement
- Track exam readiness

---

## Troubleshooting

**If deployment fails:**
1. Check Render deployment logs
2. Ensure `npm start` is the correct command
3. Verify `package.json` dependencies are installed

**If students can't register:**
- This is expected if deployment is using free tier (data resets)
- Add a database (PostgreSQL) for persistent data

**Need a database?**
- Render offers free PostgreSQL
- Update your code to use database instead of JSON files

---

## Next Steps

- Monitor usage and performance
- Add error logging (Sentry, LogRocket)
- Set up auto-deployments from GitHub
- Consider paid tier if heavy usage

---

**Deployment URL (after step 2):** `https://aplus-learning.onrender.com`
