import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
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
            <h2 className="text-2xl font-semibold leading-tight text-gray-600 uppercase sm:text-3xl">
              EVENTS
            </h2>
            <div className="mt-8 space-y-6">
              {events.map((event) => {
                const sidePhotos = event.photos.slice(1, 4)
                const mobileColumns = sidePhotos.length === 1
                  ? 'grid-cols-1'
                  : sidePhotos.length === 2
                    ? 'grid-cols-2'
                    : 'grid-cols-3'
                const desktopAspect = sidePhotos.length === 1
                  ? 'sm:aspect-[8/9]'
                  : sidePhotos.length === 2
                    ? 'sm:aspect-[16/9]'
                    : 'sm:aspect-[8/3]'

                return (
                  <Link key={event.dateTime} href={`/news/${event.slug}`} className="block min-w-0 overflow-hidden border border-gray-200 bg-white">
                    <div className={`grid grid-cols-1 gap-2 ${sidePhotos.length ? 'sm:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]' : ''}`}>
                      <div className="relative aspect-[16/9] w-full">
                        <Image
                          src={event.image}
                          alt={event.imageAlt}
                          fill
                          sizes="(max-width: 640px) 100vw, 66vw"
                          className="object-cover"
                        />
                      </div>
                      {sidePhotos.length > 0 && (
                        <div className={`grid ${mobileColumns} gap-2 sm:grid-cols-1`}>
                          {sidePhotos.map((photo) => (
                            <div key={photo.src} className={`relative aspect-[4/3] w-full ${desktopAspect}`}>
                              <Image
                                src={photo.src}
                                alt={photo.alt}
                                fill
                                sizes="(max-width: 640px) 33vw, 34vw"
                                className="object-cover"
                              />
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                    <div className="p-5 sm:p-6 lg:p-7">
                      <h3 className="text-2xl font-semibold leading-tight text-gray-700 uppercase sm:text-3xl">
                        {event.name}
                      </h3>
                      <p className="mt-3 font-sans text-base leading-tight text-gray-800 sm:text-lg">
                        <time dateTime={event.dateTime}>{event.date}</time><br />
                        {event.stand ? `${event.stand} · ` : ''}{event.location}
                      </p>
                      <span className="mt-4 inline-block font-sans text-base text-gray-800 underline transition-colors hover:text-red-700">
                        View event
                      </span>
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>
        <CTA />
      </main>
      <Footer />
    </>
  )
}
