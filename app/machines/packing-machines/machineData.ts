import type { MachineProductTemplateProps, RelatedMachine } from '../components/MachineProductTemplate'

export type PackingMachineProduct = MachineProductTemplateProps & {
  slug: string
  metaDescription: string
}

const related = {
  hlp250: [
    { title: 'HINGE LID PACKER MTI-HLP2', image: '/hlp2a.webp', imageAlt: 'Microtex MTI-HLP2 hinge-lid packer', href: '/machines/packing-machines/hlp-2' },
    { title: 'PACKET WRAPPER', image: '/packeta.webp', imageAlt: 'Microtex packet wrapper', href: '/machines/packing-machines/packet-wrapper' },
    { title: 'OVERWRAPPER MACHINE', image: '/mti-ow25-1-over-wrapper-reflection.png', imageAlt: 'Microtex MTI-OW25-1 overwrapper', href: '/machines/packing-machines/over-wrapper-mti-ow25-1' },
  ],
  hlp2: [
    { title: 'HINGE LID PACKER MTI-HLP250', image: '/hlp250.webp', imageAlt: 'Microtex MTI-HLP250 hinge-lid packer', href: '/machines/packing-machines/hlp-250' },
    { title: 'PACKET WRAPPER', image: '/packeta.webp', imageAlt: 'Microtex packet wrapper', href: '/machines/packing-machines/packet-wrapper' },
    { title: 'OVERWRAPPER MACHINE', image: '/mti-ow25-1-over-wrapper-reflection.png', imageAlt: 'Microtex MTI-OW25-1 overwrapper', href: '/machines/packing-machines/over-wrapper-mti-ow25-1' },
  ],
  packetWrapper: [
    { title: 'HINGE LID PACKER MTI-HLP250', image: '/hlp250.webp', imageAlt: 'Microtex MTI-HLP250 hinge-lid packer', href: '/machines/packing-machines/hlp-250' },
    { title: 'OVERWRAPPER MACHINE', image: '/mti-ow25-1-over-wrapper-reflection.png', imageAlt: 'Microtex MTI-OW25-1 overwrapper', href: '/machines/packing-machines/over-wrapper-mti-ow25-1' },
    { title: 'HIGH-SPEED BOXER MACHINE', image: '/boxer machine.webp', imageAlt: 'Microtex high-speed boxer machine', href: '/machines/packing-machines/high-speed-boxer' },
  ],
  boxer: [
    { title: 'PACKET WRAPPER', image: '/packeta.webp', imageAlt: 'Microtex packet wrapper', href: '/machines/packing-machines/packet-wrapper' },
    { title: 'STAMPER MACHINE', image: '/stamper.webp', imageAlt: 'Cigarette packet stamping machine', href: '/machines/packing-machines/stamping-machine' },
    { title: 'CASE PACKER MACHINE', image: '/mti-cp06-1-case-packer-cutout.webp', imageAlt: 'Microtex case packer', href: '/machines/packing-machines/case-packer' },
  ],
  stamper: [
    { title: 'HINGE LID PACKER MTI-HLP250', image: '/hlp250.webp', imageAlt: 'Microtex MTI-HLP250 hinge-lid packer', href: '/machines/packing-machines/hlp-250' },
    { title: 'PACKET WRAPPER', image: '/packeta.webp', imageAlt: 'Microtex packet wrapper', href: '/machines/packing-machines/packet-wrapper' },
    { title: 'CASE PACKER MACHINE', image: '/mti-cp06-1-case-packer-cutout.webp', imageAlt: 'Microtex case packer', href: '/machines/packing-machines/case-packer' },
  ],
  casePacker: [
    { title: 'HIGH-SPEED BOXER MACHINE', image: '/boxer machine.webp', imageAlt: 'Microtex high-speed boxer machine', href: '/machines/packing-machines/high-speed-boxer' },
    { title: 'OVERWRAPPER MACHINE', image: '/mti-ow25-1-over-wrapper-reflection.png', imageAlt: 'Microtex MTI-OW25-1 overwrapper', href: '/machines/packing-machines/over-wrapper-mti-ow25-1' },
    { title: 'HINGE LID PACKER MTI-HLP250', image: '/hlp250.webp', imageAlt: 'Microtex MTI-HLP250 hinge-lid packer', href: '/machines/packing-machines/hlp-250' },
  ],
} satisfies Record<string, RelatedMachine[]>

export const packingMachineProducts: PackingMachineProduct[] = [
  {
    slug: 'hlp-250',
    title: 'Hinge Lid Packer MTI-HLP250',
    metaDescription: 'MTI-HLP250 hinge-lid cigarette packer with up to 220 packs per minute, Siemens controls, format flexibility, and online quality inspection.',
    heroImage: '/hlp250.webp',
    heroImageAlt: 'Microtex MTI-HLP250 hinge-lid cigarette packer',
    capabilities: [
      { image: '/machines/product-features/hero-capabilities/hlp-250-output-rate.webp', text: 'Up to 220 packs per minute' },
      { image: '/machines/product-features/hero-capabilities/hlp-250-blank-feeder.webp', text: 'Automatic blank feeding' },
      { image: '/machines/product-features/hero-capabilities/hlp-250-online-inspection.webp', text: 'Online inspection' },
      { image: '/machines/product-features/hero-capabilities/hlp-250-pack-formats.webp', text: 'Standard and specialty pack styles' },
      { image: '/machines/product-features/hero-capabilities/hlp-250-gravure-gumming.webp', text: 'Gravure gumming system' },
    ],
    description: 'A high-output hinge-lid packer for standard, square, octagonal, round-corner, and Nano pack formats.',
    overview: 'Siemens Simatic S7 PLC controls, inverter drives, Profibus, and a 12-inch HMI support fully sensorized operation.',
    basicInfo: [
      { label: 'Pack Styles', value: 'Standard / Square / Octagonal / Round Corner / Nano & more' },
      { label: 'Custom Collations', value: '1–3 rows' },
    ],
    technicalData: [
      { label: 'Output', value: 'Up to 220 packs per minute' },
      { label: 'Cigarette Diameter', value: '5.3–8.2 mm' },
      { label: 'Cigarette Length', value: 'Up to 130 mm' },
      { label: 'Cigarettes per Pack', value: '4–50' },
      { label: 'Custom Collations', value: '1–3 rows' },
    ],
    features: [
      'Siemens Simatic S7 PLC, inverter drives, Profibus, and a 12-inch HMI display',
      'Covered guards and protection designed to meet international standards',
      'Spray-nozzle and gravure gumming system reduces glue spills and contamination',
      'Automatic blank feeding station reduces manual labour and simplifies operation',
      'Online loose-end and filter inspection, including pack ejection',
    ],
    gallery: [{ src: '/hlp250a.webp', alt: 'Alternate view of the MTI-HLP250 hinge-lid packer' }],
    relatedMachines: related.hlp250,
  },
  {
    slug: 'hlp-2',
    title: 'Hinge Lid Packer MTI-HLP2',
    metaDescription: 'MTI-HLP2 cigarette packing line with output up to 180 packs per minute, a double-plunger mechanism, broad format support, and PLC control.',
    heroImage: '/hlp2a.webp',
    heroImageAlt: 'Microtex MTI-HLP2 hinge-lid cigarette packer',
    capabilities: [
      { image: '/machines/product-features/hero-capabilities/hlp-2-output-rate.webp', text: 'Up to 180 packs per minute' },
      { image: '/machines/product-features/hero-capabilities/hlp-2-pack-feeder.webp', text: 'Automatic pack feeding' },
      { image: '/machines/product-features/hero-capabilities/hlp-2-pack-formats.webp', text: 'Multiple pack styles' },
      { image: '/machines/product-features/hero-capabilities/hlp-2-plc-hmi.webp', text: 'PLC control with HMI' },
      { image: '/machines/product-features/hero-capabilities/hlp-2-pack-quality.webp', text: 'Consistent pack quality' },
    ],
    description: 'The HLP-2 packing line reaches up to 180 packs per minute using a double-plunger mechanism for high-throughput cigarette packing.',
    overview: 'Its format range includes King, Demi, Slims, Super Slims, and Nano sizes, with PLC-controlled automatic operation.',
    basicInfo: [
      { label: 'Pack Styles', value: 'Standard / Square / Octagonal / Round Corner / Nano & more' },
      { label: 'Custom Collations', value: '1–3 rows' },
    ],
    technicalData: [
      { label: 'Output', value: 'Up to 180 packs per minute' },
      { label: 'Cigarette Diameter', value: '5.3–8.2 mm' },
      { label: 'Cigarette Length', value: 'Up to 130 mm' },
      { label: 'Cigarettes per Pack', value: '4–50' },
      { label: 'Custom Collations', value: '1–3 rows' },
    ],
    features: [
      'Double-plunger mechanism for high throughput with precision and reliability',
      'Handles King, Demi, Slims, Super Slims, and Nano cigarette sizes',
      'PLC control system for fully automated packing operations',
      'Adaptable pack styles include round corner, bevel edge, D-type, and square packets',
    ],
    gallery: [{ src: '/hlp2b.webp', alt: 'Alternate view of the MTI-HLP2 hinge-lid packer' }],
    relatedMachines: related.hlp2,
  },
  {
    slug: 'packet-wrapper',
    title: 'Packet Wrapper',
    metaDescription: 'Packet wrapper with output up to 250 packs per minute, turret-style wrapping, automatic feed, adjustable handling, and pack rejection.',
    heroImage: '/packeta.webp',
    heroImageAlt: 'Microtex packet wrapper machine',
    capabilities: [
      { image: '/machines/product-features/hero-capabilities/packet-wrapper-output-rate.webp', text: 'Up to 250 packs per minute' },
      { image: '/machines/product-features/hero-capabilities/packet-wrapper-packet-feeder.webp', text: 'Packet auto-feed system' },
      { image: '/machines/product-features/hero-capabilities/packet-wrapper-turret-wrapping.webp', text: 'Turret-style wrapping' },
      { image: '/machines/product-features/hero-capabilities/packet-wrapper-plc-hmi.webp', text: 'PLC control with HMI' },
      { image: '/machines/product-features/hero-capabilities/packet-wrapper-reject-gate.webp', text: 'Faulty-pack rejection' },
    ],
    description: 'A simple-to-operate packet wrapper designed for consistent, high-quality wrapping across different product dimensions.',
    overview: 'Its turret-style system, adjustable handling, automatic feed, and pack detection support a stable production process across film types.',
    basicInfo: [
      { label: 'Wrapping System', value: 'Turret style' },
      { label: 'Control', value: 'PLC control built to the customer’s specification, with HMI' },
    ],
    technicalData: [
      { label: 'Output', value: 'Up to 250 packs per minute' },
      { label: 'Product Length', value: '70–100 mm' },
      { label: 'Product Width', value: '40–70 mm' },
      { label: 'Product Thickness', value: '8–30 mm' },
    ],
    features: [
      'Robust turret-style wrapper',
      'Reciprocating and retractable heaters',
      'Detector system with faulty-pack rejection',
      'Adjustable turret to support wrap quality',
      'Automatic packet feed system',
      'Stable production process for different film properties',
    ],
    gallery: [],
    relatedMachines: related.packetWrapper,
  },
  {
    slug: 'high-speed-boxer',
    title: 'High-Speed Boxer Machine',
    metaDescription: 'High-speed boxer with output up to 30 boxes per minute, cold-glue sealing, adjustable collation, and PLC control.',
    heroImage: '/boxer machine.webp',
    heroImageAlt: 'Microtex high-speed cigarette boxer machine',
    capabilities: [
      { image: '/machines/product-features/hero-capabilities/high-speed-boxer-output-rate.webp', text: 'Up to 30 boxes per minute' },
      { image: '/machines/product-features/hero-capabilities/high-speed-boxer-ten-pack-collation.webp', text: '10-pack standard collation' },
      { image: '/machines/product-features/hero-capabilities/high-speed-boxer-cold-glue.webp', text: 'Cold-glue sealing' },
      { image: '/machines/product-features/hero-capabilities/high-speed-boxer-plc-controls.webp', text: 'PLC control' },
      { image: '/machines/product-features/hero-capabilities/high-speed-boxer-format-adjustment.webp', text: 'Easy format adjustment' },
    ],
    description: 'A high-speed boxer machine for collating cigarette packs into boxes with a standard output of up to 30 boxes per minute.',
    overview: 'A sturdy, anti-vibration base, PLC control, and cold-glue side-flap gumming support dependable operation.',
    basicInfo: [
      { label: 'Standard Collation', value: '10 packs, 2 high × 5 wide' },
      { label: 'Other Configurations', value: 'Available' },
      { label: 'Gluing', value: 'Cold glue for long seam and side flaps' },
    ],
    technicalData: [
      { label: 'Output', value: 'Up to 30 boxes per minute' },
      { label: 'In-Feed Height', value: '72 cm' },
      { label: 'Out-Feed Height', value: '94 cm' },
      { label: 'Compressed Air', value: '5–6 bar' },
    ],
    features: [
      'Sturdy base with anti-vibration pads and PLC control',
      'Cold-glue side-flap gumming system',
      'Moving side heaters retract automatically during stops',
      'Easy-to-use hand wheel and safety clutch on the main drive',
    ],
    gallery: [{ src: '/boxerb.webp', alt: 'Alternate view of the high-speed boxer machine' }],
    relatedMachines: related.boxer,
  },
  {
    slug: 'stamping-machine',
    title: 'Stamper Machine',
    metaDescription: 'Cigarette packet stamper with output up to 220 packs per minute, automatic unstamped-pack detection, and ejection.',
    heroImage: '/stamper.webp',
    heroImageAlt: 'Cigarette packet stamping machine',
    capabilities: [
      { image: '/machines/product-features/hero-capabilities/stamping-machine-output-rate.webp', text: 'Up to 220 packs per minute' },
      { image: '/machines/product-features/hero-capabilities/stamping-machine-tax-stamp.webp', text: 'Tax-stamp application' },
      { image: '/machines/product-features/hero-capabilities/stamping-machine-stamp-detection.webp', text: 'Stamp detection' },
      { image: '/machines/product-features/hero-capabilities/stamping-machine-automatic-ejection.webp', text: 'Automatic pack ejection' },
      { image: '/machines/product-features/hero-capabilities/stamping-machine-low-waste.webp', text: 'Low-wastage operation' },
    ],
    description: 'A packet stamping machine with output up to 220 packs per minute for a wide range of packet dimensions.',
    overview: 'Automatic detection and ejection of packets without a stamp helps maintain reliable operation and reduce wastage.',
    basicInfo: [
      { label: 'Application', value: 'Tax stamp application to cigarette packets' },
      { label: 'Packet Range', value: 'Wide range of packet dimensions' },
    ],
    technicalData: [
      { label: 'Output', value: 'Up to 220 packs per minute' },
      { label: 'Quality Control', value: 'Automatic unstamped-pack detection and ejection' },
    ],
    features: [
      'Wide range of application for various packet dimensions',
      'Automatic detection and ejection of packets without a stamp',
      'High operational efficiency and low wastage',
      'Easy to operate and maintain',
    ],
    gallery: [],
    relatedMachines: related.stamper,
  },
  {
    slug: 'case-packer',
    title: 'Case Packer Machine',
    metaDescription: 'Horizontal case packer with output up to 50 cigarette outers per minute, automated product feeding, stacking, and case loading.',
    heroImage: '/mti-cp06-1-case-packer-cutout.webp',
    heroImageAlt: 'Microtex MTI-CP06-1 horizontal cigarette case packer',
    capabilities: [
      { image: '/machines/product-features/hero-capabilities/case-packer-output-rate.webp', text: 'Up to 50 cigarette outers per minute' },
      { image: '/machines/product-features/hero-capabilities/case-packer-feed-and-stacking.webp', text: 'Automated feeding and stacking' },
      { image: '/machines/product-features/hero-capabilities/case-packer-horizontal-case-packing.webp', text: 'Horizontal case packing' },
      { image: '/machines/product-features/hero-capabilities/case-packer-format-changes.webp', text: 'Quick format changes' },
      { image: '/machines/product-features/hero-capabilities/case-packer-tape-sealing.webp', text: 'Adhesive-tape sealing' },
    ],
    description: 'A horizontal case packer for conventional product packaging, including folding boxes, bundles, cans, and bags.',
    overview: 'Automated feeding, stacking, and case loading support efficient packing, with quick format changes for different requirements.',
    basicInfo: [
      { label: 'Type', value: 'Horizontal' },
      { label: 'Product Application', value: 'Box' },
      { label: 'Other Characteristics', value: 'Adhesive tape' },
    ],
    technicalData: [
      { label: 'Output', value: 'Up to 50 cigarette outers per minute' },
      { label: 'Operational Mode', value: '94 cm' },
      { label: 'Compressed Air', value: '6 bar' },
    ],
    features: [
      'Suitable for stackable product packaging including folding boxes, bundles, cans, and bags',
      'Automates feeding, stacking, and inserting packages into cases',
      'Quick and easy format changes for different packaging needs',
    ],
    gallery: [{ src: '/microtex-case-packer-mti-cp06-1-cutout-solid.webp', alt: 'Alternate view of the MTI-CP06-1 case packer' }],
    relatedMachines: related.casePacker,
  },
]

export function getPackingMachineProduct(slug: string) {
  return packingMachineProducts.find((product) => product.slug === slug)
}
