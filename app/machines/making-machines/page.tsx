import type { Metadata } from 'next'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Hero from '../../homecomponents/Hero'
import CTA from '../../homecomponents/CTA'
import MachineStack, { type MachineGroup } from '../MachineStack'

export const metadata: Metadata = {
  title: 'Cigarette Making Machines | Microtex International',
  description: 'Explore Mark 8-D and Mark 9.5 cigarette making machines with Max-S and Max-70 filter assemblers.',
}

const makingMachines: MachineGroup[] = [
  {
    id: 'mark-8d-max-15',
    title: 'MARK 8-D WITH MAX-15',
    image: '/mk8da.webp',
    imageAlt: 'Mark 8-D cigarette making machine with Max-15',
    cta: { href: '/machines/making-machines/mark-8-d-max-15', text: 'View Machine Details' },
    showCta: true,
    description: 'A Mark 8-D maker configured with a Max-15 and 1117Max multi-roll infeed.',
    compactFeatures: true,
    details: [
      'Double-knife cut-off with vacuum kicker box.',
      'Siemens Step7 PLC and HMI with full sensor monitoring.',
      'High-precision, heat-treated components designed to reduce wear and maintenance and extend service life.',
      'Integrated automatic gluing system.',
      '1117Max infeed unit with multi-roll functionality.',
    ],
    features: [
      { title: 'FORMAT', text: 'King / Demi / Slims / Super Slims / Nano', icons: ['/icons/industry/format-gauge.webp'] },
      { title: 'OUTPUT', text: 'Up to 2,800 CPM', icons: ['/icons/industry/output-speed.webp'] },
      { title: 'POWER / WEIGHT', text: '16 kW\n5,000 kg', icons: ['/icons/industry/power-gauge.webp'] },
    ],
  },
  {
    id: 'mark-95-max-s',
    title: 'MARK 9.5 WITH MAX-S',
    image: '/mk9.5a.webp',
    imageAlt: 'Mark 9.5 maker with Max-S filter assembler and automatic tray filler',
    cta: { href: '/machines/making-machines/mark-9-5-max-s', text: 'View Machine Details' },
    showCta: true,
    description: 'Mark 9.5 maker paired with a Max-S filter assembler and automatic tray filler.',
    compactFeatures: true,
    details: [
      'Siemens Step7 PLC and HMI with full sensor monitoring.',
      'Microwave weight scanning system.',
      'Max-S inspection system checks for missing filters and loose ends.',
    ],
    features: [
      { title: 'FORMAT', text: 'King / Demi / Slims / Super Slims / Nano', icons: ['/icons/industry/format-gauge.webp'] },
      { title: 'OUTPUT', text: 'Up to 4,000 CPM', icons: ['/icons/industry/output-speed.webp'] },
      { title: 'POWER / WEIGHT', text: 'MK9.5 35 kW · Max-S 20 kW · HCF80 15 kW\n8,500 kg', icons: ['/icons/industry/power-gauge.webp'] },
    ],
  },
  {
    id: 'mark-95-max-70',
    title: 'MARK 9.5 WITH MAX-70',
    image: '/9.5maxa.webp',
    imageAlt: 'Mark 9.5 maker with Max-70 filter assembler and automatic tray filler',
    cta: { href: '/machines/making-machines/mark-9-5-max-70', text: 'View Machine Details' },
    showCta: true,
    description: 'Mark 9.5 maker paired with a Max-70 filter assembler and automatic tray filler.',
    compactFeatures: true,
    details: [
      'Siemens Step7 PLC and HMI with full sensor monitoring.',
      'Microwave weight scanning system.',
      'Max-70 inspection system checks for missing filters and loose ends.',
    ],
    features: [
      { title: 'FORMAT', text: 'King / Demi / Slims / Super Slims / Nano', icons: ['/icons/industry/format-gauge.webp'] },
      { title: 'OUTPUT', text: 'Up to 5,000 CPM', icons: ['/icons/industry/output-speed.webp'] },
      { title: 'POWER / WEIGHT', text: 'MK9.5 35 kW · Max-70 20 kW · HCF80 15 kW\n9,000 kg', icons: ['/icons/industry/power-gauge.webp'] },
    ],
  },
]

export default function MakingMachinesPage() {
  return (
    <>
      <Header />
      <main>
        <Hero title="MAKING MACHINES" imageSrc="/makingmachinesherofinal.webp" imageAlt="Cigarette making machinery" subtitle="" />
        <MachineStack groups={makingMachines} />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
