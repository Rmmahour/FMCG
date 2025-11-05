"use client"
import { useState } from "react"
import { ContactModal } from "@/components/contact-modal"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"

export default function PrivacyPolicyPage() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)

  return (
    <>
    <Header />
      <main className="flex-1 py-16 px-5">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Privacy Policy</h1>
          <p className="text-slate-600 mb-8">Last updated: {new Date().toLocaleDateString()}</p>

          <div className="prose prose-slate max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Welcome to Basiq360. We respect your privacy and are committed to protecting your personal data. This
                privacy policy will inform you about how we look after your personal data when you visit our website and
                tell you about your privacy rights and how the law protects you.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">2. Data We Collect</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                We may collect, use, store and transfer different kinds of personal data about you which we have grouped
                together as follows:
              </p>
              <ul className="list-disc pl-6 text-slate-600 space-y-2">
                <li>Identity Data includes first name, last name, username or similar identifier.</li>
                <li>Contact Data includes email address and telephone numbers.</li>
                <li>
                  Technical Data includes internet protocol (IP) address, browser type and version, time zone setting
                  and location, browser plug-in types and versions, operating system and platform.
                </li>
                <li>Usage Data includes information about how you use our website and services.</li>
                <li>Marketing and Communications Data includes your preferences in receiving marketing from us.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">3. How We Use Your Data</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                We will only use your personal data when the law allows us to. Most commonly, we will use your personal
                data in the following circumstances:
              </p>
              <ul className="list-disc pl-6 text-slate-600 space-y-2">
                <li>To provide and maintain our service</li>
                <li>To notify you about changes to our service</li>
                <li>To provide customer support</li>
                <li>To gather analysis or valuable information so that we can improve our service</li>
                <li>To monitor the usage of our service</li>
                <li>To detect, prevent and address technical issues</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">4. Data Security</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                We have put in place appropriate security measures to prevent your personal data from being accidentally
                lost, used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to
                your personal data to those employees, agents, contractors and other third parties who have a business
                need to know.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">5. Your Legal Rights</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Under certain circumstances, you have rights under data protection laws in relation to your personal
                data, including the right to:
              </p>
              <ul className="list-disc pl-6 text-slate-600 space-y-2">
                <li>Request access to your personal data</li>
                <li>Request correction of your personal data</li>
                <li>Request erasure of your personal data</li>
                <li>Object to processing of your personal data</li>
                <li>Request restriction of processing your personal data</li>
                <li>Request transfer of your personal data</li>
                <li>Right to withdraw consent</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">6. Contact Us</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                If you have any questions about this privacy policy or our privacy practices, please contact us at:
              </p>
              <p className="text-slate-600 leading-relaxed">
                Email: privacy@basiq360.com
                <br />
                Website:{" "}
                <button onClick={() => setIsContactModalOpen(true)} className="text-[#0052cc] hover:underline">
                  www.basiq360.com/contact
                </button>
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
      <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
    </>
  )
}
