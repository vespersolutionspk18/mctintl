import { newsEvents } from './newsEvents'

const News = () => {
  const events = Array.isArray(newsEvents) ? newsEvents : []

  return (
    <div className="mt-10 bg-white px-4 py-8 font-stylish sm:mt-16 sm:px-8 lg:px-24">
      <div className="grid w-full grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-4">
        {events.map((event) => (
          <div key={event.dateTime} className="flex min-w-0 flex-col gap-3">
            <h3 className="text-xl font-semibold leading-tight tracking-tighter text-gray-600 sm:text-2xl">{event.date}</h3>
            <div className="aspect-[5/3] w-full rounded-sm overflow-hidden">
              <img src={event.image} alt={event.imageAlt} className="w-full h-full object-cover" />
            </div>
            <p className="text-base leading-tight tracking-tighter text-gray-800 sm:text-lg">
              {event.stand} — {event.location}<br />
              <a href={event.href} target="_blank" rel="noreferrer" className="underline hover:text-gray-600">{event.linkLabel}</a>
            </p>
          </div>
        ))}
      </div>

    </div>
  )
}

export default News
