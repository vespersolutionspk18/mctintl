import type { Metadata } from 'next'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import CTA from '../../../homecomponents/CTA'
import MachineProductTemplate from '../../components/MachineProductTemplate'

export const metadata: Metadata = {
  title: 'KDF2 Filter Rod Making Machine | Microtex International',
  description:
    'Refurbished Hauni KDF2 filter rod maker with Siemens S7-300 control, five servo motors, and output up to 400 m/min.',
}

export default function KDF2FilterMakerPage() {
  return (
    <>
      <Header />
      <main>
        <MachineProductTemplate
          title="KDF2 Filter Rod Making Machine"
          heroImage="/kdf2-filter-maker-cutout.png"
          heroImageAlt="Refurbished Hauni KDF2 filter rod making machine"
          capabilities={[
            { image: '/icons/industry/output-speed.webp', text: '400 m/min output · 500 m/min optional' },
            { image: '/icons/industry/gears.webp', text: 'SIEMENS S7-300 PLC system' },
            { image: '/icons/industry/gears.webp', text: '5 servo motors' },
            { image: '/icons/industry/format-gauge.webp', text: '6–9 mm diameter · 64–150 mm length' },
            { image: '/icons/industry/inspection-check.webp', text: 'Real-time monitoring and quality control' },
          ]}
          description="The KDF2 Filter Rod Making Machine is a high-speed filter maker designed for cigarette manufacturing. Advanced servo control and a SIEMENS PLC system support consistent filter rod production at high output."
          overview="Refurbished machinery, stripped to the core and rebuilt with upgraded motors and electronics. Installed components may not be OEM, but are usually compatible and deliver at-par performance."
          basicInfo={[
            { label: 'Machine', value: 'Hauni KDF2 filter rod maker' },
            { label: 'Condition', value: 'Refurbished, stripped down and rebuilt' },
            { label: 'Upgrades', value: 'Upgraded motors and electronics' },
            { label: 'Installed Components', value: 'May be non-OEM; usually compatible with at-par performance' },
            { label: 'Line Configuration', value: 'YL12D tow processor · YL22D filter rod maker · YJ35D tray filler' },
            { label: 'Application', value: 'High-volume cigarette manufacturing; compatible with various making lines and packing systems' },
          ]}
          technicalData={[
            { label: 'Output Speed', value: '400 m/min · 500 m/min optional' },
            { label: 'Filter Rod Diameter', value: 'φ6–φ9 mm' },
            { label: 'Filter Rod Length', value: '64–150 mm' },
            { label: 'Standard Lengths', value: '90 mm · 100 mm · 120 mm · 150 mm' },
            { label: 'Standard Diameter', value: 'φ7.7–φ7.79 mm' },
            { label: 'Voltage', value: '380 V ± 38 V' },
            { label: 'Frequency', value: '50 Hz ± 1 Hz' },
            { label: 'Total Power', value: '22 kVA' },
            { label: 'Overall Dimensions (L × W × H)', value: '8060 × 2370 × 3000 mm' },
            { label: 'YL12D Tow Processor Weight', value: '1,100 kg' },
            { label: 'YL22D Filter Rod Maker Weight', value: '2,000 kg' },
            { label: 'YJ35D Tray Filler Weight', value: '1,500 kg' },
          ]}
          features={[
            'Production speed of 400 m/min, with 500 m/min optional',
            'SIEMENS S7-300 PLC system with touch screen interface',
            'Five servo motors for precise synchronization',
            'Flexible configuration for different filter sizes and specifications',
            'Consistent filter rod output with minimal waste',
            'Factory informatization and network interface ready',
            'Man-machine interface for easy operation',
            'Electronic synchronous drive eliminates mechanical power loss',
            'Real-time monitoring and quality control',
            'Integrated tow opener and automatic tray filler system',
          ]}
          gallery={[]}
          relatedMachines={[]}
        />
        <CTA compact />
      </main>
      <Footer />
    </>
  )
}
