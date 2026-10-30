'use client'

import MachineStack, { type MachineGroup } from '../machines/MachineStack'

const serviceGroups: MachineGroup[] = [
  {
    id: 'upgradation-installation',
    title: 'UPGRADATION & INSTALLATION',
    image: '/services/installation-upgrade-cutout.webp',
    imageAlt: 'Cigarette packaging line available for installation and upgrades',
    description:
      'Microtex has a proven track record in delivering High Quality Machinery, Spare Parts and Support for your Making & Packaging Solutions.\n\nWe provide extensive installation & up-gradation protocol services alongside expert training for our clients.',
    cta: { href: '/services/upgradation-installation', text: 'LEARN MORE' },
    features: [
      { title: 'INSTALLATION', text: 'Extensive installation protocol services.', icons: ['/icons/industry/service-tools.webp'] },
      { title: 'UP-GRADATION', text: 'Up-gradation protocol services.', icons: ['/icons/industry/format-gauge.webp'] },
      { title: 'EXPERT TRAINING', text: 'Expert training for our clients.', icons: ['/icons/industry/training-guide.webp'] },
    ],
  },
  {
    id: 'format-conversion',
    title: 'FORMAT & CONVERSION KITS',
    image: '/services/format-conversion-cutout.webp',
    imageAlt: 'Format and conversion components for cigarette machinery',
    description:
      'Microtex provides format and conversion kits to help adapt existing machinery as product trends and manufacturing demands change.\n\nKits support installation and integration of new formats across cigarette makers, packers, wrappers and end-of-line equipment.',
    cta: { href: '/services/format-conversion-kits', text: 'LEARN MORE' },
    features: [
      { title: 'CIGARETTE MAKERS', text: 'MK8, MK9, MAX 3/5 & MAX-S.', icons: ['/icons/industry/gears.webp'] },
      { title: 'PACKERS & WRAPPERS', text: 'HLP, GD Wrappers, Scandia Wrapper, CP1.', icons: ['/icons/industry/film-roll.webp'] },
      { title: 'END-OF-LINE', text: 'Sasib 3000/4000/5000/6000, High Speed Boxer, Over Wrapper.', icons: ['/icons/industry/output-speed.webp'] },
    ],
  },
  {
    id: 'support-rebuilding',
    title: 'SUPPORT SERVICES & REBUILDING',
    image: '/services/rebuild-support-cutout.webp',
    imageAlt: 'Cigarette making machinery available for rebuilding and service',
    description:
      'Microtex International supports existing making and packing equipment through rebuilding, regular servicing and preventative maintenance.\n\nRebuilds can include a full strip-down, replacement of worn parts and reassembly, helping bring machines back to life.',
    cta: { href: '/services/support-services-rebuilding', text: 'LEARN MORE' },
    features: [
      {
        title: 'ASSEMBLY & INSPECTION',
        text: 'Assembly, finishing, inspection and testing processes.',
        icons: ['/icons/industry/inspection-check.webp'],
      },
      {
        title: 'REBUILDING SERVICES',
        text: 'Complete strip-down, replacement of worn parts, re-assembly, manuals and parts catalogues.',
        icons: ['/icons/industry/gears.webp'],
      },
      {
        title: 'MAINTENANCE',
        text: 'Regular servicing and preventative maintenance to avoid unplanned stoppages.',
        icons: ['/icons/industry/service-tools.webp'],
      },
    ],
  },
]

export default function ServicesStack() {
  return <MachineStack groups={serviceGroups} />
}
