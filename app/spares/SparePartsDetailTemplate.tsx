import Image from 'next/image'
import Button from '../components/Button'
import type { SparePartCategory } from './sparePartsData'

function SpecificationTable({
  title,
  headers,
  rows,
}: {
  title: string
  headers: string[]
  rows: string[][]
}) {
  return (
    <div className="mt-6 sm:mt-10">
      <h3 className="mb-4 font-stylish text-xl font-semibold leading-tight tracking-tighter text-gray-600">
        {title}
      </h3>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[38rem] border-collapse border border-gray-300 text-left font-sans text-base leading-tight tracking-tighter text-gray-800">
          <thead>
            <tr>
              {headers.map((header) => (
                <th key={header} scope="col" className="border border-gray-300 bg-gray-100 px-3 py-3 font-semibold">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr key={`${row[0]}-${index}`}>
                {row.map((cell, cellIndex) => (
                  <td key={`${cell}-${cellIndex}`} className="border border-gray-300 px-3 py-2.5">
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default function SparePartsDetailTemplate({ category }: { category: SparePartCategory }) {
  const hasIntroContent = Boolean(category.highlights?.length || category.tables?.length)

  return (
    <>
      <section className="relative w-full overflow-hidden bg-white lg:aspect-[1983/793]">
        <div className="relative flex flex-col lg:absolute lg:inset-0">
          <div className="relative z-10 w-full px-4 py-5 font-stylish leading-tight tracking-tighter text-gray-600 sm:px-6 lg:w-[48%] lg:px-16 lg:py-8">
            <h1 className="max-w-full text-3xl font-semibold uppercase leading-tight tracking-tighter sm:text-4xl">
              {category.title}
            </h1>
            <p className="mt-3 font-sans text-base leading-relaxed tracking-tighter text-gray-800 sm:text-lg sm:leading-tight">
              {category.description}
            </p>
            <p className="mt-3 font-sans text-base leading-relaxed tracking-tighter text-gray-800 sm:text-lg sm:leading-tight">
              {category.detailIntro}
            </p>
          </div>
          <div className="relative ml-auto h-56 w-full sm:h-72 lg:absolute lg:inset-y-0 lg:right-0 lg:m-0 lg:h-full lg:w-[54%]">
            <Image
              src={category.image}
              alt={category.imageAlt}
              fill
              priority
              sizes="(max-width: 1023px) 76vw, 54vw"
              className="object-contain object-center"
            />
          </div>
        </div>
      </section>

      <section className="bg-white px-6 pb-10 pt-0 sm:px-10 sm:pb-12 sm:pt-2 lg:px-16 xl:px-24">
        <div className="mx-auto max-w-6xl">
          {category.highlights && (
            <div className="mt-2">
              <h3 className="font-stylish text-xl font-semibold leading-tight tracking-tighter text-gray-600">
                GARNITURE TAPE FEATURES
              </h3>
              <ul className="mt-4 grid list-disc grid-cols-1 gap-x-8 gap-y-2 pl-5 font-sans text-lg leading-tight tracking-tighter text-gray-800 sm:grid-cols-2 lg:grid-cols-3">
                {category.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
              </ul>
            </div>
          )}
          {category.tables?.map((table) => (
            <SpecificationTable key={table.title} {...table} />
          ))}
          {category.parts.length > 0 && (
            <div className={hasIntroContent ? 'mt-4' : 'mt-0'}>
              <h2 className="font-stylish text-2xl font-semibold leading-tight tracking-tighter text-gray-600">
                PARTS CATALOGUE
              </h2>
              <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4 xl:grid-cols-5">
                {category.parts.map((part, index) => (
                  <figure key={`${part.image}-${index}`} className="min-w-0 border border-gray-200 bg-white p-3 sm:p-4">
                    <div className="relative aspect-[4/3] w-full bg-white">
                      <Image
                        src={part.image}
                        alt={part.imageAlt}
                        fill
                        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                        className="object-contain"
                      />
                    </div>
                    <figcaption className="mt-3 font-sans text-sm font-medium leading-tight tracking-tight text-gray-800 sm:text-base">
                      {part.title}
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <div className="px-4 py-8 sm:px-8 sm:py-12 lg:p-24">
        <section
          className="relative w-full bg-cover bg-center bg-no-repeat px-6 py-10 font-stylish text-white sm:px-16 sm:py-24"
          style={{ backgroundImage: 'url(/cigarette-packing-factory.webp)' }}
        >
          <div className="mx-auto flex max-w-4xl flex-col items-start gap-6">
            <p className="font-sans text-lg leading-tight tracking-tighter text-gray-300">
              HIGHEST QUALITY FOR THE BEST PRICE
            </p>
            <h2 className="text-3xl font-semibold leading-tight tracking-tighter text-white sm:text-5xl">
              NEED A SPARE PART?
            </h2>
            <p className="max-w-2xl font-sans text-lg leading-tight tracking-tighter text-gray-200 sm:text-xl">
              Contact our team with your machine model and the part you need.
            </p>
            <Button href="/contact" text="CONTACT US NOW" variant="white" />
          </div>
        </section>
      </div>
    </>
  )
}
