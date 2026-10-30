'use client'

import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Button from '../components/Button'

gsap.registerPlugin(ScrollTrigger)

const OurOfferings = () => {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    cardsRef.current.forEach((card, index) => {
      if (!card) return
      gsap.set(card, { zIndex: 10 + index * 10 })
      ScrollTrigger.create({
        trigger: card,
        start: 'top top',
        end: 'bottom top',
        pin: true,
        pinSpacing: false,
        scrub: true,
      })
    })
    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill())
    }
  }, [])

  return (
    <div className="w-full overflow-y-auto bg-white items-center flex flex-col">
      <h5 className="text-gray-600 text-4xl tracking-tighter font-stylish font-semibold mt-36 mb-8 px-8">
        EVERYTHING YOUR CIGARETTE LINE NEEDS, UNDER ONE ROOF.
      </h5>
      <div className="relative h-[300vh] w-full">
        {[1, 2, 3].map((i, index) => (
          <div
            key={i}
            ref={el => { cardsRef.current[index] = el }}
            className="w-full flex flex-row gap-6 items-start px-8 py-6 border-b border-gray-200 bg-white"
          >
            <img src="/cp06.webp" alt="Offering" className="w-128  h-auto object-cover rounded-sm shrink-0" />
            <div className="flex flex-col gap-4">
              <h3 className="text-gray-600 font-stylish tracking-tighter text-xl font-semibold">Offering {i}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Line one of the description for this particular offering card goes here clearly.<br />
                Line two continues with additional details and context.
              </p>
              <div><Button href="#" text="learn more" variant="gray" /></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default OurOfferings
