import Link from "next/link"
import type { Metadata } from "next"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"

export const metadata: Metadata = {
  title: "Thank You | Basiq360 Connected Packaging",
  description: "Thank you for your interest in Basiq360 Connected Packaging solutions.",
}

export default function ThankYouPage() {
  return (
    <>
      <Header />
    <main className="flex-1 flex items-center justify-center py-20 px-5">
      <div className="max-w-2xl text-center">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-[#18b57c] to-[#22c55e] mb-6">
          <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold mb-4">Thank You!</h1>
        <p className="text-lg text-slate-600 mb-8">
          We've received your request and our team will get back to you shortly. We're excited to help you transform
          your packaging with Basiq360's connected packaging solutions.
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gradient-to-br from-[#0052cc] to-[#003c96] text-white text-sm font-semibold shadow-[0_14px_30px_rgba(0,82,204,0.35)] hover:translate-y-[-1px] hover:shadow-[0_18px_40px_rgba(0,82,204,0.45)] transition-all"
          >
            Back to Home
          </Link>
          <Link
            href="https://www.basiq360.com"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-slate-400/60 bg-white/60 text-slate-600 text-sm font-semibold hover:bg-white hover:border-[#0052cc] hover:text-[#0052cc] transition-all"
          >
            Visit Basiq360.com
          </Link>
        </div>
      </div>
    </main>
    <Footer />
    </>

  )
}
