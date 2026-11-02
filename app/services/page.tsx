import type { Metadata } from 'next'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Hero from '../homecomponents/Hero'
import ServicesStack from './ServicesStack'
import ServicesCTA from './ServicesCTA'

export const metadata: Metadata = {
  title: 'Services | Microtex International',
  description:
    'Explore Microtex installation and up-gradation, format and conversion kits, support, and rebuilding services for making and packaging solutions.',
}

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main>
        <Hero
          title="SERVICES"
          imageSrc="/servicesherofinalblue.webp"
          imageAlt="Cigarette production machinery"
          textColor="white"
          darkOverlay
          darkOverlayOpacity={0.3}
        />
        <ServicesStack />
        <ServicesCTA />
      </main>
      <Footer />
    </>
  )
}
