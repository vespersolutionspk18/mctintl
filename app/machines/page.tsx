import type { Metadata } from 'next'
import Header from '../components/Header'
import Footer from '../components/Footer'
import MachineStack from './MachineStack'
import Hero from '../homecomponents/Hero'
import CTA from '../homecomponents/CTA'

export const metadata: Metadata = {
  title: 'Cigarette Making, Filter & Packing Machines | Microtex International',
  description: 'Explore Microtex cigarette making, filter and packing machinery, from filter rod makers and wrappers to case packers.',
}

export default function MachinesPage() {
  return (
    <>
      <Header />
      <main>
        <Hero title="TOBACCO MACHINES" imageSrc="/herofinalfinal.png" imageAlt="Cigarette making, filter rod making, and packing machinery" />
        <div className="bg-white px-4 py-8 font-stylish tracking-tighter sm:px-8 sm:py-10 lg:px-24">
          <p className="font-sans text-base leading-relaxed text-gray-800 sm:text-lg">
            Microtex International supplies cigarette making, packing and filter machines, along with the
            utilities and accessories that keep production lines running. Explore proven machine platforms,
            high-speed packers, precision wrappers and complete packaging systems, backed by decades of
            engineering experience and practical technical support.
          </p>
        </div>
        <MachineStack />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
