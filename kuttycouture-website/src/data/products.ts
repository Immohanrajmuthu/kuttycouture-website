import type { Product } from "../types/product";

// Product images

import hero100005 from "../assets/products/accessories/golden-polished-disc-necklace-hero-100005.webp";
import model100005 from "../assets/products/accessories/golden-polished-disc-necklace-model-100005.webp";
import detail100005 from "../assets/products/accessories/golden-polished-disc-necklace-detail-100005.webp";

import lollipopFrock from "../assets/products/clothing/lollipop-ice-cream-frock.webp";
import abcFullSleeveSet from "../assets/products/clothing/abc-full-sleeve-set.webp";
import puppyJablaSet from "../assets/products/clothing/puppy-jabla-shorts-set.webp";
import starKnotFrock from "../assets/products/clothing/star-knot-frock.webp";

//SKU-100000
import hero100000 from "../assets/products/accessories/gold-clover-charm-necklace-hero-100000.webp";
import model100000 from "../assets/products/accessories/gold-clover-charm-necklace-model-100000.webp";
import detail100000 from "../assets/products/accessories/gold-clover-charm-necklace-detail-100000.webp";

//SKU-100001
import hero100001 from "../assets/products/accessories/golden-butterfly-necklace-hero-100001.webp";
import model100001 from "../assets/products/accessories/golden-butterfly-necklace-model-100001.webp";
import detail100001 from "../assets/products/accessories/golden-butterfly-necklace-detail-100001.webp";

//SKU-100002
import hero100002 from "../assets/products/accessories/golden-twin-hearts-necklace-hero-100002.webp";
import model100002 from "../assets/products/accessories/golden-twin-hearts-necklace-model-100002.webp";
import detail100002 from "../assets/products/accessories/golden-twin-hearts-necklace-detail-100002.webp";

//SKU-100004
import hero100004 from "../assets/products/accessories/pink-stone-pendant-necklace-hero-100004.webp";
import model100004 from "../assets/products/accessories/pink-stone-pendant-necklace-model-100004.webp";
import detail100004 from "../assets/products/accessories/pink-stone-pendant-necklace-detail-100004.webp";

//SKU-100003
import hero100003 from "../assets/products/accessories/golden-heart-layers-necklace-hero-100003.webp";
import model100003 from "../assets/products/accessories/golden-heart-layers-necklace-model-100003.webp";
import detail100003 from "../assets/products/accessories/golden-heart-layers-necklace-detail-100003.webp";

// SKU-100006
import hero100006 from "../assets/products/accessories/bow-necklace-hero-100006.webp";
import model100006 from "../assets/products/accessories/bow-necklace-model-100006.webp";
import detail100006 from "../assets/products/accessories/bow-necklace-detail-100006.webp";

// SKU-100007
import hero100007 from "../assets/products/accessories/floral-bracelet-hero-100007.webp";
import model100007 from "../assets/products/accessories/floral-bracelet-model-100007.webp";
import detail100007 from "../assets/products/accessories/floral-bracelet-detail-100007.webp";

// SKU-100008
import hero100008 from "../assets/products/accessories/heart-bracelet-hero-100008.webp";
import model100008 from "../assets/products/accessories/heart-bracelet-model-100008.webp";
import detail100008 from "../assets/products/accessories/heart-bracelet-detail-100008.webp";

// SKU-100009
import hero100009 from "../assets/products/accessories/rectangle-necklace-hero-100009.webp";
import model100009 from "../assets/products/accessories/rectangle-necklace-model-100009.webp";
import detail100009 from "../assets/products/accessories/rectangle-necklace-detail-100009.webp";

// SKU-100010
import butterflyClipBlue100010 from "../assets/products/hair-accessories/translucent-butterfly-hair-clip-blue-100010.webp";
import butterflyClipBrown100010 from "../assets/products/hair-accessories/translucent-butterfly-hair-clip-brown-100010.webp";
import butterflyClipGrey100010 from "../assets/products/hair-accessories/translucent-butterfly-hair-clip-grey-100010.webp";
import butterflyClipPink100010 from "../assets/products/hair-accessories/translucent-butterfly-hair-clip-pink-100010.webp";
import butterflyClipPurple100010 from "../assets/products/hair-accessories/translucent-butterfly-hair-clip-purple-100010.webp";
import butterflyClipWhite100010 from "../assets/products/hair-accessories/translucent-butterfly-hair-clip-white-100010.webp";
import butterflyClipModel100010 from "../assets/products/hair-accessories/translucent-butterfly-hair-clip-model-pink-100010.webp";

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

    offerAvailable: false,

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

    offerAvailable: false,

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
      "An elegant golden necklace featuring two interlocking heart pendants.",

    price: null,
    availability: "in-stock",

    material: "Stainless steel",
    occasionTags: ["Everyday", "casual"],

    offerAvailable: false,

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

    offerAvailable: false,

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

    offerAvailable: false,

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
    id: "golden-polished-disc-necklace",
    name: "Golden Polished Disc Necklace",
    sku: 100005,
    stockCount: 10,

    category: "accessories",
    productType: "necklace",
    audience: ["women", "kids"],

    shortDescription:
      "A delicate gold-tone necklace featuring seven smooth polished metal discs.",

    price: null,
    availability: "in-stock",

    material: "Stainless steel",
    occasionTags: ["Everyday", "casual"],

    offerAvailable: false,

    images: [
      {
        src: hero100005,
        alt: "Gold-tone necklace with seven smooth polished metal discs displayed on a white beaded jewellery holder.",
      },
      {
        src: model100005,
        alt: "Close-up of a woman wearing a delicate gold-tone necklace with seven smooth polished metal discs.",
      },
      {
        src: detail100005,
        alt: "Macro detail of a gold-tone necklace with seven smooth polished metal discs displayed on ivory satin.",
      },
    ],
  },

  {
    id: "golden-bow-lariat-necklace",
    name: "Golden Bow Lariat Necklace",
    sku: 100006,
    stockCount: 1,

    category: "accessories",
    productType: "necklace",
    audience: ["women", "kids"],

    shortDescription:
      "A delicate gold-tone lariat necklace adorned with seven graceful bow charms.",

    price: null,
    availability: "in-stock",

    material: "Stainless steel",
    occasionTags: ["Everyday", "special occasions"],

    offerAvailable: false,

    images: [
      {
        src: hero100006,
        alt: "Gold-tone lariat necklace with seven bow charms displayed on a burgundy velvet jewellery stand.",
      },
      {
        src: model100006,
        alt: "Close-up of a woman wearing a gold-tone lariat necklace with seven delicate bow charms and an ivory ruffled top.",
      },
      {
        src: detail100006,
        alt: "Macro detail of a gold-tone seven-bow lariat necklace displayed on burgundy velvet and ivory satin.",
      },
    ],
  },

  {
    id: "golden-floral-bracelet",
    name: "Golden Floral Bracelet",
    sku: 100007,
    stockCount: 1,

    category: "accessories",
    productType: "bracelet",
    audience: ["women", "kids"],

    shortDescription:
      "A refined gold-tone bracelet with four sparkling floral crystal motifs.",

    price: null,
    availability: "in-stock",

    material: "Stainless steel",
    occasionTags: ["Everyday", "special occasions"],

    offerAvailable: false,

    images: [
      {
        src: hero100007,
        alt: "Gold-tone mesh bracelet with four sparkling floral crystal motifs displayed on a cream jewellery pillow.",
      },
      {
        src: model100007,
        alt: "Close-up of a woman wearing a gold-tone mesh bracelet with four sparkling floral crystal motifs.",
      },
      {
        src: detail100007,
        alt: "Macro detail of a gold-tone mesh bracelet with four sparkling floral crystal motifs on a cream jewellery pillow.",
      },
    ],
  },

  {
    id: "golden-double-heart-bracelet",
    name: "Golden Double Heart Bracelet",
    sku: 100008,
    stockCount: 1,

    category: "accessories",
    productType: "bracelet",
    audience: ["women", "kids"],

    shortDescription:
      "A delicate gold-tone bracelet with a linked double-heart centre and sparkling crystal accents.",

    price: null,
    availability: "in-stock",

    material: "Stainless steel",
    occasionTags: ["Everyday", "special occasions"],

    offerAvailable: false,

    images: [
      {
        src: hero100008,
        alt: "Gold-tone bracelet with a linked double-heart centre and crystal accents displayed on a white beaded jewellery holder.",
      },
      {
        src: model100008,
        alt: "Close-up of a woman wearing a gold-tone double-heart bracelet with two sparkling crystal accents.",
      },
      {
        src: detail100008,
        alt: "Macro detail of a gold-tone double-heart bracelet with two sparkling crystal accents displayed on ivory satin.",
      },
    ],
  },

  {
    id: "golden-rectangle-crystal-necklace",
    name: "Golden Rectangle Crystal Necklace",
    sku: 100009,
    stockCount: 1,

    category: "accessories",
    productType: "necklace",
    audience: ["women", "kids"],

    shortDescription:
      "An elegant gold-tone necklace with a crystal-edged open rectangle pendant.",

    price: null,
    availability: "in-stock",

    material: "Stainless steel",
    occasionTags: ["Everyday", "special occasions"],

    offerAvailable: false,

    images: [
      {
        src: hero100009,
        alt: "Gold-tone necklace with a rectangular open pendant framed in clear crystals displayed on a burgundy velvet jewellery stand.",
      },
      {
        src: model100009,
        alt: "Close-up of a woman wearing a gold-tone necklace with a rectangular open pendant framed in clear crystals.",
      },
      {
        src: detail100009,
        alt: "Macro detail of a gold-tone rectangular open pendant framed in clear crystals displayed on ivory satin.",
      },
    ],
  },

  {
    id: "translucent-butterfly-hair-clip",
    name: "Translucent Butterfly Hair Clip",
    sku: 100010,
    stockCount: 10,

    category: "accessories",
    productType: "hair-accessories",
    audience: ["women", "kids"],

    shortDescription:
      "A frosted translucent butterfly claw clip, available in six soft colours.",

    price: null,
    availability: "in-stock",

    material: "Plastic with a metal spring",
    occasionTags: ["Everyday", "casual"],

    offerAvailable: false,
    // color: "Soft Blue, Warm Brown, Smoky Grey, Soft Pink, Lavender, Milky White",

    images: [
      {
        src: butterflyClipBlue100010,
        alt: "Soft blue translucent butterfly hair claw clip with a metal spring.",
        color: "Soft Blue",
      },
      {
        src: butterflyClipBrown100010,
        alt: "Warm brown translucent butterfly hair claw clip with a metal spring.",
        color: "Warm Brown",
      },
      {
        src: butterflyClipGrey100010,
        alt: "Smoky grey translucent butterfly hair claw clip with a metal spring.",
        color: "Smoky Grey",
      },
      {
        src: butterflyClipPink100010,
        alt: "Soft pink translucent butterfly hair claw clip with a metal spring.",
        color: "Soft Pink",
      },
      {
        src: butterflyClipPurple100010,
        alt: "Lavender translucent butterfly hair claw clip with a metal spring.",
        color: "Lavender",
      },
      {
        src: butterflyClipWhite100010,
        alt: "Milky white translucent butterfly hair claw clip with a metal spring.",
        color: "Milky White",
      },
      {
        src: butterflyClipModel100010,
        alt: "Woman wearing the soft pink translucent butterfly hair claw clip in her wavy hair.",
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // CLOTHING — MUSLIN
  // ---------------------------------------------------------------------------

  {
    id: "lollipop-ice-cream-printed-frock",
    name: "Lollipop & Ice-cream Printed Frock",
    sku: 200000,
    stockCount: 10,

    category: "clothing",
    productType: "frock",
    audience: ["baby"],

    shortDescription:
      "A playful muslin frock featuring colourful lollipop and ice-cream prints.",

    price: null,
    availability: "out-of-stock",

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
    sku: 200001,
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
    sku: 200002,
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
    sku: 200003,
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
