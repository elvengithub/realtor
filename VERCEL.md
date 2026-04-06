# Deploying on Vercel

This app is a **Next.js 15** project. Vercel detects it automatically; no custom output directory is required.

## Prerequisites

- A [Vercel](https://vercel.com) account
- A **Supabase** project (for authentication and the dashboard)
- This repository pushed to **GitHub**, **GitLab**, or **Bitbucket** (or use the Vercel CLI with a linked project)

## 1. Environment variables

Add these in the Vercel project: **Settings → Environment Variables**.

| Name | Required | Notes |
|------|----------|--------|
| `NEXT_PUBLIC_SUPABASE_URL` | **Yes** | Supabase project URL (Settings → API → Project URL) |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | **Yes** | Supabase anon/public key (Settings → API → anon public) |
| `HOMESPH_NEWS_API_URL` | No | If omitted, `/api/news` serves development mock data |
| `HOMESPH_NEWS_API_KEY` | No | Used with the news API when configured |

**Important**

- For `NEXT_PUBLIC_*` variables, set them for **Production**, **Preview**, and **Development** as needed, then **redeploy** so the new values are baked into the client bundle.
- Never commit real keys. Copy variable names from `.env.example` and store values only in Vercel (or local `.env.local`).

## 2. Create the Vercel project

### From the dashboard

1. Click **Add New… → Project**.
2. **Import** your Git repository.
3. **Framework Preset**: Next.js (auto-detected).
4. **Build Command**: `npm run build` (default).
5. **Install Command**: `npm install` (default). The repo includes `.npmrc` with `legacy-peer-deps=true` so installs stay consistent with React 19 and older peer ranges.
6. Add the environment variables from the table above.
7. Click **Deploy**.

### From the CLI

```bash
npm i -g vercel
cd /path/to/this/repo
vercel
```

Follow the prompts, then add env vars in the dashboard or with `vercel env add`.

## 3. After deploy

- Open the production URL Vercel assigns (or attach your domain under **Settings → Domains**).
- Confirm `/` and public pages load.
- Test `/login` and dashboard routes after Supabase auth is configured.

## 4. Git branch for production

Vercel deploys whatever branch you set under **Settings → Git → Production Branch** (often `main` or `master`).

If that branch did not contain the Next.js app (only stray folders or an empty repo), the “build” can finish in milliseconds with almost no output. The fix is to point production at the branch that has `package.json` and `next.config.js` (this repo: **`main`**), or update **`master`** to match **`main`** so either branch works.

Do **not** add a root `vercel.json` with a catch-all rewrite like `"/(.*)" → "/"` for this project; Next.js already handles routes, and that pattern breaks App Router behavior on Vercel.

## 5. Troubleshooting

| Issue | What to check |
|--------|----------------|
| Build completes in ~100ms, no real Next.js build | Wrong production branch, or repo missing `package.json` on that branch. Set Production Branch to `main` or ensure `master` includes the full app. |
| npm warns Next.js is deprecated / security issue | Stay on the latest **patched** release in your line (this repo pins `next@15.2.8`). See [Next.js security advisories](https://nextjs.org/blog). |
| Build fails on `npm install` | Ensure `.npmrc` is committed; run `npm install` locally to refresh `package-lock.json` if you changed dependencies. |
| Build fails on ESLint | Run `npm run build` locally. The project extends `next/core-web-vitals` with `react/no-unescaped-entities` disabled so content-heavy pages do not block the build. |
| Auth or dashboard broken | Confirm `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` are set for the environment you are testing and **redeploy** after changing them. |
| Middleware / edge errors | Middleware skips the Supabase client if those env vars are missing, so the site stays up; protected routes redirect to `/login` until Supabase is configured. |

## 6. Local parity with production

```bash
cp .env.example .env.local
# Fill in real values, then:
npm install
npm run build
npm start
```

`npm start` runs the production server on port 3000 so you can verify the same output Vercel serves.
