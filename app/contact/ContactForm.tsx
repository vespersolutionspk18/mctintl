'use client'

import { FormEvent } from 'react'

const fieldClass = 'w-full rounded-sm border border-gray-300 bg-white px-4 py-3 font-sans text-base tracking-normal text-gray-800 outline-none transition-colors placeholder:text-gray-400 focus:border-red-700 focus:ring-1 focus:ring-red-700'

export default function ContactForm() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const subject = `Microtex inquiry: ${data.get('interest')}`
    const body = `Name: ${data.get('name')}\nCompany: ${data.get('company') || 'Not provided'}\nEmail: ${data.get('email')}\nInterested in: ${data.get('interest')}\n\n${data.get('message')}`
    window.location.href = `mailto:info@microtex.co?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  return (
    <form onSubmit={handleSubmit} className="grid content-start gap-5">
      <div className="grid gap-5 lg:grid-cols-2">
        <label className="grid gap-2 text-base font-medium text-gray-700">Full name *<input className={fieldClass} name="name" autoComplete="name" placeholder="Your name" required /></label>
        <label className="grid gap-2 text-base font-medium text-gray-700">Company<input className={fieldClass} name="company" autoComplete="organization" placeholder="Company name" /></label>
      </div>
      <div className="grid gap-5 lg:grid-cols-2">
        <label className="grid gap-2 text-base font-medium text-gray-700">Email address *<input className={fieldClass} type="email" name="email" autoComplete="email" placeholder="you@company.com" required /></label>
        <label className="grid gap-2 text-base font-medium text-gray-700">Interested in *<select className={fieldClass} name="interest" defaultValue="" required><option value="" disabled>Select a topic</option><option>Machinery</option><option>Spare parts</option><option>Services and support</option><option>Other</option></select></label>
      </div>
      <label className="grid gap-2 text-base font-medium text-gray-700">Message *<textarea className={`${fieldClass} min-h-36 resize-y`} name="message" placeholder="Tell us about your requirements" required /></label>
      <div>
        <button type="submit" className="inline-block rounded-sm bg-red-700 px-3 py-1 text-lg font-medium tracking-tight text-white transition-colors hover:bg-red-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-700">SEND INQUIRY</button>
      </div>
    </form>
  )
}
