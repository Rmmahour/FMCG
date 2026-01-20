import type React from "react"
import type { Metadata } from "next"
import { GoogleTagManager, GoogleAnalytics } from '@next/third-parties/google'
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import Script from "next/script" 
import { CookieConsent } from "@/components/cookie-consent"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Connected Packaging for Food & Beverage | Basiq360 Track & Trace",
  description:
    "Basiq360 enables food brands to meet GCC serialization mandates, ensure authenticity, and engage consumers with connected packaging powered by our Print Gateway and cloud platform.",
  keywords: "serialization, GCC compliance, food traceability, connected packaging, QR codes, EPCIS, GS1 Digital Link",
  authors: [{ name: "Basiq360" }],
  openGraph: {
    title: "Connected Packaging for Food & Beverage | Basiq360",
    description: "Meet GCC serialization mandates and engage consumers with Basiq360 connected packaging solutions.",
    type: "website",
    url: "https://www.basiq360.com",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="favicon.webp" />
      
        {/* Meta Pixel Code */}
<Script
  id="facebook-pixel"
  strategy="afterInteractive"
  dangerouslySetInnerHTML={{
    __html: `
      !function(f,b,e,v,n,t,s)
      {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
      n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s)}(window, document,'script',
      'https://connect.facebook.net/en_US/fbevents.js');
      fbq('init', '733484639407288');
      fbq('track', 'PageView');
    `,
  }}
/>
<noscript><img height="1" width="1" style={{display:'none'}}
src="https://www.facebook.com/tr?id=733484639407288&ev=PageView&noscript=1"
/></noscript>
 {/* End Meta Pixel Code  */}
      </head>
      <body
        className={`${inter.className} antialiased min-h-screen flex flex-col bg-gradient-to-br from-[#e6f4ff] via-white to-[#fdf7ec]`}
      >
        
        {children}
        <GoogleTagManager gtmId="GTM-MM5PWB94" />
        <GoogleAnalytics gaId="G-M6HMK9JLLG" />
        
        <CookieConsent />
        <Analytics />
      </body>
    </html>
  )
}
