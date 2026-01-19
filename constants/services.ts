export type VehicleSize = "S" | "M" | "L" | "XL";

export type Price = {
  original: number;   // harga asli
  discount?: number;  // harga setelah diskon (optional)
};

export type ServiceVariant = {
  name: string; // Exterior / Interior / Full
  pricesBySize: Record<VehicleSize, Price>;
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
    name: "Premium Wash",
    items: [
  "Protection by Sealant Spray / Perlindungan dengan Sealant Spray",
  "Long Lasting Tyre Gel / Gel Ban Tahan Lama",
  "Interior Vacuum / Vakum Interior",
  "Interior Cleaning / Pembersihan Interior",
  "Under Carriage Wash / Pencucian Kolong Mobil",
  "Hydrophobic Effect / Efek Hidrofobik",
],

    price: {
      original: 120000,
      discount: 80000,
    },
  },
  {
    name: "Signature Wash",
    items: [
  "Pre Wash using Premium Touchless Shampoo / Pra-cuci menggunakan Shampoo Premium Tanpa Sentuh",
  "Detailed Wash / Pencucian Detail",
  "Protection by Wet Coat / Perlindungan dengan Wet Coat",
  "Finishing by Sealant Spray / Finishing dengan Sealant Spray",
  "Long Lasting Tyre Gel / Gel Ban Tahan Lama",
  "Interior Vacuum / Vakum Interior",
  "Interior Cleaning / Pembersihan Interior",
  "Under Carriage Wash / Pencucian Kolong Mobil",
  "Fogging / Fogging (Sterilisasi Kabin)",
  "Hydrophobic Effect / Efek Hidrofobik",
],

    price: {
      original: 160000,
      discount: 120000,
    },
  },
  {
    name: "After Coating Wash",
    items: [
  "Pre Wash using Premium Touchless Shampoo / Pra-cuci menggunakan Shampoo Premium Tanpa Sentuh",
  "Detailed Wash / Pencucian Detail",
  "Protection by Wet Coat / Perlindungan dengan Wet Coat",
  "Finishing by Booster Coating Spray / Finishing dengan Booster Coating Spray",
  "Long Lasting Tyre Gel / Gel Ban Tahan Lama",
  "Interior Vacuum / Vakum Interior",
  "Interior Cleaning / Pembersihan Interior",
  "Under Carriage Wash / Pencucian Kolong Mobil",
  "Fogging / Fogging (Sterilisasi Kabin)",
  "Hydrophobic Effect / Efek Hidrofobik",
  "More Durable Coating / Lapisan Coating Lebih Tahan Lama",
],

    price: {
      original: 180000,
      discount: 130000,
    },
  },

  {
    name: "After PPF Wash",
    items: [
  "Pre Wash using Premium Touchless Shampoo / Pra-cuci menggunakan Shampoo Premium Tanpa Sentuh",
  "Detailed Wash / Pencucian Detail",
  "Protection by Wet Coat / Perlindungan dengan Wet Coat",
  "Finishing by Maintenance PPF / Finishing dengan Perawatan PPF",
  "Long Lasting Tyre Gel / Gel Ban Tahan Lama",
  "Interior Vacuum / Vakum Interior",
  "Interior Cleaning / Pembersihan Interior",
  "Under Carriage Wash / Pencucian Kolong Mobil",
  "Fogging / Fogging (Sterilisasi Kabin)",
  "Hydrophobic Effect / Efek Hidrofobik",
  "More Durable Coating / Lapisan Coating Lebih Tahan Lama",
],
    price: {
      original: 200000,
      discount: 160000,
    },
  },
  {
    name: "Signature Sealant Wash & Wax",
    items: [
  "Pre Wash using Premium Touchless Shampoo / Pra-cuci menggunakan Shampoo Premium Tanpa Sentuh",
  "Detailed Wash / Pencucian Detail",
  "1st Protection by Wet Coat / Perlindungan Pertama dengan Wet Coat",
  "2nd Protection by Manual Sealant Wax Paint / Perlindungan Kedua dengan Sealant Wax Manual pada Cat",
  "Finishing by Sealant Spray / Finishing dengan Sealant Spray",
  "Long Lasting Tyre Gel / Gel Ban Tahan Lama",
  "Interior Vacuum / Vakum Interior",
  "Interior Cleaning / Pembersihan Interior",
  "Under Carriage Wash / Pencucian Kolong Mobil",
  "Fogging / Fogging (Sterilisasi Kabin)",
  "Hydrophobic Effect / Efek Hidrofobik",
  "Gloss and Shiny Car / Kilap dan Tampilan Mobil Lebih Mengkilap",
],

    price: {
      original: 200000,
      discount: 160000,
    },
  },
  {
    name: "Black Sealant Wash & Wax",
  items: [
  "Pre Wash using Premium Touchless Shampoo / Pra-cuci menggunakan Shampoo Premium Tanpa Sentuh",
  "Detailed Wash / Pencucian Detail",
  "1st Protection by Wet Coat / Perlindungan Pertama dengan Wet Coat",
  "All Body Waterspot Removal / Penghilangan Waterspot di Seluruh Body Mobil",
  "2nd Protection by Manual Sealant Wax Paint / Perlindungan Kedua dengan Sealant Wax Manual pada Cat",
  "Finishing by Sealant Spray / Finishing dengan Sealant Spray",
  "Long Lasting Tyre Gel / Gel Ban Tahan Lama",
  "Interior Vacuum / Vakum Interior",
  "Interior Cleaning / Pembersihan Interior",
  "Under Carriage Wash / Pencucian Kolong Mobil",
  "Fogging / Fogging (Sterilisasi Kabin)",
  "Hydrophobic Effect / Efek Hidrofobik",
  "Gloss and Shiny Car / Kilap dan Tampilan Mobil Lebih Mengkilap",
],
    price: {
      original: 280000,
      discount: 200000,
    },
  },
  {
    name: "White Sealant Wash & Wax",
   items: [
  "Pre Wash using Premium Touchless Shampoo / Pra-cuci menggunakan Shampoo Premium Tanpa Sentuh",
  "Detailed Wash / Pencucian Detail",
  "1st Protection by Wet Coat / Perlindungan Pertama dengan Wet Coat",
  "All Body Tar Removal / Penghilangan Getah & Aspal di Seluruh Body Mobil",
  "2nd Protection by Manual Sealant Wax Paint / Perlindungan Kedua dengan Sealant Wax Manual pada Cat",
  "Finishing by Sealant Spray / Finishing dengan Sealant Spray",
  "Long Lasting Tyre Gel / Gel Ban Tahan Lama",
  "Interior Vacuum / Vakum Interior",
  "Interior Cleaning / Pembersihan Interior",
  "Under Carriage Wash / Pencucian Kolong Mobil",
  "Fogging / Fogging (Sterilisasi Kabin)",
  "Hydrophobic Effect / Efek Hidrofobik",
  "Clean and Gloss Car / Mobil Bersih dan Tampak Mengkilap",
],
    price: {
      original: 280000,
      discount: 200000,
    },
  },
  {
    name: "Complete Sealant Wash & Wax",
   items: [
  "Pre Wash using Premium Touchless Shampoo / Pra-cuci menggunakan Shampoo Premium Tanpa Sentuh",
  "Detailed Wash / Pencucian Detail",
  "1st Protection by Wet Coat / Perlindungan Pertama dengan Wet Coat",
  "All Body Waterspot Removal / Penghilangan Waterspot di Seluruh Body Mobil",
  "All Body Tar Removal / Penghilangan Getah & Aspal di Seluruh Body Mobil",
  "2nd Protection by Manual Sealant Wax Paint / Perlindungan Kedua dengan Sealant Wax Manual pada Cat",
  "Finishing by Sealant Spray / Finishing dengan Sealant Spray",
  "Long Lasting Tyre Gel / Gel Ban Tahan Lama",
  "Interior Vacuum / Vakum Interior",
  "Interior Cleaning / Pembersihan Interior",
  "Under Carriage Wash / Pencucian Kolong Mobil",
  "Fogging / Fogging (Sterilisasi Kabin)",
  "Hydrophobic Effect / Efek Hidrofobik",
  "Clean, Gloss and Shiny Car / Mobil Bersih, Mengkilap, dan Tampak Lebih Berkilau",
],
    price: {
      original: 330000,
      discount: 250000,
    },
  },
  {
    name: "Basic Polish",
    items: [
  "Pre Wash using Premium Touchless Shampoo / Pra-cuci menggunakan Shampoo Premium Tanpa Sentuh",
  "Detailed Wash / Pencucian Detail",
  "1st Protection by Wet Coat / Perlindungan Pertama dengan Wet Coat",
  "All Body Polish by DA Machine / Poles Seluruh Body dengan Mesin DA",
  "2nd Protection by Manual Sealant Wax Paint / Perlindungan Kedua dengan Sealant Wax Manual pada Cat",
  "Finishing by Sealant Spray / Finishing dengan Sealant Spray",
  "Long Lasting Tyre Gel / Gel Ban Tahan Lama",
  "Interior Vacuum / Vakum Interior",
  "Interior Cleaning / Pembersihan Interior",
  "Under Carriage Wash / Pencucian Kolong Mobil",
  "Fogging / Fogging (Sterilisasi Kabin)",
  "Hydrophobic Effect / Efek Hidrofobik",
  "Swirl Mark Reduced by 70% / Pengurangan Swirl Mark hingga 70%",
  "Gloss Up to 80% / Tingkat Kilap hingga 80%",
],

    price: {
      original: 380000,
      discount: 300000,
    },
  },
  {
    name: "Black Polish",
    items: [
  "Pre Wash using Premium Touchless Shampoo / Pra-cuci menggunakan Shampoo Premium Tanpa Sentuh",
  "Detailed Wash / Pencucian Detail",
  "1st Protection by Wet Coat / Perlindungan Pertama dengan Wet Coat",
  "All Body Waterspot Removal / Penghilangan Waterspot di Seluruh Body Mobil",
  "All Body Polish by DA Machine / Poles Seluruh Body dengan Mesin DA",
  "2nd Protection by Manual Sealant Wax Paint / Perlindungan Kedua dengan Sealant Wax Manual pada Cat",
  "Finishing by Sealant Spray / Finishing dengan Sealant Spray",
  "Long Lasting Tyre Gel / Gel Ban Tahan Lama",
  "Interior Vacuum / Vakum Interior",
  "Interior Cleaning / Pembersihan Interior",
  "Under Carriage Wash / Pencucian Kolong Mobil",
  "Fogging / Fogging (Sterilisasi Kabin)",
  "Hydrophobic Effect / Efek Hidrofobik",
  "Swirl Mark Reduced by 70% / Pengurangan Swirl Mark hingga 70%",
  "Gloss Up to 80% / Tingkat Kilap hingga 80%",
],
    price: {
      original: 430000,
      discount: 350000,
    },
  },
  {
    name: "White Polish",
    items: [
  "Pre Wash using Premium Touchless Shampoo / Pra-cuci menggunakan Shampoo Premium Tanpa Sentuh",
  "Detailed Wash / Pencucian Detail",
  "1st Protection by Wet Coat / Perlindungan Pertama dengan Wet Coat",
  "All Body Tar Removal / Penghilangan Getah & Aspal di Seluruh Body Mobil",
  "All Body Polish by DA Machine / Poles Seluruh Body dengan Mesin DA",
  "2nd Protection by Manual Sealant Wax Paint / Perlindungan Kedua dengan Sealant Wax Manual pada Cat",
  "Finishing by Sealant Spray / Finishing dengan Sealant Spray",
  "Long Lasting Tyre Gel / Gel Ban Tahan Lama",
  "Interior Vacuum / Vakum Interior",
  "Interior Cleaning / Pembersihan Interior",
  "Under Carriage Wash / Pencucian Kolong Mobil",
  "Fogging / Fogging (Sterilisasi Kabin)",
  "Hydrophobic Effect / Efek Hidrofobik",
  "Swirl Mark Reduced by 70% / Pengurangan Swirl Mark hingga 70%",
  "Gloss Up to 80% / Tingkat Kilap hingga 80%",
],
    price: {
      original: 430000,
      discount: 350000,
    },
  },
  {
    name: "Ultimate Polish",
    items: [
  "Pre Wash using Premium Touchless Shampoo / Pra-cuci menggunakan Shampoo Premium Tanpa Sentuh",
  "Detailed Wash / Pencucian Detail",
  "1st Protection by Wet Coat / Perlindungan Pertama dengan Wet Coat",
  "All Body Waterspot Removal / Penghilangan Waterspot di Seluruh Body Mobil",
  "All Body Tar Removal / Penghilangan Getah & Aspal di Seluruh Body Mobil",
  "All Body Polish by DA Machine / Poles Seluruh Body dengan Mesin DA",
  "2nd Protection by Manual Sealant Wax Paint / Perlindungan Kedua dengan Sealant Wax Manual pada Cat",
  "Finishing by Sealant Spray / Finishing dengan Sealant Spray",
  "Long Lasting Tyre Gel / Gel Ban Tahan Lama",
  "Interior Vacuum / Vakum Interior",
  "Interior Cleaning / Pembersihan Interior",
  "Under Carriage Wash / Pencucian Kolong Mobil",
  "Fogging / Fogging (Sterilisasi Kabin)",
  "Hydrophobic Effect / Efek Hidrofobik",
  "Swirl Mark Reduced by 70% / Pengurangan Swirl Mark hingga 70%",
  "Gloss Up to 80% / Tingkat Kilap hingga 80%",
],

    price: {
      original: 480000,
      discount: 400000,
    },
  },

   {
    name: "Ultimate Paint Correction",
    items: [],
    sizes: ["S", "M", "L", "XL"],
    pricesBySize: {
      S: { original: 720000, discount: 650000 },
      M: { original: 770000, discount: 700000 },
      L: { original: 820000, discount: 750000 },
      XL:{ original: 870000, discount: 800000 },
    },
  },

  {
    name: "Premium Car Detailing",
    variants: [
      {
        name: "Exterior Detailing",
        pricesBySize: {
          S: { original: 900000 },
          M: { original: 950000 },
          L: { original: 1000000 },
          XL: { original: 1050000 },
        },
      },
      {
        name: "Interior Detailing",
        pricesBySize: {
          S: { original: 500000 },
          M: { original: 600000 },
          L: { original: 700000 },
          XL: { original: 750000 },
        },
      },
      {
        name: "Full Detailing",
        pricesBySize: {
          S: { original: 1350000 },
          M: { original: 1500000 },
          L: { original: 1600000 },
          XL: { original: 1700000 },
        },
      },
    ],
    items: []
  },

  {
    name: "Xpress Coating",
    items: [],
    sizes: ["S", "M", "L", "XL"],
    pricesBySize: {
      S: { original: 1800000},
      M: { original: 1900000 },
      L: { original: 2000000},
      XL:{ original: 2100000},
    },
  },

  {
    name: "Basic Coating",
    items: [],
    sizes: ["S", "M", "L", "XL"],
    pricesBySize: {
        S: { original: 2500000 },
        M: { original: 2600000 },
        L: { original: 2700000 },
        XL:{ original: 2800000 },
      },
  },

  {
    name: "Premium Coating",
    variants: [
   
   
    {
      name: "Premium Coating - GOLD",
      pricesBySize: {
        S: { original: 3500000 },
        M: { original: 4000000 },
        L: { original: 4500000 },
        XL:{ original: 5000000 },
      },
    },
    {
      name: "Premium Coating - SAPPHIRE",
      pricesBySize: {
        S: { original: 4500000 },
        M: { original: 5000000 },
        L: { original: 5500000 },
        XL:{ original: 6000000 },
      },
    },
    {
      name: "Premium Coating - DIAMOND",
      pricesBySize: {
        S: { original: 5500000 },
        M: { original: 6000000 },
        L: { original: 6500000 },
        XL:{ original: 7000000 },
      },
    },
  ],
  items: [],
  },

  {
  name: "Pemasangan Kaca Film",
  variants: [
    {
      name: "TOP GT ECO",
      pricesBySize: {
        S: { original: 755000 },
        M: { original: 795000 },
        L: { original: 855000 },
        XL:{ original: 895000 },
      },
    },
    {
      name: "TOP GT DIAMOND",
      pricesBySize: {
        S: { original: 1395000 },
        M: { original: 1495000 },
        L: { original: 1595000 },
        XL:{ original: 1695000 },
      },
    },
    {
      name: "ICEBERG",
      pricesBySize: {
        S: { original: 4300000 },
        M: { original: 4600000 },
        L: { original: 4800000 },
        XL:{ original: 5800000 },
      },
    },
  ],
  items: [],
}



];
