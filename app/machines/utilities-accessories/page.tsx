import type { Metadata } from 'next'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Hero from '../../homecomponents/Hero'
import CTA from '../../homecomponents/CTA'
import MachineStack from '../MachineStack'
import { utilityAccessoryGroups } from './machineData'

export const metadata: Metadata = {
  title: 'Utilities & Accessories | Microtex International',
  description:
    'Explore tobacco cutters, reclaimers, feeders, dust collectors, vacuum pumps, air compressors, shrink tunnels, trays and trolleys.',
}

export default function UtilitiesAccessoriesPage() {
  return (
    <>
      <Header />
      <main>
        <Hero
          title="UTILITIES & ACCESSORIES"
          imageSrc="/utilitieshero.png"
          imageAlt="Tobacco handling, production utilities and cigarette line accessories"
        />
        <div className="bg-white px-4 py-8 font-stylish tracking-tighter sm:px-8 sm:py-10 lg:px-24">
          <p className="font-sans text-base leading-relaxed text-gray-800 sm:text-lg">
            Support tobacco processing and cigarette production with equipment for cutting, recovery,
            feeding, extraction, compressed air and vacuum. Browse shrink wrapping, cigarette and filter
            trays, and mobile trolley options for line handling.
          </p>
        </div>
        <MachineStack groups={utilityAccessoryGroups} />
        <CTA compact />
      </main>
      <Footer />
    </>
  )
}
