import type { ReactNode } from 'react'
import Image from 'next/image'

type HeroProps = {
  title: ReactNode
  imageSrc?: string
  imageAlt?: string
  imageOnRight?: boolean
  imageWidth?: number
  imageHeight?: number
  textColor?: 'white' | 'gray'
  darkOverlay?: boolean
  darkOverlayOpacity?: number
  subtitle?: ReactNode
}

const Hero = ({
  title,
  imageSrc = '/hero3.webp',
  imageAlt = 'Microtex International cigarette machinery',
  imageOnRight = false,
  imageWidth = 1983,
  imageHeight = 793,
  textColor = 'white',
  darkOverlay = false,
  darkOverlayOpacity = 0.16,
  subtitle = <h4 className="mb-1 text-sm font-light leading-tight opacity-75 sm:text-lg lg:text-xl">MICROTEX INTERNATIONAL</h4>,
}: HeroProps) => {
  return (
    <div className={`relative w-full overflow-hidden ${imageOnRight ? 'min-h-[300px] bg-white sm:min-h-[380px] lg:min-h-[480px]' : ''}`}>
      <Image
        src={imageSrc}
        alt={imageAlt}
        width={imageWidth}
        height={imageHeight}
        preload
        sizes={imageOnRight ? '(max-width: 1024px) 70vw, 60vw' : '100vw'}
        className={imageOnRight
          ? 'absolute bottom-3 right-3 h-auto max-h-[68%] w-[70%] object-contain object-right sm:bottom-auto sm:right-8 sm:top-1/2 sm:max-h-[78%] sm:w-[64%] sm:-translate-y-1/2 lg:right-12 lg:w-[60%]'
          : 'block h-auto w-full'}
      />
      <div
        className="absolute inset-0"
        style={darkOverlay ? { backgroundColor: `rgba(0, 0, 0, ${darkOverlayOpacity})` } : undefined}
      />
      <div className="absolute inset-0 z-10">
        <div className={`px-4 py-3 font-stylish leading-tight tracking-tighter ${textColor === 'gray' ? 'text-gray-600' : 'text-white'} sm:px-8 sm:py-6 lg:px-16 lg:py-8`}>
          {subtitle}
          <h1 className="text-2xl font-semibold leading-tight sm:text-4xl lg:text-5xl">{title}</h1>
        </div>
      </div>
    </div>
  )
}

export default Hero
