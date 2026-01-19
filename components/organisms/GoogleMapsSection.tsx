import Heading from "../atoms/Heading";

export default function GoogleMapsSection() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-24">
        {/* Header */}
        <div className="max-w-2xl">
          <Heading level={2}>Visit Our Location</Heading>
          <p className="mt-4 text-zinc-600 text-lg">
            Come and experience professional auto care service at our location.
          </p>
        </div>

        {/* Map Embed */}
        <div className="mt-16 rounded-2xl overflow-hidden border border-zinc-200">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.9574945585778!2d98.69823767581302!3d3.597215750233218!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x303131329c55f937%3A0xe4836a01b60968e5!2sTopclean%20Medan!5e0!3m2!1sid!2sid!4v1768842113606!5m2!1sid!2sid"
            width="100%"
            height="450"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full"
          />
        </div>

        {/* Info + Action */}
        <div className="mt-8 grid gap-6 sm:grid-cols-3 text-sm text-zinc-600 items-start">
          <div>
            <p className="font-semibold text-zinc-900">Address</p>
            <p>Medan, Indonesia</p>
          </div>

          <div>
            <p className="font-semibold text-zinc-900">Opening Hours</p>
            <p>Mon – Sun: 08.30 – 17.30</p>
          </div>

          <div>
            <p className="font-semibold text-zinc-900">Directions</p>
            <a
              href="https://maps.app.goo.gl/t7cxGLsaL66GbLnw8"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-2 font-semibold text-red-600 hover:underline"
            >
              Open in Google Maps →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
