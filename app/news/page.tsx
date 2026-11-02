import type { Metadata } from 'next'
import Image from 'next/image'
import Footer from '../components/Footer'
import Header from '../components/Header'
import CTA from '../homecomponents/CTA'
import Hero from '../homecomponents/Hero'
import { newsEvents } from '../homecomponents/newsEvents'

export const metadata: Metadata = {
  title: 'News & Events | Microtex International',
  description: 'Meet Microtex International at upcoming and past industry events.',
}

export default function NewsPage() {
  const events = Array.isArray(newsEvents) ? newsEvents : []

  return (
    <>
      <Header />
      <main>
        <Hero title="NEWS" imageSrc="/abouthero.webp" imageAlt="Microtex International building exterior" darkOverlay />

        <section className="bg-white px-6 py-10 font-stylish tracking-tighter sm:px-10 sm:py-14 lg:px-16 xl:px-24">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-2xl font-semibold leading-tight text-gray-600 sm:text-3xl">
              EVENTS
            </h2>
            <div className="mt-8 grid grid-cols-1 gap-5 lg:grid-cols-[minmax(0,1.6fr)_minmax(320px,1fr)]">
              {events[0] && (
                <article className="min-w-0 overflow-hidden border border-gray-200 bg-white">
                  <div className="relative aspect-[16/9] w-full">
                    <Image
                      src={events[0].image}
                      alt={events[0].imageAlt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 65vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="p-5 sm:p-6 lg:p-7">
                    <h3 className="text-2xl font-semibold leading-tight text-gray-700 sm:text-3xl">
                      <time dateTime={events[0].dateTime}>{events[0].date}</time>
                    </h3>
                    <p className="mt-3 font-sans text-base leading-tight text-gray-800 sm:text-lg">
                      {events[0].stand} · {events[0].location}
                    </p>
                    <a
                      href={events[0].href}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-4 inline-block font-sans text-base text-gray-800 underline transition-colors hover:text-red-700"
                    >
                      {events[0].linkLabel}
                    </a>
                  </div>
                </article>
              )}

              {events.length > 1 && (
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-1">
                  {events.slice(1).map((event) => (
                    <article key={event.dateTime} className="grid min-w-0 grid-cols-[7rem_minmax(0,1fr)] gap-4 border border-gray-200 bg-white p-3 sm:grid-cols-[8rem_minmax(0,1fr)]">
                      <div className="relative aspect-[4/3] w-full self-start">
                        <Image
                          src={event.image}
                          alt={event.imageAlt}
                          fill
                          sizes="(max-width: 640px) 112px, 128px"
                          className="object-cover"
                        />
                      </div>
                      <div className="flex min-w-0 flex-col items-start justify-center">
                        <h3 className="text-base font-semibold leading-tight text-gray-700 sm:text-lg">
                          <time dateTime={event.dateTime}>{event.date}</time>
                        </h3>
                        <p className="mt-2 font-sans text-sm leading-tight text-gray-800 sm:text-base">
                          {event.stand} · {event.location}
                        </p>
                        <a
                          href={event.href}
                          target="_blank"
                          rel="noreferrer"
                          className="mt-2 inline-block font-sans text-sm text-gray-800 underline transition-colors hover:text-red-700 sm:text-base"
                        >
                          {event.linkLabel}
                        </a>
                      </div>
                    </article>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>
        <CTA />
      </main>
      <Footer />
    </>
  )
}
