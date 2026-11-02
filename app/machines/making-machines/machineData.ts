import type { MachineProductTemplateProps, RelatedMachine } from '../components/MachineProductTemplate'

export type MakingMachineProduct = MachineProductTemplateProps & {
  slug: string
  metaDescription: string
}

const relatedForMark8: RelatedMachine[] = [
  {
    title: 'MARK 9.5 WITH MAX-S',
    image: '/mk9.5a.webp',
    imageAlt: 'Mark 9.5 maker with Max-S filter assembler',
    href: '/machines/making-machines/mark-9-5-max-s',
  },
  {
    title: 'MARK 9.5 WITH MAX-70',
    image: '/9.5maxa.webp',
    imageAlt: 'Mark 9.5 maker with Max-70 filter assembler',
    href: '/machines/making-machines/mark-9-5-max-70',
  },
  {
    title: 'HINGE LID PACKER MTI-HLP250',
    image: '/nhlp3-floor-reflection.webp',
    imageAlt: 'Microtex MTI-HLP250 hinge-lid cigarette packer',
    href: '/machines/packing-machines/hlp-250',
  },
]

const relatedForMark95 = (currentSlug: string): RelatedMachine[] => [
  {
    title: 'MARK 8-D WITH MAX-15',
    image: '/mk8da.webp',
    imageAlt: 'Mark 8-D cigarette maker with Max-15',
    href: '/machines/making-machines/mark-8-d-max-15',
  },
  ...(currentSlug === 'mark-9-5-max-s' ? [relatedForMark8[1]] : [relatedForMark8[0]]),
  {
    title: 'HINGE LID PACKER MTI-HLP250',
    image: '/nhlp3-floor-reflection.webp',
    imageAlt: 'Microtex MTI-HLP250 hinge-lid cigarette packer',
    href: '/machines/packing-machines/hlp-250',
  },
]

export const makingMachineProducts: MakingMachineProduct[] = [
  {
    slug: 'mark-8-d-max-15',
    title: 'Mark 8-D with Max-15',
    metaDescription:
      'Mark 8-D cigarette maker with Max-15, double-knife cut-off, Siemens Step7 controls, automatic gluing, and 1117Max multi-roll infeed.',
    heroImage: '/mk8da.webp',
    heroImageAlt: 'Mark 8-D cigarette maker configured with Max-15',
    capabilities: [
      { image: '/machines/product-features/hero-capabilities/mark-8-d-max-15-formats.webp', text: 'King to Nano formats' },
      { image: '/machines/product-features/hero-capabilities/mark-8-d-max-15-double-knife-cutoff.webp', text: 'Double-knife cut-off' },
      { image: '/machines/product-features/hero-capabilities/mark-8-d-max-15-automatic-gluing.webp', text: 'Automatic gluing' },
      { image: '/machines/product-features/hero-capabilities/mark-8-d-max-15-multi-roll-infeed.webp', text: '1117Max multi-roll infeed' },
      { image: '/machines/product-features/hero-capabilities/mark-8-d-max-15-output-rate.webp', text: 'Up to 2,800 cigarettes per minute' },
    ],
    description:
      'The Mark 8-D with Max-15 is configured for cigarette making with a double-knife cut-off, vacuum kicker box, and integrated automatic gluing system.',
    overview:
      'Siemens Step7 PLC and HMI provide full sensor monitoring. High-precision, heat-treated components are designed to reduce wear and extend service life.',
    basicInfo: [
      { label: 'Configuration', value: 'Mark 8-D maker with Max-15' },
      { label: 'Format', value: 'King / Demi / Slims / Super Slims / Nano' },
      { label: 'In-feed', value: '1117Max multi-roll unit' },
    ],
    technicalData: [
      { label: 'Output', value: 'Up to 2,800 CPM' },
      { label: 'Power', value: '16 kW' },
      { label: 'Weight', value: '5,000 kg' },
    ],
    features: [
      'Double-knife cut-off with vacuum kicker box',
      'Siemens Step7 PLC and Siemens HMI with full sensor monitoring',
      'High-precision components with heat treatment to reduce wear and maintenance and extend service life',
      'Integrated automatic gluing system',
      'Linked with the 1117Max infeed unit, including multi-roll functionality',
    ],
    gallery: [
      {
        src: '/mk8d--png.webp',
        alt: 'Alternate view of the Mark 8-D maker with Max-15',
      },
    ],
    relatedMachines: relatedForMark8,
  },
  {
    slug: 'mark-9-5-max-s',
    title: 'Mark 9.5 with Max-S',
    metaDescription:
      'Mark 9.5 cigarette maker with Max-S filter assembler and automatic tray filler, Siemens controls, microwave weight scanning, and inspection.',
    heroImage: '/mk9.5a.webp',
    heroImageAlt: 'Mark 9.5 maker with Max-S filter assembler and automatic tray filler',
    capabilities: [
      { image: '/machines/product-features/hero-capabilities/mark-9-5-max-s-formats.webp', text: 'King to Nano formats' },
      { image: '/machines/product-features/hero-capabilities/mark-9-5-max-s-output-rate.webp', text: 'Up to 4,000 cigarettes per minute' },
      { image: '/machines/product-features/hero-capabilities/mark-9-5-max-s-siemens-controls.webp', text: 'Siemens Step7 PLC and HMI' },
      { image: '/machines/product-features/hero-capabilities/mark-9-5-max-s-microwave-scanning.webp', text: 'Microwave weight scanning' },
      { image: '/machines/product-features/hero-capabilities/mark-9-5-max-s-max-s-inspection.webp', text: 'Missing-filter and loose-end inspection' },
    ],
    description:
      'The Mark 9.5 maker is paired with a Max-S filter assembler and an automatic tray filler for an integrated cigarette-making line.',
    overview:
      'The line includes Siemens Step7 PLC and HMI controls with full sensor monitoring, a microwave weight-scanning system, and Max-S inspection for missing filters and loose ends.',
    basicInfo: [
      { label: 'Configuration', value: 'Mark 9.5 maker with Max-S filter assembler and automatic tray filler' },
      { label: 'Format', value: 'King / Demi / Slims / Super Slims / Nano' },
    ],
    technicalData: [
      { label: 'Output', value: 'Up to 4,000 CPM' },
      { label: 'Power', value: 'Mark 9.5: 35 kW · Max-S: 20 kW · HCF80: 15 kW' },
      { label: 'Weight', value: '8,500 kg' },
    ],
    features: [
      'Siemens Step7 PLC and Siemens HMI with full sensor monitoring',
      'Microwave weight-scanning system',
      'Max-S inspection system for missing filters and loose ends',
    ],
    gallery: [
      {
        src: '/mk9.5b.webp',
        alt: 'Alternate view of the Mark 9.5 maker with Max-S',
      },
    ],
    relatedMachines: relatedForMark95('mark-9-5-max-s'),
  },
  {
    slug: 'mark-9-5-max-70',
    title: 'Mark 9.5 with Max-70',
    metaDescription:
      'Mark 9.5 cigarette maker with Max-70 filter assembler and automatic tray filler, Siemens controls, microwave weight scanning, and inspection.',
    heroImage: '/9.5maxa.webp',
    heroImageAlt: 'Mark 9.5 maker with Max-70 filter assembler and automatic tray filler',
    capabilities: [
      { image: '/machines/product-features/hero-capabilities/mark-9-5-max-70-formats.webp', text: 'King to Nano formats' },
      { image: '/machines/product-features/hero-capabilities/mark-9-5-max-70-output-rate.webp', text: 'Up to 5,000 cigarettes per minute' },
      { image: '/machines/product-features/hero-capabilities/mark-9-5-max-70-siemens-controls.webp', text: 'Siemens Step7 PLC and HMI' },
      { image: '/machines/product-features/hero-capabilities/mark-9-5-max-70-microwave-scanning.webp', text: 'Microwave weight scanning' },
      { image: '/machines/product-features/hero-capabilities/mark-9-5-max-70-max-70-inspection.webp', text: 'Max-70 filter and loose-end inspection' },
    ],
    description:
      'The Mark 9.5 maker is paired with a Max-70 filter assembler and an automatic tray filler for an integrated cigarette-making line.',
    overview:
      'The line includes Siemens Step7 PLC and HMI controls with full sensor monitoring, a microwave weight-scanning system, and Max-70 inspection for missing filters and loose ends.',
    basicInfo: [
      { label: 'Configuration', value: 'Mark 9.5 maker with Max-70 filter assembler and automatic tray filler' },
      { label: 'Format', value: 'King / Demi / Slims / Super Slims / Nano' },
    ],
    technicalData: [
      { label: 'Output', value: 'Up to 5,000 CPM' },
      { label: 'Power', value: 'Mark 9.5: 35 kW · Max-70: 20 kW · HCF80: 15 kW' },
      { label: 'Weight', value: '9,000 kg' },
    ],
    features: [
      'Siemens Step7 PLC and Siemens HMI with full sensor monitoring',
      'Microwave weight-scanning system',
      'Max-70 inspection system for missing filters and loose ends',
    ],
    gallery: [
      {
        src: '/9.5maxb.webp',
        alt: 'Alternate view of the Mark 9.5 maker with Max-70',
      },
    ],
    relatedMachines: relatedForMark95('mark-9-5-max-70'),
  },
]

export function getMakingMachineProduct(slug: string) {
  return makingMachineProducts.find((product) => product.slug === slug)
}
