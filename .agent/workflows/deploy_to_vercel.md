---
description: How to deploy the Vite presentation deck to Vercel
---

### Method 1: Using Vercel CLI (Recommended for quick deployment)

1. **Install Vercel CLI** (if you haven't already):
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**:
   ```bash
   vercel login
   ```

3. **Deploy the project**:
   Run this command in the project root (`c:\Users\Saurabh Kumar\OneDrive\Desktop\forage`):
   ```bash
   vercel
   ```
   - Follow the prompts (usually you can press Enter to accept all defaults).
   - Vercel will automatically detect that it's a Vite project.

4. **Production Deployment**:
   Once you've verified the preview, deploy to production:
   ```bash
   vercel --prod
   ```

### Method 2: Using GitHub (Recommended for continuous deployment)

1. **Initialize Git** and push to a new GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   # Then push to your GitHub repo...
   ```

2. **Connect to Vercel**:
   - Go to [vercel.com](https://vercel.com).
   - Click "Add New" -> "Project".
   - Import your GitHub repository.
   - Click "Deploy".

Vercel will automatically handle the build and provide you with a live URL.
