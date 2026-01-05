import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'FILMORE | Artist Bio',
  description: 'FILMORE - Rising Country Music Artist from Wildwood, Missouri. Over 245 million career streams. First independent artist on Spotify Hot Country cover. Now on Mr. 305 Records.',
  keywords: 'Filmore, Country Music, Nashville, Mr. 305 Records, ATYPICAL, Spotify Hot Country, Wildwood Missouri, Tyler Filmore',
  authors: [{ name: 'FILMORE' }],
  creator: 'FILMORE',
  metadataBase: new URL('https://filmore-bio.vercel.app'),
  openGraph: {
    title: 'FILMORE | Artist Bio',
    description: 'Rising Country Music Artist from Wildwood, Missouri. 245M+ streams. First independent artist on Spotify Hot Country cover.',
    type: 'website',
    url: 'https://filmore-bio.vercel.app',
    siteName: 'FILMORE',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'FILMORE - Country Music Artist',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FILMORE | Artist Bio',
    description: 'Rising Country Music Artist from Wildwood, Missouri. 245M+ streams. First independent artist on Spotify Hot Country cover.',
    images: ['/images/og-image.png'],
    creator: '@filmoremusic',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.png', type: 'image/png', sizes: '32x32' },
    ],
    apple: '/apple-touch-icon.png',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.png" type="image/png" sizes="32x32" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#2A2118" />
      </head>
      <body>
        <div className="noise-overlay" aria-hidden="true"></div>
        {children}
      </body>
    </html>
  )
}
