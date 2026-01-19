import Heading from "../atoms/Heading";

const testimonials = [
  {
    name: "Sutiansi Hartanta",
    text: "Cuci dsini bersih, ruang tunggunya nyaman, ada free snack, toiletnya bersih.",
  },
  {
    name: "Willi Nardo",
    text: "Coating mobil di SG Autocare hasilnya luar biasa. Cat jadi lebih glossy dan terlindungi. Penjelasan dari tim juga jelas dan profesional. Worth it!",
  },
  {
    name: "Safri Yudha",
    text: "Puas coating mobil di sini bahan bahan nya premium dan terjamin keasliannya Top banget",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="max-w-2xl">
          <Heading level={2}>What Our Customers Say</Heading>
          <p className="mt-4 text-zinc-600 text-lg">
            Trusted by car owners who care about quality.
          </p>
        </div>

        <div className="grid gap-6 mt-16 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item) => (
            <div
              key={item.name}
              className="border border-zinc-200 rounded-2xl p-8"
            >
              <p className="text-zinc-600 text-sm leading-relaxed">
                “{item.text}”
              </p>
              <p className="mt-4 font-semibold">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
