import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import CTA from '../../../homecomponents/CTA'
import MachineProductTemplate from '../../components/MachineProductTemplate'
import { getUtilityAccessoryProduct, utilityAccessoryProducts } from '../machineData'

export function generateStaticParams() {
  return utilityAccessoryProducts.map(({ slug }) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const product = getUtilityAccessoryProduct(slug)
  if (!product) return {}

  return {
    title: `${product.title} | Microtex International`,
    description: product.metaDescription,
  }
}

export default async function UtilityAccessoryProductPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const product = getUtilityAccessoryProduct(slug)
  if (!product) notFound()

  return (
    <>
      <Header />
      <main>
        <MachineProductTemplate {...product} />
        <CTA compact />
      </main>
      <Footer />
    </>
  )
}
