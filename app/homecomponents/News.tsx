import { newsEvents } from './newsEvents'
import Link from 'next/link'

const News = () => {
  const events = Array.isArray(newsEvents) ? newsEvents : []

  return (
    <div className="mt-10 bg-white px-4 py-8 font-stylish sm:mt-16 sm:px-8 lg:px-24">
      <div className="mb-6 flex justify-end">
        <Link href="/news" className="text-base font-semibold text-gray-700 underline underline-offset-4 transition-colors hover:text-red-700">
          VIEW ALL EVENTS
        </Link>
      </div>
      <div className="grid w-full grid-cols-1 gap-8 sm:grid-cols-3">
        {events.slice(0, 3).map((event) => (
          <Link key={event.dateTime} href={`/news/${event.slug}`} className="flex min-w-0 flex-col gap-3">
            <h3 className="text-xl font-semibold leading-tight tracking-tighter text-gray-600 uppercase sm:text-2xl">{event.name}</h3>
            <div className="aspect-[5/3] w-full rounded-sm overflow-hidden">
              <img src={event.image} alt={event.imageAlt} className="w-full h-full object-cover" />
            </div>
            <p className="text-base leading-tight tracking-tighter text-gray-800 sm:text-lg">
              {event.date}<br />
              {event.stand ? `${event.stand} · ` : ''}{event.location}<br />
              <span className="underline">View event</span>
            </p>
          </Link>
        ))}
      </div>

    </div>
  )
}

export default News
