import type { Product } from "../types/product";

// Product images
import floralPendant from "../assets/products/accessories/floral-pendant-necklace.png";
import crossPendant from "../assets/products/accessories/cross-pendant-necklace.png";
import heartNecklace from "../assets/products/accessories/double-layer-heart-necklace.png";
import leafPendant from "../assets/products/accessories/leaf-feather-pendant-necklace.png";
import pinkStonePendant from "../assets/products/accessories/pink-stone-pendant-necklace.png";
import goldBarNecklace from "../assets/products/accessories/gold-bar-stone-necklace.png";

import lollipopFrock from "../assets/products/clothing/lollipop-ice-cream-frock.png";
import abcFullSleeveSet from "../assets/products/clothing/abc-full-sleeve-set.png";
import puppyJablaSet from "../assets/products/clothing/puppy-jabla-shorts-set.png";
import starKnotFrock from "../assets/products/clothing/star-knot-frock.png";

export const products: Product[] = [
  // ---------------------------------------------------------------------------
  // ACCESSORIES
  // ---------------------------------------------------------------------------

  {
    id: "floral-pendant-necklace",
    name: "Floral Pendant Necklace",
    sku: 100000,
    stockCount: 10,

    category: "accessories",
    type: "necklace",
    audience: ["women", "kids"],

    shortDescription:
      "A delicate floral pendant designed for simple, everyday elegance.",

    price: 399,
    availability: "out-of-stock",

    material: "Stainless steel",
    styleOccasion: "Everyday / casual",

    offerAvailable: true,

    images: [
      {
        src: floralPendant,
        alt: "Gold-tone floral pendant necklace displayed on a pink jewellery stand.",
      },
    ],
  },

  {
    id: "cross-pendant-necklace",
    name: "Cross Pendant Necklace",
    sku: 100001,
    stockCount: 10,

    category: "accessories",
    type: "necklace",
    audience: ["women", "kids"],

    shortDescription:
      "A simple cross pendant necklace with a delicate chain for everyday wear.",

    price: null,
    availability: "low-stock",

    material: "Stainless steel",
    styleOccasion: "Everyday / casual",

    offerAvailable: true,

    images: [
      {
        src: crossPendant,
        alt: "Gold-tone cross pendant necklace displayed on a pink jewellery stand.",
      },
    ],
  },

  {
    id: "double-layer-heart-necklace",
    name: "Double-layer Heart Necklace",
    sku: 100002,
    stockCount: 10,
    category: "accessories",
    type: "necklace",
    audience: ["women", "kids"],

    shortDescription:
      "A delicate double-layer necklace featuring a simple heart pendant.",

    price: null,
    availability: "in-stock",

    material: "Stainless steel",
    styleOccasion: "Everyday / casual",

    offerAvailable: true,

    images: [
      {
        src: heartNecklace,
        alt: "Double-layer gold-tone heart necklace displayed on a white heart-shaped stand.",
      },
    ],
  },

  {
    id: "leaf-feather-pendant-necklace",
    name: "Leaf/Feather Pendant Necklace",
    sku: 100003,
    stockCount: 10,

    category: "accessories",
    type: "necklace",
    audience: ["women", "kids"],

    shortDescription:
      "A graceful pendant necklace featuring a delicate leaf-inspired design.",

    price: null,
    availability: "in-stock",

    material: "Stainless steel",
    styleOccasion: "Everyday / casual",

    offerAvailable: true,

    images: [
      {
        src: leafPendant,
        alt: "Gold-tone leaf-inspired pendant necklace displayed on a pink jewellery stand.",
      },
    ],
  },

  {
    id: "pink-stone-pendant-necklace",
    name: "Pink Stone Pendant Necklace",
    sku: 100004,
    stockCount: 10,
    category: "accessories",
    type: "necklace",
    audience: ["women", "kids"],

    shortDescription:
      "A delicate necklace featuring a refined pink stone pendant.",

    price: null,
    availability: "in-stock",

    material: "Stainless steel",
    styleOccasion: "Everyday / special occasions",

    offerAvailable: true,

    images: [
      {
        src: pinkStonePendant,
        alt: "Gold-tone necklace with a small pink stone pendant displayed on a jewellery stand.",
      },
    ],
  },

  {
    id: "gold-bar-stone-necklace",
    name: "Gold Bar/Stone Necklace",
    sku: 100005,
    stockCount: 10,

    category: "accessories",
    type: "necklace",
    audience: ["women", "kids"],

    shortDescription:
      "A minimal necklace featuring a delicate gold-tone bar detail.",

    price: null,
    availability: "in-stock",

    material: "Stainless steel",
    styleOccasion: "Everyday / casual",

    offerAvailable: true,

    images: [
      {
        src: goldBarNecklace,
        alt: "Delicate gold-tone necklace with a small bar detail displayed on a white jewellery stand.",
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // CLOTHING — MUSLIN
  // ---------------------------------------------------------------------------

  {
    id: "lollipop-ice-cream-printed-frock",
    name: "Lollipop & Ice-cream Printed Frock",
    sku: 100006,
    stockCount: 10,

    category: "clothing",
    type: "frock",
    audience: ["baby"],

    shortDescription:
      "A playful muslin frock featuring colourful lollipop and ice-cream prints.",

    price: null,
    availability: "in-stock",

    sizes: [
      "S (0–3 Months)",
      "M (3–6 Months)",
      "L (6–12 Months)",
    ],

    fabric: "Muslin",
    styleOccasion: "Everyday wear",
    pattern: "Lollipop & ice-cream print",

    offerAvailable: true,

    images: [
      {
        src: lollipopFrock,
        alt: "White muslin baby frock with colourful lollipop and ice-cream prints.",
      },
    ],
  },

  {
    id: "abc-learning-full-sleeve-set",
    name: "ABC/Learning Print Full-sleeve Set",
    sku: 100007,
    stockCount: 10,

    category: "clothing",
    type: "full-sleeve-set",
    audience: ["baby"],

    shortDescription:
      "A comfortable muslin full-sleeve set featuring playful learning-themed prints.",

    price: null,
    availability: "in-stock",

    sizes: [
      "S (0–3 Months)",
      "M (3–6 Months)",
      "L (6–12 Months)",
    ],

    fabric: "Muslin",
    styleOccasion: "Everyday wear",
    setContents: "Full-sleeve top and matching bottom",
    pattern: "Learning-themed print",

    offerAvailable: true,

    images: [
      {
        src: abcFullSleeveSet,
        alt: "White muslin baby full-sleeve set with colourful alphabet, pencil and learning-themed prints.",
      },
    ],
  },

  {
    id: "puppy-print-jabla-shorts-set",
    name: "Puppy Print Jabla/Shorts Set",
    sku: 100008,
    stockCount: 10,

    category: "clothing",
    type: "jabla-shorts-set",
    audience: ["baby"],

    shortDescription:
      "A soft muslin jabla and shorts set featuring playful puppy prints.",

    price: null,
    availability: "in-stock",

    sizes: [
      "S (0–3 Months)",
      "M (3–6 Months)",
      "L (6–12 Months)",
    ],

    fabric: "Muslin",
    styleOccasion: "Everyday wear",
    setContents: "Jabla top and matching shorts",
    pattern: "Puppy print",

    offerAvailable: true,

    images: [
      {
        src: puppyJablaSet,
        alt: "White muslin baby jabla and shorts set with playful puppy prints.",
      },
    ],
  },

  {
    id: "star-print-knot-frock",
    name: "Star Print Knot Frock",
    sku: 100009,
    stockCount: 10,

    category: "clothing",
    type: "knot-frock",
    audience: ["baby"],

    shortDescription:
      "A lightweight muslin knot frock with a cheerful star print.",

    price: null,
    availability: "in-stock",

    sizes: [
      "S (0–3 Months)",
      "M (3–6 Months)",
      "L (6–12 Months)",
    ],

    fabric: "Muslin",
    styleOccasion: "Everyday wear",
    pattern: "Star print",

    offerAvailable: true,

    images: [
      {
        src: starKnotFrock,
        alt: "White muslin baby knot frock with colourful star prints.",
      },
    ],
  },
];

export default products;