"use client";

import { useState } from "react";
import Heading from "../atoms/Heading";
import Button from "../atoms/Button";
import ServicePackageModal from "./ServicePackageModal";

type VehicleSize = "S" | "M" | "L" | "XL";

type Props = {
  name: string;
  items: string[];
  sizes?: VehicleSize[];
};

export default function ServicePackagePreviewCard({
  name,
  items,
  sizes,
}: Props) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="bg-white border border-zinc-200 rounded-2xl p-8 flex flex-col justify-between">
        <div>
          <Heading level={3}>{name}</Heading>

          <p className="mt-3 text-sm text-zinc-600">
            Premium auto care treatment for your car.
          </p>

          {/* ✅ UKURAN MOBIL */}
          {sizes && sizes.length > 0 && (
            <p className="mt-2 text-sm text-zinc-500">
              <span className="font-medium">Ukuran mobil:</span>{" "}
              {sizes.join(", ")}
            </p>
          )}
        </div>

        <div className="mt-6">
          <Button variant="outline" onClick={() => setOpen(true)}>
            View Details
          </Button>
        </div>
      </div>

      <ServicePackageModal
        isOpen={open}
        onClose={() => setOpen(false)}
        name={name}
        items={items}
        sizes={sizes}
        onAdd={() => {}}
      />
    </>
  );
}
