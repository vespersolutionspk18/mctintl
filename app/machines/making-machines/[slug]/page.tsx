import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import CTA from '../../../homecomponents/CTA'
import MachineProductTemplate from '../../components/MachineProductTemplate'
import { getMakingMachineProduct, makingMachineProducts } from '../machineData'

export function generateStaticParams() {
  return makingMachineProducts.map(({ slug }) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const product = getMakingMachineProduct(slug)
  if (!product) return {}

  return {
    title: `${product.title} | Microtex International`,
    description: product.metaDescription,
  }
}

export default async function MakingMachineProductPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const product = getMakingMachineProduct(slug)
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
