import type { Metadata } from 'next'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import CTA from '../../../homecomponents/CTA'
import MachineProductTemplate from '../../components/MachineProductTemplate'

export const metadata: Metadata = {
  title: 'Over Wrapper MTI-OW25-1 | Microtex International',
  description:
    'Explore the automatic, PLC-controlled Microtex MTI-OW25-1 over-wrapping machine, including its specifications, features, and packaging capabilities.',
}

export default function OverWrapperProductPage() {
  return (
    <>
      <Header />
      <main>
        <MachineProductTemplate
          title="Over Wrapper MTI-OW25-1"
          heroImage="/mti-ow25-1-over-wrapper-reflection.png"
          heroImageAlt="Microtex MTI-OW25-1 automatic over-wrapping machine"
          capabilities={[
            { image: '/machines/product-features/overwrapper-plc-control-photo.webp', text: 'Automatic PLC control' },
            { image: '/machines/product-features/overwrapper-hard-box-wrapping-photo.webp', text: 'Hard-box wrapping' },
            { image: '/machines/product-features/overwrapper-polypropylene-film-photo.webp', text: 'Polypropylene film' },
            { image: '/machines/product-features/overwrapper-wrapped-box-conveyor-photo.webp', text: '20–25 overwraps per minute' },
            { image: '/machines/product-features/overwrapper-format-changeover-photo.webp', text: 'Quick format changeover' },
          ]}
          description="This Over-Wrapping machine is automatic and PLC-controlled. It is suitable for many applications, offering superior-quality wrapping regardless of the target size. This cellophane wrapper is easy to use and maintain. Ideal industries include tobacco, tea, coffee, cosmetic wrapping, confectionary, etc."
          overview="Simple to operate. Wrapping quality is superb as the Machine incorporates many important features."
          basicInfo={[
            { label: 'Products', value: 'Hard Box' },
            { label: 'Packing Materials', value: 'Polypropylene' },
          ]}
          technicalData={[
            { label: 'Output', value: '20–25 overwraps per/m*' },
            { label: 'Product Length', value: '50–300 mm' },
            { label: 'Product Width', value: '55–150 mm' },
            { label: 'Product Thickness', value: '10–110 mm (depends upon the width of the product)' },
            { label: 'Floor Space', value: '100 cm × 150 cm' },
            { label: 'Machine Height', value: '—' },
            { label: 'In-Feed Height', value: '160 cm' },
            { label: 'Out-Feed Height', value: '94 cm' },
            { label: 'Compressed Air', value: '5–6 bar' },
          ]}
          features={[
            'Mechanical gripper film pull',
            'Simple operation and maintenance',
            'PLC control built to the customer’s requirements',
            'Large-size packaging capability',
            'External side-loading film reel',
            'Quick-release size changeover via changeable parts',
            'Naked Wrapping Kit',
            'Tear Tape unit',
            'Flock finish on packaging contact parts',
            'Front-feed or side-feed conveyor',
            'Siemens control system',
          ]}
          gallery={[
            {
              src: '/overwrapper.webp',
              alt: 'Front view of the stainless-steel MTI-OW25-1 overwrapping machine',
            },
          ]}
          relatedMachines={[
            {
              title: 'PACKET WRAPPER',
              image: '/packeta.webp',
              imageAlt: 'Microtex packet wrapping machine',
              href: '/machines/packing-machines/packet-wrapper',
            },
            {
              title: 'HIGH-SPEED BOXER MACHINE',
              image: '/boxer machine.webp',
              imageAlt: 'Microtex high-speed cigarette boxer machine',
              href: '/machines/packing-machines/high-speed-boxer',
            },
            {
              title: 'CASE PACKER MACHINE',
              image: '/mti-cp06-1-case-packer-cutout.webp',
              imageAlt: 'Microtex MTI-CP06-1 cigarette case packer',
              href: '/machines/packing-machines/case-packer',
            },
          ]}
        />
        <CTA compact />
      </main>
      <Footer />
    </>
  )
}
