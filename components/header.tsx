"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { ContactModal } from "./contact-modal"

export function Header() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("why")

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["why", "offers", "tech", "case"]
      let current = "why"

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100) {
            current = section
          }
        }
      }

      setActiveSection(current)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const isActive = (section: string) => activeSection === section

  return (
    <>
      <header className="sticky top-0 z-40 backdrop-blur-xl bg-white/92 border-b border-slate-200/70">
        <div className="max-w-[1120px] mx-auto flex items-center justify-between px-5 py-3 gap-5">
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center gap-3" aria-label="Basiq360 Home">
              <Image
                src="basiq360-logo.png"
                alt="Basiq360 Logo"
                width={160}
                height={32}
                className="h-8 w-auto"
              />
            </Link>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-[0.9rem]" aria-label="Primary">
            <Link
              href="#why"
              className={`font-medium transition-colors ${
                isActive("why") ? "text-[#0052cc]" : "text-slate-600 hover:text-[#0052cc]"
              }`}
            >
              Why serialization
            </Link>
            <Link
              href="#offers"
              className={`font-medium transition-colors ${
                isActive("offers") ? "text-[#0052cc]" : "text-slate-600 hover:text-[#0052cc]"
              }`}
            >
              Platform value
            </Link>
            <Link
              href="#tech"
              className={`font-medium transition-colors ${
                isActive("tech") ? "text-[#0052cc]" : "text-slate-600 hover:text-[#0052cc]"
              }`}
            >
              Technology
            </Link>
            <Link
              href="#case"
              className={`font-medium transition-colors ${
                isActive("case") ? "text-[#0052cc]" : "text-slate-600 hover:text-[#0052cc]"
              }`}
            >
              Use case
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="#cta"
              className="hidden sm:inline-flex items-center justify-center gap-2 px-[1.15rem] py-[0.6rem] rounded-full border border-slate-400/60 bg-white/60 text-slate-600 text-[0.86rem] font-semibold hover:bg-white hover:border-[#0052cc] hover:text-[#0052cc] transition-all whitespace-nowrap"
            >
              Explore Connected Packaging
            </Link>
            <button
              onClick={() => setIsContactModalOpen(true)}
              className="inline-flex items-center justify-center gap-2 px-[1.15rem] py-[0.6rem] rounded-full bg-gradient-to-br from-[#0052cc] to-[#003c96] text-white text-[0.86rem] font-semibold shadow-[0_14px_30px_rgba(0,82,204,0.35)] hover:translate-y-[-1px] hover:shadow-[0_18px_40px_rgba(0,82,204,0.45)] transition-all whitespace-nowrap"
            >
              Book a Demo
            </button>
          </div>
        </div>
      </header>

      <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
    </>
  )
}