import Heading from "../atoms/Heading";
import Button from "../atoms/Button";

export default function Hero() {
  return (
    <section className="bg-zinc-50">
      <div className="max-w-7xl mx-auto px-6 py-32">
        <Heading level={1}>
          Premium Wash<br /> & Detailing
        </Heading>

        <p className="mt-6 max-w-xl text-lg text-zinc-600">
          Professional Home Wash, Detailing, Coating, PPF, and Kaca Film services with
          quality results.
        </p>

        {/* <div className="mt-10">
          <Button>Book Appointment</Button>
        </div> */}
      </div>
    </section>
  );
}
