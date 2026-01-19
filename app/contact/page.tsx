import MainLayout from "@/components/templates/MainLayout";
import Heading from "@/components/atoms/Heading";
import GoogleMapsSection from "@/components/organisms/GoogleMapsSection";
import FeedbackForm from "@/components/organisms/FeedbackForm";


export default function ContactPage() {
  return (
    <MainLayout>
      {/* Header */}
      <section className="bg-zinc-50">
        <div className="max-w-5xl mx-auto px-6 py-24">
          <Heading level={1}>Contact Us</Heading>
          <p className="mt-6 text-zinc-600 text-lg">
            Get in touch with SG Auto Care for booking, inquiries,
            or consultation about our services.
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="bg-white">
  <div className="max-w-5xl mx-auto px-6 py-20 grid gap-8 sm:grid-cols-2 items-start">
    
    {/* WhatsApp */}
    <div className="border border-zinc-200 rounded-2xl p-6">
      <h3 className="font-semibold text-lg">WhatsApp</h3>
      <p className="mt-3 text-sm text-zinc-600">
        Fast response for booking & questions
      </p>
      <a
        href="https://wa.me/6281168856700"
        target="_blank"
        className="inline-block mt-4 font-semibold text-red-600 hover:underline"
      >
        Chat via WhatsApp →
      </a>
    </div>

    {/* Phone */}
    <div className="border border-zinc-200 rounded-2xl p-6">
      <h3 className="font-semibold text-lg">Phone</h3>
      <p className="mt-3 text-sm text-zinc-600">
        Call us during business hours
      </p>
      <a
        href="tel:+6281168856700"
        className="inline-block mt-4 font-semibold text-red-600 hover:underline"
      >
        +62 811-6885-6700 →
      </a>
    </div>

    {/* Email */}
    <div className="border border-zinc-200 rounded-2xl p-6">
      <h3 className="font-semibold text-lg">Email</h3>
      <p className="mt-3 text-sm text-zinc-600">
        For general inquiries
      </p>
      <a
        href="mailto:sgautocaree5670@gmail.com"
        className="block mt-4 font-semibold text-red-600 hover:underline break-all"
      >
        sgautocaree5670@gmail.com →
      </a>
    </div>

    {/* Instagram */}
    <div className="border border-zinc-200 rounded-2xl p-6">
      <h3 className="font-semibold text-lg">Instagram</h3>
      <p className="mt-3 text-sm text-zinc-600">
        Fast response for booking & questions
      </p>
      <a
        href="https://www.instagram.com/sgautocaree"
        target="_blank"
        className="inline-block mt-4 font-semibold text-red-600 hover:underline"
      >
        Chat via Instagram →
      </a>
    </div>

  </div>
</section>



      {/* Feedback Form */}
      <section className="bg-zinc-50">
        <div className="max-w-5xl mx-auto px-6 py-20">
          <FeedbackForm />
        </div>
      </section>


      {/* Google Maps */}
      <GoogleMapsSection />

      {/* Closing CTA */}
      <section className="bg-zinc-50">
        <div className="max-w-5xl mx-auto px-6 py-20 text-center">
          <Heading level={2}>Ready to Book Your Auto Care Service?</Heading>
          <p className="mt-4 text-zinc-600">
            Contact us today and let our team take care of your vehicle.
          </p>

          <a
            href="https://wa.me/6281168856700"
            target="_blank"
            className="inline-block mt-8 bg-red-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-red-700 transition"
          >
            Book via WhatsApp
          </a>
        </div>
      </section>
    </MainLayout>
  );
}
