import type { Metadata } from 'next'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Hero from '../homecomponents/Hero'
import MachineStack, { type MachineGroup } from '../machines/MachineStack'
import SparePartsCTA from './SparePartsCTA'
import { sparePartCategories } from './sparePartsData'

export const metadata: Metadata = {
  title: 'Spare Parts | Microtex International',
  description:
    'Explore spare parts for Molins and Hauni cigarette makers, HLP and GD packers, and tobacco garniture and suction tapes.',
}

const sparePartGroups: MachineGroup[] = sparePartCategories.map((category) => ({
  id: category.slug,
  title: category.overviewTitle,
  image: category.image,
  imageAlt: category.imageAlt,
  description: category.description,
  cta: { href: `/spares/${category.slug}`, text: 'LEARN MORE' },
  compactFeatures: true,
  features: category.features.map((feature) => ({
    title: feature.title,
    text: feature.text,
    icons: [feature.icon],
  })),
}))

export default function SparePartsPage() {
  return (
    <>
      <Header />
      <main>
        <Hero
          title="SPARE PARTS"
          imageSrc="/sparepartshero.webp"
          imageAlt="Cigarette machinery spare parts"
          imageOnRight
          imageWidth={2058}
          imageHeight={764}
          textColor="gray"
        />
        <MachineStack groups={sparePartGroups} />
        <SparePartsCTA />
      </main>
      <Footer />
    </>
  )
}
