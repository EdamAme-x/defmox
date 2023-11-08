import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Defmox',
  description: 'Demo trade FX Game / Powerd by @amex2189',
  icons: {
    icon: 'next.svg',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className={inter.className}>{children}</body>
      <style>
        {`
          body {
            background: #000;
          }
        `}
      </style>
    </html>
  )
}
