export type ExhibitionPhoto = {
  src: string
  alt: string
}

export type NewsEvent = {
  slug: string
  name: string
  description: string
  date: string
  dateTime: string
  location: string
  stand?: string
  image: string
  imageAlt: string
  photos: ExhibitionPhoto[]
  photoYear?: number
}

const exhibitionPhoto = (year: number, filename: string, alt: string): ExhibitionPhoto => ({
  src: encodeURI(`/Exhibition Pictures Microtex Intl/expo ${year}/${filename}`),
  alt,
})

type EventDraft = Omit<NewsEvent, 'image' | 'imageAlt'>

const exhibition = (event: EventDraft): NewsEvent => ({
  ...event,
  image: event.photos[0].src,
  imageAlt: event.photos[0].alt,
})

export const newsEvents: NewsEvent[] = [
  exhibition({
    slug: 'world-tobacco-middle-east-2026',
    name: 'World Tobacco Middle East',
    description: 'Meet Microtex in Dubai at Stand 3020 during World Tobacco Middle East on 10–11 November 2026.',
    date: '10–11 November 2026',
    dateTime: '2026-11-10',
    location: 'Dubai, UAE',
    stand: 'Stand 3020',
    photoYear: 2025,
    photos: [
      exhibitionPhoto(2025, 'World Tobacco  Dubai 2025.jpeg', 'Microtex stand at World Tobacco Middle East, 2025'),
      exhibitionPhoto(2025, 'World Tobacco 2025iv.jpeg', 'Machinery displays at the Microtex Dubai stand, 2025'),
      exhibitionPhoto(2025, 'World Tobacco Dubai 2025iii.jpeg', 'Microtex counter at World Tobacco Middle East, 2025'),
    ],
  }),
  exhibition({
    slug: 'intersupply-germany-2026',
    name: 'InterSupply Germany',
    description: 'Microtex presented machinery and spare parts to visitors at InterSupply in Dortmund.',
    date: '15–17 September 2026',
    dateTime: '2026-09-15',
    location: 'Dortmund, Germany',
    photos: [
      exhibitionPhoto(2026, 'INTERSUPPLY GERMANY 2026.jpeg', 'Microtex team at InterSupply Germany'),
      exhibitionPhoto(2026, 'INTERSUPPLY GERMANY 2026ii.jpeg', 'Visitors meet the Microtex team at InterSupply'),
      exhibitionPhoto(2026, 'INTERSUPPLY GERMANY 2026iii.jpeg', 'Microtex display at InterSupply Germany'),
    ],
  }),
  exhibition({
    slug: 'world-tobacco-middle-east-2025',
    name: 'World Tobacco Middle East',
    description: 'Microtex met trade visitors at Stand G25 during the Dubai exhibition.',
    date: '11–12 November 2025',
    dateTime: '2025-11-11',
    location: 'Dubai, UAE',
    stand: 'Stand G25',
    photos: [
      exhibitionPhoto(2025, 'World Tobacco  Dubai 2025.jpeg', 'Visitors at the Microtex World Tobacco Dubai stand'),
      exhibitionPhoto(2025, 'World Tobacco 2025iv.jpeg', 'Machinery and spare parts at the Microtex stand'),
      exhibitionPhoto(2025, 'World Tobacco Dubai 2025iii.jpeg', 'Microtex counter at the Dubai exhibition'),
    ],
  }),
  exhibition({
    slug: 'tabexpo-switzerland-2025',
    name: 'Tabexpo Switzerland',
    description: 'Microtex displayed machinery and spare parts at Tabexpo in Geneva.',
    date: '8–9 May 2025',
    dateTime: '2025-05-08',
    location: 'Geneva, Switzerland',
    photos: [
      exhibitionPhoto(2025, 'TABEXPO SWITZERLAND 2025.jpeg', 'Visitors at the Microtex stand at Tabexpo Geneva'),
      exhibitionPhoto(2025, 'TABEXPO SWITZERLAND 2025 (2).jpeg', 'Wide view of the Microtex Tabexpo stand'),
      exhibitionPhoto(2025, 'TABEXPO SWITZERLAND 2025,,.jpeg', 'Microtex display at Tabexpo Switzerland'),
    ],
  }),
  exhibition({
    slug: 'intersupply-germany-2025',
    name: 'InterSupply Germany',
    description: 'Photos show the Microtex booth and visitor meetings at InterSupply in Dortmund.',
    date: '18–20 September 2025',
    dateTime: '2025-09-18',
    location: 'Dortmund, Germany',
    photos: [
      exhibitionPhoto(2025, 'INTERSUPPLY GERMANY 2025.jpeg', 'Microtex representative at the InterSupply stand'),
      exhibitionPhoto(2025, 'INTERSUPPLY GERMANY 2025i.jpeg', 'Microtex booth at InterSupply Germany'),
      exhibitionPhoto(2025, 'INTERSUPPLY GERMANY 2025iii.jpeg', 'Visitors pass the Microtex InterSupply display'),
    ],
  }),
  exhibition({
    slug: 'world-tobacco-middle-east-2024',
    name: 'World Tobacco Middle East',
    description: 'Microtex met visitors at Stand R15 during World Tobacco Middle East in Dubai.',
    date: '12–13 November 2024',
    dateTime: '2024-11-12',
    location: 'Dubai, UAE',
    stand: 'Stand R15',
    photos: [
      exhibitionPhoto(2024, 'WORLD TOBACCO DUBAI 2024.jpeg', 'Visitors meet the Microtex team at World Tobacco Dubai'),
      exhibitionPhoto(2024, 'WORLD TOBACCO DUBAI 2024 (2).jpeg', 'Microtex exhibition stand at World Tobacco Dubai'),
      exhibitionPhoto(2024, 'WORLD TOBACCO DUBAI a 2024.jpeg', 'Wide view of the Microtex Dubai stand'),
      exhibitionPhoto(2024, 'WORLD TOBACCO DUBAI b 2024.jpeg', 'Machinery display inside the Microtex stand'),
      exhibitionPhoto(2024, 'WORLD TOBACCO DUBAI c 2024.jpeg', 'Microtex booth with exhibition visitors'),
      exhibitionPhoto(2024, 'WT DUBAI 2024.jpeg', 'Microtex staff at the World Tobacco Dubai stand'),
      exhibitionPhoto(2024, 'World Tobacco  Dubai 2024i.jpeg', 'Visitors talk with Microtex at the Dubai show'),
      exhibitionPhoto(2024, 'World Tobacco Dubai 2024.jpeg', 'Microtex team and visitors at World Tobacco Dubai'),
    ],
  }),
  exhibition({
    slug: 'intersupply-germany-2024',
    name: 'InterSupply Germany',
    description: 'Microtex exhibited at the Dortmund trade fair for tobacco manufacturing and processing.',
    date: '19–21 September 2024',
    dateTime: '2024-09-19',
    location: 'Dortmund, Germany',
    photos: [
      exhibitionPhoto(2024, 'INTERSUPPLY GERMANY 2024.jpeg', 'Microtex stand at InterSupply Germany'),
    ],
  }),
  exhibition({
    slug: 'world-tobacco-africa-2024',
    name: 'World Tobacco Africa',
    description: 'Microtex exhibited at World Tobacco Africa in Harare, Zimbabwe, on 15–16 May 2024.',
    date: '15–16 May 2024',
    dateTime: '2024-05-15',
    location: 'Harare, Zimbabwe',
    photos: [
      exhibitionPhoto(2024, 'World Tobacco Africa 2024.jpeg', 'Microtex stand at World Tobacco Africa in Harare'),
    ],
  }),
  exhibition({
    slug: 'world-tobacco-middle-east-2023',
    name: 'World Tobacco Middle East',
    description: 'Microtex exhibited at World Tobacco Middle East at Stand U25 in Dubai.',
    date: '27–28 November 2023',
    dateTime: '2023-11-27',
    location: 'Dubai, UAE',
    stand: 'Stand U25',
    photos: [
      exhibitionPhoto(2023, 'WT DUBAI 2023.jpeg', 'Microtex booth at World Tobacco Middle East in Dubai'),
    ],
  }),
  exhibition({
    slug: 'intersupply-germany-2023',
    name: 'InterSupply Germany',
    description: 'Photos show the Microtex stand and conversations with visitors at InterSupply in Dortmund.',
    date: '14–16 September 2023',
    dateTime: '2023-09-14',
    location: 'Dortmund, Germany',
    photos: [
      exhibitionPhoto(2023, 'INTERSUPPLY GERMANY 2023.jpeg', 'Microtex exhibition stand at InterSupply Germany'),
      exhibitionPhoto(2023, 'INTERSUPPLY GERMANY 2023i.jpeg', 'Visitors at the Microtex InterSupply booth'),
      exhibitionPhoto(2023, 'INTERSUPPLY GERMANY 2023iv.jpeg', 'Microtex team speaking with visitors'),
      exhibitionPhoto(2023, 'INTERSUPPLY GERMANY 2023...jpeg', 'Product displays at the Microtex InterSupply stand'),
      exhibitionPhoto(2023, 'INTERSUPPLY  GERMANY 2023ii.jpeg', 'Visitors meet at the Microtex stand in Dortmund'),
    ],
  }),
  exhibition({
    slug: 'world-tobacco-middle-east-2022',
    name: 'World Tobacco Middle East',
    description: 'Microtex welcomed visitors to Stand V26 at World Tobacco Middle East in Dubai.',
    date: '15–16 November 2022',
    dateTime: '2022-11-15',
    location: 'Dubai, UAE',
    stand: 'Stand V26',
    photos: [
      exhibitionPhoto(2022, 'WT DUBAI 2022.jpeg', 'Microtex booth at World Tobacco Dubai'),
      exhibitionPhoto(2022, 'WT DUBAI 2022i.jpeg', 'Visitors at the Microtex World Tobacco stand'),
      exhibitionPhoto(2022, 'WT DUBAI 2022ii.jpeg', 'Microtex team speaking with visitors in Dubai'),
      exhibitionPhoto(2022, 'WT DUBAI 2022iii.jpeg', 'Machinery and parts at the Dubai exhibition'),
    ],
  }),
  exhibition({
    slug: 'intersupply-germany-2022',
    name: 'InterSupply Germany',
    description: 'Microtex met visitors at its InterSupply booth in Dortmund.',
    date: '15–17 September 2022',
    dateTime: '2022-09-15',
    location: 'Dortmund, Germany',
    photos: [
      exhibitionPhoto(2022, 'INTERSUPPLY GERMANY 2022.jpeg', 'Microtex stand and representative at InterSupply'),
      exhibitionPhoto(2022, 'INTERSUPPLY GERMANY 2022i.jpeg', 'Microtex display at InterSupply Germany'),
    ],
  }),
  exhibition({
    slug: 'world-tobacco-europe-2022',
    name: 'World Tobacco Europe',
    description: 'Microtex presented its stand at World Tobacco Europe in Sofia, Bulgaria.',
    date: '18–19 May 2022',
    dateTime: '2022-05-18',
    location: 'Sofia, Bulgaria',
    photos: [
      exhibitionPhoto(2022, 'WT BULGARIA 2022.jpeg', 'Microtex team at World Tobacco Europe in Sofia'),
      exhibitionPhoto(2022, 'WT BULGARIA 2022.i.jpeg', 'Visitors meet the Microtex team in Bulgaria'),
      exhibitionPhoto(2022, 'WT BULGAIA 2022.jpeg', 'Microtex display at the Bulgaria exhibition'),
    ],
  }),
  exhibition({
    slug: 'world-tobacco-middle-east-2021',
    name: 'World Tobacco Middle East',
    description: 'Microtex welcomed visitors to its World Tobacco Middle East stand in Dubai.',
    date: '26–27 October 2021',
    dateTime: '2021-10-26',
    location: 'Dubai, UAE',
    photos: [
      exhibitionPhoto(2021, 'WT ME 2021.jpeg', 'Microtex stand with visitors at World Tobacco Middle East'),
      exhibitionPhoto(2021, 'WT ME 2021 (2).jpeg', 'Visitor speaking with a Microtex representative'),
      exhibitionPhoto(2021, 'WT ME 2021i.jpeg', 'Microtex counter and meeting area at the show'),
      exhibitionPhoto(2021, 'WTME 2021 i.jpeg', 'Wide view of the Microtex exhibition booth'),
      exhibitionPhoto(2021, 'WTME 2021ii.jpeg', 'Microtex stand on the World Tobacco exhibition floor'),
    ],
  }),
  exhibition({
    slug: 'world-tobacco-middle-east-2016',
    name: 'World Tobacco Middle East',
    description: 'Microtex exhibited at Stand A51 at World Tobacco Middle East in Dubai.',
    date: '2016',
    dateTime: '2016',
    location: 'Dubai, UAE',
    stand: 'Stand A51',
    photos: [
      exhibitionPhoto(2017, 'WT ME 2016.jpeg', 'Microtex stand A51 at World Tobacco Middle East'),
      exhibitionPhoto(2016, 'World Tobacco Middle East 2016.jpeg', 'Visitors at the Microtex exhibition display'),
    ],
  }),
]
