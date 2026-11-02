import type { Metadata } from 'next'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Hero from '../../homecomponents/Hero'
import CTA from '../../homecomponents/CTA'
import MachineStack, { type MachineGroup } from '../MachineStack'

export const metadata: Metadata = {
  title: 'Cigarette Filter Machines | Microtex International',
  description:
    'Explore Microtex filter rod making equipment, including the refurbished Hauni KDF2 filter maker.',
}

const filterMachines: MachineGroup[] = [
  {
    id: 'kdf2-filter-maker',
    title: 'KDF2 FILTER ROD MAKER',
    image: '/kdf2-filter-maker-cutout.webp',
    imageAlt: 'Refurbished Hauni KDF2 filter rod making machine',
    description:
      'A refurbished high-speed filter rod making line with upgraded motors and electronics, Siemens S7-300 control, and five servo motors for synchronized production.',
    details: [
      'Produces filter rods at 400 m/min, with 500 m/min available as an option.',
      'Includes an integrated tow opener and automatic tray filler system.',
    ],
    cta: {
      href: '/machines/filter-machines/kdf2-filter-maker',
      text: 'View Machine Details',
    },
    compactFeatures: true,
    features: [
      {
        title: 'OUTPUT',
        text: '400 m/min · 500 m/min optional',
        icons: ['/icons/industry/output-speed.webp'],
      },
      {
        title: 'FILTER ROD',
        text: '6–9 mm diameter · 64–150 mm length',
        icons: ['/icons/industry/format-gauge.webp'],
      },
      {
        title: 'CONTROL',
        text: 'SIEMENS S7-300 PLC · 5 servo motors',
        icons: ['/icons/industry/gears.webp'],
      },
    ],
  },
]

export default function FilterMachinesPage() {
  return (
    <>
      <Header />
      <main>
        <Hero title="FILTER MACHINES" imageSrc="/filtermachinesherofinal.webp" imageAlt="Cigarette filter rod making machinery" />
        <MachineStack groups={filterMachines} />
        <CTA compact />
      </main>
      <Footer />
    </>
  )
}
