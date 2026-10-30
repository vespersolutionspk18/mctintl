import type { Metadata } from 'next'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import ServiceDetailTemplate, { type ServiceDetailSection } from '../ServiceDetailTemplate'

export const metadata: Metadata = {
  title: 'Support Services & Rebuilding | Microtex International',
  description:
    'Learn about Microtex machine rebuilding, functional rebuilds, maintenance, preventative maintenance, installation protocols, and training.',
}

const sections: ServiceDetailSection[] = [
  {
    title: 'Our Focus',
    text: 'We focus on delivering high quality standards for assembly, finishing, inspection and testing processes. We also provide installation protocol services and expert training for our clients.',
  },
  {
    title: 'Rebuilding Services',
    text: 'Our Rebuilding services are not just limited to the replacements, we do a complete strip-down, replacement of all worn parts and then we re-assemble them by keeping standards strictly in view. Our fast paced team always keep their knowledge up to date and come up with the latest innovations to make them compatible with latest models of machines. All re-build packages come with complete manuals and catalogues for the parts.',
  },
  {
    title: 'Functional Rebuild',
    text: 'As an alternative to the Rebuild, we offer a functional rebuild service. The level of this service is dependent on the condition of the donor machine, which is established following a detailed audit by competent and experienced Field Service personnel.',
  },
  {
    title: 'Maintenance',
    text: 'The cigarette making, packing and handling machines demands that all equipment receives regular servicing by skilled technicians if peak performance is to be maintained.',
  },
  {
    title: 'Preventative Maintenance',
    text: 'Preventative Maintenance is the Service recommended for our complete product range to avoid problems before they occur. By ensuring that machines are kept running at optimum efficiency and systems are maintained at their original design specifications, unplanned stoppages can be virtually eliminated. Normally, this type of work is carried out under the terms of a Service Contract, a visual inspection, together with a full mechanical and electrical service, will be conducted at regular intervals throughout the year. Of course, a Preventative Maintenance visit may also be arranged at any time, even in the absence of a Service Contract.',
  },
]

export default function SupportServicesRebuildingPage() {
  return (
    <>
      <Header />
      <main>
        <ServiceDetailTemplate
          title="Support Services & Rebuilding"
          description="Based on our extensive experience, Microtex International can bring your existing machine back to life."
          overview="Our support covers complete and functional rebuilds, regular servicing, and preventative maintenance for cigarette making, packing and handling machines."
          heroAdditional="A full rebuild can include strip-down, replacement of worn parts and reassembly. Functional rebuilds are scoped after experienced field-service personnel assess the donor machine’s condition."
          image="/services/rebuild-support-cutout.webp"
          imageAlt="Cigarette making machinery available for rebuilding and service"
          sections={sections}
        />
      </main>
      <Footer />
    </>
  )
}
