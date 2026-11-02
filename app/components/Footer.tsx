import Image from 'next/image'
import React from 'react'
import { FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa'

const navLinks = [
  { label: 'About Us', href: '/about-us' },
  { label: 'Machines', href: '/machines' },
  { label: 'Services', href: '/services' },
  { label: 'Spare parts', href: '/spares' },
  { label: 'News', href: '/news' },
]

const machinesLinks = [
  { label: 'Making Machines', href: '/machines/making-machines' },
  { label: 'Packing Machines', href: '/machines/packing-machines' },
  { label: 'Filter Machines', href: '/machines/filter-machines' },
  { label: 'Utilities/Accessories', href: '/machines/utilities-accessories' },
]

const servicesLinks = [
  { label: 'Upgradation & Installation', href: '/services/upgradation-installation' },
  { label: 'Format & Conversion Kits', href: '/services/format-conversion-kits' },
  { label: 'Support Services & Rebuilding', href: '/services/support-services-rebuilding' },
]

const sparePartsLinks = [
  { label: 'MK8/MK9/MK95 Maker', href: '/spares/mk8-mk9-mk95-maker-spare-parts' },
  { label: 'Hauni Protos 70/80/90', href: '/spares/hauni-protos-70-80-90-maker-spare-parts' },
  { label: 'Molins HLP Packer', href: '/spares/hlp-cigarette-packing-machine-spare-parts' },
  { label: 'GD X1 & GD X2 Packer', href: '/spares/gd-x1-gd-x2-packer-spare-parts' },
  { label: 'Tobacco Garniture & Suction Tapes', href: '/spares/tobacco-garniture-suction-tapes' },
]

const Footer = () => {
  return (
    <footer className="bg-gray-100 px-6 py-8 font-stylish leading-tight tracking-tighter text-gray-600 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-1 mb-8">
          <div className="min-w-0">
            <Image src="/logomain.svg" alt="Microtex International" width={1845} height={312} unoptimized className="mb-4 h-auto w-[220px]" />
            <p className="font-sans text-sm text-gray-600 leading-tight max-w-xs mb-4">
              Microtex International supplies superior turnkey solutions through
              custom design, manufacturing, installation and support of
              plant-related systems.
            </p>
            <div aria-hidden="true" className="flex items-center gap-4 text-gray-600">
              <FaLinkedinIn size={20} />
              <FaTwitter size={20} />
              <FaInstagram size={20} />
            </div>
          </div>
          <div className="min-w-0 lg:pl-12">
            <h5 className="text-gray-600 text-xl font-semibold tracking-tighter mb-4">COMPANY</h5>
            <ul className="space-y-2 text-base text-gray-600 tracking-tighter font-sans">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="hover:underline underline-offset-4">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="min-w-0">
            <h5 className="text-gray-600 text-xl font-semibold tracking-tighter mb-4">MACHINES</h5>
            <ul className="space-y-2 text-base text-gray-600 tracking-tighter font-sans">
              {machinesLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="hover:underline underline-offset-4">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="min-w-0">
            <h5 className="text-gray-600 text-xl font-semibold tracking-tighter mb-4">SERVICES</h5>
            <ul className="space-y-2 text-base text-gray-600 tracking-tighter font-sans">
              {servicesLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="hover:underline underline-offset-4">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="min-w-0 lg:pl-12">
            <h5 className="text-gray-600 text-xl font-semibold tracking-tighter mb-4">SPARE PARTS</h5>
            <ul className="space-y-2 text-base text-gray-600 tracking-tighter font-sans">
              {sparePartsLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="hover:underline underline-offset-4">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-300 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-sans text-xs text-gray-600">
            © 2026 Microtex International. All rights reserved.
          </p>
          <div className="flex gap-4 text-xs text-gray-600 font-sans">
            <a href="#" className="hover:underline underline-offset-4">Privacy Policy</a>
            <a href="#" className="hover:underline underline-offset-4">Terms &amp; Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
