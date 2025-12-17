"use client"

import { useEffect, useState } from "react"
import { X } from "lucide-react"

interface ContactModalProps {
  isOpen: boolean
  onClose: () => void
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    if (isOpen && !isLoaded) {
      // Load HubSpot form script
      const script = document.createElement("script")
      script.src = "https://js-na2.hsforms.net/forms/embed/242830238.js"
      script.defer = true
      script.onload = () => {
        setIsLoaded(true)
      }
      document.body.appendChild(script)

      return () => {
        // Cleanup script on unmount
        if (document.body.contains(script)) {
          document.body.removeChild(script)
        }
      }
    }
  }, [isOpen, isLoaded])

  useEffect(() => {
    // Prevent body scroll when modal is open
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <>


      <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
        onClick={onClose}
      >
        <div
          className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2 rounded-full bg-slate-100 hover:bg-slate-200 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5 text-slate-600" />
          </button>

          {/* Modal content */}
          <div className="p-8">
            <div className="mb-6">
              <h2 className="text-3xl font-bold text-slate-900 mb-2">Get in Touch</h2>
              <p className="text-slate-600">Fill out the form below and our team will get back to you shortly.</p>
            </div>

            {/* HubSpot form container */}
            <div
              className="hs-form-frame hubspot-form-wrapper"
              data-region="na2"
              data-form-id="371299e1-44d5-4eab-bb07-cf9c760665f0"
              data-portal-id="242830238"
            ></div>
          </div>
        </div>
      </div>
    </>
  )
}

// Extend Window interface for TypeScript
declare global {
  interface Window {
    hbspt: any
  }
}