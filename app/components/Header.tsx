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
  { code: 'ru', label: 'Русский' },
]

type MenuCardItem = {
  title: string
  image: string
  imageAlt: string
  href: string
  description?: string
}

type MachineCategory = {
  id: 'making' | 'packing' | 'filter' | 'utilities'
  title: string
  href: string
  countLabel?: string
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
        image: '/nhlp3-floor-reflection.png',
        imageAlt: 'Microtex MTI-HLP250 hinge-lid packer',
        href: '/machines/packing-machines/hlp-250',
      },
      {
        title: 'HINGE LID PACKER MTI-HLP2',
        image: '/hlp250.webp',
        imageAlt: 'Microtex MTI-HLP2 hinge-lid packer',
        href: '/machines/packing-machines/hlp-2',
      },
      {
        title: 'SASIB 3000 SOFT PACKER',
        image: '/sasib3000-floor-reflection.png',
        imageAlt: 'Sasib S-3000 soft cigarette packing machine',
        href: '/machines/packing-machines/sasib-3000-soft-packer',
      },
      {
        title: 'PACKET WRAPPER',
        image: '/packeta.webp',
        imageAlt: 'Microtex packet wrapping machine',
        href: '/machines/packing-machines/packet-wrapper',
      },
      {
        title: 'OVERWRAPPER MACHINE',
        image: '/mti-ow25-1-over-wrapper-reflection.png',
        imageAlt: 'Microtex MTI-OW25-1 overwrapping machine',
        href: '/machines/packing-machines/over-wrapper-mti-ow25-1',
      },
      {
        title: 'HIGH-SPEED BOXER MACHINE',
        image: '/nboxer-floor-reflection.webp',
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
  {
    id: 'filter',
    title: 'FILTER MACHINES',
    href: '/machines/filter-machines',
    cards: [
      {
        title: 'KDF2 FILTER ROD MAKER',
        image: '/kdf2-filter-maker-cutout.png',
        imageAlt: 'Refurbished Hauni KDF2 filter rod making machine',
        href: '/machines/filter-machines/kdf2-filter-maker',
      },
    ],
  },
  {
    id: 'utilities',
    title: 'UTILITIES & ACCESSORIES',
    href: '/machines/utilities-accessories',
    countLabel: 'products',
    cards: [
      {
        title: 'MOLINS TOBACCO CUTTER MRTC MK1',
        image: '/molinscutter-refurbished-reflection.png',
        imageAlt: 'Molins industrial tobacco rotary cutter',
        href: '/machines/utilities-accessories/molins-tobacco-cutter-mrtc-mk1',
      },
      {
        title: 'TOBACCO RECLAIMER',
        image: '/reclaimer2-floor-reflection.png',
        imageAlt: 'Industrial tobacco reclaimer',
        href: '/machines/utilities-accessories/tobacco-reclaimer',
      },
      {
        title: 'AUTOMATIC TOBACCO FEEDER',
        image: '/autotobaccofeeder-floor-reflection.png',
        imageAlt: 'Automatic tobacco feeder',
        href: '/machines/utilities-accessories/automatic-tobacco-feeder',
      },
      {
        title: 'TOBACCO DUST COLLECTOR',
        image: '/dustcollector1-floor-reflection.png',
        imageAlt: 'Industrial tobacco dust collector',
        href: '/machines/utilities-accessories/tobacco-dust-collector',
      },
      {
        title: 'VACUUM PUMPS',
        image: '/vacuumpump2-floor-reflection.png',
        imageAlt: 'Industrial dry claw vacuum pump',
        href: '/machines/utilities-accessories/vacuum-pumps',
      },
      {
        title: 'AIR COMPRESSORS WITH DRYER PACKAGE',
        image: '/aircompressor-floor-reflection.png',
        imageAlt: 'Industrial air compressor with dryer package',
        href: '/machines/utilities-accessories/air-compressors-with-dryer-package',
      },
      {
        title: 'CIGARETTE & FILTER TRAYS AND TROLLEYS',
        image: '/trolley1-floor-reflection.png',
        imageAlt: 'Mobile trolley for cigarette and filter trays',
        href: '/machines/utilities-accessories/cigarette-filter-trays-and-trolleys',
      },
      {
        title: 'SHRINK HEAT TUNNEL',
        image: '/shrinkheattunnel-floor-reflection.png',
        imageAlt: 'Industrial shrink heat tunnel',
        href: '/machines/utilities-accessories/shrink-heat-tunnel',
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeMachineCategory, setActiveMachineCategory] = useState<MachineCategory['id']>('making')
  const headerRef = useRef<HTMLElement>(null)
  const triggerRef = useRef<HTMLElement | null>(null)
  const mobileMenuButtonRef = useRef<HTMLButtonElement>(null)

  const activeCategory = machineCategories.find((category) => category.id === activeMachineCategory) ?? machineCategories[0]
  const closeMenu = () => {
    setOpenPanel(null)
    setMobileMenuOpen(false)
  }

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  useEffect(() => {
    if (!openPanel && !mobileMenuOpen) return

    const handlePointerDown = (event: PointerEvent) => {
      if (!headerRef.current?.contains(event.target as Node)) {
        setOpenPanel(null)
        setMobileMenuOpen(false)
      }
    }
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpenPanel(null)
        setMobileMenuOpen(false)
        if (mobileMenuOpen) mobileMenuButtonRef.current?.focus()
        else triggerRef.current?.focus()
      }
    }

    document.addEventListener('pointerdown', handlePointerDown)
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('pointerdown', handlePointerDown)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [openPanel, mobileMenuOpen])

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
          <Image src="/logomain.svg" alt="Microtex International" width={1845} height={312} preload unoptimized className="h-auto w-28 sm:w-[200px]" />
        </Link>

        <button
          ref={mobileMenuButtonRef}
          type="button"
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-navigation"
          onClick={toggleMobileMenu}
          className="order-2 ml-auto inline-flex h-10 w-10 items-center justify-center border border-gray-300 text-gray-800 transition-colors hover:border-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-700 lg:hidden"
        >
          <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-5 w-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {mobileMenuOpen ? <path d="m6 6 12 12M18 6 6 18" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>

        <nav
          id="main-navigation"
          aria-label="Main navigation"
          className="hidden order-2 w-full flex-wrap items-center justify-center gap-x-3 gap-y-2 text-gray-600 sm:gap-x-4 lg:flex lg:w-auto lg:flex-nowrap 2xl:gap-x-5"
        >
          <Link
            href="/machines"
            aria-haspopup="true"
            aria-expanded={openPanel === 'machines'}
            aria-controls="machines-mega-menu"
            onMouseEnter={(event) => openHoverMenu('machines', event.currentTarget)}
            onFocus={(event) => openHoverMenu('machines', event.currentTarget)}
            onClick={closeMenu}
            className="whitespace-nowrap text-sm font-medium leading-tight tracking-tighter text-gray-600 transition-colors hover:text-red-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-700 sm:text-base lg:text-lg"
          >MACHINES</Link>
          <Link
            href="/spares"
            aria-haspopup="true"
            aria-expanded={openPanel === 'spares'}
            aria-controls="spares-mega-menu"
            onMouseEnter={(event) => openHoverMenu('spares', event.currentTarget)}
            onFocus={(event) => openHoverMenu('spares', event.currentTarget)}
            onClick={closeMenu}
            className="whitespace-nowrap text-sm font-medium leading-tight tracking-tighter text-gray-600 transition-colors hover:text-red-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-700 sm:text-base lg:text-lg"
          >SPARE PARTS</Link>
          <Link
            href="/services"
            aria-haspopup="true"
            aria-expanded={openPanel === 'services'}
            aria-controls="services-mega-menu"
            onMouseEnter={(event) => openHoverMenu('services', event.currentTarget)}
            onFocus={(event) => openHoverMenu('services', event.currentTarget)}
            onClick={closeMenu}
            className="whitespace-nowrap text-sm font-medium leading-tight tracking-tighter text-gray-600 transition-colors hover:text-red-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-700 sm:text-base lg:text-lg"
          >SERVICES</Link>
          <Link href="/about-us" onClick={closeMenu} className="whitespace-nowrap text-sm font-medium leading-tight tracking-tighter text-gray-600 transition-colors hover:text-red-700 sm:text-base lg:text-lg">ABOUT US</Link>
          <Link href="/news" onClick={closeMenu} className="whitespace-nowrap text-sm font-medium leading-tight tracking-tighter text-gray-600 transition-colors hover:text-red-700 sm:text-base lg:text-lg">NEWS &amp; EVENTS</Link>
        </nav>

        <div className="order-3 ml-auto hidden shrink-0 items-center gap-2 sm:gap-3 lg:ml-0 lg:flex">
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

        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className={`${mobileMenuOpen ? 'flex' : 'hidden'} order-4 max-h-[calc(100dvh-5rem)] w-full flex-col overflow-y-auto border-t border-gray-200 py-2 text-gray-600 lg:hidden`}
        >
          <div className="w-full">
            <Link
              href="/machines"
              onClick={closeMenu}
              className="block py-3 text-sm font-medium leading-tight tracking-tighter text-gray-600 hover:text-red-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-700"
            >
              MACHINES
            </Link>
            <Link
              href="/services"
              onClick={closeMenu}
              className="block py-3 text-sm font-medium leading-tight tracking-tighter text-gray-600 hover:text-red-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-700"
            >
              SERVICES
            </Link>
            <Link
              href="/spares"
              onClick={closeMenu}
              className="block py-3 text-sm font-medium leading-tight tracking-tighter text-gray-600 hover:text-red-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-700"
            >
              SPARE PARTS
            </Link>

            <Link href="/about-us" onClick={closeMenu} className="block py-3 text-sm font-medium leading-tight tracking-tighter text-gray-600 hover:text-red-700">ABOUT US</Link>
            <Link href="/news" onClick={closeMenu} className="block py-3 text-sm font-medium leading-tight tracking-tighter text-gray-600 hover:text-red-700">NEWS &amp; EVENTS</Link>
          </div>

          <div className="mt-2 flex w-full items-center justify-between gap-3 border-t border-gray-200 pt-3">
            <select
              value={language}
              onChange={(event) => setLanguage(event.target.value as Language)}
              aria-label="Language"
              className="block min-w-0 cursor-pointer rounded-sm border border-gray-300 px-2 py-1 text-sm font-medium text-gray-800 focus:outline-none focus:ring-1 focus:ring-red-700"
            >
              {LANGUAGES.map((language) => (
                <option key={language.code} value={language.code}>{language.label}</option>
              ))}
            </select>
            <Button href="/contact" text="CONTACT US" className={styles.contactButton} />
          </div>
        </nav>
      </div>

      {openPanel === 'machines' && (
        <div id="machines-mega-menu" role="region" aria-label="Machine menu" className="absolute left-1/2 top-full w-[calc(100vw-2rem)] max-w-6xl -translate-x-1/2 border border-gray-200 bg-white">
          <div className="mx-auto max-h-[calc(100vh-7rem)] overflow-y-auto px-4 py-4 sm:px-5">
            <div className="flex items-start justify-between gap-5">
              <div>
                <p className="text-xs font-semibold tracking-wide text-gray-500">MACHINES</p>
                <h2 className="mt-1 font-stylish text-xl font-semibold text-gray-700">{activeCategory.title}</h2>
              </div>
              <Link
                href={activeCategory.id === 'utilities' ? activeCategory.href : '/machines'}
                onClick={closeMenu}
                className="text-sm font-semibold text-red-700 underline underline-offset-4 hover:text-red-800"
              >
                {activeCategory.id === 'utilities' ? 'View All Utilities/Accessories' : 'View All Machines'}
              </Link>
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
                      <span className="mt-0.5 font-sans text-[11px] text-gray-600">
                        {category.cards.length} {category.countLabel ?? (category.cards.length === 1 ? 'machine' : 'machines')}
                      </span>
                    </Link>
                  ))}
                </nav>
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
