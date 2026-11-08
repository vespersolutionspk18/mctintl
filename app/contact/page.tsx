import type { Metadata } from 'next'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ContactForm from './ContactForm'
import Hero from '../homecomponents/Hero'

export const metadata: Metadata = {
  title: 'Contact Us | Microtex International',
  description: 'Contact Microtex International for machinery, spare parts and support.',
}

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        <Hero title="CONTACT US" imageSrc="/abouthero.webp" imageAlt="Microtex International building exterior" darkOverlay />

        <div className="grid grid-cols-1 gap-10 bg-white px-4 pb-12 pt-8 font-stylish tracking-tighter sm:px-8 sm:pb-16 lg:grid-cols-2 lg:gap-20 lg:px-24 lg:pb-20">
          <section aria-labelledby="contact-details-title">
            <h2 id="contact-details-title" className="text-xl font-semibold text-gray-600 sm:text-2xl">GET IN TOUCH</h2>
            <p className="mt-4 font-sans text-base leading-relaxed text-gray-800 sm:mt-6 sm:text-lg">
              Whether you&apos;re looking for machinery, spare parts or support for your production line, our team is ready to help. Get in touch with us to discuss your requirements.
            </p>

            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:mt-10 lg:gap-10">
              <div>
                <h3 className="text-lg font-semibold text-gray-600 sm:text-xl">EMAIL US</h3>
                <p className="mt-2 break-words font-sans text-base text-gray-800 sm:mt-3 sm:text-lg"><a className="hover:text-red-700 transition-colors" href="mailto:info@microtex.co">info@microtex.co</a></p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-600 sm:text-xl">CALL US</h3>
                <p className="mt-2 font-sans text-base text-gray-800 sm:mt-3 sm:text-lg"><a className="hover:text-red-700 transition-colors" href="tel:+97165582083">+971 6 558 2083</a></p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-600 sm:text-xl">WHATSAPP</h3>
                <p className="mt-2 font-sans text-base text-gray-800 sm:mt-3 sm:text-lg"><a className="hover:text-red-700 transition-colors" href="https://wa.me/971521361040">+971 52 136 1040</a></p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-600 sm:text-xl">VISIT US</h3>
                <address className="mt-2 font-sans text-base leading-tight text-gray-800 not-italic sm:mt-3 sm:text-lg">D2 06, Saif Zone<br />Sharjah, United Arab Emirates<br />P.O. Box 123447</address>
                <a className="mt-3 inline-block font-sans text-base text-gray-800 underline hover:text-red-700 transition-colors" href="https://www.google.com/maps/search/?api=1&query=D2+06+Saif+Zone+Sharjah+United+Arab+Emirates" target="_blank" rel="noreferrer">Get directions</a>
              </div>
            </div>

            <div className="mt-8 w-full sm:mt-10">
              <iframe
                className="block h-48 w-full border-0"
                src="https://www.google.com/maps?q=Microtex+International%2C+D2+06%2C+Saif+Zone%2C+Sharjah%2C+United+Arab+Emirates&output=embed"
                title="Map showing Microtex International in Saif Zone, Sharjah"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </section>

          <section aria-labelledby="inquiry-title" className="min-w-0">
            <h2 id="inquiry-title" className="text-xl font-semibold text-gray-600 sm:text-2xl">SEND US YOUR INQUIRY</h2>
            <p className="mt-4 font-sans text-base leading-relaxed text-gray-800 sm:mt-6 sm:text-lg">Tell us a little about what you need and we&apos;ll help you find the right solution. For spare parts, including the machine model and part details will help us assist you.</p>
            <div className="mt-8"><ContactForm /></div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}
