import Button from '../components/Button'

export default function SparePartsCTA() {
  return (
    <div className="px-4 py-8 sm:px-8 sm:py-12 lg:p-24">
      <section
        className="relative w-full bg-cover bg-center bg-no-repeat px-6 py-10 font-stylish text-white sm:px-16 sm:py-24"
        style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(/floorblue.png)' }}
      >
        <div className="mx-auto flex max-w-4xl flex-col items-start gap-6">
          <h2 className="text-3xl font-semibold leading-tight tracking-tighter text-white sm:text-5xl">
            THE RIGHT PART FOR YOUR MACHINE
          </h2>
          <p className="max-w-2xl font-sans text-lg leading-tight tracking-tighter text-gray-200 sm:text-xl">
            Contact Microtex with your machine model and part requirements. Our team can help you find the right spare parts for your making and packaging equipment.
          </p>
          <Button href="/contact" text="ENQUIRE ABOUT SPARE PARTS" variant="white" />
        </div>
      </section>
    </div>
  )
}
