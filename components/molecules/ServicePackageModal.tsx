"use client";

import Modal from "../atoms/Modal";
import Heading from "../atoms/Heading";
import Button from "../atoms/Button";
import { formatPrice } from "@/utils/formatPrice";
import { FaCheckCircle } from "react-icons/fa";

type VehicleSize = "S" | "M" | "L" | "XL";

type Price = {
  original: number;
  discount?: number;
};

type ServiceVariant = {
  name: string;
  pricesBySize?: Record<VehicleSize, Price>;
  price?: Price;
};

type Props = {
  isOpen: boolean;
  onClose: () => void;
  name: string;
  items: string[];

  sizes?: VehicleSize[];
  price?: Price;
  pricesBySize?: Record<VehicleSize, Price>;
  variants?: ServiceVariant[];

  onAdd: (name: string) => void;
};

export default function ServicePackageModal({
  isOpen,
  onClose,
  name,
  items,
  sizes,
  price,
  pricesBySize,
  variants,
  onAdd,
}: Props) {
  // 🔥 INI WAJIB ADA
  if (!isOpen) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      {/* HEADER */}
      <div className="flex justify-between items-start">
        <Heading level={3}>{name}</Heading>
        <button
          onClick={onClose}
          className="text-zinc-500 text-xl hover:text-zinc-700"
        >
          ✕
        </button>
      </div>

      {/* ITEMS */}
      {items.length > 0 && (
        <ul className="mt-6 space-y-2 text-sm text-zinc-600">
          {items.map((item, index) => (
            <li key={index} className="flex gap-2">
              <FaCheckCircle className="text-red-600 mt-0.5 shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}

      {/* VARIANTS */}
      {variants && (
        <div className="mt-6 space-y-4">
          {variants.map((variant) => (
            <div key={variant.name}>
              <p className="font-semibold mb-2">{variant.name}</p>

              {variant.pricesBySize && (
                <div className="space-y-2 text-sm">
                  {Object.entries(variant.pricesBySize).map(
                    ([size, p]) => (
                      <div
                        key={size}
                        className="flex justify-between border rounded-lg px-4 py-2"
                      >
                        <span>{size}</span>
                        <span className="font-semibold text-red-600">
                          {formatPrice(p.discount ?? p.original)}
                        </span>
                      </div>
                    )
                  )}
                </div>
              )}

              {variant.price && (
                <div className="flex justify-between items-center border rounded-lg px-4 py-2">
                  <span>{variant.name}</span>
                  <Button
                    variant="outline"
                    onClick={() =>
                      onAdd(`Topping - ${variant.name}`)
                    }
                  >
                    Add
                  </Button>
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* SIMPLE PRICE */}
      {!variants && price && (
        <div className="mt-6">
          <p className="font-semibold">Price</p>
          <span className="text-lg font-bold text-red-600">
            {formatPrice(price.discount ?? price.original)}
          </span>
        </div>
      )}

      {/* ACTION */}
      {!variants && (
        <div className="mt-8">
          <Button
            onClick={() => {
              onAdd(name);
              onClose();
            }}
          >
            Add Package
          </Button>
        </div>
      )}
    </Modal>
  );
}
