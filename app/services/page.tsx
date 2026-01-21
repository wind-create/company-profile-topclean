"use client";

import { useState } from "react";
import MainLayout from "@/components/templates/MainLayout";
import Heading from "@/components/atoms/Heading";
import ServicePackageCard from "@/components/molecules/ServicePackageCard";
import { servicePackages } from "@/constants/services";

export default function ServicesPage() {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [selectedToppings, setSelectedToppings] = useState<string[]>([]);

  const addPackage = (name: string) => {
    if (name.startsWith("Topping -")) {
      const topping = name.replace("Topping - ", "");
      setSelectedToppings((prev) =>
        prev.includes(topping) ? prev : [...prev, topping]
      );
    } else {
      setSelectedServices((prev) =>
        prev.includes(name) ? prev : [...prev, name]
      );
    }
  };

  const removeService = (name: string) => {
    setSelectedServices((prev) => prev.filter((s) => s !== name));
  };

  const removeTopping = (name: string) => {
    setSelectedToppings((prev) => prev.filter((t) => t !== name));
  };

  const hasSelection =
    selectedServices.length > 0 || selectedToppings.length > 0;

  const waMessage = encodeURIComponent(`
Halo, terima kasih atas partisipasi Bapak/Ibu dalam menggunakan layanan kami.

Nama:
No. Telepon:
Jenis Mobil:
Nomor Plat BK:
Tahun Kendaraan:
Warna Kendaraan:

Jenis Layanan:
${selectedServices.map((s) => `• ${s}`).join("\n")}

Topping:
${
  selectedToppings.length > 0
    ? selectedToppings.map((t) => `• ${t}`).join("\n")
    : "-"
}

Metode Pembayaran: Transfer / Tunai

Jadwal Kunjungan:
Hari/Tanggal:
Estimasi Waktu Tiba di Lokasi:

Hormat kami,
topclean
`);

  return (
    <MainLayout waPage="services">
      {/* HEADER */}
      <section className="bg-zinc-50">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <Heading level={1}>Car Wash Packages</Heading>
        </div>
      </section>

      {/* CONTENT */}
      <section>
        <div
          className={`max-w-7xl mx-auto px-6 py-20 grid gap-10 ${
            hasSelection ? "lg:grid-cols-[1fr_360px]" : "grid-cols-1"
          }`}
        >
          {/* LEFT — SERVICE CARDS */}
          <div
            className={`grid gap-6 sm:grid-cols-2 ${
              hasSelection ? "lg:grid-cols-2" : "lg:grid-cols-3"
            }`}
          >
            {servicePackages.map((pkg) => (
              <ServicePackageCard
                key={pkg.name}
                name={pkg.name}
                items={pkg.items}
                sizes={pkg.sizes}
                price={pkg.price}
                pricesBySize={pkg.pricesBySize}
                variants={pkg.variants}
                onAdd={addPackage}
              />
            ))}
          </div>

          {/* RIGHT — SIDEBAR */}
          {hasSelection && (
            <aside className="hidden lg:block">
              <div className="sticky top-28 bg-white border border-zinc-200 rounded-2xl p-6">
                <h3 className="font-semibold mb-3">Selected Packages</h3>

                <ul className="space-y-2 text-sm">
                  {selectedServices.map((s) => (
                    <li key={s} className="flex justify-between">
                      <span>{s}</span>
                      <button
                        onClick={() => removeService(s)}
                        className="text-red-600"
                      >
                        Remove
                      </button>
                    </li>
                  ))}

                  {selectedToppings.map((t) => (
                    <li key={t} className="flex justify-between">
                      <span>{t}</span>
                      <button
                        onClick={() => removeTopping(t)}
                        className="text-red-600"
                      >
                        Remove
                      </button>
                    </li>
                  ))}
                </ul>

                <a
                  href={`https://wa.me/6281168856700?text=${waMessage}`}
                  target="_blank"
                  className="block mt-6 text-center bg-red-600 text-white py-3 rounded-full font-semibold"
                >
                  Book via WhatsApp
                </a>
              </div>
            </aside>
          )}
        </div>
      </section>
    </MainLayout>
  );
}
