import type { Metadata } from 'next'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import ServiceDetailTemplate, { type ServiceDetailSection } from '../ServiceDetailTemplate'

export const metadata: Metadata = {
  title: 'Format & Conversion Kits | Microtex International',
  description:
    'Upgrade existing equipment with new formats through Microtex format and conversion kits for cigarette making and packaging machines.',
}

const sections: ServiceDetailSection[] = [
  {
    title: 'Responding to new product requirements',
    text: 'New product trends and manufacturing demands can call for different formats. Microtex provides format and conversion kits to help adapt existing equipment as those requirements change.',
  },
  {
    title: 'Upgrading existing equipment',
    text: 'The service focuses on adding new formats to machinery already in use. Microtex supplies the required kit and supports its installation and integration with the equipment.',
  },
  {
    title: 'We provide format kits for the following and more:',
    items: [
      'Cigarette Making Machines — MK8, MK9, MAX 3/5 & MAX-S',
      'Cigarette Packer (HLP) Hinge Lid Packer',
      'GD Wrappers',
      'Scandia Wrapper',
      'CP1',
      'Sasib 3000/4000/5000/6000',
      'High Speed Boxer',
      'Over Wrapper',
    ],
  },
  {
    title: 'Format kits for more equipment',
    text: 'The listed machines are examples of the equipment Microtex supports. Format kits are also available for additional machine types; contact the team with your machine and format requirements to discuss options.',
  },
]

export default function FormatConversionKitsPage() {
  return (
    <>
      <Header />
      <main>
        <ServiceDetailTemplate
          title="Format & Conversion Kits"
          description="We provide solutions that allow up-gradation of existing equipment via installation and integration of new format & conversion kits."
          overview="When product trends and manufacturing demands change, Microtex helps upgrade existing equipment with new formats through the installation and integration of conversion kits."
          heroAdditional="The service covers cigarette makers, hinge-lid packers, wrappers, high-speed boxing and overwrapping equipment."
          image="/services/format-conversion-cutout.webp"
          imageAlt="Format and conversion components for cigarette machinery"
          sections={sections}
        />
      </main>
      <Footer />
    </>
  )
}
