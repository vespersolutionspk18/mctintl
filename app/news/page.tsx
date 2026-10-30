import type { Metadata } from 'next'
import Image from 'next/image'
import Footer from '../components/Footer'
import Header from '../components/Header'
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
        <Hero title="NEWS" imageAlt="Microtex International cigarette machinery" />

        <section className="bg-white px-6 py-10 font-stylish tracking-tighter sm:px-10 sm:py-14 lg:px-16 xl:px-24">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-2xl font-semibold leading-tight text-gray-600 sm:text-3xl">
              EVENTS
            </h2>
            <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
              {events.map((event) => (
                <article key={event.dateTime} className="min-w-0 border border-gray-200 bg-white">
                  <div className="relative aspect-[5/3] w-full">
                    <Image
                      src={event.image}
                      alt={event.imageAlt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4 sm:p-5">
                    <h3 className="text-xl font-semibold leading-tight text-gray-700 sm:text-2xl">
                      <time dateTime={event.dateTime}>{event.date}</time>
                    </h3>
                    <p className="mt-3 font-sans text-base leading-tight text-gray-800">
                      {event.stand} · {event.location}
                    </p>
                    <a
                      href={event.href}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-4 inline-block font-sans text-base text-gray-800 underline transition-colors hover:text-red-700"
                    >
                      {event.linkLabel}
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
