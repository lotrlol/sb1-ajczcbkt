import React, { useState } from "react";
import FadeIn from "react-fade-in";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();                       // 1) stop native submit
    const form = e.target;
    const data = new FormData(form);          // 2) gather all inputs

    try {
      const res = await fetch("/", {           // 3) post to Netlify’s endpoint
        method: "POST",
        body: data,
      });
      if (res.ok) {
        setSubmitted(true);                   // 4) now swap in the thank-you
      } else {
        console.error("Form submission error:", res.statusText);
      }
    } catch (err) {
      console.error("Netlify submit failed:", err);
    }
  };

  if (submitted) {
    return (
      <div className="mx-auto max-w-lg rounded-lg bg-secondary-500 px-8 py-16 text-center md:px-16">
        <FadeIn>
          <h2 className="mb-4 text-4xl font-bold">Thank you!</h2>
          <p className="text-lg">We’ve received your request and will be in touch soon.</p>
        </FadeIn>
      </div>
    );
  }

  return (
    <FadeIn>
      <form
        name="traffic-analysis"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
        className="mx-auto max-w-lg rounded-lg bg-secondary-500 px-8 py-16 md:px-16"
      >
        {/* Required hidden input so Netlify picks up your form */}
        <input type="hidden" name="form-name" value="traffic-analysis" />

        {/* Honeypot field (hide via CSS) */}
        <p className="hidden">
          <label>
            Don’t fill this out if you’re human: <input name="bot-field" />
          </label>
        </p>

        {/* Your visible fields */}
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="mt-1 block w-full rounded border-gray-300"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="mt-1 block w-full rounded border-gray-300"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="message" className="block text-sm font-medium">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            className="mt-1 block w-full rounded border-gray-300"
          />
        </div>

        <button
          type="submit"
          className="w-full rounded bg-primary-600 py-2 px-4 font-semibold text-white hover:bg-primary-700"
        >
          Get my free traffic analysis
        </button>
      </form>
    </FadeIn>
  );
}
