import React from 'react'

const About = () => {
  return (
    <div className="bg-white px-4 py-8 font-stylish tracking-tighter sm:px-8 sm:py-10 lg:px-24">
        <h5 className="text-xl font-semibold text-gray-600 sm:text-2xl">
            ABOUT US
        </h5>
        <p className="mt-4 font-sans text-base leading-relaxed text-gray-800 sm:mt-6 sm:text-lg">Microtex International supplies superior turnkey solutions through custom design, manufacturing, installation and support of plant-related systems. From high-speed packaging lines to precision wrappers and case packers, Microtex delivers custom solutions backed by decades of engineering expertise, setting new industry benchmarks for reliability and performance.</p>
        <img src="/aboutimage.webp" alt="About" className="mt-6 w-full sm:mt-8" />
    </div>
  )
}

export default About
