# Deployment and Setup Guide

This guide details how to start the backend services locally on your machine, expose them securely to the internet using Cloudflare Tunnels (`cloudflared`), and configure the Vercel-deployed frontend to communicate with them.

---

## 1. Start Backends Locally

Make sure you have your dependencies installed for all projects.

### A. Express.js Authentication Backend (Port 5000)
1. Open a terminal and navigate to the `backend` directory:
   ```bash
   cd backend
   ```
2. Install dependencies (if not already done):
   ```bash
   npm install
   ```
3. Start the Express server:
   ```bash
   npm run dev
   ```
   *The server will start and bind to `0.0.0.0:5000`, listening for connections on all local network interfaces.*

### B. FastAPI OCR Backend (Port 8000)
1. Open a terminal and navigate to the `ML/OCR_api` directory:
   ```bash
   cd ML/OCR_api
   ```
2. Start the API using the provided batch script:
   ```bash
   run.bat
   ```
   *This activates the virtual environment, installs dependencies, and runs `uvicorn main:app --reload --port 8000 --host 0.0.0.0`.*

### C. FastAPI Forgery Detection Backend (Port 8001)
1. Open a terminal and navigate to the `ML/forge_detection` directory:
   ```bash
   cd ML/forge_detection
   ```
2. Start the API using the provided batch script:
   ```bash
   run.bat
   ```
   *This activates the virtual environment, installs dependencies, and runs `uvicorn main:app --reload --port 8001 --host 0.0.0.0`.*

---

## 2. Start Cloudflare Tunnels (`cloudflared`)

To expose your local backends to the deployed Vercel frontend, you need to set up tunnels.

If you don't have `cloudflared` installed, download it from [Cloudflare](https://github.com/cloudflare/cloudflared/releases) or install via chocolatey/winget:
```bash
winget install Cloudflare.cloudflared
```

### Option A: Quick Tunnels (Temporary URLs)
Run these commands in separate terminal sessions to generate three temporary public URLs:

1. **Express Auth Backend Tunnel:**
   ```bash
   cloudflared tunnel --url http://localhost:5000
   ```
2. **OCR API Backend Tunnel:**
   ```bash
   cloudflared tunnel --url http://localhost:8000
   ```
3. **Forgery Detection Backend Tunnel:**
   ```bash
   cloudflared tunnel --url http://localhost:8001
   ```

*Note the generated `https://*.trycloudflare.com` URLs from the command outputs.*

### Option B: Persistent Tunnels (Recommended for Production)
If you have a domain managed by Cloudflare:
1. Authenticate the CLI: `cloudflared tunnel login`
2. Create tunnels: `cloudflared tunnel create <tunnel-name>`
3. Route DNS for each backend to your subdomain (e.g. `auth.yourdomain.com`, `ocr.yourdomain.com`, `forge.yourdomain.com`).
4. Run the tunnel mapping configurations in your `config.yml`.

---

## 3. Configure Vercel Environment Variables

When deploying the frontend to Vercel, you need to add the following **Environment Variables** in the Vercel Dashboard (Settings > Environment Variables):

| Key | Value (Example / Tunnel URL) | Description |
| :--- | :--- | :--- |
| **`VITE_AUTH_API_URL`** | `https://your-auth-tunnel.trycloudflare.com` | Public URL pointing to your Express Auth backend (Port 5000) |
| **`VITE_OCR_API_URL`** | `https://your-ocr-tunnel.trycloudflare.com` | Public URL pointing to your FastAPI OCR backend (Port 8000) |
| **`VITE_FORGERY_API_URL`** | `https://your-forgery-tunnel.trycloudflare.com` | Public URL pointing to your FastAPI Forgery detection backend (Port 8001) |

> [!IMPORTANT]
> If you are using Quick Tunnels (temporary URLs), you must update these values in Vercel whenever you restart the tunnels, as the generated URLs will change. Using persistent subdomains avoids this.

---

## 4. Redeploy Frontend on Vercel

Vercel automatically bakes environment variables into the React/Vite bundle during build time. If you update the environment variables in the Vercel dashboard, you **must redeploy** for the changes to take effect:

1. Go to your project page in the **Vercel Dashboard**.
2. Navigate to the **Deployments** tab.
3. Click the **three dots (...)** next to your latest deployment.
4. Select **Redeploy**.
5. Ensure the **"Use existing Build Cache"** is unchecked, then click **Redeploy**.

Alternatively, you can trigger a build from your terminal using the Vercel CLI:
```bash
vercel --force
```
