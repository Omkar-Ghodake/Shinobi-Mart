import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar/Navbar'
import { cn } from '@/lib/utils'
import ThemeState from '@/context/ThemeState'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Shinobi Mart',
  description: 'Naruto inspired online Shinobi Market',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={cn(inter.className, 'overflow-x-hidden')}>
        <ThemeState>
          <Navbar />
          {children}
        </ThemeState>
      </body>
    </html>
  )
}
