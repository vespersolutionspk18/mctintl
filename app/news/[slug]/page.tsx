import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import CTA from '../../homecomponents/CTA'
import Hero from '../../homecomponents/Hero'
import { newsEvents } from '../../homecomponents/newsEvents'

type EventPageProps = {
  params: Promise<{ slug: string }>
}

export const instant = false

export function generateStaticParams() {
  return newsEvents.map(({ slug }) => ({ slug }))
}

export async function generateMetadata({ params }: EventPageProps): Promise<Metadata> {
  const { slug } = await params
  const event = newsEvents.find((item) => item.slug === slug)

  if (!event) return {}

  return {
    title: `${event.name} ${event.dateTime.slice(0, 4)} | Microtex International`,
    description: event.description,
  }
}

export default async function EventPage({ params }: EventPageProps) {
  const { slug } = await params
  const event = newsEvents.find((item) => item.slug === slug)

  if (!event) notFound()

  const year = event.dateTime.slice(0, 4)
  const subtitle = event.photoYear
    ? `PHOTOS FROM THE ${event.photoYear} EDITION`
    : undefined

  return (
    <>
      <Header />
      <main>
        <Hero
          title={`${event.name.toUpperCase()} ${year}`}
          imageSrc={event.image}
          imageAlt={event.imageAlt}
          darkOverlay
          subtitle={subtitle}
        />

        <section className="bg-white px-6 py-10 font-stylish tracking-tighter sm:px-10 sm:py-14 lg:px-16 xl:px-24">
          <div className="mx-auto max-w-7xl">
            <p className="max-w-4xl text-lg leading-relaxed text-gray-700 sm:text-xl">
              {event.description}
            </p>
            <p className="mt-4 font-sans text-base leading-relaxed text-gray-700 sm:text-lg">
              <time dateTime={event.dateTime}>{event.date}</time>
              {' · '}{event.location}
              {event.stand ? ` · ${event.stand}` : ''}
            </p>
            <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 font-sans text-base">
              <Link href="/news" className="text-gray-800 underline hover:text-red-700">
                All events
              </Link>
            </div>

            {event.photos.length > 1 && (
              <div className="mt-10 sm:mt-12">
                <h2 className="text-2xl font-semibold leading-tight text-gray-700 uppercase sm:text-3xl">
                  {event.photoYear ? `Photos from the ${event.photoYear} edition` : 'Event photos'}
                </h2>
                <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {event.photos.slice(1).map((photo) => (
                    <div key={photo.src} className="relative aspect-[4/3] w-full overflow-hidden bg-gray-100">
                      <Image
                        src={photo.src}
                        alt={photo.alt}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
        <CTA />
      </main>
      <Footer />
    </>
  )
}
