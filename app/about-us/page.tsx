import type { Metadata } from 'next'
import Image from 'next/image'
import Button from '../components/Button'
import Footer from '../components/Footer'
import Header from '../components/Header'
import CTA from '../homecomponents/CTA'
import Hero from '../homecomponents/Hero'

export const metadata: Metadata = {
  title: 'About Us | Microtex International',
  description:
    'Learn about Microtex International, its packaging machinery, spare parts and services for tobacco and confectionery industries.',
}

const values = [
  {
    title: 'OUR VISION',
    text: 'Sustain our vision through continual learning, new technologies and the application of sound business practices.',
  },
  {
    title: 'OUR MISSION',
    text: 'Develop diversified markets that provide stability and returns, support our vision and create opportunities for employees.',
  },
  {
    title: 'OUR VALUES',
    text: 'Provide a pleasant, nurturing and growth-oriented environment where people can do their best work and grow professionally.',
  },
]

const partnershipSteps = [
  {
    number: '01',
    title: 'CUSTOM DESIGN',
    text: 'Shape machinery and plant-related systems around customer requirements.',
  },
  {
    number: '02',
    title: 'MANUFACTURING',
    text: 'Develop and supply secondary processing equipment for packaging lines.',
  },
  {
    number: '03',
    title: 'INSTALLATION',
    text: 'Support the installation and integration of equipment and systems.',
  },
  {
    number: '04',
    title: 'ONGOING SUPPORT',
    text: 'Provide related spare parts and services for makers and packers.',
  },
]

export default function AboutUsPage() {
  return (
    <>
      <Header />
      <main>
        <Hero title="ABOUT US" imageSrc="/aboutherofinal.webp" imageAlt="Microtex International cigarette machinery" darkOverlay />

        <section className="bg-white px-6 py-12 font-stylish tracking-tighter sm:px-10 sm:py-16 lg:px-16 xl:px-24">
          <div className="grid items-start gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
            <div>
              <h2 className="max-w-xl text-2xl font-semibold leading-tight text-gray-600 uppercase sm:text-4xl">
                A partner for making and packaging machinery
              </h2>
            </div>
            <div className="font-sans text-base leading-relaxed text-gray-800 sm:text-lg">
              <p>
                Microtex International supplies quality machinery and related services for industries including tobacco and confectionery. The company specializes in the design, development and supply of secondary processing machinery, including wrappers, over-wrappers, case packers and flexi conveyor systems.
              </p>
              <p className="mt-4">
                Microtex also offers one-stop-shop arrangements, spare parts and services for makers and packers, while investing in new products and services to improve the operating capabilities of its businesses.
              </p>
              <div className="mt-6">
                <Button href="/services" text="EXPLORE OUR SERVICES" />
              </div>
            </div>
          </div>

          <div className="relative mt-10 aspect-[16/8] w-full overflow-hidden bg-white sm:mt-12">
            <Image
              src="/floorblue.webp"
              alt="Blue-lit factory floor with cigarette machinery"
              fill
              sizes="(max-width: 640px) 100vw, 90vw"
              className="object-cover object-center"
            />
          </div>
        </section>

        <section className="bg-gray-50 px-6 py-12 font-stylish tracking-tighter sm:px-10 sm:py-16 lg:px-16 xl:px-24">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-lg font-semibold leading-tight text-gray-600 uppercase sm:text-4xl [text-wrap:balance]">
              ONE PARTNER COMPLETE SOLUTION, SEAMLESS CIGARETTE MANUFACTURING & PACKING
            </h2>
            <p className="mx-auto mt-5 max-w-3xl font-sans text-base leading-relaxed text-gray-800 sm:text-lg">
              Microtex works to grow its products and services, strengthen the markets it serves and support its people.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {values.map((value) => (
              <article key={value.title} className="bg-white p-6 sm:p-7">
                <h3 className="text-lg font-semibold leading-tight text-gray-600 uppercase">{value.title}</h3>
                <p className="mt-4 font-sans text-base leading-relaxed text-gray-800">{value.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-white px-6 py-12 font-stylish tracking-tighter sm:px-10 sm:py-16 lg:px-16 xl:px-24">
          <div className="grid items-start gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
            <div>
              <h2 className="max-w-xl text-2xl font-semibold leading-tight text-gray-600 uppercase sm:text-4xl">
                From design through delivery
              </h2>
            </div>
            <p className="font-sans text-base leading-relaxed text-gray-800 sm:text-lg">
              Microtex provides turnkey solutions through custom design, manufacturing, installation and support of plant-related systems.
            </p>
          </div>
          <div className="mt-9 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {partnershipSteps.map((step) => (
              <article key={step.number} className="flex min-h-56 flex-col bg-gray-100 p-5 sm:p-6">
                <h3 className="text-lg font-semibold leading-tight text-gray-600 uppercase">{step.title}</h3>
                <p className="mt-3 font-sans text-sm leading-relaxed text-gray-800">{step.text}</p>
                <p className="mt-auto pt-8 text-3xl font-semibold leading-none text-gray-600">{step.number}</p>
              </article>
            ))}
          </div>
        </section>
        <CTA />
      </main>
      <Footer />
    </>
  )
}
