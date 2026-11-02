import React from 'react'
import Link from 'next/link'

const Services = () => {
  return (
    <div className="flex flex-col px-4 py-10 font-stylish sm:px-8 sm:py-12 lg:px-24 lg:py-16">
        <div className="grid w-full grid-cols-1 items-stretch gap-10 md:grid-cols-3 md:gap-8">
            <Link
              href="/machines"
              className="group flex w-full min-w-0 cursor-pointer flex-col gap-4 text-inherit no-underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gray-600"
            >
            <h5 className="mt-2 text-xl font-semibold tracking-tighter text-gray-600 md:mt-8 sm:text-2xl">MACHINES</h5>
            <div className="flex h-40 w-full items-center justify-center overflow-hidden bg-white sm:h-48">
              <img src="/mk8da.webp" alt="Machines" className="h-full w-auto object-contain mx-auto" />
            </div>
            
            <ul className="list-disc pl-5 text-base leading-tight tracking-tighter text-gray-800 sm:text-lg">
            <li>Making Machines</li>
            <li>Packing Machines</li>
            <li>Filter Machines</li>
            <li>Utilities/Accessories</li>
            </ul>
            
            </Link>
            <Link
              href="/services"
              className="group flex w-full min-w-0 cursor-pointer flex-col gap-4 text-inherit no-underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gray-600"
            >
            <h5 className="mt-2 text-xl font-semibold tracking-tighter text-gray-600 md:mt-8 sm:text-2xl">SERVICES</h5>
            <div className="flex h-40 w-full items-center justify-center overflow-hidden bg-white sm:h-48">
              <img src="/spares.webp" alt="Services" className="h-full w-auto object-contain mx-auto" />
            </div>
            
            <ul className="list-disc pl-5 text-base leading-tight tracking-tighter text-gray-800 sm:text-lg">
            <li>Upgradation & Installation</li>
            <li>Format & Conversion Kits</li>
            <li>Support Services & Rebuilding</li>
  
            </ul>
            
            </Link>
            <Link
              href="/spares"
              className="group flex w-full min-w-0 cursor-pointer flex-col gap-4 text-inherit no-underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gray-600"
            >
            <h5 className="mt-2 text-xl font-semibold tracking-tighter text-gray-600 md:mt-8 sm:text-2xl">SPARE PARTS</h5>
            <div className="flex h-40 w-full items-center justify-center overflow-hidden bg-white sm:h-48">
              <img src="/sparepartshero.webp" alt="Spare Parts" className="h-full w-auto object-contain mx-auto" />
            </div>
            
            <ul className="list-disc pl-5 text-base leading-tight tracking-tighter text-gray-800 sm:text-lg">
           <li>MK8/MK9/MK95 Spare Parts</li>
           <li>Protos 70/80/90 Spare Parts</li>
           <li>HLP Cigarette Packing Machine Spare Parts</li>
           <li>GD Packer/Cigarette Packing Machine Spare Parts</li>
            </ul>
            
            </Link>
            
        </div>

        <img src="/PACKET3D.png" alt="Cigarette pack size and packet variations" className="mt-10 w-full sm:mt-12 lg:mt-16" />
    </div>
  )
}

export default Services
