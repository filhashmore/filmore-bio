# FILMORE EPK Website

A modern, responsive Electronic Press Kit (EPK) website for country music artist FILMORE, built with Next.js 14, Tailwind CSS, and Framer Motion.

![FILMORE](public/images/filmore-hero.jpg)

## Updates Made (v2)

- ✅ Added **ATYPICAL album artwork** to the album section
- ✅ Fixed **Spotify artist links** (correct artist ID: `0FvJm0y2eHw0aPkLLU3sIG`)
- ✅ Updated **monthly listeners** to current count (513K+)
- ✅ Fixed all **social media URLs** (Instagram, Facebook, TikTok, YouTube, X/Twitter)
- ✅ Added proper **favicon** and **apple-touch-icon** from F logo
- ✅ Enhanced **Open Graph/Twitter Card metadata** for social sharing
- ✅ Made **Mr. 305 Records logo clickable** (links to mr305.com)
- ✅ Added **official website link** to footer
- ✅ Improved **mobile responsiveness** (stacked buttons, touch-friendly)
- ✅ Added **accessibility attributes** (aria-labels on social links)

## Features

- 🎨 Custom earthy color palette matching Filmore's brand
- ✨ Smooth scroll animations with Framer Motion
- 📱 Fully responsive design (mobile-first)
- 🎵 Embedded Spotify player
- 🔗 Direct links to all social platforms and streaming services
- 🖼️ Professional photo gallery with hover effects
- 📊 Social media stats dashboard

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Fonts:** Oswald, Bebas Neue, Libre Baskerville

## Deployment to Vercel

### Option 1: Vercel CLI (Fastest)

```bash
cd filmore-epk
npm install
npx vercel
```

### Option 2: GitHub + Vercel Dashboard

1. Push to GitHub:
```bash
cd filmore-epk
git init
git add .
git commit -m "Update FILMORE EPK v2"
git remote add origin <your-github-repo-url>
git push -u origin main
```

2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your GitHub repository
5. Deploy!

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Project Structure

```
filmore-epk/
├── app/
│   ├── globals.css      # Custom styles & Tailwind
│   ├── layout.tsx       # Root layout with metadata
│   └── page.tsx         # Main EPK page
├── public/
│   ├── favicon.ico      # Browser favicon
│   ├── icon.png         # 32x32 icon
│   ├── apple-touch-icon.png  # iOS icon
│   └── images/          # Artist photos & logos
│       ├── atypical-album.png
│       ├── f-logo.png
│       ├── filmore-hero.jpg
│       └── mr305-logo.png
├── next.config.js       # Next.js config (static export)
├── tailwind.config.js   # Custom color palette
└── package.json
```

## Social Links (Verified)

- **Spotify:** https://open.spotify.com/artist/0FvJm0y2eHw0aPkLLU3sIG
- **Instagram:** https://www.instagram.com/filmoremusic/
- **Facebook:** https://www.facebook.com/filmoremusic
- **TikTok:** https://www.tiktok.com/@filmoremusic
- **YouTube:** https://www.youtube.com/@filmoremusic
- **X/Twitter:** https://x.com/filmoremusic
- **Official Website:** https://www.filmoremusic.com

## Mr. 305 Records

- **Website:** https://mr305.com

## License

© 2026 FILMORE / Mr. 305 Records. All rights reserved.

---

Built with ❤️ for FILMORE
