import Heading from "../atoms/Heading";
import Button from "../atoms/Button";
import Link from "next/link";
import { servicePackages } from "@/constants/services";

export default function ServicesPreview() {
  return (
    <section className="bg-zinc-50">
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="max-w-2xl">
          <Heading level={2}>Our Car Wash Packages</Heading>
          <p className="mt-4 text-zinc-600 text-lg">
            Professional auto care packages designed for different needs.
          </p>
        </div>

        <div className="grid gap-6 mt-16 sm:grid-cols-2 lg:grid-cols-3">
          {servicePackages.slice(0, 3).map((pkg) => (
            <div
              key={pkg.name}
              className="bg-white border border-zinc-200 rounded-2xl p-8"
            >
              <h3 className="font-semibold text-lg">{pkg.name}</h3>
              <p className="mt-3 text-sm text-zinc-600">
                Premium treatment tailored for your car.
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <Link href="/services">
            <Button>View All Packages</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
