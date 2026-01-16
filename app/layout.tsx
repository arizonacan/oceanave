import type { Metadata } from 'next'
import { Bodoni_Moda, Inter } from 'next/font/google'
import './globals.css'

// 1. Load Bodoni Moda (The "Vogue" Font)
const bodoni = Bodoni_Moda({ 
  subsets: ['latin'],
  variable: '--font-serif', 
  display: 'swap',
  // We can adjust weight if needed, but variable fonts handle it automatically
})

// 2. Load Inter (Clean Tech Font)
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Ocean Avenue Consulting',
  description: 'Digital Infrastructure for Hampton Bays',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${bodoni.variable} ${inter.variable}`}>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  )
}