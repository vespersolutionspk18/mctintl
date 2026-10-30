import type { Metadata } from 'next'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import ServiceDetailTemplate, { type ServiceDetailSection } from '../ServiceDetailTemplate'

export const metadata: Metadata = {
  title: 'Upgradation & Installation | Microtex International',
  description:
    'Microtex provides installation and up-gradation protocol services alongside expert training for making and packaging clients.',
}

const sections: ServiceDetailSection[] = [
  {
    title: 'Installation and up-gradation',
    text: 'Microtex provides installation and up-gradation protocol services for making and packaging equipment. The work is planned around client requirements and constraints, with expert training provided alongside the service.',
  },
  {
    title: 'Expert training for clients',
    text: 'Training is part of Microtex’s installation and up-gradation support. It helps clients become familiar with the procedures and the changes made to their equipment.',
  },
  {
    title: 'A structured problem-solving process',
    text: 'Each solution begins by identifying the requirements and researching the problem. Possible approaches are then developed, planned, tested and refined.',
  },
  {
    title: 'From requirements to improvement',
    items: [
      'Ask: Identify requirements & constraints.',
      'Research the problem.',
      'Imagine: Develop possible solutions',
      'Plan: Select a promising solutions',
      'Create: Build a prototype',
      'Test and evaluate Prototype',
      'Improve: Redesign as needed',
    ],
  },
]

export default function UpgradationInstallationPage() {
  return (
    <>
      <Header />
      <main>
        <ServiceDetailTemplate
          title="Upgradation & Installation"
          description="Microtex has a proven track record in delivering High Quality Machinery, Spare Parts and Support for your Making & Packaging Solutions."
          overview="We provide extensive installation & up-gradation protocol services alongside expert training for our clients."
          heroAdditional="We start by identifying requirements, then research, develop, test and refine a suitable solution."
          image="/services/installation-upgrade-cutout.webp"
          imageAlt="Cigarette packaging line available for installation and upgrades"
          sections={sections}
        />
      </main>
      <Footer />
    </>
  )
}
