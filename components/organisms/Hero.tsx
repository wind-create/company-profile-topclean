import Heading from "../atoms/Heading";
import Button from "../atoms/Button";

export default function Hero() {
  return (
    <section className="bg-zinc-50">
      <div className="max-w-7xl mx-auto px-6 py-32">
        <Heading level={1}>
          Premium Auto Care <br /> & Detailing
        </Heading>

        <p className="mt-6 max-w-xl text-lg text-zinc-600">
          Professional car wash and detailing services with
          showroom-quality results.
        </p>

        {/* <div className="mt-10">
          <Button>Book Appointment</Button>
        </div> */}
      </div>
    </section>
  );
}
