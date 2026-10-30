import React from 'react'
import Button from '../components/Button'

const CTA = ({ compact = false }: { compact?: boolean }) => {
  return (
    <div className={compact ? 'px-4 py-6 sm:p-8' : 'px-4 py-8 sm:px-8 sm:py-12 lg:p-24'}>
      <section className={`relative w-full bg-cover bg-center bg-no-repeat font-stylish text-white ${compact ? 'px-6 py-10 sm:px-16' : 'px-6 py-12 sm:px-16 sm:py-20 lg:py-24'}`} style={{ backgroundImage: 'url(/cigarette-packing-factory.webp)' }}>
      <div className={`max-w-4xl mx-auto flex flex-col items-start ${compact ? 'gap-4' : 'gap-8'}`}>
        <h2 className={`${compact ? 'text-2xl' : 'text-3xl sm:text-5xl'} font-semibold tracking-tighter leading-tight text-white`}>
          READY TO UPGRADE YOUR LINE?
        </h2>
        <p className={`${compact ? 'text-lg' : 'text-base sm:text-xl'} max-w-2xl leading-relaxed tracking-tighter text-gray-300`}>
          From high-speed packaging lines to precision wrappers, Microtex delivers custom machinery backed by decades of engineering expertise.
        </p>
        <div className={`flex gap-4 ${compact ? 'mt-0' : 'mt-4'}`}>
          <Button href="/contact" text="GET IN TOUCH" variant="white" />
        
        </div>
      </div>
    </section>
    </div>
  )
}

export default CTA
