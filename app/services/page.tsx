"use client";

import { useState } from "react";
import MainLayout from "@/components/templates/MainLayout";
import Heading from "@/components/atoms/Heading";
import ServicePackageCard from "@/components/molecules/ServicePackageCard";
import { servicePackages } from "@/constants/services";

export default function ServicesPage() {
  const [selectedPackages, setSelectedPackages] = useState<string[]>([]);

  const addPackage = (name: string) => {
    setSelectedPackages((prev) =>
      prev.includes(name) ? prev : [...prev, name]
    );
  };

  const removePackage = (name: string) => {
    setSelectedPackages((prev) =>
      prev.filter((pkg) => pkg !== name)
    );
  };

  const hasSelection = selectedPackages.length > 0;

  const waMessage = encodeURIComponent(
    `
    Halo, terima kasih atas partisipasi Bapak/Ibu dalam menggunakan layanan kami.
Untuk proses pendaftaran, mohon kesediaannya mengonfirmasi data berikut:

Nama:
No. Telepon:
Jenis Mobil:
Nomor Plat BK:
Tahun Kendaraan:
Warna Kendaraan:
Jenis Layanan:
${selectedPackages.map((pkg) => `• ${pkg}`).join("\n")}

Metode Pembayaran: Transfer / Tunai

Jadwal Kunjungan:
Hari/Tanggal:
Estimasi Waktu Tiba di Lokasi:

Atas perhatian dan kerja samanya, kami ucapkan terima kasih.

Hormat kami,
SG Auto Care
    `
  );

  return (
    <MainLayout waPage="services">
      {/* HEADER */}
      <section className="bg-zinc-50">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <Heading level={1}>Car Wash Packages</Heading>
          <p className="mt-4 max-w-2xl text-zinc-600 text-lg">
            Select one or more packages. Selected packages will appear on the right (desktop) or above (mobile).
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section>
        <div
          className={`max-w-7xl mx-auto px-6 py-20 grid gap-10 ${
            hasSelection ? "lg:grid-cols-[1fr_360px]" : "grid-cols-1"
          }`}
        >
          {/* 🔼 MOBILE — SELECTED PACKAGES (ATAS) */}
          {hasSelection && (
            <div className="lg:hidden">
              <div className="bg-white border border-zinc-200 rounded-2xl p-6">
                <h3 className="font-semibold text-lg mb-4">
                  Selected Packages
                </h3>

                <ul className="space-y-2">
                  {selectedPackages.map((pkg) => (
                    <li
                      key={pkg}
                      className="flex justify-between items-center bg-zinc-50 px-3 py-2 rounded-lg text-sm"
                    >
                      <span>{pkg}</span>
                      <button
                        onClick={() => removePackage(pkg)}
                        className="text-red-600 hover:underline"
                      >
                        Remove
                      </button>
                    </li>
                  ))}
                </ul>

                <a
                  href={`https://wa.me/6281168856700?text=${waMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block mt-6 text-center bg-red-600 text-white px-4 py-3 rounded-full font-semibold hover:bg-red-700 transition"
                >
                  Book via WhatsApp
                </a>
              </div>
            </div>
          )}

          {/* LEFT — SERVICES */}
          <div
            className={`grid gap-6 sm:grid-cols-2 ${
              hasSelection ? "lg:grid-cols-2" : "lg:grid-cols-3"
            }`}
          >
            {servicePackages.map((pkg) => (
              <ServicePackageCard
                key={pkg.name}
                name={pkg.name}
                items={pkg.items}        // boleh undefined sekarang
                sizes={pkg.sizes}
                price={pkg.price}
                pricesBySize={pkg.pricesBySize}
                variants={pkg.variants}
                onAdd={addPackage}
              />

            ))}
          </div>

          {/* RIGHT — SELECTED PACKAGES (DESKTOP) */}
          {hasSelection && (
            <aside className="hidden lg:block">
              <div className="sticky top-28 bg-white border border-zinc-200 rounded-2xl p-6">
                <h3 className="font-semibold text-lg mb-4">
                  Selected Packages
                </h3>

                <ul className="space-y-2">
                  {selectedPackages.map((pkg) => (
                    <li
                      key={pkg}
                      className="flex justify-between items-center bg-zinc-50 px-3 py-2 rounded-lg text-sm"
                    >
                      <span>{pkg}</span>
                      <button
                        onClick={() => removePackage(pkg)}
                        className="text-red-600 hover:underline"
                      >
                        Remove
                      </button>
                    </li>
                  ))}
                </ul>

                <a
                  href={`https://wa.me/6281168856700?text=${waMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block mt-6 text-center bg-red-600 text-white px-4 py-3 rounded-full font-semibold hover:bg-red-700 transition"
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
