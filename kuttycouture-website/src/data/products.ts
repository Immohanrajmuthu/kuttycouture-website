import type { Product } from "../types/product";

// Product images
import hero100004 from "../assets/products/accessories/pink-stone-pendant-necklace-hero-100004.png";
import model100004 from "../assets/products/accessories/pink-stone-pendant-necklace-model-100004.png";
import detail100004 from "../assets/products/accessories/pink-stone-pendant-necklace-detail-100004.png";
import goldBarNecklace from "../assets/products/accessories/gold-bar-stone-necklace.png";

import lollipopFrock from "../assets/products/clothing/lollipop-ice-cream-frock.png";
import abcFullSleeveSet from "../assets/products/clothing/abc-full-sleeve-set.png";
import puppyJablaSet from "../assets/products/clothing/puppy-jabla-shorts-set.png";
import starKnotFrock from "../assets/products/clothing/star-knot-frock.png";

//SKU-100000
import hero100000 from "../assets/products/accessories/gold-clover-charm-necklace-hero-100000.png";
import model100000 from "../assets/products/accessories/gold-clover-charm-necklace-model-100000.png";
import detail100000 from "../assets/products/accessories/gold-clover-charm-necklace-detail-100000.png";

//SKU-100001
import hero100001 from "../assets/products/accessories/golden-butterfly-necklace-hero-100001.png";
import model100001 from "../assets/products/accessories/golden-butterfly-necklace-model-100001.png";
import detail100001 from "../assets/products/accessories/golden-butterfly-necklace-detail-100001.png";

//SKU-100002
import hero100002 from "../assets/products/accessories/golden-twin-hearts-necklace-hero-100002.png";
import model100002 from "../assets/products/accessories/golden-twin-hearts-necklace-model-100002.png";
import detail100002 from "../assets/products/accessories/golden-twin-hearts-necklace-detail-100002.png";

//SKU-100003
import hero100003 from "../assets/products/accessories/golden-heart-layers-necklace-hero-100003.png";
import model100003 from "../assets/products/accessories/golden-heart-layers-necklace-model-100003.png";
import detail100003 from "../assets/products/accessories/golden-heart-layers-necklace-detail-100003.png";


export const products: Product[] = [
  // ---------------------------------------------------------------------------
  // ACCESSORIES
  // ---------------------------------------------------------------------------

  {
    id: "Gold-Clover-Charm-Necklace-100000",
    name: "Gold Clover Charm Necklace",
    sku: 100000,
    stockCount: 1,

    category: "accessories",
    productType: "necklace",
    audience: ["women", "kids"],

    shortDescription:
      "Elegant gold chain necklace featuring delicate floral motifs and a sparkling four-petal crystal pendant.",

    price: null,
    availability: "out-of-stock",

    material: "Stainless steel",
    occasionTags: ["Everyday", "casual"],

    offerAvailable: true,

    images: [
      {
        src: hero100000,
        alt: "Gold chain necklace with floral motifs and a sparkling four-petal crystal pendant, displayed on a white beaded ring against a soft white textured background.",
      },
      {
        src: model100000,
        alt: "Close-up of a woman wearing a delicate gold chain necklace with floral motifs, small gemstone accents, and a sparkling four-petal floral pendant, styled with a white ruffled top.",
      },
      {
        src: detail100000,
        alt: "Gold chain necklace with floral motifs and a sparkling four-petal crystal pendant, displayed on a white beaded ring against a soft white textured background.",
      },
    ],
  },

  {
    id: "golden-butterfly-necklace",
    name: "Golden Butterfly Necklace",
    sku: 100001,
    stockCount: 1,

    category: "accessories",
    productType: "necklace",
    audience: ["women", "kids"],

    shortDescription:
      "Delicate gold butterfly necklace adorned with sparkling crystal accents.",

    price: null,
    availability: "in-stock",

    material: "Stainless steel",
    occasionTags: ["Everyday", "casual"],

    offerAvailable: true,

    images: [
      {
        src: hero100001,
        alt: "Gold chain necklace with a butterfly centerpiece and sparkling crystal stones, displayed on a white beaded jewelry holder against a soft white background.",
      },
      {
        src: model100001,
        alt: "Close-up of a woman wearing a delicate gold chain necklace with a butterfly centerpiece and sparkling crystal stones, styled with a white ruffled top.",
      },
      {
        src: detail100001,
        alt: "Gold chain necklace with a butterfly centerpiece and sparkling crystal stones, displayed on a white beaded jewelry holder against a soft white background.",
      },
    ],
  },

  {
    id: "golden-twin-hearts-necklace",
    name: "Golden Twin Hearts Necklace",
    sku: 100002,
    stockCount: 1,
    category: "accessories",
    productType: "necklace",
    audience: ["women", "kids"],

    shortDescription:
      "A elegant golden necklace featuring two interlocking heart pendants.",

    price: null,
    availability: "in-stock",

    material: "Stainless steel",
    occasionTags: ["Everyday", "casual"],

    offerAvailable: true,

    images: [
      {
        src: hero100002,
        alt: "Golden twin hearts necklace displayed on a white jewellery stand.",
      },
      {
        src: model100002,
        alt: "Close-up of a woman wearing a delicate golden necklace with two interlocking heart pendants, styled with a white ruffled top.",
      },
      {
        src: detail100002,
        alt: "Golden twin hearts necklace displayed on a white jewellery stand.",
      },
    ],
  },

  {
    id: "golden-heart-layers-necklace",
    name: "Golden Heart Layers Necklace",
    sku: 100003,
    stockCount: 1,

    category: "accessories",
    productType: "necklace",
    audience: ["women", "kids"],

    shortDescription:
      "A stylish golden necklace featuring layered heart pendants for a chic and elegant look.",

    price: null,
    availability: "in-stock",

    material: "Stainless steel",
    occasionTags: ["Everyday", "casual"],

    offerAvailable: true,

    images: [
      {
        src: hero100003,
        alt: "Layered gold-tone necklace with two polished heart pendants displayed on a pink velvet stand.",
      },
      {
        src: model100003,
        alt: "Close-up of a model wearing a layered gold-tone necklace with two heart pendants over a white top.",
      },
      {
        src: detail100003,
        alt: "Close-up of two polished heart pendants and the textured gold-tone chain against pink fabric.",
      },
    ],
  },

  {
    id: "pink-stone-pendant-necklace",
    name: "Pink Stone Pendant Necklace",
    sku: 100004,
    stockCount: 10,
    category: "accessories",
    productType: "necklace",
    audience: ["women", "kids"],

    shortDescription:
      "A delicate necklace featuring a refined pink stone pendant.",

    price: null,
    availability: "in-stock",

    material: "Stainless steel",
    occasionTags: ["Everyday", "special occasions"],

    offerAvailable: true,

    images: [
      {
        src: hero100004,
        alt: "Gold-tone necklace with a petite pink crystal pendant displayed on a white heart-shaped beaded jewellery holder.",
      },
      {
        src: model100004,
        alt: "Close-up of a woman wearing a delicate gold-tone necklace with a petite pink crystal pendant and a white ruffled top.",
      },
      {
        src: detail100004,
        alt: "Macro detail of a delicate gold-tone chain and petite pink crystal pendant displayed over ivory satin.",
      },
    ],
  },

  {
    id: "gold-bar-stone-necklace",
    name: "Gold Bar/Stone Necklace",
    sku: 100005,
    stockCount: 10,

    category: "accessories",
    productType: "necklace",
    audience: ["women", "kids"],

    shortDescription:
      "A minimal necklace featuring a delicate gold-tone bar detail.",

    price: null,
    availability: "in-stock",

    material: "Stainless steel",
    occasionTags: ["Everyday", "casual"],

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
    productType: "frock",
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
    occasionTags: ["Everyday", "casual"],
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
    productType: "full-sleeve-set",
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
    occasionTags: ["Everyday", "casual"],
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
    productType: "jabla-shorts-set",
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
    occasionTags: ["Everyday", "casual"],
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
    productType: "knot-frock",
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
    occasionTags: ["Everyday", "casual"],
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
