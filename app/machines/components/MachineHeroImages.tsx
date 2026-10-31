'use client'

import { useState } from 'react'
import Image from 'next/image'

export type MachineProductImage = {
  src: string
  alt: string
  width?: number
  height?: number
}

export default function MachineHeroImages({ images }: { images: MachineProductImage[] }) {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const selectedImage = images[selectedIndex]

  if (!selectedImage) return null

  return (
    <div className="flex h-full min-h-0 flex-col">
      <div className="relative min-h-0 flex-1">
        <Image
          src={selectedImage.src}
          alt={selectedImage.alt}
          fill
          priority={selectedIndex === 0}
          sizes="(max-width: 640px) 100vw, 54vw"
          className="object-contain object-center"
        />
      </div>
      {images.length > 1 && (
        <div className="flex shrink-0 flex-wrap justify-center gap-1.5 px-2 py-2 sm:gap-2">
          {images.map((image, index) => (
            <button
              key={image.src}
              type="button"
              aria-label={`Show image ${index + 1}: ${image.alt}`}
              aria-pressed={selectedIndex === index}
              onClick={() => setSelectedIndex(index)}
              className={`relative h-10 w-14 overflow-hidden border bg-white transition-colors sm:h-12 sm:w-16 ${
                selectedIndex === index ? 'border-gray-700' : 'border-gray-200 hover:border-gray-400'
              }`}
            >
              <Image
                src={image.src}
                alt=""
                fill
                sizes="64px"
                className="object-contain p-1"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
