import type { ReactNode } from 'react'
import Image from 'next/image'

type HeroProps = {
  title: ReactNode
  imageSrc?: string
  imageAlt?: string
  subtitle?: ReactNode
}

const Hero = ({
  title,
  imageSrc = '/hero3.webp',
  imageAlt = 'Microtex International cigarette machinery',
  subtitle = <h4 className="mb-1 text-sm font-light leading-tight text-white/75 sm:text-lg lg:text-xl">MICROTEX INTERNATIONAL</h4>,
}: HeroProps) => {
  return (
    <div className="relative w-full overflow-hidden">
      <Image src={imageSrc} alt={imageAlt} width={1983} height={793} preload sizes="100vw" className="block h-auto w-full" />
      <div className="absolute inset-0" />
      <div className="absolute inset-0 z-10">
        <div className="px-4 py-3 font-stylish leading-tight tracking-tighter text-white sm:px-8 sm:py-6 lg:px-16 lg:py-8">
          {subtitle}
          <h1 className="text-2xl font-semibold leading-tight sm:text-4xl lg:text-5xl">{title}</h1>
        </div>
      </div>
    </div>
  )
}

export default Hero
