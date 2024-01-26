import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Yotion',
  description: 'Your all in one workspace',
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/notion.ico",
        href: "/notion.ico",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/notion_alt1.ico",
        href: "/notion_alt1.ico",
      }
    ]
  }
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
