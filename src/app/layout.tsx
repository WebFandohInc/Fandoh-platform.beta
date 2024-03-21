import './globals.css'

import { Raleway } from 'next/font/google'

import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import { cn } from '@/utils/cn'

import { SessionProviderWrapper } from './session-wrapper'

const raleway = Raleway({ subsets: ['latin'], variable: '--font-sans' })

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <title>WebFandoh</title>
       <meta name="description" content="WebFandoh is a place to explore, create and share all kinds of content. A platform where you can create, discover and interact with all kinds of personalized and interactive content on the internet."></meta>
      <meta name="application-name" content="WebFandoh"></meta>
      <meta name="google-adsense-account" content="ca-pub-3554757782177589" />
      <meta property="og:locale" content="en_US"></meta>
      <meta property="og:site_name" content="WebFandoh"></meta>
      <body
        className={cn(
          'min-h-screen h-min max-w-full bg-white text-muted-foreground font-sans antialiased overflow-auto',
          raleway.variable,
        )}
      >
        <SessionProviderWrapper>
              <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3554757782177589" crossOrigin="anonymous"></script>
                  {/* Script do Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-EK39T2EK57"></script>
        <script dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-EK39T2EK57');
          `,
        }} />
          <Header />
          {children}
          <Footer />
        </SessionProviderWrapper>
      </body>
    </html>
  )
}
