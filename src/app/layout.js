import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Cart Checkout',
  description: 'This is a E-cart checkout  ',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="stylesheet" href={inter.stylesheet} />
        <link rel='manifest' href='/manifest.json' />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
