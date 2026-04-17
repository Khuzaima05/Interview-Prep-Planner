# Push to GitHub - Step by Step Guide

## 🎯 Quick Setup for https://github.com/Khuzaima05

### Step 1: Create New Repository on GitHub

1. Go to https://github.com/Khuzaima05
2. Click the **"+"** icon (top right) → **"New repository"**
3. Repository name: `interview-prep-planner` (or your preferred name)
4. Description: `90-Day Interview Prep Planner - Netflix themed DSA & System Design tracker`
5. Keep it **Public** (or Private if you prefer)
6. **DO NOT** check "Initialize with README" (we already have one)
7. Click **"Create repository"**

### Step 2: Push Your Code

Open your terminal in the project directory and run these commands:

```bash
# Initialize git repository
git init

# Add all files
git add .

# Create first commit
git commit -m "Initial commit - Interview Prep Planner v1.0.0"

# Add your GitHub repository as remote
git remote add origin https://github.com/Khuzaima05/interview-prep-planner.git

# Rename branch to main (if needed)
git branch -M main

# Push to GitHub
git push -u origin main
```

### Step 3: Verify

1. Refresh your GitHub repository page
2. You should see all your files uploaded
3. README.md will be displayed on the main page

---

## 🚀 Deploy to Vercel (After GitHub Push)

### Option A: Using Vercel Website

1. Go to https://vercel.com
2. Click **"Sign Up"** or **"Log In"**
3. Choose **"Continue with GitHub"**
4. Authorize Vercel to access your GitHub
5. Click **"New Project"**
6. Find and select `interview-prep-planner` repository
7. Click **"Import"**
8. Vercel will auto-detect Vite settings:
   - Framework Preset: **Vite**
   - Build Command: `npm run build`
   - Output Directory: `dist`
9. Click **"Deploy"**
10. Wait 1-2 minutes
11. 🎉 Your app is live!

Your URL will be: `https://interview-prep-planner.vercel.app`

### Option B: Using Vercel CLI (Faster)

```bash
# Install Vercel CLI globally
npm install -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# Follow the prompts:
# - Set up and deploy? Yes
# - Which scope? Your account
# - Link to existing project? No
# - Project name? interview-prep-planner
# - Directory? ./
# - Override settings? No

# Your app will be deployed instantly!
```

---

## 📝 Update Repository Later

When you make changes:

```bash
# Stage changes
git add .

# Commit with message
git commit -m "Description of changes"

# Push to GitHub
git push
```

Vercel will automatically redeploy on every push! 🚀

---

## 🔗 Useful Links

- **Your GitHub Profile**: https://github.com/Khuzaima05
- **Vercel Dashboard**: https://vercel.com/dashboard
- **Deployment Guide**: See DEPLOYMENT.md for more options

---

## ⚠️ Troubleshooting

### If git push fails with authentication:

**Option 1: Use Personal Access Token**
1. Go to GitHub Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Generate new token with `repo` scope
3. Use token as password when prompted

**Option 2: Use SSH**
```bash
# Generate SSH key
ssh-keygen -t ed25519 -C "your_email@example.com"

# Add to GitHub: Settings → SSH and GPG keys → New SSH key
# Copy your public key:
cat ~/.ssh/id_ed25519.pub

# Change remote to SSH
git remote set-url origin git@github.com:Khuzaima05/interview-prep-planner.git
```

### If repository name is different:
Replace `interview-prep-planner` with your actual repository name in all commands.

---

## ✅ Checklist

- [ ] Created new repository on GitHub
- [ ] Initialized git in project folder
- [ ] Added and committed all files
- [ ] Added remote origin
- [ ] Pushed to GitHub
- [ ] Verified files on GitHub
- [ ] Deployed to Vercel
- [ ] Tested live URL

---

**You're all set! 🎉**

Your interview prep planner is now:
- ✅ Version controlled on GitHub
- ✅ Deployed and live on Vercel
- ✅ Auto-deploys on every push

Happy coding! 💪