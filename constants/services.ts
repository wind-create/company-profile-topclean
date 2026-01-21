export type VehicleSize = "S" | "M" | "L" | "XL";

export type Price = {
  original: number;   // harga asli
  discount?: number;  // harga setelah diskon (optional)
};

export type ServiceVariant = {
  name: string; // Exterior / Interior / Full
  pricesBySize?: Record<VehicleSize, Price>;
  price?: Price;
};

export type ServicePackage = {
  name: string;
  items: string[];
  sizes?: VehicleSize[];

  // 🔥 HARGA
  price?: Price; // untuk package TANPA size
  pricesBySize?: Record<VehicleSize, Price>; // untuk package DENGAN size
  variants?: ServiceVariant[];
};


export const servicePackages: ServicePackage[] = [
  {
    name: "Xpress Wash",
    items: [
  "Touchless Wash",
  "Interior Vacum & Cleaning",
  "Premium Tyre Gell",
  "Window Cleaning",
  "Protection by Spray Wax",
],

    price: {
      original: 100000,
    },
  },
  {
    name: "Proper Wash",
    items: [
  "Touchless Wash",
  "Hand Wash",
  "Premium Tyre Gell",
  "Interior Vacum & Cleaning",
  "Window Cleaning",
  "Fogging",
  "Protection by Spray Wax",
],

    price: {
      original: 150000,
    },
  },
  {
    name: "After Coating Wash",
    items: [
  "Touchless Wash",
  "Hand Wash",
  "Premium Tyre Gell",
  "Interior Vacum & Cleaning",
  "Window Cleaning",
  "Fogging",
  "Protection by Advanced Booster Coating",
],

    price: {
      original: 160000,
    },
  },

  {
    name: "Proper Wash and Wax",
    items: [
    "Touchless Wash",
  "Hand Wash",
  "Premium Tyre Gell",
  "Interior Vacum & Cleaning",
  "Window Cleaning",
  "Fogging",
  "Manual Wax by Megulars",
],
    price: {
      original: 200000,
    },
  },
  {
    name: "Reguler Polish",
    items: [
  "Touchless Wash",
  "Hand Wash",
  "Polish using Machine",
  "Premium Tyre Gell",
  "Interior Vacum & Cleaning",
  "Window Cleaning",
  "Fogging",
  "Protection by Soft Coating Spray",
],

    price: {
      original: 280000,
    },
  },
  {
    name: "Black Polish",
  items: [
  "Touchless Wash",
  "Hand Wash",
  "Body Waterspot Removal",
  "Polish using Machine",
  "Premium Tyre Gell",
  "Interior Vaccuum & Cleaning",
  "Window Cleaning",
  "Fogging",
  "Protection by Soft Coating Spray",
],
    price: {
      original: 330000,
    },
  },
  {
    name: "White Polish",
   items: [
  "Touchless Wash",
  "Hand Wash",
  "Body Bug & Tar Removal",
  "Polish using Machine",
  "Premium Tyre Gell",
  "Interior Vaccuum & Cleaning",
  "Window Cleaning",
  "Fogging",
  "Protection by Soft Coating Spray",
],
    price: {
      original: 330000,
    },
  },
  {
    name: "Premium Polish",
   items: [
  "Touchless Wash",
  "Hand Wash",
  "Body Waterspot Removal",
  "Body Bug & Tar Removal",
  "Polish using Machine",
  "Premium Tyre Gell",
  "Interior Vaccuum & Cleaning",
  "Window Cleaning",
  "Fogging",
  "Protection by Soft Coating Spray",
],
    price: {
      original: 380000,
    },
  },
  {
    name: "Complete Car Wash",
    items: [
  "Touchless Wash",
  "Hand Wash",
  "Body Waterspot Removal",
  "Body Bug & Tar Removal",
  "Polish using Machine",
  "Glass Waterspot Removal and Polish",
  "Premium Tyre Gell",
  "Interior Vaccuum & Cleaning",
  "Window Cleaning",
  "Fogging",
  "Protection by Soft Coating Spray",
],

    price: {
      original: 480000,
    },
  },
  
  {
    name: "Topping",
    variants: [
    {
      name: "Jarak > 10 km",
      price: {
        original: 20000,
      },
    },
    {
      name: "Cuci kolong",
      price: {
        original: 20000,
      },
    },
    {
      name: "Fogging",
      price: {
        original: 30000,
      },
    },
    {
      name: "Interior clean up",
      price: {
        original: 50000,
      },
    },
    {
      name: "Hand Wax by Meguiars",
      price: {
        original: 75000,
      },
    },
    {
      name: "Spot baret (1 Spot)",
      price: {
        original: 75000,
      },
    },
    {
      name: "Clay Bar",
      price: {
        original: 100000,
      },
    },
    {
      name: "Engine Cleaning",
      price: {
        original: 150000,
      },
    },
    {
      name: "Glass Polish",
      price: {
        original: 200000,
      },
    },
    {
      name: "Door Cup ppf",
      price: {
        original: 200000,
      },
    },
    {
      name: "Glass Polish",
      price: {
        original: 200000,
      },
    },
    {
      name: "Headlamp Polish (1 pasang)",
      price: {
        original: 350000,
      },
    },
    {
      name: "Glass Coating by Aniki",
      price: {
        original: 500000,
      },
    },
    {
      name: "Glass Coating by Crystal Shield (Incl 2x Free Maintenance)",
      price: {
        original: 1000000,
      },
    },

  ],
  items: [],
  },

 



];
