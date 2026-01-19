import Heading from "../atoms/Heading";

const reasons = [
  {
    title: "Professional Team",
    desc: "Handled by trained and experienced auto care professionals.",
  },
  {
    title: "Premium Products",
    desc: "We use high-quality products safe for all vehicle types.",
  },
  {
    title: "Attention to Detail",
    desc: "Every part of your car is treated with precision and care.",
  },
  {
    title: "Trusted by Customers",
    desc: "Many satisfied customers trust SG Auto Care for their vehicles.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="max-w-2xl">
          <Heading level={2}>Why Choose SG Auto Care</Heading>
          <p className="mt-4 text-zinc-600 text-lg">
            We deliver more than just a clean car.
          </p>
        </div>

        <div className="grid gap-8 mt-16 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((item) => (
            <div
              key={item.title}
              className="border border-zinc-200 rounded-2xl p-8"
            >
              <h3 className="font-semibold text-lg">{item.title}</h3>
              <p className="mt-3 text-sm text-zinc-600">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
