import Heading from "../atoms/Heading";
import Button from "../atoms/Button";
import Link from "next/link";

export default function HomeCTA() {
  return (
    <section className="bg-zinc-50">
      <div className="max-w-7xl mx-auto px-6 py-24 text-center">
        <Heading level={2}>
          Ready to give your car the best treatment?
        </Heading>
        <p className="mt-4 text-zinc-600">
          Choose a package and book your auto care service today.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <Link href="/services">
            <Button>View Packages</Button>
          </Link>

          <a
            href="https://wa.me/6281168856700"
            target="_blank"
            className="border border-zinc-900 px-6 py-3 rounded-full font-semibold text-sm hover:bg-zinc-900 hover:text-white transition"
          >
            Chat via WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
