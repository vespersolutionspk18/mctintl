import type { Metadata } from 'next'
import Header from '../components/Header'
import Footer from '../components/Footer'
import MachineStack from './MachineStack'
import Hero from '../homecomponents/Hero'
import CTA from '../homecomponents/CTA'

export const metadata: Metadata = {
  title: 'Cigarette Making & Packing Machines | Microtex International',
  description: 'Explore Microtex cigarette making and packing machines, from wrappers and overwrappers to makers and case packers.',
}

export default function MachinesPage() {
  return (
    <>
      <Header />
      <main>
        <Hero title="CIGARETTE MACHINES" imageAlt="Cigarette making and packaging machinery" />
        <MachineStack />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
