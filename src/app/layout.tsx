import './globals.css'

import type { Metadata } from 'next'
import { Raleway } from 'next/font/google'
import { getServerSession } from 'next-auth'

import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import { authOptions } from '@/lib/auth/auth-options'
import { cn } from '@/utils/cn'

import { SessionProviderWrapper } from './session-wrapper'

const raleway = Raleway({ subsets: ['latin'], variable: '--font-sans' })

export const metadata: Metadata = {
  title: 'WebFandoh',
  description: 'description',
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <title>WebFandoh</title>
      <body
        className={cn(
          'min-h-screen h-min max-w-full bg-white text-muted-foreground font-sans antialiased overflow-auto',
          raleway.variable,
        )}
      >
        <SessionProviderWrapper>
          <Header />
          {children}
          <Footer />
        </SessionProviderWrapper>
      </body>
    </html>
  )
}
