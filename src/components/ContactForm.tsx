import React from 'react';
import { Send } from 'lucide-react';
import { FadeIn } from './animation/FadeIn';

const ContactForm = () => {
  return (
    <FadeIn>
      <form
        name="traffic-analysis"
        method="POST"
        action="/"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        className="space-y-6"
      >
        <input type="hidden" name="form-name" value="traffic-analysis" />
        <p className="hidden">
          <label>
            Don't fill this out if you're human: <input name="bot-field" />
          </label>
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="companyName" className="block text-sm font-medium text-gray-300 mb-2">
              Company Name
            </label>
            <input
              type="text"
              id="companyName"
              name="companyName"
              required
              className="w-full px-4 py-3 bg-[#0C0C16]/70 border border-gray-800 rounded-lg focus:ring-2 focus:ring-[#E53CC1] focus:border-transparent transition-all duration-300"
              placeholder="Your company"
            />
          </div>

          <div>
            <label htmlFor="websiteUrl" className="block text-sm font-medium text-gray-300 mb-2">
              Website URL
            </label>
            <input
              type="url"
              id="websiteUrl"
              name="websiteUrl"
              required
              className="w-full px-4 py-3 bg-[#0C0C16]/70 border border-gray-800 rounded-lg focus:ring-2 focus:ring-[#E53CC1] focus:border-transparent transition-all duration-300"
              placeholder="https://yourwebsite.com"
            />
          </div>
        </div>

        <div>
          <label htmlFor="companyDescription" className="block text-sm font-medium text-gray-300 mb-2">
            Company Description
          </label>
          <textarea
            id="companyDescription"
            name="companyDescription"
            required
            rows={3}
            className="w-full px-4 py-3 bg-[#0C0C16]/70 border border-gray-800 rounded-lg focus:ring-2 focus:ring-[#E53CC1] focus:border-transparent transition-all duration-300"
            placeholder="Briefly describe your company"
          />
        </div>

        <div>
          <label htmlFor="productDescription" className="block text-sm font-medium text-gray-300 mb-2">
            Products/Services Description
          </label>
          <textarea
            id="productDescription"
            name="productDescription"
            required
            rows={3}
            className="w-full px-4 py-3 bg-[#0C0C16]/70 border border-gray-800 rounded-lg focus:ring-2 focus:ring-[#E53CC1] focus:border-transparent transition-all duration-300"
            placeholder="Describe your main products or services"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="currentTraffic" className="block text-sm font-medium text-gray-300 mb-2">
              Current Traffic (visitors/month)
            </label>
            <input
              type="number"
              id="currentTraffic"
              name="currentTraffic"
              required
              className="w-full px-4 py-3 bg-[#0C0C16]/70 border border-gray-800 rounded-lg focus:ring-2 focus:ring-[#E53CC1] focus:border-transparent transition-all duration-300"
              placeholder="1000"
            />
          </div>

          <div>
            <label htmlFor="desiredTraffic" className="block text-sm font-medium text-gray-300 mb-2">
              Desired Traffic (visitors/month)
            </label>
            <input
              type="number"
              id="desiredTraffic"
              name="desiredTraffic"
              required
              className="w-full px-4 py-3 bg-[#0C0C16]/70 border border-gray-800 rounded-lg focus:ring-2 focus:ring-[#E53CC1] focus:border-transparent transition-all duration-300"
              placeholder="5000"
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full px-8 py-4 bg-gradient-to-r from-[#E53CC1] to-[#FF9EE3] text-black font-semibold rounded-lg flex items-center justify-center transform transition-all duration-300 hover:scale-105 hover:shadow-glow"
        >
          <Send className="w-5 h-5 mr-2" />
          Get my free analysis
        </button>
      </form>
    </FadeIn>
  );
};

export default ContactForm;
