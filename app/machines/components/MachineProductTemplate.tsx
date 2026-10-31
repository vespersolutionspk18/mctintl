import Image from 'next/image'
import Link from 'next/link'
import MachineHeroImages, { type MachineProductImage } from './MachineHeroImages'

export type RelatedMachine = {
  title: string
  image: string
  imageAlt: string
  href: string
}

export type MachineProductTemplateProps = {
  title: string
  heroImage: string
  heroImageAlt: string
  capabilities: { image: string; text: string }[]
  description: string
  overview: string
  basicInfo: { label: string; value: string }[]
  technicalData: { label: string; value: string }[]
  features: string[]
  gallery: MachineProductImage[]
  relatedMachines: RelatedMachine[]
}

function DataTable({ rows, label }: { rows: { label: string; value: string }[]; label: string }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse border border-gray-300 text-left font-sans text-base leading-tight tracking-tighter sm:text-lg">
        <caption className="sr-only">{label}</caption>
        <tbody>
          {rows.map((row) => (
            <tr key={row.label}>
              <th scope="row" className="w-[42%] border border-gray-300 bg-gray-50 px-3 py-2 align-top font-semibold text-gray-800">
                {row.label}
              </th>
              <td className="border border-gray-300 px-3 py-2 text-gray-800">{row.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default function MachineProductTemplate({
  title,
  heroImage,
  heroImageAlt,
  capabilities,
  description,
  overview,
  basicInfo,
  technicalData,
  features,
  gallery,
  relatedMachines,
}: MachineProductTemplateProps) {
  const renderFeature = (feature: string) => (
    <li key={feature} className="list-disc marker:text-gray-500">{feature}</li>
  )

  return (
    <>
      <section className="relative w-full overflow-hidden bg-white lg:aspect-[1983/793]">
        <div className="relative flex flex-col lg:absolute lg:inset-0">
          <div className="relative z-10 w-full px-4 pt-5 font-stylish leading-tight tracking-tighter text-gray-600 sm:px-6 lg:w-[48%] lg:px-16 lg:pt-8">
            <h1 className="max-w-full text-3xl font-semibold uppercase leading-tight tracking-tighter sm:text-4xl">{title}</h1>
          </div>
          <div className="relative ml-auto mt-2 h-56 w-full sm:h-72 lg:absolute lg:inset-y-0 lg:right-0 lg:m-0 lg:h-full lg:w-[54%]">
            <MachineHeroImages images={[{ src: heroImage, alt: heroImageAlt }, ...gallery]} />
          </div>
          <div className="relative z-10 w-full px-4 sm:px-6 lg:w-[48%] lg:px-16">
            <p className="mt-3 font-sans text-base leading-relaxed tracking-tighter text-gray-800 sm:text-lg sm:leading-tight">{description}</p>
            <p className="mt-3 pb-5 font-sans text-base leading-relaxed tracking-tighter text-gray-800 sm:text-lg sm:leading-tight lg:pb-8">{overview}</p>
          </div>
          <div role="group" aria-label="Machine capabilities" className="grid w-full grid-cols-2 gap-2 px-4 pb-3 sm:grid-cols-3 sm:px-6 lg:mt-0 lg:w-[48%] lg:grid-cols-5 lg:px-16 lg:pb-0">
            {capabilities.map((capability) => (
              <div key={capability.text} className="min-w-0 bg-gray-100 p-1 sm:p-1.5">
                <Image
                  src={capability.image}
                  alt=""
                  width={36}
                  height={36}
                  className="h-8 w-8 object-cover sm:h-9 sm:w-9"
                />
                <p className="mt-1 font-sans text-[13px] leading-tight tracking-tighter text-gray-800 sm:text-sm">{capability.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-8 sm:px-10 lg:px-16 xl:px-24">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10">
          <div>
            <h2 className="font-stylish text-2xl font-semibold leading-tight tracking-tighter text-gray-600">TECHNICAL DATA</h2>
            <DataTable rows={technicalData} label={`${title} technical data`} />
          </div>
          <div>
            <h2 className="font-stylish text-2xl font-semibold leading-tight tracking-tighter text-gray-600">BASIC INFO</h2>
            <DataTable rows={basicInfo} label={`${title} basic information`} />
            <h2 className="mt-8 font-stylish text-2xl font-semibold leading-tight tracking-tighter text-gray-600">FEATURES</h2>
            <ul className="mt-3 pl-5 font-sans text-lg leading-tight tracking-tighter text-gray-800 sm:hidden">
              {features.map(renderFeature)}
            </ul>
              <div className="mt-3 hidden grid-cols-2 gap-x-8 font-sans text-base leading-relaxed tracking-tighter text-gray-800 sm:grid sm:text-lg sm:leading-tight">
              <ul className="pl-5">{features.filter((_, index) => index % 2 === 0).map(renderFeature)}</ul>
              <ul className="pl-5">{features.filter((_, index) => index % 2 === 1).map(renderFeature)}</ul>
            </div>
          </div>
        </div>
      </section>

      {relatedMachines.length > 0 && (
        <section aria-labelledby="related-machines-title" className="bg-white px-4 py-12 sm:px-10 sm:py-20 lg:px-16 lg:py-28 xl:px-24">
          <h2 id="related-machines-title" className="font-stylish text-2xl font-semibold leading-tight tracking-tighter text-gray-600">RELATED MACHINES</h2>
          <div className="mt-8 grid grid-cols-1 gap-5 sm:mt-12 md:grid-cols-3 md:gap-4">
            {relatedMachines.map((machine) => (
              <Link
                key={machine.href}
                href={machine.href}
                aria-label={`View ${machine.title}`}
                className="group block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 focus-visible:ring-offset-4"
              >
                <h3 className="mb-2 text-center font-stylish text-base font-semibold leading-tight tracking-tighter text-gray-700 group-hover:underline group-focus-visible:underline sm:mb-3 sm:text-lg">{machine.title}</h3>
                <div className="relative h-48 w-full overflow-hidden sm:h-64">
                  <Image
                    src={machine.image}
                    alt={machine.imageAlt}
                    fill
                    sizes="(max-width: 640px) 100vw, 33vw"
                    className="object-contain object-center"
                  />
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </>
  )
}
