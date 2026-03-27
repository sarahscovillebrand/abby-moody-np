# Abby Moody PMHNP — Setup Guide

## One-time setup (do this before launching)

### 1. Create a Sanity project (free)

1. Go to [sanity.io](https://sanity.io) and create a free account
2. Create a new project — name it "Abby Moody PMHNP"
3. Note down your **Project ID** (shown on the project dashboard)

### 2. Configure environment variables

Copy `.env.local.example` to `.env.local`:
```
cp .env.local.example .env.local
```

Fill in your Sanity Project ID:
```
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id_here
NEXT_PUBLIC_SANITY_DATASET=production
```

### 3. Run locally

```
npm install
npm run dev
```

- Site: http://localhost:3000
- Studio (admin): http://localhost:3000/studio

### 4. Add your content in the Studio

Visit `/studio` and log in with your Sanity account. You'll see four sections to fill out:

| Section | What to edit |
|---|---|
| **Site Settings** | Practice name, fax number, Spruce link, accent color |
| **Hero Section** | Main heading, subheading, button text |
| **About Section** | Your photo, bio, credential bullets |
| **New Patient Steps** | Step titles, descriptions, attach PDF forms |

### 5. Deploy to Vercel

1. Push this project to a GitHub repository
2. Go to [vercel.com](https://vercel.com) → New Project → import your repo
3. Add environment variables in Vercel project settings (same as `.env.local`)
4. Deploy — Vercel gives you a live URL instantly

### 6. Connect Sanity webhook (so edits go live immediately)

1. In [sanity.io/manage](https://sanity.io/manage), go to your project → **API → Webhooks**
2. Add a webhook:
   - URL: `https://your-vercel-url.vercel.app/api/revalidate`
   - Trigger on: **Create, Update, Delete**
   - Create a secret, add it as `SANITY_WEBHOOK_SECRET` in Vercel env vars
3. Now when Abby saves changes in the Studio, the live site updates within seconds

---

## Abby's day-to-day editing

Once deployed, Abby visits:
```
https://your-site.vercel.app/studio
```

She logs in with her Sanity email/password and can:
- Edit any text (headings, bio, step descriptions, etc.)
- Upload her photo
- Attach PDF intake forms for download
- Update her fax number or Spruce link
- Change the accent color (hex value)

Changes go live on the site within ~60 seconds of saving (or immediately with the webhook).

---

## Adding PDF forms later

In the Studio → **New Patient Steps** → Step 1 → upload the PDF file.
A download button will automatically appear on the site with the correct link.

---

## Security note

Next.js 14.2.5 has a known security advisory. Before launching publicly, upgrade:
```
npm install next@latest
```
