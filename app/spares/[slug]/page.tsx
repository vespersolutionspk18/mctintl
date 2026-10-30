import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import SparePartsDetailTemplate from '../SparePartsDetailTemplate'
import { getSparePartCategory, sparePartCategories } from '../sparePartsData'

export function generateStaticParams() {
  return sparePartCategories.map(({ slug }) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const category = getSparePartCategory(slug)
  if (!category) return {}

  return {
    title: `${category.title} | Microtex International`,
    description: category.metaDescription,
  }
}

export default async function SparePartCategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const category = getSparePartCategory(slug)
  if (!category) notFound()

  return (
    <>
      <Header />
      <main>
        <SparePartsDetailTemplate category={category} />
      </main>
      <Footer />
    </>
  )
}
