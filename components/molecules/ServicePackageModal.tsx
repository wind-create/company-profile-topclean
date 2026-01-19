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
  pricesBySize: Record<VehicleSize, Price>;
};

type Props = {
  isOpen: boolean;
  onClose: () => void;
  name: string;
  items: string[];

  // SIMPLE
  price?: Price;

  // SIZE BASED
  sizes?: VehicleSize[];
  pricesBySize?: Record<VehicleSize, Price>;

  // ADVANCED
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

      {/* 🔥 VARIANTS (Exterior / Interior / Full Detailing) */}
      {variants && (
        <div className="mt-8 space-y-6">
          {variants.map((variant) => (
            <div key={variant.name}>
              <p className="font-semibold mb-2">{variant.name}</p>

              <div className="space-y-2 text-sm">
                {Object.entries(variant.pricesBySize).map(
                  ([size, p]) => (
                    <div
                      key={size}
                      className="flex justify-between items-center border border-zinc-200 rounded-lg px-4 py-2"
                    >
                      <span>{size}</span>

                      {p.discount ? (
                        <div className="flex items-center gap-3">
                          <span className="text-zinc-400 line-through">
                            {formatPrice(p.original)}
                          </span>
                          <span className="font-semibold text-red-600">
                            {formatPrice(p.discount)}
                          </span>
                        </div>
                      ) : (
                        <span className="font-semibold text-red-600">
                          {formatPrice(p.original)}
                        </span>
                      )}
                    </div>
                  )
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* 💰 PRICE — TANPA SIZE */}
      {price && !variants && (
        <div className="mt-6">
          <p className="font-semibold mb-1">Price</p>

          {price.discount ? (
            <div className="flex items-center gap-3">
              <span className="text-zinc-400 line-through text-sm">
                {formatPrice(price.original)}
              </span>
              <span className="text-lg font-bold text-red-600">
                {formatPrice(price.discount)}
              </span>
            </div>
          ) : (
            <span className="text-lg font-bold text-red-600">
              {formatPrice(price.original)}
            </span>
          )}
        </div>
      )}

      {/* 💰 PRICE — DENGAN SIZE */}
      {pricesBySize && !variants && (
        <div className="mt-6">
          <p className="font-semibold mb-2">
            Price by Vehicle Size
          </p>

          <div className="space-y-2 text-sm">
            {Object.entries(pricesBySize).map(([size, p]) => (
              <div
                key={size}
                className="flex justify-between items-center border border-zinc-200 rounded-lg px-4 py-2"
              >
                <span>{size}</span>

                {p.discount ? (
                  <div className="flex items-center gap-3">
                    <span className="text-zinc-400 line-through">
                      {formatPrice(p.original)}
                    </span>
                    <span className="font-semibold text-red-600">
                      {formatPrice(p.discount)}
                    </span>
                  </div>
                ) : (
                  <span className="font-semibold text-red-600">
                    {formatPrice(p.original)}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* SIZE INFO (OPTIONAL VISUAL) */}
      {sizes && !variants && (
        <div className="mt-6">
          <p className="font-semibold mb-2">Ukuran Mobil</p>
          <div className="flex gap-2">
            {sizes.map((size) => (
              <span
                key={size}
                className="px-3 py-1 text-sm border border-zinc-300 rounded-full"
              >
                {size}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* ACTION */}
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
    </Modal>
  );
}
