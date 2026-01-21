"use client";

import { useState } from "react";
import Heading from "../atoms/Heading";
import Button from "../atoms/Button";
import ServicePackageModal from "./ServicePackageModal";

type VehicleSize = "S" | "M" | "L" | "XL";

type Price = {
  original: number;
  discount?: number;
};

type ServiceVariant = {
  name: string;
  pricesBySize?: Record<VehicleSize, Price>;
};

type Props = {
  name: string;
  items?: string[]; // ✅ OPTIONAL
  sizes?: VehicleSize[];

  price?: Price;
  pricesBySize?: Record<VehicleSize, Price>;
  variants?: ServiceVariant[];

  onAdd: (name: string) => void;
};

export default function ServicePackageCard({
  name,
  items = [], // ✅ DEFAULT
  sizes,
  price,
  pricesBySize,
  variants,
  onAdd,
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

          {/* Preview ukuran */}
          {sizes && (
            <div className="mt-3 flex gap-2">
              {sizes.map((size) => (
                <span
                  key={size}
                  className="text-xs px-2 py-1 border border-zinc-300 rounded-full"
                >
                  {size}
                </span>
              ))}
            </div>
          )}

          {/* Preview harga TANPA size */}
          {price && (
            <div className="mt-3 text-sm">
              {price.discount && (
                <span className="line-through text-zinc-400 mr-2">
                  Rp {price.original.toLocaleString("id-ID")}
                </span>
              )}
              <span className="font-semibold text-red-600">
                Rp {(price.discount ?? price.original).toLocaleString("id-ID")}
              </span>
            </div>
          )}

          {/* Info variant */}
          {variants && (
            <p className="mt-3 text-sm text-zinc-500">
              Multiple options available
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
        price={price}
        pricesBySize={pricesBySize}
        variants={variants}
        onAdd={onAdd}
      />
    </>
  );
}
