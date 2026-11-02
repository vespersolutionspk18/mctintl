'use client'

import Image from 'next/image'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Button from '../components/Button'

gsap.registerPlugin(ScrollTrigger)

export type MachineGroup = {
  id: string
  title: string
  image: string
  imageAlt: string
  imageZoom?: number
  description: string
  details?: string[]
  cta?: { href: string; text: string }
  showCta?: boolean
  compactFeatures?: boolean
  features: { title?: string; text: string; icons?: string[] }[]
}

const machineGroups: MachineGroup[] = [
  {
    id: 'making',
    title: 'MAKING MACHINES',
    image: '/mk8da.webp',
    imageAlt: 'Cigarette making machine',
    description:
      'Explore our cigarette-making line: Mark 8-D with Max-15, and Mark 9.5 systems with Max-S or Max-70.',
    cta: { href: '/machines/making-machines', text: 'View All Machines' },
    features: [
      {
        title: 'MARK 8-D WITH MAX-15',
        text: 'Up to 2,800 cigarettes per minute, with 1117Max multi-roll infeed.',
        icons: ['/icons/industry/gears.webp'],
      },
      {
        title: 'MARK 9.5 WITH MAX-S',
        text: 'Up to 4,000 cigarettes per minute with Max-S filter assembly and automatic tray filling.',
        icons: ['/icons/industry/gears.webp'],
      },
      {
        title: 'MARK 9.5 WITH MAX-70',
        text: 'Up to 5,000 cigarettes per minute with Max-70 filter assembly and automatic tray filling.',
        icons: ['/icons/industry/gears.webp'],
      },
    ],
  },
  {
    id: 'packing',
    title: 'PACKING MACHINES',
    image: '/nhlp3-floor-reflection.webp',
    imageAlt: 'Microtex MTI-HLP250 hinge-lid packer',
    description:
      'From primary wrapping and overwrapping to end-of-line case packing, explore equipment for the different stages of your cigarette packaging line.',
    cta: { href: '/machines/packing-machines', text: 'View All Machines' },
    features: [
      {
        text: 'Tear tapes in a range of widths, with or without printed messages.',
        icons: ['/icons/industry/tape-roll.webp', '/icons/industry/label-stamp.webp'],
      },
      {
        text: 'Tax stamps placed at the side, over the top or around the corner, in different sizes.',
        icons: ['/icons/industry/label-stamp.webp'],
      },
      {
        text: 'Printed film for branded packs and product information.',
        icons: ['/icons/industry/film-roll.webp'],
      },
    ],
  },
  {
    id: 'filter',
    title: 'FILTER MACHINES',
    image: '/kdf2-filter-maker-cutout.webp',
    imageAlt: 'Refurbished Hauni KDF2 filter rod making machine',
    description:
      'The KDF2 is a high-speed filter rod maker producing up to 400 meters per minute, with an optional 500 meters per minute configuration. Five servo motors and a Siemens S7-300 PLC support synchronized production.',
    details: [
      'Refurbished with upgraded motors and electronics after a full strip-down and rebuild.',
      'Configured with an integrated tow opener and automatic tray filler system.',
    ],
    cta: { href: '/machines/filter-machines', text: 'View All Machines' },
    compactFeatures: true,
    features: [
      {
        title: 'OUTPUT',
        text: '400 m/min · 500 m/min optional',
        icons: ['/icons/industry/output-speed.webp'],
      },
      {
        title: 'FILTER ROD',
        text: '6–9 mm diameter · 64–150 mm length',
        icons: ['/icons/industry/format-gauge.webp'],
      },
      {
        title: 'CONTROL',
        text: 'SIEMENS S7-300 PLC · 5 servo motors',
        icons: ['/icons/industry/gears.webp'],
      },
    ],
  },
  {
    id: 'utilities-accessories',
    title: 'UTILITIES & ACCESSORIES',
    image: '/reclaimer2-floor-reflection.webp',
    imageAlt: 'Industrial tobacco reclaimer with an infeed hopper and takeaway conveyor',
    description:
      'Equipment for tobacco cutting, recovery and feeding, plus dust extraction, compressed air, vacuum, shrink wrapping and tray handling.',
    details: [
      'Explore the Molins MRTC Mk1 cutter, tobacco reclaimers and automatic feeders.',
      'Find dust collectors, dry claw vacuum pumps and air compressor packages with dryers.',
      'Browse shrink tunnels, cigarette and filter trays, and mobile trolley racks.',
    ],
    cta: { href: '/machines/utilities-accessories', text: 'View All Utilities/Accessories' },
    compactFeatures: true,
    features: [
      {
        title: 'TOBACCO PROCESSING',
        text: 'Cutting, recovery and automatic feeding.',
        icons: ['/icons/industry/cutter-blade.webp', '/icons/industry/gears.webp'],
      },
      {
        title: 'PLANT UTILITIES',
        text: 'Dust collection, compressed air and vacuum.',
        icons: ['/icons/industry/power-gauge.webp', '/icons/industry/service-tools.webp'],
      },
      {
        title: 'LINE HANDLING',
        text: 'Shrink wrapping, trays and mobile trolleys.',
        icons: ['/icons/industry/film-roll.webp', '/icons/industry/format-gauge.webp'],
      },
    ],
  },
]

export default function MachineStack({ groups = machineGroups }: { groups?: MachineGroup[] }) {
  const root = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!root.current) return

    const context = gsap.context(() => {
      const media = gsap.matchMedia()
      media.add('(min-width: 1024px) and (prefers-reduced-motion: no-preference)', () => {
        const stack = root.current
        const stage = stack?.querySelector<HTMLElement>('.machine-stack-stage')
        const panels = gsap.utils.toArray<HTMLElement>('.machine-panel')
        if (!stack || !stage || panels.length < 2) return

        gsap.set(stack, { height: `${panels.length * 100}svh` })
        gsap.set(stage, { position: 'sticky', top: 0, height: '100svh', overflow: 'hidden' })
        gsap.set(panels, {
          position: 'absolute',
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          height: '100%',
          minHeight: 0,
        })
        gsap.set(panels.slice(1), { yPercent: 100 })

        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: stack,
            start: 'top top',
            end: 'bottom bottom',
            scrub: true,
            invalidateOnRefresh: true,
          },
        })

        panels.slice(1).forEach((panel, index) => {
          timeline.to(panel, { yPercent: 0, duration: 1, ease: 'none' }, index)
        })
        ScrollTrigger.refresh()

        return () => {
          gsap.set(stack, { clearProps: 'height' })
          gsap.set(stage, { clearProps: 'position,top,height,overflow' })
          gsap.set(panels, { clearProps: 'position,top,right,bottom,left,height,minHeight,transform' })
        }
      })
      return () => media.revert()
    }, root)

    return () => context.revert()
  }, [])

  return (
    <div ref={root} className="machine-stack font-stylish leading-tight tracking-tighter">
      <div className="machine-stack-stage">
        {groups.map((group, index) => (
          <section
            key={group.id}
            id={group.id}
            className="machine-panel relative z-10 min-h-svh bg-white"
            style={{ zIndex: index + 1 }}
            aria-labelledby={`${group.id}-title`}
          >
            <div className="grid min-h-svh grid-cols-1 items-start gap-7 px-6 py-10 sm:px-10 lg:grid-cols-[0.92fr_1.35fr] lg:gap-16 lg:px-16 xl:px-24">
              <div className="flex min-w-0 flex-col">
                <h2 id={`${group.id}-title`} className="text-2xl font-medium leading-tight tracking-tighter text-gray-600 sm:text-3xl lg:text-4xl">
                  {group.title}
                </h2>
                <div className={`relative mt-0 h-56 w-full sm:h-72 lg:h-[55vh] ${group.imageZoom ? 'overflow-hidden' : ''}`}>
                  <Image
                    src={group.image}
                    alt={group.imageAlt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-contain object-center"
                    style={group.imageZoom ? { transform: `scale(${group.imageZoom})` } : undefined}
                    priority={index === 0}
                  />
                </div>
              </div>

              <div className="flex min-w-0 flex-col justify-center">
                <p className="max-w-4xl whitespace-pre-line font-sans text-lg leading-tight tracking-tighter text-gray-900">
                  {group.description}
                </p>
                {group.details && (
                  <ul className="mt-4 max-w-4xl list-disc space-y-1 pl-5 font-sans text-base leading-tight tracking-tighter text-gray-900 marker:text-gray-600">
                    {group.details.map((detail) => <li key={detail}>{detail}</li>)}
                  </ul>
                )}
                <div className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-3 lg:mt-10 lg:gap-6 xl:gap-8">
                  {group.features.map((feature) => (
                    <div
                      key={feature.text}
                      className={`flex min-w-0 flex-col items-start bg-gray-100 ${
                        group.compactFeatures
                          ? 'min-h-0 p-3 sm:p-4 lg:p-4'
                          : 'min-h-48 p-5 sm:min-h-52 sm:p-5 lg:min-h-56 lg:p-6'
                      }`}
                    >
                      {!!feature.icons?.length && (
                        <div
                          aria-hidden="true"
                          className={`flex items-center gap-3 ${group.compactFeatures ? 'h-12 sm:h-14' : 'h-16 sm:h-[4.5rem]'}`}
                        >
                          {feature.icons.map((icon) => (
                            <Image
                              key={icon}
                              src={icon}
                              alt=""
                              width={group.compactFeatures ? 56 : 72}
                              height={group.compactFeatures ? 56 : 72}
                              className={`object-contain ${group.compactFeatures ? 'h-10 w-10 sm:h-12 sm:w-12' : 'h-14 w-14 sm:h-16 sm:w-16'}`}
                            />
                          ))}
                        </div>
                      )}
                      {feature.title && (
                        <h3 className={`${group.compactFeatures ? 'mt-2' : 'mt-4'} font-sans text-base font-semibold leading-tight tracking-tighter text-gray-600`}>
                          {feature.title}
                        </h3>
                      )}
                      <p className={`${feature.title ? (group.compactFeatures ? 'mt-1.5' : 'mt-2') : (group.compactFeatures ? 'mt-2' : 'mt-4 sm:mt-5')} w-full min-w-0 whitespace-pre-line break-words font-sans text-base leading-tight tracking-tighter text-gray-900`}>
                        {feature.text}
                      </p>
                    </div>
                  ))}
                </div>
                {group.showCta !== false && (
                  <div className="mt-7 lg:mt-8">
                    <Button
                      href={group.cta?.href ?? '/contact'}
                      text={group.cta?.text ?? 'ENQUIRE ABOUT MACHINES'}
                    />
                  </div>
                )}
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  )
}
