export type NewsEvent = {
  date: string
  dateTime: string
  location: string
  stand: string
  href: string
  linkLabel: string
  image: string
  imageAlt: string
}

export const newsEvents: NewsEvent[] = [
  {
    date: '10–11 November 2026',
    dateTime: '2026-11-10',
    location: 'Dubai, UAE',
    stand: 'Stand 3020',
    href: 'https://wtprocessandmachinery.com/middle-east/exhibitors/37870/microtex-international-fze',
    linkLabel: 'Exhibitor profile',
    image: '/cigarette-making-line.webp',
    imageAlt: 'Cigarette making line',
  },
  {
    date: '11–12 November 2025',
    dateTime: '2025-11-11',
    location: 'Dubai, UAE',
    stand: 'Stand G25',
    href: 'https://wtprocessandmachinery.com/content-images/main/WTME-WCS-Show-Catalogue-2025.pdf',
    linkLabel: 'Show catalogue',
    image: '/mk8d-cigarette-maker.webp',
    imageAlt: 'MK8D cigarette making machine',
  },
  {
    date: '12–13 November 2024',
    dateTime: '2024-11-12',
    location: 'Dubai, UAE',
    stand: 'Stand R15',
    href: 'https://wtprocessandmachinery.com/content-images/main/2024-Dubai-proof-2.pdf',
    linkLabel: 'Show catalogue',
    image: '/cigarette-packing-factory.webp',
    imageAlt: 'Cigarette packing factory line',
  },
  {
    date: '27–28 November 2023',
    dateTime: '2023-11-27',
    location: 'Dubai, UAE',
    stand: 'Stand U25',
    href: 'https://wtprocessandmachinery.com/content-images/main/WTME23_ShowCatalogueFinal.pdf',
    linkLabel: 'Show catalogue',
    image: '/microtex-case-packer-mti-cp06-1.webp',
    imageAlt: 'Microtex case packing machine',
  },
]
