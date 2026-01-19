import MainLayout from "@/components/templates/MainLayout";
import Heading from "@/components/atoms/Heading";

export default function AboutPage() {
  return (
    <MainLayout>
      {/* Header */}
      <section className="bg-zinc-50">
        <div className="max-w-5xl mx-auto px-6 py-24">
          <Heading level={1}>About SG Auto Care</Heading>
          <p className="mt-6 text-zinc-600 text-lg leading-relaxed">
            SG Auto Care is a professional auto care and detailing service
            dedicated to delivering premium results with precision, care,
            and attention to detail.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="bg-white">
        <div className="max-w-5xl mx-auto px-6 py-20">
          <Heading level={2}>Our Story</Heading>
          <p className="mt-6 text-zinc-600 leading-relaxed">
            Founded with a passion for automotive care, SG Auto Care was built
            on the belief that every vehicle deserves the highest level of
            treatment. From daily-driven cars to premium vehicles, we treat
            every car as if it were our own.
          </p>
        </div>
      </section>

      {/* Our Values */}
      <section className="bg-zinc-50">
        <div className="max-w-5xl mx-auto px-6 py-20">
          <Heading level={2}>Our Values</Heading>

          <div className="grid gap-6 mt-10 sm:grid-cols-2">
            <div className="border border-zinc-200 rounded-2xl p-6 bg-white">
              <h3 className="font-semibold text-lg">Quality First</h3>
              <p className="mt-3 text-sm text-zinc-600">
                We use premium products and proven techniques to ensure
                long-lasting and safe results for your vehicle.
              </p>
            </div>

            <div className="border border-zinc-200 rounded-2xl p-6 bg-white">
              <h3 className="font-semibold text-lg">Attention to Detail</h3>
              <p className="mt-3 text-sm text-zinc-600">
                Every detail matters. Our team focuses on precision in every
                step of the cleaning and detailing process.
              </p>
            </div>

            <div className="border border-zinc-200 rounded-2xl p-6 bg-white">
              <h3 className="font-semibold text-lg">Professional Team</h3>
              <p className="mt-3 text-sm text-zinc-600">
                Our trained and experienced team handles your car with care
                and professionalism.
              </p>
            </div>

            <div className="border border-zinc-200 rounded-2xl p-6 bg-white">
              <h3 className="font-semibold text-lg">Customer Trust</h3>
              <p className="mt-3 text-sm text-zinc-600">
                Customer satisfaction and trust are at the core of everything
                we do.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Commitment */}
      <section className="bg-white">
        <div className="max-w-5xl mx-auto px-6 py-20">
          <Heading level={2}>Our Commitment</Heading>
          <p className="mt-6 text-zinc-600 leading-relaxed">
            At SG Auto Care, we are committed to providing reliable, consistent,
            and premium auto care services. Whether it’s a regular wash or
            advanced detailing, our goal is to exceed your expectations every
            time.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-zinc-50">
        <div className="max-w-5xl mx-auto px-6 py-20 text-center">
          <Heading level={2}>Experience the SG Auto Care Difference</Heading>
          <p className="mt-4 text-zinc-600">
            Let us take care of your vehicle with professional treatment
            and premium results.
          </p>

          <a
            href="/services"
            className="inline-block mt-8 bg-red-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-red-700 transition"
          >
            View Our Services
          </a>
        </div>
      </section>
    </MainLayout>
  );
}
