import { HeroSection } from "@/components/hero-section"
import { WhySection } from "@/components/why-section"
import { OffersSection } from "@/components/offers-section"
import { TechSection } from "@/components/tech-section"
import { CaseSection } from "@/components/case-section"
import { CtaSection } from "@/components/cta-section"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <>
    <Header />
    <main className="flex-1">
      <HeroSection />
      <WhySection />
      <OffersSection />
      <TechSection />
      <CaseSection />
      <CtaSection />
    </main>
    <Footer/>
    </>
  )
}
