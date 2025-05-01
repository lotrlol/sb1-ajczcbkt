// src/components/ContactForm.tsx
import React, { useState } from 'react'
import { Send, Loader2 } from 'lucide-react'
import { FadeIn } from './animation/FadeIn'

const ContactForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const form = e.target as HTMLFormElement
      const formData = new FormData(form)
      const payload = new URLSearchParams(formData as any).toString()

      const res = await fetch('/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: payload,
      })

      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      setSubmitted(true)
    } catch (err) {
      console.error('Form submission error:', err)
      alert('Oops! Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <div className="text-center p-8 bg-[#0C0C16]/70 backdrop-blur-sm rounded-xl border border-[#E53CC1]/30">
        <h3 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#E53CC1] to-[#FF9EE3]">
          Thank you for your request!
        </h3>
        <p className="text-gray-300">
          We’ll analyze your website and send you a personalized traffic estimate shortly.
        </p>
      </div>
    )
  }

  return (
    <FadeIn>
      <form
        name="traffic-analysis"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
        className="space-y-6"
      >
        {/* required for Netlify build-time detection */}
        <input type="hidden" name="form-name" value="traffic-analysis" />

        {/* honeypot */}
        <p className="hidden">
          <label>
            Don’t fill this out if you’re human: <input name="bot-field" />
          </label>
        </p>

        {/* ... all your fields below ... */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Company Name */}
          <div>
            <label htmlFor="companyName" className="block text-sm font-medium text-gray-300 mb-2">
              Company Name
            </label>
            <input
              id="companyName"
              name="companyName"
              type="text"
              required
              placeholder="Your company"
              className="w-full px-4 py-3 bg-[#0C0C16]/70 border border-gray-800 rounded-lg focus:ring-2 focus:ring-[#E53CC1] transition-all duration-300"
            />
          </div>
          {/* Website URL */}
          <div>
            <label htmlFor="websiteUrl" className="block text-sm font-medium text-gray-300 mb-2">
              Website URL
            </label>
            <input
              id="websiteUrl"
              name="websiteUrl"
              type="url"
              required
              placeholder="https://yourwebsite.com"
              className="w-full px-4 py-3 bg-[#0C0C16]/70 border border-gray-800 rounded-lg focus:ring-2 focus:ring-[#E53CC1] transition-all duration-300"
            />
          </div>
        </div>

        {/* Company Description */}
        <div>
          <label htmlFor="companyDescription" className="block text-sm font-medium text-gray-300 mb-2">
            Company Description
          </label>
          <textarea
            id="companyDescription"
            name="companyDescription"
            required
            rows={3}
            placeholder="Briefly describe your company"
            className="w-full px-4 py-3 bg-[#0C0C16]/70 border border-gray-800 rounded-lg focus:ring-2 focus:ring-[#E53CC1] transition-all duration-300"
          />
        </div>

        {/* Products/Services Description */}
        <div>
          <label htmlFor="productDescription" className="block text-sm font-medium text-gray-300 mb-2">
            Products/Services Description
          </label>
          <textarea
            id="productDescription"
            name="productDescription"
            required
            rows={3}
            placeholder="Describe your main products or services"
            className="w-full px-4 py-3 bg-[#0C0C16]/70 border border-gray-800 rounded-lg focus:ring-2 focus:ring-[#E53CC1] transition-all duration-300"
          />
        </div>

        {/* Traffic Numbers */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="currentTraffic" className="block text-sm font-medium text-gray-300 mb-2">
              Current Traffic (visitors/month)
            </label>
            <input
              id="currentTraffic"
              name="currentTraffic"
              type="number"
              required
              placeholder="1000"
              className="w-full px-4 py-3 bg-[#0C0C16]/70 border border-gray-800 rounded-lg focus:ring-2 focus:ring-[#E53CC1] transition-all duration-300"
            />
          </div>
          <div>
            <label htmlFor="desiredTraffic" className="block text-sm font-medium text-gray-300 mb-2">
              Desired Traffic (visitors/month)
            </label>
            <input
              id="desiredTraffic"
              name="desiredTraffic"
              type="number"
              required
              placeholder="5000"
              className="w-full px-4 py-3 bg-[#0C0C16]/70 border border-gray-800 rounded-lg focus:ring-2 focus:ring-[#E53CC1] transition-all duration-300"
            />
          </div>
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full px-8 py-4 bg-gradient-to-r from-[#E53CC1] to-[#FF9EE3] text-black font-semibold rounded-lg flex items-center justify-center hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-5 h-5 mr-2 animate-spin" /> Sending...
            </>
          ) : (
            <>
              <Send className="w-5 h-5 mr-2" /> Get my free analysis
            </>
          )}
        </button>
      </form>
    </FadeIn>
  )
}

export default ContactForm
