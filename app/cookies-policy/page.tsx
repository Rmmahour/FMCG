"use client"
import { useState } from "react"
import { ContactModal } from "@/components/contact-modal"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"


export default function CookiesPolicyPage() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)

  return (
    <>
    <Header />
      <main className="flex-1 py-16 px-5">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Cookies Policy</h1>
          {/* <p className="text-slate-600 mb-8">Last updated: {new Date().toLocaleDateString()}</p> */}

          <div className="prose prose-slate max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">1. What Are Cookies</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Cookies are small text files that are placed on your computer or mobile device when you visit a website.
                They are widely used to make websites work more efficiently and provide information to the owners of the
                site.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">2. How We Use Cookies</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                We use cookies for several reasons detailed below. Unfortunately, in most cases there are no industry
                standard options for disabling cookies without completely disabling the functionality and features they
                add to this site. It is recommended that you leave on all cookies if you are not sure whether you need
                them or not in case they are used to provide a service that you use.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">3. Types of Cookies We Use</h2>

              <h3 className="text-xl font-semibold mb-3 mt-6">Essential Cookies</h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                These cookies are necessary for the website to function and cannot be switched off in our systems. They
                are usually only set in response to actions made by you which amount to a request for services, such as
                setting your privacy preferences, logging in or filling in forms.
              </p>

              <h3 className="text-xl font-semibold mb-3 mt-6">Analytics Cookies</h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                These cookies allow us to count visits and traffic sources so we can measure and improve the performance
                of our site. They help us to know which pages are the most and least popular and see how visitors move
                around the site.
              </p>

              <h3 className="text-xl font-semibold mb-3 mt-6">Functionality Cookies</h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                These cookies enable the website to provide enhanced functionality and personalization. They may be set
                by us or by third party providers whose services we have added to our pages.
              </p>

              <h3 className="text-xl font-semibold mb-3 mt-6">Marketing Cookies</h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                These cookies may be set through our site by our advertising partners. They may be used by those
                companies to build a profile of your interests and show you relevant adverts on other sites.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">4. Managing Cookies</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                You can control and/or delete cookies as you wish. You can delete all cookies that are already on your
                computer and you can set most browsers to prevent them from being placed. If you do this, however, you
                may have to manually adjust some preferences every time you visit a site and some services and
                functionalities may not work.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">5. Third-Party Cookies</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                In some special cases we also use cookies provided by trusted third parties. The following section
                details which third party cookies you might encounter through this site:
              </p>
              <ul className="list-disc pl-6 text-slate-600 space-y-2">
                <li>
                  Google Analytics - to understand how you use the site and ways that we can improve your experience
                </li>
                <li>Social media platforms - to enable sharing of content on social networks</li>
                <li>Marketing and advertising partners - to deliver relevant advertisements</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">6. Your Consent</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                By using our website, you consent to our use of cookies in accordance with this Cookies Policy. If you
                do not agree to our use of cookies in this way, you should set your browser settings accordingly or not
                use our website.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">7. Contact Us</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                If you have any questions about our use of cookies, please contact us at:
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
