export type SparePart = {
  title: string
  image: string
  imageAlt: string
}

export type SparePartsTable = {
  title: string
  headers: string[]
  rows: string[][]
}

export type SparePartFeature = {
  title: string
  text: string
  icon: string
}

export type SparePartCategory = {
  slug: string
  title: string
  overviewTitle: string
  metaDescription: string
  image: string
  imageAlt: string
  description: string
  detailIntro: string
  features: SparePartFeature[]
  parts: SparePart[]
  highlights?: string[]
  tables?: SparePartsTable[]
}

const part = (folder: string, filename: string, title: string): SparePart => ({
  title,
  image: `/spare-parts/${folder}/${filename}`,
  imageAlt: `${title} spare part`,
})

const mk8Parts = [
  ['01-garniture-tape--png.webp', 'Garniture Tape'],
  ['02-circular-blade.webp', 'Circular Blade'],
  ['03-tobacco-cutting-knives.webp', 'Tobacco Cutting Knives'],
  ['04-tongue-piece--png.webp', 'Tongue Piece'],
  ['05-nylon-suction-tape.webp', 'Nylon Suction Tape'],
  ['06-steel-suction-tape.webp', 'Steel Suction Tape'],
  ['07-tipping-paper-knife.webp', 'Tipping Paper Knife'],
  ['08-sharpening-disc--png.webp', 'Sharpening Disc'],
  ['09-cigarette-tray.webp', 'Cigarette Tray'],
  ['10-garniture-assembly.webp', 'Garniture Assembly'],
  ['11-tipping-drum--png.webp', 'Tipping Drum'],
  ['12-steel-bounce-band.webp', 'Steel Bounce Band'],
  ['13-tipping-porosity-roller.webp', 'Tipping Porosity Roller'],
  ['14-rolling-block.webp', 'Rolling Block'],
  ['15-tipping-cutter-set.webp', 'Tipping Cutter Set'],
  ['16-carding-set.webp', 'Carding Set'],
  ['17-glue-nozzle-assembly--png.webp', 'Glue Nozzle Assembly'],
  ['18-tipping-paper-drum-set--png.webp', 'Tipping Paper Drum Set'],
  ['19-blade-grinder-disc--png.webp', 'Blade Grinder Disc'],
  ['20-sharpening-disc--png.webp', 'Sharpening Disc'],
  ['21-ecreteur-gearbox-asseembly--png.webp', 'Ecreteur Gearbox Assembly'],
  ['22-tobacco-shoe.webp', 'Tobacco Shoe'],
  ['23-ecreteur-disc.webp', 'Ecreteur Disc'],
  ['24-drum-suction-piece.webp', 'Drum Suction Piece'],
  ['25-long-knife.webp', 'Long Knife'],
  ['26-alloy-guide-inserts--png.webp', 'Alloy Guide Inserts'],
  ['27-garniture-wheel--png.webp', 'Garniture Wheel'],
  ['28-big-fan-belts--png.webp', 'Big Fan Belts'],
  ['29-plastic-brushes--png.webp', 'Plastic Brushes'],
  ['30-suction-mouth-pieces--png.webp', 'Suction Mouth Pieces'],
] as const

const protosParts = [
  ['01-tongue-piece--png.webp', 'Tongue Piece'],
  ['02-nylon-suction-tape.webp', 'Nylon Suction Tape'],
  ['03-gum-roller.webp', 'Gum Roller'],
  ['04-slitting-roller.webp', 'Slitting Roller'],
  ['05-tobacco-carding-set.webp', 'Tobacco Carding Set'],
  ['06-eccrature-disc.webp', 'Eccrature Disc'],
  ['07-cutting-knife-set.webp', 'Cutting Knife Set'],
  ['08-transition-gear--png.webp', 'Transition Gear'],
  ['09-protos-parts-em45051800.webp', 'Protos Part EM45051800'],
  ['10-protos-parts-4em6021900.webp', 'Protos Part 4EM6021900'],
  ['11-tongue-piece--png.webp', 'Tongue Piece'],
  ['12-shaft.webp', 'Shaft'],
  ['13-transport-channel-piece.webp', 'Transport Channel Piece'],
  ['14-rolling-block.webp', 'Rolling Block'],
  ['15-heater-plate.webp', 'Heater Plate'],
  ['16-protos-parts-4dm5100100.webp', 'Protos Part 4DM5100100'],
  ['17-protos-parts-4dm4420200.webp', 'Protos Part 4DM4420200'],
  ['18-protos-parts-4em1310201.webp', 'Protos Part 4EM1310201'],
  ['19-protos-parts-4dm2100100.webp', 'Protos Part 4DM2100100'],
  ['20-protos-parts-2ace661a0500.webp', 'Protos Part 2ACE661A0500'],
  ['21-protos-parts-4dn3120100.webp', 'Protos Part 4DN3120100'],
  ['22-protos-parts-4dn480aq00.webp', 'Protos Part 4DN480AQ00'],
  ['23-protos-parts-4dn390ar62.webp', 'Protos Part 4DN390AR62'],
  ['24-protos-parts-4dm5200210.webp', 'Protos Part 4DM5200210'],
  ['25-protos-parts-4dm4410101.webp', 'Protos Part 4DM4410101'],
  ['26-rolling-drum.webp', 'Rolling Drum'],
  ['27-cutting-drum.webp', 'Cutting Drum'],
  ['28-tipping-drum--png.webp', 'Tipping Drum'],
  ['29-filter-drum.webp', 'Filter Drum'],
  ['30-paper-transport-block.webp', 'Paper Transport Block'],
] as const

const hlpParts = [
  ['01-inner-frame-cutter.webp', 'Inner Frame Cutter'],
  ['02-embossing-roller.webp', 'Embossing Roller'],
  ['03-glue-nozzle.webp', 'Glue Nozzle'],
  ['04-web-rotating-knife.webp', 'Web Rotating Knife'],
  ['05-tear-tape-knife.webp', 'Tear Tape Knife'],
  ['06-embossing-roller-male-set.webp', 'Embossing Roller (Male Set)'],
  ['07-cigarette-pusher.webp', 'Cigarette Pusher'],
  ['08-rotor.webp', 'Rotor'],
  ['09-detecting-touch-panel.webp', 'Detecting Touch Panel'],
  ['10-body-armer.webp', 'Body Armer'],
  ['11-transition-gear--png.webp', 'Transition Gear'],
  ['12-punch-die-cutting-set.webp', 'Punch Die Cutting Set'],
  ['13-packet-tray.webp', 'Packet Tray'],
  ['14-suction-bowl--png.webp', 'Suction Bowl'],
  ['15-spring.webp', 'Spring'],
  ['16-packet-holder-frame.webp', 'Packet Holder Frame'],
  ['17-cutter-knife.webp', 'Cutter Knife'],
  ['18-inner-frame-cutter-set.webp', 'Inner Frame Cutter Set'],
  ['12-punch-die-cutting-set.webp', 'Punch Knife Set'],
  ['20-conveyor-belt.webp', 'Conveyor Belt'],
  ['21-cigarette-detector-set--png.webp', 'Cigarette Detector Set'],
  ['22-paper-feeding-assembly--png.webp', 'Paper Feeding Assembly'],
  ['23-packet-feeding-assembly--png.webp', 'Packet Feeding Assembly'],
  ['24-inner-frame-feeding-assembly--png.webp', 'Inner Frame Feeding Assembly'],
  ['25-tax-label-detector-device--png.webp', 'Tax Label Detector Device'],
  ['26-inner-lining-box--png.webp', 'Inner Lining Box'],
  ['27-gear-conveyor-belt--png.webp', 'Gear Conveyor Belt'],
  ['28-tipping-drum--png.webp', 'Tipping Drum'],
  ['29-angle-gear--png.webp', 'Angle Gear'],
  ['30-transition-gear--png.webp', 'Transition Gear'],
] as const

const gdParts = [
  ['01-tear-tape-knife.webp', 'Tear Tape Knife'],
  ['02-steel-roller-set.webp', 'Steel Roller Set'],
  ['03-stamp-glue-assembly.webp', 'Stamp Glue Assembly'],
  ['04-six-knife-circular-blade-set.webp', 'Six Knife Circular Blade Set'],
  ['05-pneumatic-tensioning-system.webp', 'Pneumatic Tensioning System'],
  ['06-ox617-malta-wheel.webp', 'OX617 Malta Wheel'],
  ['07-no-8-wheel-assembly.webp', 'No. 8 Wheel Assembly'],
  ['08-no-7-wheel-assembly.webp', 'No. 7 Wheel Assembly'],
  ['09-sliding-brace-assembly.webp', 'Sliding Brace Assembly'],
  ['10-body-armer.webp', 'Body Armer'],
  ['11-no-4-bobbin-wheel.webp', 'No. 4 Bobbin Wheel'],
  ['12-no-2-wheel-assembly.webp', 'No. 2 Wheel Assembly'],
  ['13-no-1-wheel-set.webp', 'No. 1 Wheel Set'],
  ['14-small-glue-container-set.webp', 'Small Glue Container Set'],
  ['15-glue-wheel.webp', 'Glue Wheel'],
  ['16-glue-nozzle.webp', 'Glue Nozzle'],
  ['17-glue-assembly.webp', 'Glue Assembly'],
  ['18-fixed-overlap-device.webp', 'Fixed Overlap Device'],
  ['19-cutting-knife.webp', 'Cutting Knife'],
  ['20-carton-film-standby-device.webp', 'Carton Film Standby Device'],
  ['21-cam.webp', 'Cam'],
  ['22-bobbin-wheel.webp', 'Bobbin Wheel'],
  ['23-big-glue-set.webp', 'Big Glue Set'],
  ['24-belt-replacement-set.webp', 'Belt Replacement Set'],
  ['25-alu-foil-anti-fake-roller.webp', 'Aluminium Foil Anti-fake Roller'],
] as const

const asParts = (folder: string, entries: readonly (readonly [string, string])[]) =>
  entries.map(([filename, title]) => part(folder, filename, title))

export const sparePartCategories: SparePartCategory[] = [
  {
    slug: 'mk8-mk9-mk95-maker-spare-parts',
    title: 'MK8/MK9/MK95 Maker Spare Parts',
    overviewTitle: 'MK8 / MK9 / MK95 MAKER SPARE PARTS',
    metaDescription:
      'Spare parts for Molins MK8, MK9 and MK95 cigarette makers, including garniture and suction tapes, knives, drums and machine components.',
    image: '/spare-parts/mk9-maker.webp',
    imageAlt: 'Molins MK9 cigarette-making machine',
    description:
      'Microtex offers spare parts made to industrial standards for tobacco machinery from Molins, GD, Sasib, Hauni, Marden Edward and other manufacturers. The maker range covers Molins MK8, MK9 and MK95, as well as Max 3, Max 5, Max-S, PA7, PA8 and PA9 platforms.',
    detailIntro:
      'The range includes garniture and suction tapes, tongue pieces, cutting knives, tipping drums, assemblies and other components for cigarette-making equipment.',
    features: [
      { title: 'GARNITURE & SUCTION', text: 'Kevlar, nylon and steel tapes for maker equipment.', icon: '/icons/industry/tape-roll.webp' },
      { title: 'CUTTING KNIVES', text: 'Tobacco rod, filter rod and tipping-paper knives.', icon: '/icons/industry/cutter-blade.webp' },
      { title: 'DRUMS & ASSEMBLIES', text: 'Tipping drums, garniture assemblies and related parts.', icon: '/icons/industry/gears.webp' },
    ],
    parts: asParts('mk8', mk8Parts),
  },
  {
    slug: 'hauni-protos-70-80-90-maker-spare-parts',
    title: 'Hauni Protos 70/80/90 Maker Spare Parts',
    overviewTitle: 'HAUNI PROTOS 70 / 80 / 90 MAKER SPARE PARTS',
    metaDescription:
      'Spare parts for Hauni Protos 70, 80 and 90 cigarette makers, including tongue pieces, rollers, cutting parts and drums.',
    image: '/protos70.webp',
    imageAlt: 'Hauni Protos cigarette-making machine',
    description:
      'Microtex supplies parts for Hauni Protos 70, 80 and 90 cigarette makers, including components for feeding, cutting, rolling and tobacco handling.',
    detailIntro:
      'The listed range includes tongue pieces, nylon suction tapes, gum and slitting rollers, carding sets, cutting parts, gears, shafts, transport components and machine drums.',
    features: [
      { title: 'TOBACCO FLOW', text: 'Tongue pieces, suction tapes and carding sets.', icon: '/icons/industry/output-speed.webp' },
      { title: 'CUTTING & DRIVE', text: 'Cutting knives, slitting rollers, gears and shafts.', icon: '/icons/industry/cutter-blade.webp' },
      { title: 'ROLLERS & DRUMS', text: 'Rolling, cutting, tipping and filter drum components.', icon: '/icons/industry/gears.webp' },
    ],
    parts: asParts('protos', protosParts),
  },
  {
    slug: 'hlp-cigarette-packing-machine-spare-parts',
    title: 'Molins HLP Packer Spare Parts',
    overviewTitle: 'MOLINS HLP PACKER SPARE PARTS',
    metaDescription:
      'Spare parts for Molins HLP cigarette packing lines, including cutters, rollers, feeding assemblies, detectors and conveyor parts.',
    image: '/molinshlp.webp',
    imageAlt: 'Molins HLP cigarette packing line',
    description:
      'Microtex supplies tobacco machinery spare parts for the Molins HLP cigarette packing machine line.',
    detailIntro:
      'The range shown includes inner-frame cutters, embossing rollers, glue nozzles, web and tear-tape knives, feeding assemblies, detector sets, trays and conveyor components.',
    features: [
      { title: 'CUTTING & EMBOSSING', text: 'Inner-frame cutters, web knives and embossing rollers.', icon: '/icons/industry/cutter-blade.webp' },
      { title: 'FEEDING & TRANSFER', text: 'Paper, packet and inner-frame feeding assemblies.', icon: '/icons/industry/output-speed.webp' },
      { title: 'DETECTION & CONTROL', text: 'Cigarette detectors, touch panels and related parts.', icon: '/icons/industry/power-gauge.webp' },
    ],
    parts: asParts('hlp', hlpParts),
  },
  {
    slug: 'gd-x1-gd-x2-packer-spare-parts',
    title: 'GD X1 & GD X2 Packer Spare Parts',
    overviewTitle: 'GD X1 & GD X2 PACKER SPARE PARTS',
    metaDescription:
      'Spare parts for GD-series cigarette packing machines, including knives, wheel assemblies, glue components and tensioning parts.',
    image: '/gdpacker.webp',
    imageAlt: 'GD X-series cigarette packing machine',
    description:
      'Microtex supplies spare parts for GD-series cigarette packing machines, including GD X1 and GD X2 packer equipment.',
    detailIntro:
      'Parts shown include tear-tape knives, steel rollers, wheel assemblies, glue components, pneumatic tensioning equipment and replacement sets.',
    features: [
      { title: 'KNIVES & ROLLERS', text: 'Tear-tape knives, circular blades and steel rollers.', icon: '/icons/industry/cutter-blade.webp' },
      { title: 'WHEEL ASSEMBLIES', text: 'Malta, bobbin and numbered wheel assemblies.', icon: '/icons/industry/gears.webp' },
      { title: 'GLUE & TENSIONING', text: 'Glue assemblies, nozzles and pneumatic tensioning parts.', icon: '/icons/industry/power-gauge.webp' },
    ],
    parts: asParts('gd', gdParts),
  },
  {
    slug: 'tobacco-garniture-suction-tapes',
    title: 'Tobacco Garniture & Suction Tapes',
    overviewTitle: 'TOBACCO GARNITURE & SUCTION TAPES',
    metaDescription:
      'Kevlar and linen garniture tapes and nylon suction tapes for cigarette-making equipment from Hauni, GD, Molins and other manufacturers.',
    image: '/spare-parts/garniture-tape--png.webp',
    imageAlt: 'Rolled tobacco garniture tape',
    description:
      'Microtex supplies Kevlar and linen garniture tapes and nylon suction tapes in a range of sizes for cigarette-making machinery.',
    detailIntro:
      'Specifications vary by machine type and manufacturer. The tables below show examples of the sizes and platforms listed by Microtex; contact the team to confirm the required dimensions for your machine.',
    features: [
      { title: 'KEVLAR GARNITURE TAPE', text: 'High-temperature tolerance, low extensibility and long service life.', icon: '/icons/industry/tape-roll.webp' },
      { title: 'LINEN GARNITURE TAPE', text: 'Available in sizes for Hauni, GD, Molins and other platforms.', icon: '/icons/industry/tape-roll.webp' },
      { title: 'NYLON SUCTION TAPE', text: 'Endless suction belts for multiple maker models.', icon: '/icons/industry/film-roll.webp' },
    ],
    parts: [part('tapes', '01-garniture-and-suction-tapes.webp', 'Garniture and Suction Tapes')],
    highlights: [
      '100% Kevlar',
      'High-temperature tolerance',
      'Low extensibility',
      'High fracture strength',
      'Long service life',
      'High tensile strength',
    ],
    tables: [
      {
        title: 'Kevlar Garniture Tape',
        headers: ['Machine type', 'Speed (cigarettes/min)', 'Garniture size (mm)'],
        rows: [
          ['Skoda C7/C8', '2,000', '21 × 2345'],
          ['Skoda C9', '4,000', '21 × 3125'],
          ['Garan 4', '4,000', '23 × 3100'],
          ['Protos', '8,000', '21 × 3100'],
          ['Decoufle Lof', '2,000', '21 × 2500'],
          ['Decouflf Log', '2,000', '21 × 3000'],
          ['Molins MK8 SM', '2,500', '23 × 2490'],
          ['Molins MK8 D', '2,500', '21 × 2490'],
          ['Molins MK9', '5,000', '22 × 2800'],
          ['Sygma', '6,000', '22 × 2690'],
          ['Hauni KDF', '2,000', '21 × 2300'],
          ['Hauni KDF 1', '3,000', '19.5 × 3300'],
          ['Hauni KDF 2', '4,000', '19 × 2715'],
          ['Hauni KDF MP4', '2,000', '21.5 × 3345'],
          ['Hauni KDF MP5', '2,000', '21 × 3290'],
        ],
      },
      {
        title: 'Linen Garniture Tapes',
        headers: ['Manufacturer', 'Machine type', 'Dimensions (mm)'],
        rows: [
          ['Hauni', 'Protos', '3100 × 21.0'],
          ['Hauni', 'Protos 90E', '3830 × 21.0'],
          ['Hauni', 'Protos 2/P2-2', '3930 × 21.0'],
          ['Hauni', 'KDF2/KDF4', '2715 × 10.5'],
          ['Hauni', 'KDF3', '3100 × 18.5 / 3100 × 19.5'],
          ['GD', '1-2-1 / 1-2-1 Plus', '2790 × 21.0'],
          ['Molins', 'Mark 8', '2489 × 22.0'],
          ['Molins', 'Mark 9', '2800 × 21.0 / 2800 × 22.0'],
          ['Molins', 'Passim', '3135 × 21.0'],
          ['Decoufle', 'Loga 1/2/3D', '3080 × 21.0'],
        ],
      },
      {
        title: 'Nylon Suction Tapes',
        headers: ['Manufacturer', 'Machine type', 'Dimensions (mm)'],
        rows: [
          ['Hauni', 'Protos 70/Protos 80', '4000 × 8.2 / 4000 × 9.2'],
          ['Hauni', 'Protos 90S/Protos 100', '4630 × 8.2 / 4630 × 9.2'],
          ['Hauni', 'Protos 90E', '5000 × 8.2 / 5000 × 9.2'],
          ['Hauni', 'Protos 2/P2-2', '5085 × 8.2 / 5085 × 9.2'],
          ['GD', '1-2-1', '4840 × 8.2 / 4840 × 9.0'],
          ['GD', '1-2-1 Plus', '6070 × 8.2 / 6070 × 9.0'],
          ['Molins', 'Mark 9', '4000 × 8.2'],
          ['Molins', 'Passim 8K/10K', '5710 × 10'],
          ['Decoufle', 'Loga 1', '3075 × 10.2'],
          ['Decoufle', 'Loga 2/3D', '3550 × 9.5'],
        ],
      },
    ],
  },
]

export function getSparePartCategory(slug: string) {
  return sparePartCategories.find((category) => category.slug === slug)
}
