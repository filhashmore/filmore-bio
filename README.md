# FILMORE EPK Website

A stunning Electronic Press Kit website for rising country music artist FILMORE, built with Next.js, Tailwind CSS, and Framer Motion.

![FILMORE](public/images/filmore-hero.jpg)

## Features

- 🎸 **Modern Design** - Warm, earthy color palette matching Filmore's brand aesthetic
- ✨ **Smooth Animations** - Framer Motion powered scroll animations and interactions
- 📱 **Fully Responsive** - Optimized for all devices
- 🎵 **Embedded Players** - Spotify integration for music streaming
- 🔗 **Social Links** - Direct links to all social platforms
- ⚡ **Fast Performance** - Static export for blazing fast load times

## Tech Stack

- **Framework**: Next.js 14
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Oswald, Libre Baskerville, Bebas Neue

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/filmore-epk.git
cd filmore-epk
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment to Vercel

### Option 1: Vercel CLI

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

### Option 2: GitHub Integration

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your repository
5. Click "Deploy"

### Option 3: Git + Vercel Dashboard

1. Initialize git repository:
```bash
git init
git add .
git commit -m "Initial commit"
```

2. Create a new repository on GitHub

3. Push to GitHub:
```bash
git remote add origin https://github.com/yourusername/filmore-epk.git
git branch -M main
git push -u origin main
```

4. Import the project in Vercel dashboard

## Project Structure

```
filmore-epk/
├── app/
│   ├── globals.css      # Global styles & Tailwind
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # Main EPK page
├── public/
│   └── images/          # Image assets
├── components/          # React components
├── package.json
├── tailwind.config.js
├── next.config.js
└── README.md
```

## Customization

### Colors

Edit the color palette in `tailwind.config.js`:

```javascript
colors: {
  'filmore': {
    'cream': '#F5F0E8',
    'tan': '#C4A77D',
    'brown': '#5C4A3D',
    'dark': '#2A2118',
    'gold': '#D4A853',
    'rust': '#8B4513',
    'sage': '#6B7B5C',
  }
}
```

### Content

Update the content in `app/page.tsx`:
- `latestReleases` - Album/single information
- `fanFavorites` - Top tracks
- `socialStats` - Social media stats and links
- Bio text in the About section

## License

© 2024 FILMORE / Mr. 305 Records. All rights reserved.

---

Built with ❤️ for FILMORE
