'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import Button from './Button'
import styles from './Header.module.css'
import { useLanguage } from './LanguageProvider'
import type { Language } from '../i18n/translations'

const LANGUAGES = [
  { code: 'en', label: 'English' },
  { code: 'pl', label: 'Polski' },
  { code: 'es', label: 'Español' },
  { code: 'ar', label: 'العربية' },
  { code: 'pt', label: 'Português' },
]

type MenuCardItem = {
  title: string
  image: string
  imageAlt: string
  href: string
  description?: string
}

type MachineCategory = {
  id: 'making' | 'packing'
  title: string
  href: string
  cards: MenuCardItem[]
}

type OpenPanel = 'machines' | 'services' | 'spares' | null

const machineCategories: MachineCategory[] = [
  {
    id: 'making',
    title: 'MAKING MACHINES',
    href: '/machines/making-machines',
    cards: [
      {
        title: 'MARK 8-D WITH MAX-15',
        image: '/mk8da.webp',
        imageAlt: 'Mark 8-D cigarette maker with Max-15',
        href: '/machines/making-machines/mark-8-d-max-15',
      },
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
    ],
  },
  {
    id: 'packing',
    title: 'PACKING MACHINES',
    href: '/machines/packing-machines',
    cards: [
      {
        title: 'HINGE LID PACKER MTI-HLP250',
        image: '/hlp250.webp',
        imageAlt: 'Microtex MTI-HLP250 hinge-lid packer',
        href: '/machines/packing-machines/hlp-250',
      },
      {
        title: 'HINGE LID PACKER MTI-HLP2',
        image: '/hlp2a.webp',
        imageAlt: 'Microtex MTI-HLP2 hinge-lid packer',
        href: '/machines/packing-machines/hlp-2',
      },
      {
        title: 'PACKET WRAPPER',
        image: '/packeta.webp',
        imageAlt: 'Microtex packet wrapping machine',
        href: '/machines/packing-machines/packet-wrapper',
      },
      {
        title: 'OVERWRAPPER MACHINE',
        image: '/mti-ow25-1-over-wrapper-cutout.webp',
        imageAlt: 'Microtex MTI-OW25-1 overwrapping machine',
        href: '/machines/packing-machines/over-wrapper-mti-ow25-1',
      },
      {
        title: 'HIGH-SPEED BOXER MACHINE',
        image: '/boxer machine.webp',
        imageAlt: 'Microtex high-speed boxer machine',
        href: '/machines/packing-machines/high-speed-boxer',
      },
      {
        title: 'STAMPER MACHINE',
        image: '/stamper.webp',
        imageAlt: 'Cigarette packet tax-stamping machine',
        href: '/machines/packing-machines/stamping-machine',
      },
      {
        title: 'CASE PACKER MACHINE',
        image: '/mti-cp06-1-case-packer-cutout.webp',
        imageAlt: 'Microtex MTI-CP06-1 cigarette case packer',
        href: '/machines/packing-machines/case-packer',
      },
    ],
  },
]

const serviceCards: MenuCardItem[] = [
  {
    title: 'UPGRADATION & INSTALLATION',
    image: '/services/installation-upgrade-cutout.webp',
    imageAlt: 'Cigarette packaging line for installation and upgrades',
    href: '/services/upgradation-installation',
    description: 'Installation, equipment upgrades and expert training.',
  },
  {
    title: 'FORMAT & CONVERSION KITS',
    image: '/services/format-conversion-cutout.webp',
    imageAlt: 'Format and conversion components for cigarette machinery',
    href: '/services/format-conversion-kits',
    description: 'Adapt existing equipment with new formats and conversion kits.',
  },
  {
    title: 'SUPPORT SERVICES & REBUILDING',
    image: '/services/rebuild-support-cutout.webp',
    imageAlt: 'Cigarette making machinery for rebuilding and service',
    href: '/services/support-services-rebuilding',
    description: 'Machine rebuilding, regular service and preventative maintenance.',
  },
]

const sparePartCards: MenuCardItem[] = [
  {
    title: 'MK8 / MK9 / MK95 SPARE PARTS',
    image: '/spare-parts/mk9-maker.webp',
    imageAlt: 'Molins MK9 cigarette-making machine',
    href: '/spares/mk8-mk9-mk95-maker-spare-parts',
  },
  {
    title: 'PROTOS 70 / 80 / 90 SPARE PARTS',
    image: '/protos70.webp',
    imageAlt: 'Hauni Protos cigarette-making machine',
    href: '/spares/hauni-protos-70-80-90-maker-spare-parts',
  },
  {
    title: 'HLP PACKER SPARE PARTS',
    image: '/molinshlp.webp',
    imageAlt: 'Molins HLP cigarette packing line',
    href: '/spares/hlp-cigarette-packing-machine-spare-parts',
  },
  {
    title: 'GD PACKER SPARE PARTS',
    image: '/gdpacker.webp',
    imageAlt: 'GD X-series cigarette packing machine',
    href: '/spares/gd-x1-gd-x2-packer-spare-parts',
  },
  {
    title: 'GARNITURE & SUCTION TAPES',
    image: '/spare-parts/garniture-tape--png.webp',
    imageAlt: 'Rolled tobacco garniture tape',
    href: '/spares/tobacco-garniture-suction-tapes',
  },
]

function MenuCard({
  item,
  onNavigate,
}: {
  item: MenuCardItem
  onNavigate: () => void
}) {
  return (
    <Link
      href={item.href}
      onClick={onNavigate}
      className="group block min-w-0 overflow-hidden border border-gray-200 bg-white transition-colors hover:border-red-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-700 focus-visible:ring-offset-2"
    >
      <div className="relative aspect-[16/8] w-full bg-white">
        <Image
          src={item.image}
          alt={item.imageAlt}
          fill
          sizes="(max-width: 640px) 50vw, 22vw"
          className="object-contain p-2"
        />
      </div>
      <div className="p-2">
        <div className="flex min-w-0 items-start justify-between gap-2">
          <h3 className="min-w-0 break-words font-stylish text-xs font-semibold leading-tight tracking-tight text-gray-700 sm:text-sm">
            {item.title}
          </h3>
          <span aria-hidden="true" className="shrink-0 text-red-700">↗</span>
        </div>
        {item.description && (
          <p className="mt-1 font-sans text-xs leading-snug text-gray-700">{item.description}</p>
        )}
      </div>
    </Link>
  )
}

const Header = () => {
  const { language, setLanguage } = useLanguage()
  const [openPanel, setOpenPanel] = useState<OpenPanel>(null)
  const [activeMachineCategory, setActiveMachineCategory] = useState<MachineCategory['id']>('making')
  const headerRef = useRef<HTMLElement>(null)
  const triggerRef = useRef<HTMLElement | null>(null)

  const activeCategory = machineCategories.find((category) => category.id === activeMachineCategory) ?? machineCategories[0]
  const closeMenu = () => setOpenPanel(null)

  useEffect(() => {
    if (!openPanel) return

    const handlePointerDown = (event: PointerEvent) => {
      if (!headerRef.current?.contains(event.target as Node)) setOpenPanel(null)
    }
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpenPanel(null)
        triggerRef.current?.focus()
      }
    }

    document.addEventListener('pointerdown', handlePointerDown)
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('pointerdown', handlePointerDown)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [openPanel])

  const openHoverMenu = (panel: Exclude<OpenPanel, null>, trigger: HTMLElement) => {
    triggerRef.current = trigger
    setOpenPanel(panel)
  }

  return (
    <header
      ref={headerRef}
      onMouseLeave={() => setOpenPanel(null)}
      className="relative z-50 bg-white px-4 py-4 font-stylish leading-tight tracking-tighter sm:px-6"
    >
      <div className="mx-auto flex w-full max-w-7xl flex-wrap items-center justify-between gap-x-4 gap-y-3">
        <Link href="/" onClick={closeMenu} className="order-1 shrink-0">
          <Image src="/logo.webp" alt="Microtex International" width={200} height={80} priority className="h-auto w-28 sm:w-[200px]" />
        </Link>

        <nav aria-label="Main navigation" className="order-3 flex w-full flex-wrap items-center justify-center gap-x-3 gap-y-2 text-gray-800 sm:gap-x-4 lg:order-2 lg:w-auto lg:flex-nowrap 2xl:gap-x-5">
          <Link href="/about-us" onClick={closeMenu} className="whitespace-nowrap text-sm font-medium leading-tight tracking-tighter text-black transition-colors hover:text-red-700 sm:text-base lg:text-lg">ABOUT US</Link>
          <Link
            href="/machines"
            aria-haspopup="true"
            aria-expanded={openPanel === 'machines'}
            aria-controls="machines-mega-menu"
            onMouseEnter={(event) => openHoverMenu('machines', event.currentTarget)}
            onFocus={(event) => openHoverMenu('machines', event.currentTarget)}
            onClick={closeMenu}
            className="whitespace-nowrap text-sm font-medium leading-tight tracking-tighter text-black transition-colors hover:text-red-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-700 sm:text-base lg:text-lg"
          >MACHINES</Link>
          <Link
            href="/services"
            aria-haspopup="true"
            aria-expanded={openPanel === 'services'}
            aria-controls="services-mega-menu"
            onMouseEnter={(event) => openHoverMenu('services', event.currentTarget)}
            onFocus={(event) => openHoverMenu('services', event.currentTarget)}
            onClick={closeMenu}
            className="whitespace-nowrap text-sm font-medium leading-tight tracking-tighter text-black transition-colors hover:text-red-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-700 sm:text-base lg:text-lg"
          >SERVICES</Link>
          <Link
            href="/spares"
            aria-haspopup="true"
            aria-expanded={openPanel === 'spares'}
            aria-controls="spares-mega-menu"
            onMouseEnter={(event) => openHoverMenu('spares', event.currentTarget)}
            onFocus={(event) => openHoverMenu('spares', event.currentTarget)}
            onClick={closeMenu}
            className="whitespace-nowrap text-sm font-medium leading-tight tracking-tighter text-black transition-colors hover:text-red-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-700 sm:text-base lg:text-lg"
          >SPARE PARTS</Link>
          <Link href="/news" onClick={closeMenu} className="whitespace-nowrap text-sm font-medium leading-tight tracking-tighter text-black transition-colors hover:text-red-700 sm:text-base lg:text-lg">NEWS</Link>
        </nav>

        <div className="order-2 flex shrink-0 items-center gap-2 sm:gap-3 lg:order-3">
          <select
            value={language}
            onChange={(event) => setLanguage(event.target.value as Language)}
            aria-label="Language"
            className="block min-w-0 cursor-pointer rounded-sm border border-gray-300 px-1 py-1 text-xs font-medium text-gray-800 focus:outline-none focus:ring-1 focus:ring-red-700 sm:px-2 sm:text-sm"
          >
            {LANGUAGES.map((language) => (
              <option key={language.code} value={language.code}>{language.label}</option>
            ))}
          </select>
          <Button href="/contact" text="CONTACT US" className={styles.contactButton} />
        </div>
      </div>

      {openPanel === 'machines' && (
        <div id="machines-mega-menu" role="region" aria-label="Machine menu" className="absolute left-1/2 top-full w-[calc(100vw-2rem)] max-w-6xl -translate-x-1/2 border border-gray-200 bg-white">
          <div className="mx-auto max-h-[calc(100vh-7rem)] overflow-y-auto px-4 py-4 sm:px-5">
            <div className="flex items-start justify-between gap-5">
              <div>
                <p className="text-xs font-semibold tracking-wide text-gray-500">MACHINES</p>
                <h2 className="mt-1 font-stylish text-xl font-semibold text-gray-700">{activeCategory.title}</h2>
              </div>
              <Link href="/machines" onClick={closeMenu} className="text-sm font-semibold text-red-700 underline underline-offset-4 hover:text-red-800">ALL MACHINES</Link>
            </div>

            <div className="mt-4 grid gap-4 lg:grid-cols-[190px_minmax(0,1fr)]">
              <aside className="border-b border-gray-200 pb-3 lg:border-b-0 lg:border-r lg:pb-0 lg:pr-4">
                <nav aria-label="Machine categories" className="flex gap-2 lg:flex-col">
                  {machineCategories.map((category) => (
                    <Link
                      key={category.id}
                      href={category.href}
                      onMouseEnter={() => setActiveMachineCategory(category.id)}
                      onFocus={() => setActiveMachineCategory(category.id)}
                      onClick={closeMenu}
                      className={`flex min-w-0 flex-1 flex-col items-start border px-2 py-2 text-left transition-colors lg:flex-none ${activeMachineCategory === category.id ? 'border-red-700 bg-red-50 text-red-800' : 'border-gray-200 bg-white text-gray-700 hover:border-gray-400'}`}
                    >
                      <span className="text-xs font-semibold leading-tight">{category.title}</span>
                      <span className="mt-0.5 font-sans text-[11px] text-gray-600">{category.cards.length} machines</span>
                    </Link>
                  ))}
                </nav>
                <div className="mt-2 grid grid-cols-2 gap-2 lg:grid-cols-1">
                  <div className="border border-gray-200 bg-white px-2 py-2 text-xs font-semibold leading-tight text-gray-700">
                    REBUILT MACHINES
                  </div>
                  <div className="border border-gray-200 bg-white px-2 py-2 text-xs font-semibold leading-tight text-gray-700">
                    OTHER PRODUCTS
                  </div>
                </div>
              </aside>

              <div id="machine-card-panel" className="min-w-0">
                <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                  {activeCategory.cards.map((item) => (
                    <MenuCard key={item.href} item={item} onNavigate={closeMenu} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {openPanel === 'services' && (
        <div id="services-mega-menu" role="region" aria-label="Services menu" className="absolute left-1/2 top-full w-[calc(100vw-2rem)] max-w-6xl -translate-x-1/2 border border-gray-200 bg-white">
          <div className="mx-auto max-h-[calc(100vh-7rem)] overflow-y-auto px-4 py-4 sm:px-5">
            <div className="flex items-start justify-between gap-5">
              <div>
                <p className="text-xs font-semibold tracking-wide text-gray-500">SERVICES</p>
              </div>
              <Link href="/services" onClick={closeMenu} className="text-sm font-semibold text-red-700 underline underline-offset-4 hover:text-red-800">ALL SERVICES</Link>
            </div>
            <div className="mt-4 grid grid-cols-1 gap-3 md:grid-cols-3">
              {serviceCards.map((item) => (
                <MenuCard key={item.href} item={item} onNavigate={closeMenu} />
              ))}
            </div>
          </div>
        </div>
      )}

      {openPanel === 'spares' && (
        <div id="spares-mega-menu" role="region" aria-label="Spare parts menu" className="absolute left-1/2 top-full w-[calc(100vw-2rem)] max-w-6xl -translate-x-1/2 border border-gray-200 bg-white">
          <div className="mx-auto max-h-[calc(100vh-7rem)] overflow-y-auto px-4 py-4 sm:px-5">
            <div className="flex items-start justify-between gap-5">
              <div>
                <p className="text-xs font-semibold tracking-wide text-gray-500">SPARE PARTS</p>
              </div>
              <Link href="/spares" onClick={closeMenu} className="text-sm font-semibold text-red-700 underline underline-offset-4 hover:text-red-800">ALL SPARE PARTS</Link>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-5">
              {sparePartCards.map((item) => (
                <MenuCard key={item.href} item={item} onNavigate={closeMenu} />
              ))}
            </div>
          </div>
        </div>
      )}

    </header>
  )
}

export default Header
