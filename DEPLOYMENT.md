# Deployment Guide - 90-Day Interview Prep Planner

## Free Hosting Options

### Option 1: Vercel (Recommended - Easiest)

**Steps:**
1. Push your code to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Interview Prep Planner v1.0.0"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/interview-prep-planner.git
   git push -u origin main
   ```

2. Go to [vercel.com](https://vercel.com)
3. Sign up with GitHub
4. Click "New Project"
5. Import your GitHub repository
6. Vercel will auto-detect Vite
7. Click "Deploy"
8. Done! Your site will be live at `https://your-project.vercel.app`

**Advantages:**
- Automatic deployments on git push
- Free SSL certificate
- Global CDN
- Zero configuration needed

---

### Option 2: Netlify

**Steps:**
1. Build your project:
   ```bash
   npm run build
   ```

2. Go to [netlify.com](https://netlify.com)
3. Sign up with GitHub
4. Drag and drop the `dist` folder to Netlify
5. Or connect your GitHub repo for automatic deployments

**Advantages:**
- Easy drag-and-drop deployment
- Free SSL
- Continuous deployment from Git

---

### Option 3: GitHub Pages

**Steps:**
1. Install gh-pages:
   ```bash
   npm install --save-dev gh-pages
   ```

2. Update `vite.config.js`:
   ```javascript
   import { defineConfig } from 'vite'
   import react from '@vitejs/plugin-react'

   export default defineConfig({
     plugins: [react()],
     base: '/interview-prep-planner/', // Replace with your repo name
   })
   ```

3. Add to `package.json`:
   ```json
   {
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

4. Deploy:
   ```bash
   npm run deploy
   ```

5. Enable GitHub Pages in repo settings (Settings → Pages → Source: gh-pages branch)

**Your site:** `https://YOUR_USERNAME.github.io/interview-prep-planner/`

---

### Option 4: Cloudflare Pages

**Steps:**
1. Push code to GitHub
2. Go to [pages.cloudflare.com](https://pages.cloudflare.com)
3. Sign up and connect GitHub
4. Select your repository
5. Build settings:
   - Build command: `npm run build`
   - Build output directory: `dist`
6. Deploy

**Advantages:**
- Extremely fast global CDN
- Unlimited bandwidth
- Free SSL

---

## Quick Deploy (Vercel - Fastest Method)

If you have Vercel CLI installed:

```bash
# Install Vercel CLI globally
npm i -g vercel

# Deploy
vercel

# Follow prompts, then your site is live!
```

---

## Custom Domain (Optional)

All platforms above support custom domains for free:
1. Buy a domain (Namecheap, GoDaddy, etc.)
2. Add domain in hosting platform settings
3. Update DNS records as instructed
4. Wait for DNS propagation (5-30 minutes)

---

## Recommended: Vercel

**Why Vercel?**
- Zero configuration
- Automatic HTTPS
- Instant deployments
- Preview deployments for every git push
- Free forever for personal projects
- Best performance

**Deploy in 2 minutes:**
1. Push to GitHub
2. Import to Vercel
3. Done!

Your app will be live at: `https://interview-prep-planner.vercel.app`

---

## Environment Variables (if needed later)

If you add API keys or secrets:
- Add `.env` file to `.gitignore`
- Set environment variables in hosting platform dashboard
- Use `import.meta.env.VITE_YOUR_VAR` in code

---

## Monitoring & Analytics (Optional)

Add free analytics:
- **Vercel Analytics**: Built-in, enable in dashboard
- **Google Analytics**: Add tracking code
- **Plausible**: Privacy-friendly alternative

---

## Support

For issues:
1. Check build logs in hosting platform
2. Ensure `npm run build` works locally
3. Check browser console for errors

Happy deploying! 🚀