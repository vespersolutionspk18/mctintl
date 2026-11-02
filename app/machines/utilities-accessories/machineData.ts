import type { MachineProductTemplateProps } from '../components/MachineProductTemplate'
import type { MachineGroup } from '../MachineStack'

export type UtilityAccessoryProduct = MachineProductTemplateProps & {
  slug: string
  metaDescription: string
}

export const utilityAccessoryProducts: UtilityAccessoryProduct[] = [
  {
    slug: 'molins-tobacco-cutter-mrtc-mk1',
    title: 'Molins Tobacco Cutter MRTC Mk1',
    metaDescription:
      'Molins MRTC Mk1 industrial rotary tobacco cutter for lamina and expanded stem, with five- or eight-knife options and optional PLC upgrade.',
    heroImage: '/molinscutter-refurbished-reflection.webp',
    heroImageAlt: 'Molins MRTC Mk1 industrial rotary tobacco cutter',
    capabilities: [
      { image: '/icons/industry/cutter-blade.webp', text: 'Five- or eight-knife setup' },
      { image: '/icons/industry/output-speed.webp', text: 'Up to 1,500 kg/hour standard output' },
      { image: '/icons/industry/format-gauge.webp', text: '16-inch cutting width' },
      { image: '/icons/industry/gears.webp', text: 'Mechanical gearbox; PLC upgrade optional' },
      { image: '/icons/industry/service-tools.webp', text: 'Automatic knife sharpening' },
    ],
    description:
      'A heavy-duty rotary cutter for primary cigarette production, designed to cut tobacco lamina and expanded stems for downstream processing.',
    overview:
      'Pneumatic compression feeds tobacco evenly to the rotary knives. Automatic sharpening, quick cut-width changes and dust extraction support consistent operation across long production runs.',
    basicInfo: [
      { label: 'Machine', value: 'Molins MRTC Mk1 industrial tobacco rotary cutter' },
      { label: 'Application', value: 'Tobacco lamina and expanded stems' },
      { label: 'Knife options', value: 'Five or eight knives' },
      { label: 'Drive system', value: 'Mechanical gearbox; optional digital PLC upgrade' },
      { label: 'Construction', value: 'Heavy-duty industrial cast steel' },
    ],
    technicalData: [
      { label: 'Cutting width', value: '16 inches' },
      { label: 'Compression profile', value: 'Adjustable, up to 2.5 inches' },
      { label: 'Standard output', value: 'Up to 1,500 kg/hour' },
      { label: 'Maximum output', value: 'Up to 2,000 kg/hour, depending on material and operating conditions' },
      { label: 'Knife options', value: 'Five or eight knives' },
    ],
    features: [
      'Automatic knife sharpening helps maintain a consistent cutting edge.',
      'Pneumatic compression supports uniform tobacco feeding before the cut.',
      'Quick gear changes make cut-width adjustment straightforward and help limit changeover downtime.',
      'Dust extraction separates grinding dust from the product path.',
      'A cast-steel frame is built for continuous industrial service.',
    ],
    gallery: [],
    relatedMachines: [],
  },
  {
    slug: 'tobacco-reclaimer',
    title: 'Tobacco Reclaimer',
    metaDescription:
      'Recover reusable tobacco from rejected cigarettes with a compact reclaimer designed for continuous production-floor use.',
    heroImage: '/reclaimer2-floor-reflection.webp',
    heroImageAlt: 'Industrial tobacco reclaimer with an infeed hopper and takeaway conveyor',
    capabilities: [
      { image: '/icons/industry/output-speed.webp', text: '100 kg/hour processing capacity' },
      { image: '/icons/industry/inspection-check.webp', text: 'Up to 95%+ tobacco recovery' },
      { image: '/icons/industry/gears.webp', text: 'Vibratory or conveyor-based feed' },
      { image: '/icons/industry/service-tools.webp', text: 'Enclosed processing chamber' },
      { image: '/icons/industry/format-gauge.webp', text: 'Optional lockable casters' },
    ],
    description:
      'A high-efficiency system for recovering reusable tobacco from rejected, damaged and off-spec cigarettes, helping reduce avoidable material loss.',
    overview:
      'The machine separates tobacco from filters, tipping paper and cigarette wrappers. Its enclosed chamber and continuous feed are designed for steady operation alongside production and quality-control workflows.',
    basicInfo: [
      { label: 'Application', value: 'Recovery from rejected or off-spec cigarettes' },
      { label: 'Feeding system', value: 'Vibratory or conveyor-based' },
      { label: 'Contact parts', value: 'Food-grade stainless steel' },
      { label: 'Mobility', value: 'Optional heavy-duty lockable casters' },
      { label: 'Safety', value: 'Enclosed chamber with interlocks and emergency stops' },
    ],
    technicalData: [
      { label: 'Processing capacity', value: '100 kg/hour' },
      { label: 'Tobacco recovery rate', value: 'Up to 95%+, depending on input material' },
      { label: 'Separation', value: 'Tobacco separated from filters and paper' },
      { label: 'Feed arrangement', value: 'Vibratory or conveyor-based' },
    ],
    features: [
      'Separates tobacco while helping limit fibre damage and dust generation.',
      'Removes filters, tipping paper and cigarette wrappers from the recovered material.',
      'Continuous feeding supports a steady reclaiming process.',
      'An enclosed, low-vibration footprint is suited to production-floor installation.',
      'Safety interlocks and emergency stops support controlled operation.',
    ],
    gallery: [{ src: '/reclaimer1-floor-reflection.webp', alt: 'Front view of the tobacco reclaimer and feed conveyor' }],
    relatedMachines: [],
  },
  {
    slug: 'automatic-tobacco-feeder',
    title: 'Automatic Tobacco Feeder',
    metaDescription:
      'Pneumatic tobacco transfer and adjustable feeding for Molins Mark 8 and Mark 9 cigarette-making lines.',
    heroImage: '/autotobaccofeeder-floor-reflection.webp',
    heroImageAlt: 'Automatic tobacco feeder with an enclosed hopper and feed section',
    capabilities: [
      { image: '/icons/industry/gears.webp', text: 'Pneumatic suction transfer' },
      { image: '/icons/industry/output-speed.webp', text: 'Continuous tobacco feed' },
      { image: '/icons/industry/format-gauge.webp', text: 'Adjustable volumetric flow' },
      { image: '/icons/industry/service-tools.webp', text: 'Enclosed, low-maintenance design' },
      { image: '/icons/industry/inspection-check.webp', text: 'For Molins Mark 8 and Mark 9' },
    ],
    description:
      'Automates tobacco transfer to cigarette-making equipment with a pneumatic suction system that delivers a steady supply to the maker.',
    overview:
      'Operators can adjust feed volume to suit production speed. The enclosed transfer path helps reduce manual handling and can be integrated with existing Molins Mark 8 and Mark 9 lines.',
    basicInfo: [
      { label: 'Feeding system', value: 'Pneumatic suction transport' },
      { label: 'Operation', value: 'Fully automatic' },
      { label: 'Feed control', value: 'Adjustable volumetric flow' },
      { label: 'Compatibility', value: 'Molins Mark 8 (Mk8) and Mark 9 (Mk9)' },
      { label: 'Installation', value: 'Integration with existing maker lines' },
    ],
    technicalData: [
      { label: 'Transfer method', value: 'Enclosed pneumatic suction' },
      { label: 'Flow adjustment', value: 'Volumetric feed control' },
      { label: 'Compatible makers', value: 'Molins Mark 8 and Mark 9' },
      { label: 'Design', value: 'Enclosed, low-maintenance construction' },
    ],
    features: [
      'Pneumatic suction moves tobacco through an enclosed feed path.',
      'Continuous feeding helps maintain a uniform supply to the production line.',
      'Adjustable feed control lets operators tune tobacco flow to line speed.',
      'Automatic operation reduces manual transfer and handling.',
      'A compact layout can be integrated with compatible existing maker lines.',
    ],
    gallery: [],
    relatedMachines: [],
  },
  {
    slug: 'tobacco-dust-collector',
    title: 'Tobacco Dust Collector',
    metaDescription:
      'Standalone extraction and filtration for airborne tobacco dust and fibres around cigarette production equipment.',
    heroImage: '/dustcollector1-floor-reflection.webp',
    heroImageAlt: 'Enclosed industrial tobacco dust collector with a side control panel',
    capabilities: [
      { image: '/icons/industry/service-tools.webp', text: 'Standalone extraction and filtration' },
      { image: '/icons/industry/inspection-check.webp', text: 'Industrial filter system' },
      { image: '/icons/industry/gears.webp', text: 'High-airflow blower' },
      { image: '/icons/industry/format-gauge.webp', text: 'Removable collection bins or trays' },
      { image: '/icons/industry/power-gauge.webp', text: 'Enclosed, low-noise fan chamber' },
    ],
    description:
      'A standalone extraction unit for airborne tobacco dust and fibres around production lines, helping protect equipment and keep work areas cleaner.',
    overview:
      'The enclosed cabinet combines a blower, filtration and a collection point for captured dust. It can be arranged to suit cutters, feeders and compatible cigarette-making lines.',
    basicInfo: [
      { label: 'System type', value: 'Standalone industrial dust collector' },
      { label: 'Filtration', value: 'High-efficiency industrial filters' },
      { label: 'Extraction', value: 'High-airflow blower system' },
      { label: 'Dust collection', value: 'Removable bins or collection trays' },
      { label: 'Installation', value: 'Integration with existing machinery' },
    ],
    technicalData: [
      { label: 'Application', value: 'Airborne tobacco dust and fibres' },
      { label: 'Cabinet', value: 'Heavy-duty enclosed industrial cabinet' },
      { label: 'Fan enclosure', value: 'Enclosed chamber for reduced operating noise' },
      { label: 'Collection', value: 'Removable bins or trays' },
      { label: 'Compatibility', value: 'Confirm extraction points and airflow for the selected line' },
    ],
    features: [
      'Independent extraction and filtration for production areas.',
      'Captures fine tobacco dust and airborne particles.',
      'Can be configured around cutters, feeders and compatible maker lines.',
      'A heavy-duty blower is intended for extended operating shifts.',
      'Quick-access collection bins simplify routine emptying and cleaning.',
    ],
    gallery: [{ src: '/dustcollector2-upscaled.webp', alt: 'Alternate view of the industrial tobacco dust collector' }],
    relatedMachines: [],
  },
  {
    slug: 'vacuum-pumps',
    title: 'Vacuum Pumps',
    metaDescription:
      'Dry contactless claw vacuum pumps for cigarette-making and packing equipment, with integrated controls and air cooling.',
    heroImage: '/vacuumpump2-floor-reflection.webp',
    heroImageAlt: 'Industrial dry claw vacuum pump in an acoustic enclosure',
    capabilities: [
      { image: '/icons/industry/gears.webp', text: 'Dry contactless claw technology' },
      { image: '/icons/industry/service-tools.webp', text: 'Oil-free compression chamber' },
      { image: '/icons/industry/power-gauge.webp', text: 'Integrated air cooling' },
      { image: '/icons/industry/inspection-check.webp', text: 'Built-in electronic controls' },
      { image: '/icons/industry/format-gauge.webp', text: 'Standalone acoustic enclosure' },
    ],
    description:
      'A range of industrial vacuum pumps for cigarette-making and packing lines, using dry claw technology for consistent vacuum without oil in the compression chamber.',
    overview:
      'The contactless claw arrangement is designed to reduce internal wear. Integrated air cooling and electronic controls support standalone installation without external water cooling.',
    basicInfo: [
      { label: 'Technology', value: 'Dry contactless claw (CAW)' },
      { label: 'Lubrication', value: 'Oil-free compression chamber' },
      { label: 'Cooling', value: 'Integrated air cooling' },
      { label: 'Installation', value: 'Standalone configuration' },
      { label: 'Controls', value: 'Integrated electronic controls' },
    ],
    technicalData: [
      { label: 'Pump type', value: 'Dry contactless claw' },
      { label: 'Cooling method', value: 'Integrated air cooling; external water cooling not required' },
      { label: 'Enclosure', value: 'Acoustic, vibration-dampened cabinet' },
      { label: 'Suitable equipment', value: 'Cigarette makers and packing machines' },
    ],
    features: [
      'Oil-free compression avoids oil lubrication inside the chamber.',
      'Contactless claw operation reduces internal friction and mechanical wear.',
      'A dry-running design helps reduce routine service requirements.',
      'Integrated air cooling avoids a separate water-cooling circuit.',
      'The enclosed cabinet helps damp operating noise and vibration.',
    ],
    gallery: [{ src: '/vacuumpump1-floor-reflection.webp', alt: 'Alternate industrial vacuum pump configuration' }],
    relatedMachines: [],
  },
  {
    slug: 'air-compressors-with-dryer-package',
    title: 'Air Compressors with Dryer Package',
    metaDescription:
      'Integrated industrial air compressor, dryer and three-stage filtration packages for cigarette manufacturing and packing lines.',
    heroImage: '/aircompressor-floor-reflection.webp',
    heroImageAlt: 'Industrial air compressor package with a refrigerated dryer and storage tank',
    capabilities: [
      { image: '/icons/industry/power-gauge.webp', text: 'Compressor, dryer and filters in one package' },
      { image: '/icons/industry/service-tools.webp', text: 'Refrigerated or desiccant dryer' },
      { image: '/icons/industry/inspection-check.webp', text: 'Three-stage inline filtration' },
      { image: '/icons/industry/gears.webp', text: 'For continuous industrial use' },
      { image: '/icons/industry/format-gauge.webp', text: 'Standalone factory installation' },
    ],
    description:
      'Integrated compressed-air packages combine an industrial compressor, air dryer and filtration to supply clean, dry air to production machinery.',
    overview:
      'The package is arranged to remove moisture and help reduce oil aerosol, liquid and particle carryover before air reaches pneumatic components. Dryer type and filtration are selected for the site and equipment requirements.',
    basicInfo: [
      { label: 'System', value: 'Industrial air compressor package' },
      { label: 'Dryer', value: 'Refrigerated or desiccant type' },
      { label: 'Filtration', value: 'Three-stage inline filter system' },
      { label: 'Installation', value: 'Standalone configuration' },
      { label: 'Application', value: 'Cigarette manufacturing and packaging operations' },
    ],
    technicalData: [
      { label: 'Stage 1', value: 'Particulate and liquid separator' },
      { label: 'Stage 2', value: 'Coalescing oil-aerosol filter' },
      { label: 'Stage 3', value: 'Fine-particle and activated-carbon filter' },
      { label: 'Air capacity and pressure', value: 'Selected to match the connected machinery and site requirements' },
      { label: 'Dryer type', value: 'Refrigerated or desiccant, subject to specification' },
    ],
    features: [
      'An integrated dryer removes moisture from compressed air.',
      'Three filtration stages help separate particles, liquid contaminants and oil aerosols.',
      'A single package brings the compressor, dryer and filtration together.',
      'The system is designed for demanding factory operating conditions.',
      'Correct sizing helps protect pneumatic components and support reliable machine operation.',
    ],
    gallery: [],
    relatedMachines: [],
  },
  {
    slug: 'cigarette-filter-trays-and-trolleys',
    title: 'Cigarette & Filter Trays and Trolleys',
    metaDescription:
      'Tray and wheeled-rack options for staging and moving cigarettes or filter rods between production operations.',
    heroImage: '/trolley1-floor-reflection.webp',
    heroImageAlt: 'Mobile multi-level trolley holding cigarette or filter trays',
    capabilities: [
      { image: '/icons/industry/format-gauge.webp', text: 'For cigarettes or filter rods' },
      { image: '/icons/industry/gears.webp', text: 'Multi-level tray storage' },
      { image: '/icons/industry/service-tools.webp', text: 'Mobile trolley configuration' },
      { image: '/icons/industry/inspection-check.webp', text: 'Tray layout matched to product format' },
      { image: '/icons/industry/output-speed.webp', text: 'Supports line staging and transfer' },
    ],
    description:
      'Trays and mobile trolleys provide a practical way to stage cigarettes or filter rods between production steps and keep product close to the next operation.',
    overview:
      'Tray-based production systems can buffer the flow between makers and downstream machines. The right tray size, rack layout and trolley capacity depend on the product format and the existing line, so confirm dimensions before ordering.',
    basicInfo: [
      { label: 'Application', value: 'Staging cigarettes or filter rods between production operations' },
      { label: 'Products', value: 'Cigarettes and filter rods' },
      { label: 'Configuration', value: 'Trays with mobile multi-level trolley racks' },
      { label: 'Tray compatibility', value: 'Confirm against existing tray standards and product format' },
      { label: 'Rack capacity', value: 'Confirm for the selected trolley layout' },
    ],
    technicalData: [
      { label: 'Tray dimensions', value: 'Confirm against the customer’s current trays' },
      { label: 'Product format', value: 'Cigarette or filter-rod length and diameter to be confirmed' },
      { label: 'Trolley layout', value: 'Multi-level rack configuration' },
      { label: 'Load capacity', value: 'Confirm for the selected rack and tray arrangement' },
      { label: 'Mobility', value: 'Wheeled trolley options' },
    ],
    features: [
      'Tray storage can help buffer production when upstream and downstream machine speeds differ.',
      'Wheeled racks make loaded trays easier to stage and move within the production area.',
      'Tray and rack arrangements should suit the product and the machines they serve.',
      'Confirm the tray standard, dimensions and required load before selecting a trolley.',
    ],
    gallery: [{ src: '/trolley2-floor-reflection.webp', alt: 'Alternate multi-level trolley rack for cigarette or filter trays' }],
    relatedMachines: [],
  },
  {
    slug: 'shrink-heat-tunnel',
    title: 'Shrink Heat Tunnel',
    metaDescription:
      'Conveyor-fed heat tunnel for applying a close shrink-film wrap to cigarette packs and grouped products.',
    heroImage: '/shrinkheattunnel-floor-reflection.webp',
    heroImageAlt: 'Conveyor-fed industrial shrink heat tunnel',
    capabilities: [
      { image: '/icons/industry/film-roll.webp', text: 'Secondary shrink-film wrapping' },
      { image: '/icons/industry/output-speed.webp', text: 'Conveyor-fed product flow' },
      { image: '/icons/industry/format-gauge.webp', text: 'For individual packs or grouped units' },
      { image: '/icons/industry/power-gauge.webp', text: 'Controlled heating chamber' },
      { image: '/icons/industry/gears.webp', text: 'Can be placed after packing equipment' },
    ],
    description:
      'A conveyor-fed heat tunnel applies controlled heat to shrink film around cigarette packs or grouped products for a close secondary wrap.',
    overview:
      'Products pass through the heated chamber after film is applied. Tunnel opening, heating settings, conveyor speed and film compatibility should be matched to the package and confirmed for the selected machine configuration.',
    basicInfo: [
      { label: 'Application', value: 'Shrink-film wrapping of packs and grouped products' },
      { label: 'Product flow', value: 'Conveyor-fed through a heated tunnel' },
      { label: 'Installation', value: 'Standalone or integrated after packing equipment' },
      { label: 'Film selection', value: 'Confirm film compatibility for the package and machine setup' },
    ],
    technicalData: [
      { label: 'Tunnel opening', value: 'Confirm to suit the product and film bundle' },
      { label: 'Conveyor speed', value: 'Confirm for the required product flow' },
      { label: 'Temperature and power', value: 'Specify for the selected machine and shrink film' },
      { label: 'Film compatibility', value: 'Confirm with the selected film and package dimensions' },
    ],
    features: [
      'Conveyor movement carries products through the heated chamber.',
      'Controlled heat causes compatible shrink film to tighten around the pack.',
      'The tunnel can be used for individual packs or grouped product, subject to setup.',
      'Confirm tunnel size, temperature, belt speed and film before line integration.',
    ],
    gallery: [],
    relatedMachines: [],
  },
]

export const utilityAccessoryGroups: MachineGroup[] = utilityAccessoryProducts.map((product) => ({
  id: product.slug,
  title: product.title.toUpperCase(),
  image: product.heroImage,
  imageAlt: product.heroImageAlt,
  description: product.description,
  details: product.features.slice(0, 3),
  cta: {
    href: `/machines/utilities-accessories/${product.slug}`,
    text: 'View Utility/Accessory Details',
  },
  compactFeatures: true,
  features: product.capabilities.slice(0, 3).map((capability) => ({
    text: capability.text,
    icons: [capability.image],
  })),
}))

export function getUtilityAccessoryProduct(slug: string) {
  return utilityAccessoryProducts.find((product) => product.slug === slug)
}
