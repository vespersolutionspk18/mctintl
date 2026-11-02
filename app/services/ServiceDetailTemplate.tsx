import Image from 'next/image'
import Button from '../components/Button'

export type ServiceDetailSection = {
  title: string
  text?: string
  items?: string[]
}

type ServiceDetailTemplateProps = {
  title: string
  description: string
  overview?: string
  heroAdditional?: string
  image: string
  imageAlt: string
  sections: ServiceDetailSection[]
}

export default function ServiceDetailTemplate({
  title,
  description,
  overview,
  heroAdditional,
  image,
  imageAlt,
  sections,
}: ServiceDetailTemplateProps) {
  return (
    <>
      <section className="relative w-full overflow-hidden bg-white lg:aspect-[1983/793]">
        <div className="relative flex flex-col lg:absolute lg:inset-0">
          <div className="relative z-10 w-full px-4 py-5 font-stylish leading-tight tracking-tighter text-gray-600 sm:px-6 lg:w-[48%] lg:px-16 lg:py-8">
            <h1 className="max-w-full text-3xl font-semibold uppercase leading-tight tracking-tighter sm:text-4xl">
              {title}
            </h1>
            <p className="mt-3 font-sans text-base leading-relaxed tracking-tighter text-gray-800 sm:text-lg sm:leading-tight">
              {description}
            </p>
            {overview && (
              <p className="mt-3 font-sans text-base leading-relaxed tracking-tighter text-gray-800 sm:text-lg sm:leading-tight">
                {overview}
              </p>
            )}
            {heroAdditional && (
              <p className="mt-3 font-sans text-base leading-relaxed tracking-tighter text-gray-800 sm:text-lg sm:leading-tight">
                {heroAdditional}
              </p>
            )}
          </div>
          <div className="relative ml-auto h-56 w-full sm:h-72 lg:absolute lg:inset-y-0 lg:right-0 lg:m-0 lg:h-full lg:w-[54%]">
            <Image
              src={image}
              alt={imageAlt}
              fill
              priority
              sizes="(max-width: 1023px) 76vw, 54vw"
              className="object-contain object-center"
            />
          </div>
        </div>
      </section>

      {sections.length > 0 && (
        <section className="bg-white px-6 py-8 sm:px-10 lg:px-16 xl:px-24">
          <div className="mx-auto max-w-6xl">
            {sections.map((section) => (
              <article
                key={section.title}
                className="grid grid-cols-1 gap-4 border-b border-gray-200 py-7 sm:gap-8 lg:grid-cols-[0.8fr_1.2fr]"
              >
                <h2 className="font-stylish text-2xl font-semibold leading-tight tracking-tighter text-gray-600">
                  {section.title}
                </h2>
                <div className="min-w-0">
                  {section.text && (
                    <p className="font-sans text-lg leading-tight tracking-tighter text-gray-800">
                      {section.text}
                    </p>
                  )}
                  {section.items && (
                    <ul className="grid list-disc list-outside grid-cols-1 gap-x-8 gap-y-2 font-sans text-lg leading-tight tracking-tighter text-gray-800 marker:text-gray-500 sm:grid-cols-2">
                      {section.items.map((item) => <li key={item}>{item}</li>)}
                    </ul>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>
      )}

      <div className="px-4 py-8 sm:px-8 sm:py-12 lg:p-24">
        <section
          className="relative w-full bg-cover bg-center bg-no-repeat px-6 py-10 font-stylish text-white sm:px-16"
          style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(/floorblue.png)' }}
        >
          <div className="mx-auto flex max-w-4xl flex-col items-start gap-4">
            <p className="font-sans text-lg leading-tight tracking-tighter text-gray-300">
              HIGHEST QUALITY FOR THE BEST PRICE
            </p>
            <h2 className="text-2xl font-semibold leading-tight tracking-tighter text-white">
              GET IN TOUCH
            </h2>
            <Button href="/contact" text="CONTACT US NOW" variant="white" />
          </div>
        </section>
      </div>
    </>
  )
}
