# KuttyCouture Design System

## Design Direction

Warm, elegant, welcoming, boutique-inspired.

The visual language should feel like a small, thoughtful boutique rather than a large marketplace. Product photography and authentic storytelling are the primary visual elements.

## Principles

- Brand-first
- Mobile-first
- Accessibility-first
- Content-first
- Simple over complex
- Authentic over overly polished
- Clear user journeys over decorative elements

## Visual Language

### Colour Direction

The current implementation uses a warm, soft palette:

- Warm off-white / cream for page backgrounds
- Warm brown / terracotta for primary actions and brand accents
- Dark neutral text for strong readability
- Soft muted borders for cards and structural separation
- White surfaces for cards and navigation

Colours should remain consistent across sections rather than introducing a new accent for every component.

### Typography

Typography should remain:

- Clean and highly readable for body content
- Strong and clear for headings
- Comfortable line-height for longer story/content sections
- Responsive across desktop and mobile

Heading hierarchy must remain semantic and visually consistent with the content hierarchy.

## Layout

Maximum content width: 1200px

The site follows a responsive, mobile-first layout.

Verified viewport targets include:

- Minimized / laptop layout
- Desktop layout
- 375px mobile
- 390px mobile
- 430px mobile

Sections should stack naturally on smaller screens rather than relying on horizontal scrolling for primary content.

## Spacing & Surfaces

The current visual system favours:

- Generous section spacing
- Rounded image and card corners
- Light borders
- Subtle shadows where needed
- Comfortable internal card padding
- Clear separation between major homepage sections

Decorative styling should never reduce readability or interfere with interaction.

## Components

### Global

- Header
- Footer
- Container
- Navigation links
- Primary CTA
- Secondary CTA

### Homepage

- Hero
- Collections / category cards
- Featured Products
- About KuttyCouture

### About / Trust Content

- Founder story content block
- Supporting value cards
  - Carefully Chosen
  - Customer First
  - Growing With You

## Accessibility

Accessibility is a first-class design requirement.

Current implementation practices include:

- Semantic HTML
- Correct heading hierarchy
- Descriptive image alternative text
- Accessible section labelling where appropriate
- Keyboard-accessible interactive elements
- Visible focus states
- Real HTML links for navigation/CTAs
- Touch-friendly interactive targets
- Content and actions that remain usable on mobile
- No essential information embedded only inside imagery

Images used for visual storytelling should not be treated as a replacement for accessible HTML content.

## Homepage Composition

The homepage currently follows this content hierarchy:

1. Hero — brand introduction and primary actions
2. Explore Our Collections — what KuttyCouture sells
3. Featured Picks — examples of current products
4. About KuttyCouture — why the brand exists and why customers can trust it
5. Footer — secondary navigation and social/contact paths

This order intentionally moves the visitor from:

**Discover → Explore → See Products → Build Trust → Connect**

## Content & Imagery

Product images should preserve the original product accurately.

For the hero and storytelling sections, imagery should support the emotional identity of KuttyCouture without competing with the accessible HTML content.

The About section intentionally uses an authentic family photograph rather than replacing it with a polished or artificial founder image. The authenticity of the image is part of the brand story.

## Component Guidance

Prefer reusable React components with styling kept consistent with the existing project approach.

Avoid introducing a new visual pattern when an existing component or token can express the same intent.

Every new component should be reviewed for:

- Responsive behaviour
- Keyboard interaction
- Screen-reader semantics
- Image alternative text
- Focus visibility
- Touch target size
- Content readability
