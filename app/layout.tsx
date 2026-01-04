import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'FILMORE | Rising Country Music Artist',
  description: 'FILMORE - Rising Country Music Artist from Wildwood, Missouri. Over 245 million career streams. Featured on Spotify Hot Country, The New York Times, NBC TODAY, and more.',
  keywords: 'Filmore, Country Music, Nashville, Mr. 305 Records, ATYPICAL, Spotify Hot Country',
  openGraph: {
    title: 'FILMORE | Rising Country Music Artist',
    description: 'Rising Country Music Artist from Wildwood, Missouri with over 245 million career streams.',
    type: 'website',
    images: ['/images/filmore-hero.jpg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div className="noise-overlay" aria-hidden="true"></div>
        {children}
      </body>
    </html>
  )
}
