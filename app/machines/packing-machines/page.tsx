import type { Metadata } from 'next'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Hero from '../../homecomponents/Hero'
import CTA from '../../homecomponents/CTA'
import MachineStack, { type MachineGroup } from '../MachineStack'

export const metadata: Metadata = {
  title: 'Cigarette Packing Machines | Microtex International',
  description:
    'Explore Microtex cigarette packing equipment, from hinge-lid packers and soft packers to packet wrappers, overwrappers, stampers, boxers, and case packers.',
}

const packingMachines: MachineGroup[] = [
  {
    id: 'hlp-250',
    title: 'HINGE LID PACKER MTI-HLP250',
    image: '/nhlp3-floor-reflection.webp',
    imageAlt: 'Microtex MTI-HLP250 hinge-lid cigarette packer',
    cta: { href: '/machines/packing-machines/hlp-250', text: 'View Machine Details' },
    description:
      'A high-output hinge-lid packer for standard, square, octagonal, round-corner, and Nano pack formats.',
    details: [
      'Siemens Simatic S7 PLC, inverter drives, Profibus, and a 12-inch HMI display.',
      'Covered guards and protection designed to meet international standards.',
      'Spray-nozzle and gravure gumming system reduces glue spills and contamination.',
      'Automatic blank feeding reduces manual handling and simplifies operation.',
      'Online loose-end and filter inspection, with pack ejection.',
    ],
    compactFeatures: true,
    features: [
      { title: 'OUTPUT', text: 'Up to 220 packs per minute', icons: ['/icons/industry/output-speed.webp'] },
      { title: 'PACK STYLES', text: 'Standard / Square / Octagonal / Round Corner / Nano & more', icons: ['/icons/industry/format-gauge.webp'] },
      { title: 'PACK FORMAT', text: '5.3–8.2 mm diameter · up to 130 mm length · 4–50 cigarettes · 1–3 rows', icons: ['/icons/industry/format-gauge.webp'] },
    ],
  },
  {
    id: 'hlp-2',
    title: 'HINGE LID PACKER MTI-HLP2',
    image: '/hlp250.webp',
    imageAlt: 'Microtex MTI-HLP2 hinge-lid cigarette packer',
    cta: { href: '/machines/packing-machines/hlp-2', text: 'View Machine Details' },
    description:
      'A flexible 180-pack-per-minute line built around a double-plunger mechanism for consistent, high-volume packing.',
    details: [
      'Supports round-corner, bevel-edge, D-type, and square packets.',
      'Handles King, Demi, Slims, Super Slims, and Nano cigarette sizes.',
      'PLC-controlled automated operation combines high throughput with reliable pack quality.',
    ],
    compactFeatures: true,
    features: [
      { title: 'OUTPUT', text: 'Up to 180 packs per minute', icons: ['/icons/industry/output-speed.webp'] },
      { title: 'CIGARETTE SIZE', text: '5.3–8.2 mm diameter · up to 130 mm length', icons: ['/icons/industry/format-gauge.webp'] },
      { title: 'PACK CONFIGURATION', text: '4–50 cigarettes per pack · 1–3 rows', icons: ['/icons/industry/format-gauge.webp'] },
    ],
  },
  {
    id: 'sasib-3000-soft-packer',
    title: 'SASIB 3000 SOFT PACKER',
    image: '/sasib3000-floor-reflection.webp',
    imageAlt: 'Sasib S-3000 soft cigarette packing machine',
    cta: { href: '/machines/packing-machines/sasib-3000-soft-packer', text: 'View Machine Details' },
    description:
      'A fully automatic soft packer for 84 mm and 100 mm cigarette packs, with roller-fed wrapping and sealing.',
    details: [
      'Handles Alufoil and label wrapping at 150 packets per minute.',
      'Control system supports quick adjustments and straightforward maintenance.',
    ],
    compactFeatures: true,
    features: [
      { title: 'PRODUCTIVITY', text: '150 packets per minute', icons: ['/icons/industry/output-speed.webp'] },
      { title: 'PACK SIZES', text: '84 mm and 100 mm', icons: ['/icons/industry/format-gauge.webp'] },
      { title: 'POWER', text: '6 kW', icons: ['/icons/industry/power-gauge.webp'] },
    ],
  },
  {
    id: 'packet-wrapper',
    title: 'PACKET WRAPPER',
    image: '/packeta.webp',
    imageAlt: 'Microtex packet wrapping machine',
    cta: { href: '/machines/packing-machines/packet-wrapper', text: 'View Machine Details' },
    description:
      'A turret-style wrapper for finished cigarette packs, with adjustable handling for different product and film formats.',
    details: [
      'Robust turret-style wrapping with reciprocating, retractable heaters.',
      'Detector system identifies faulty packs for automatic rejection.',
      'PLC control built to the customer’s specification, with HMI.',
      'Adjustable turret and automatic packet feed help maintain wrap quality.',
      'Designed for stable production across different film properties.',
    ],
    compactFeatures: true,
    features: [
      { title: 'OUTPUT', text: 'Up to 250 packs per minute', icons: ['/icons/industry/output-speed.webp'] },
      { title: 'PRODUCT LENGTH / WIDTH', text: '70–100 mm length · 40–70 mm width', icons: ['/icons/industry/format-gauge.webp'] },
      { title: 'PRODUCT THICKNESS', text: '8–30 mm', icons: ['/icons/industry/format-gauge.webp'] },
    ],
  },
  {
    id: 'overwrapper',
    title: 'OVERWRAPPER MACHINE',
    image: '/mti-ow25-1-over-wrapper-reflection.webp',
    imageAlt: 'Microtex MTI-OW25-1 cigarette overwrapper',
    imageZoom: 1.24,
    cta: { href: '/machines/packing-machines/over-wrapper-mti-ow25-1', text: 'View Machine Details' },
    description:
      'An easy-to-operate outer wrapper with consistent film handling, straightforward maintenance, and quick size changeover.',
    details: [
      'Mechanical gripper film pull, PLC control, and an external side-loading film reel.',
      'Quick-release size changeover supports a wide range of large pack sizes.',
      'Optional naked-wrapping kit, tear-tape unit, and front- or side-feed conveyor.',
    ],
    compactFeatures: true,
    showCta: true,
    features: [
      { title: 'OUTPUT', text: 'Up to 25 outer packs per minute', icons: ['/icons/industry/output-speed.webp'] },
      { title: 'PRODUCT DIMENSIONS', text: 'Length 50–300 mm · width 55–150 mm · height 10–110 mm', icons: ['/icons/industry/format-gauge.webp'] },
      { title: 'INSTALLATION', text: '100 × 150 cm floor space · 160 cm machine height · 5–6 bar air · 3-phase 50 Hz', icons: ['/icons/industry/power-gauge.webp'] },
    ],
  },
  {
    id: 'high-speed-boxer',
    title: 'HIGH-SPEED BOXER MACHINE',
    image: '/nboxer-floor-reflection.webp',
    imageAlt: 'Microtex high-speed cigarette boxer machine',
    cta: { href: '/machines/packing-machines/high-speed-boxer', text: 'View Machine Details' },
    description:
      'An end-of-line boxer that groups cigarette packs into cartons with cold-glue sealing and controlled pack handling.',
    details: [
      'Sturdy base with anti-vibration pads, PLC control, and cold-glue side-flap gumming.',
      'Moving side heaters retract automatically during stops.',
      'Hand-wheel adjustment and a safety clutch on the main drive.',
    ],
    compactFeatures: true,
    features: [
      { title: 'OUTPUT', text: 'Up to 30 boxes per minute', icons: ['/icons/industry/output-speed.webp'] },
      { title: 'STANDARD COLLATION', text: '10 packs · 2 high × 5 wide; other configurations available', icons: ['/icons/industry/format-gauge.webp'] },
      { title: 'LINE HEIGHTS / AIR', text: 'In-feed 72 cm · out-feed 94 cm · 5–6 bar compressed air', icons: ['/icons/industry/power-gauge.webp'] },
    ],
  },
  {
    id: 'stamping-machine',
    title: 'STAMPER MACHINE',
    image: '/stamper.webp',
    imageAlt: 'Cigarette packet tax-stamping machine',
    cta: { href: '/machines/packing-machines/stamping-machine', text: 'View Machine Details' },
    description:
      'Applies tax stamps to finished packets and automatically rejects packs that pass through without a stamp.',
    details: [
      'Wide application range for different packet dimensions.',
      'Automatic detection and ejection of packets without a stamp.',
      'Designed for high operating efficiency and low wastage.',
      'Straightforward to operate and maintain.',
    ],
    compactFeatures: true,
    features: [
      { title: 'OUTPUT', text: 'Up to 220 packs per minute', icons: ['/icons/industry/output-speed.webp'] },
      { title: 'APPLICATION', text: 'Tax-stamp placement across varied packet dimensions', icons: ['/icons/industry/label-stamp.webp'] },
      { title: 'QUALITY CONTROL', text: 'Automatic detection and ejection of unstamped packets', icons: ['/icons/industry/inspection-check.webp'] },
    ],
  },
  {
    id: 'case-packer',
    title: 'CASE PACKER MACHINE',
    image: '/mti-cp06-1-case-packer-cutout.webp',
    imageAlt: 'Microtex MTI-CP06-1 cigarette case packer',
    cta: { href: '/machines/packing-machines/case-packer', text: 'View Machine Details' },
    description:
      'A horizontal case packer that automates feeding, stacking, and loading products into cases for end-of-line packing.',
    details: [
      'Handles stackable product packaging including folding boxes, bundles, cans, and bags.',
      'Automates feeding, stacking, and inserting packages into cases.',
      'Quick format changes support different packaging requirements.',
    ],
    compactFeatures: true,
    features: [
      { title: 'OUTPUT', text: 'Up to 50 cigarette outers per minute', icons: ['/icons/industry/output-speed.webp'] },
      { title: 'TYPE / APPLICATION', text: 'Horizontal · boxes and other stackable packages', icons: ['/icons/industry/format-gauge.webp'] },
      { title: 'SEALING / AIR', text: 'Adhesive tape · 6 bar compressed air', icons: ['/icons/industry/power-gauge.webp'] },
    ],
  },
]

export default function PackingMachinesPage() {
  return (
    <>
      <Header />
      <main>
        <Hero title="PACKING MACHINES" imageSrc="/packingmachinesherofinal.webp" imageAlt="Cigarette packing machinery" subtitle="" />
        <MachineStack groups={packingMachines} />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
