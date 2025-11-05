import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
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
      </head>
      <body
        className={`${inter.className} antialiased min-h-screen flex flex-col bg-gradient-to-br from-[#e6f4ff] via-white to-[#fdf7ec]`}
      >
        <Header />
        {children}
        <Footer />
        <CookieConsent />
        <Analytics />
      </body>
    </html>
  )
}
