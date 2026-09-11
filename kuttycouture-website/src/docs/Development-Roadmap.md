# KuttyCouture Development Roadmap

🦋 Milestone 2 — Design System

KuttyCouture Website
│
├── Project Foundation       ✅
│
├── Milestone 2
│   ├── Design System        ✅
│   ├── Application Shell    ✅
│   ├── Responsive Header    ✅
│   ├── Responsive Footer    ✅
│   ├── Routing              ✅
│   └── Accessibility        ✅
│
└── Milestone 3              ✅


🦋 Milestone 3 — Homepage Discovery

## Goal

Help a first-time visitor understand what KuttyCouture offers, why it exists, and what they should do next.

## Status

✅ Complete

The homepage discovery experience is now implemented and reviewed across desktop and mobile layouts.

## Homepage Sections

### 1. Hero

Purpose:

Introduce the brand immediately and provide the first actions.

Current content:

- “Little Moments, Beautifully Curated”
- Supporting brand message
- Explore Collections CTA
- Chat on WhatsApp CTA

Verified:

✅ Hero artwork and composition
✅ Semantic HTML structure
✅ Proper `<h1>` hierarchy
✅ Accessible section labelling
✅ Descriptive image alternative text
✅ Keyboard focus states
✅ Touch-friendly CTA sizes
✅ Real HTML links instead of image-based buttons
✅ Desktop layout
✅ Minimized/laptop layout
✅ 375px mobile
✅ 390px mobile
✅ 430px mobile
✅ Responsive mobile-specific composition

⚠️ WhatsApp URL — known placeholder issue, intentionally deferred

---

### 2. Explore Our Collections

Purpose:

Answer the visitor's first practical question:

> What can I find here?

Current collections:

- Korean Stainless-Steel Accessories
- Muslin Baby Wear

The section uses visual category cards with concise descriptions and clear exploration actions.

---

### 3. Featured Picks

Purpose:

Move from category discovery into actual products.

Current implementation:

- Reusable product-card presentation
- Product image
- Product name
- Short product description
- Explore Product CTA

The section showcases a mixture of current accessories and baby-wear products so visitors can understand the breadth of the current catalogue.

Verified:

✅ Desktop three-column layout
✅ Responsive mobile stacking
✅ 375px mobile
✅ 390px mobile
✅ 430px mobile
✅ Minimized/laptop layout
✅ Accessible product-card content
✅ Keyboard-accessible product actions
✅ Descriptive product image alternatives
✅ Readable content and CTA structure

---

### 4. About KuttyCouture

Component:

`AboutKuttyCouture.tsx`

Purpose:

Answer the next important visitor question:

> Why KuttyCouture?

The section presents the story from the founder's perspective and explains that KuttyCouture began as a small, personally meaningful business built around:

- Creating an identity through work
- Carefully finding good products and reliable sources
- Learning and improving continuously
- Putting customer trust ahead of simply earning money
- Listening to feedback and addressing problems

The section uses an authentic family photograph and intentionally keeps the story focused on the woman behind KuttyCouture.

Supporting trust points:

- Carefully Chosen
- Customer First
- Growing With You

Verified:

✅ Desktop two-column composition
✅ Responsive mobile stacking
✅ 375px mobile
✅ 390px mobile
✅ 430px mobile
✅ Authentic image preserved without alteration
✅ Story content remains available as HTML text
✅ Semantic heading structure
✅ Readable paragraph spacing
✅ Responsive image presentation

---

### 5. Footer

Purpose:

Provide simple secondary navigation and connection paths.

Current links include:

- Collections
- About Us
- Contact
- WhatsApp
- Instagram
- Facebook

The footer closes the homepage without adding unnecessary content.

---

## Homepage Discovery Success Criteria

A visitor should be able to answer these four questions without opening multiple pages:

1. What is KuttyCouture?  
   ✅ Answered by the Hero and overall brand presentation.

2. What can I find here?  
   ✅ Answered by Explore Our Collections and Featured Picks.

3. Why should I explore this brand?  
   ✅ Answered by the product presentation and About KuttyCouture story.

4. How do I proceed if I like something?  
   ✅ Answered through Explore Collections, Explore Product, and Chat on WhatsApp actions.

## Current Homepage Flow

**Discover → Explore → See Products → Build Trust → Connect**

This is the intended content journey for the current homepage.

## Accessibility Verification

Accessibility has been treated as part of implementation rather than a final QA step.

Verified areas include:

- Semantic structure
- Heading hierarchy
- Image alternative text
- Keyboard navigation
- Focus visibility
- Link-based actions
- Touch-friendly controls
- Responsive readability
- Mobile layouts at 375px, 390px and 430px

## Milestone Outcome

🦋 **Milestone 3 — Homepage Discovery: COMPLETE**

The homepage now communicates the brand, product categories, featured products, founder story, trust principles, and contact paths without requiring the visitor to navigate through multiple pages first.

## Next Direction

The natural next milestone is the **Collections / Product Browsing experience**.

Focus areas should include:

- Category browsing
- Product listing
- Product discovery
- Product details
- Accessible product navigation
- Responsive layouts
- Clear path from product discovery to enquiry / purchase
