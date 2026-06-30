For this café, don't think of it as a restaurant website. Think of it as a **hospitality experience**. Most restaurant websites fail because they're designed like food delivery apps. Norwang already has Google Maps, Swiggy, and table booking. The website's job is not to repeat those. Its job is to make someone think:

> *"We're going there this weekend."*

The website should sell the atmosphere first, then the food, then make booking effortless.

---

# PRD.md

## Project

**Norwang Cafe & Restaurant Website**

Version 1.0

---

# Vision

Create a premium editorial website that reflects Norwang's rooftop atmosphere, Tibetan heritage, handcrafted food, and photogenic interiors.

The experience should feel timeless, sophisticated, and immersive rather than promotional. Visitors should naturally discover the menu while scrolling instead of navigating to a separate page.

The website should increase table reservations, strengthen the restaurant's brand identity, and serve as the central destination for customers coming from Google Maps, Instagram, and search engines.

---

# Goals

The website should:

* Increase direct reservations
* Showcase food naturally while scrolling
* Reflect the premium ambience
* Improve SEO
* Build trust before customers arrive
* Encourage gallery sharing
* Support mobile-first browsing
* Reduce dependency on third-party platforms

---

# Target Audience

Young professionals

College students

Tourists visiting Majnu Ka Tila

Food enthusiasts

Photographers

Date-night visitors

Families

International travelers

People discovering the restaurant through Google

---

# Brand Personality

Elegant

Modern

Editorial

Minimal

Warm

Authentic

Calm

Sophisticated

Premium

Timeless

---

# Design Philosophy

The website should never resemble:

* Food delivery apps
* Bootstrap restaurant templates
* Generic cafe themes
* Card-heavy dashboards
* Bright colorful websites

Instead it should resemble:

Luxury hotel websites

Architecture magazines

Editorial publications

Fine dining experiences

Modern Scandinavian interfaces

---

# Primary Navigation

Logo

Experience

Menu

Gallery

Visit

Reserve

---

# Website Structure

```
Home

Experience

Menu

Gallery

Visit

Reserve
```

Everything except Gallery and Reserve should be accessible directly from the homepage through smooth scrolling.

---

# Homepage

## Hero

Purpose

Create an emotional first impression.

Contains

Large full-screen photography

Restaurant name

Tagline

Opening status

Reserve button

Subtle scroll indicator

No unnecessary text.

---

## Featured Experience

Purpose

Explain why Norwang is different.

Sections

Greek-inspired interiors

Rooftop seating

Signature Bridge views

Relaxed atmosphere

Cocktails

Coffee

Tibetan cuisine

Each section contains a large image paired with editorial text.

---

## Signature Dishes

Purpose

Showcase best-selling food immediately.

Display

Pizza

Momos

Cheesecake

Coffee

Cocktails

Mocktails

Ramyun

Each item includes

Large image

Description

Price

Chef recommendation badge

---

## About

Story of Norwang.

Short.

Authentic.

Focus on hospitality rather than history.

---

## Atmosphere

Large immersive photography.

Minimal text.

Purpose is emotional engagement.

---

## Full Menu

The homepage itself contains the complete menu.

No downloadable PDF.

No separate menu page.

Categories include

Coffee

Breakfast

Starters

Pizza

Pasta

Tibetan

Chinese

Desserts

Drinks

Cocktails

Mocktails

---

## Gallery

Editorial masonry gallery.

No equal-sized cards.

Images dominate.

---

## Testimonials

Real customer reviews.

Large typography.

Minimal styling.

---

## Visit

Google Map

Address

Opening hours

Phone number

Reservation CTA

Parking information

Nearby landmarks

---

## Footer

Navigation

Socials

Opening hours

Contact

Copyright

---

# Reserve Page

Purpose

Simple reservation.

Fields

Name

Phone

Guests

Date

Time

Special request

Confirmation

---

# Gallery Page

Full-screen masonry.

Lightbox.

Category filters

Food

Interiors

Rooftop

Cocktails

Desserts

Events

---

# Menu Page

Although the homepage contains the menu, this page exists for search engines.

Contains

Every category

Pricing

Dietary labels

Images

---

# Experience Page

Editorial storytelling.

Large visuals.

Minimal text.

---

# Visit Page

Interactive Google Map

Directions

Parking

Public transport

Nearby attractions

Contact

---

# Responsive Strategy

Desktop

Large editorial layout

Two-column sections

Large typography

---

Tablet

Balanced layout

Reduced spacing

---

Mobile

Single-column

Large images

Sticky reserve button

Readable typography

Fast loading

---

# SEO

Optimized titles

Structured headings

Schema.org Restaurant markup

Open Graph

Twitter Cards

Local Business schema

Image alt text

Internal linking

Breadcrumb schema

Performance optimized

---

# Performance

Lazy loading

Responsive images

Minimal JavaScript

Optimized fonts

Compressed assets

Lighthouse target

95+

---

# Accessibility

Keyboard navigation

High contrast

Semantic HTML

ARIA labels

Readable font sizes

Visible focus states

---

# Success Metrics

Increase reservation conversions

Increase average session duration

Lower bounce rate

Improve Google search visibility

Increase gallery interactions

Improve mobile usability

---

# Future Features

Online ordering

Gift cards

Private event booking

Chef specials

Seasonal menus

Live music schedule

Customer loyalty program

Virtual rooftop tour

Instagram feed integration

---

# Tech Stack

HTML5

CSS3

Vanilla JavaScript

No frameworks

Responsive Grid

CSS Variables

Modern semantic architecture

---

# DESIGN.md

# Design Direction

The website should feel like walking into Norwang just before sunset. White walls, clean architecture, soft shadows, warm food, and an open rooftop overlooking the city. Every section should breathe. Space is treated as a design element, not empty filler. The interface should feel closer to an editorial publication than a restaurant ordering app.

## Design Keywords

Editorial

Architectural

Minimal

Premium

Luxury

Calm

Sharp

Scandinavian

Japanese Minimalism

Magazine Layout

---

## Visual Identity

No gradients.

No glassmorphism.

No neumorphism.

No glowing elements.

No oversized icons.

No colorful illustrations.

No stock-template appearance.

Every design decision should reinforce elegance through restraint.

---

:root{

  /* Primary Backgrounds */
  --bg: #FCFBF8;
  --bg-alt: #F4F5F7;
  --surface: #FFFFFF;
  --dark: #101114;

  /* Typography */
  --text: #181818;
  --text-light: #5F6670;
  --text-muted: #8B919A;
  --text-white: #F8F8F8;

  /* Santorini Blue */
  --blue-50: #EDF7FF;
  --blue-100: #D8ECFF;
  --blue-200: #B8DBFF;
  --blue-300: #84C2FF;
  --blue-400: #4DA4FF;

  /* Brand Blue */
  --blue: #2C86D6;
  --blue-dark: #1B5FA8;
  --blue-deep: #11467D;

  /* Warm Lighting */
  --gold: #D8B36A;
  --gold-light: #E8CC93;

  /* Borders */
  --border: #E7EAEE;
  --border-dark: rgba(255,255,255,.12);

  /* Shadows */
  --shadow:
  0 20px 60px rgba(0,0,0,.08);

}

## Typography

### Headings

Cormorant Garamond

Weight

400

500

600

Large tracking

Large line height

---

### Body

Inter

16–18px

Weight

400

500

---

### Menu Pricing

IBM Plex Mono

or

JetBrains Mono

Creates an upscale printed-menu feeling.

---

## Border Radius

```text
0px

2px

4px
```

Nothing rounded.

Everything sharp.

---

## Shadows

Very subtle.

Almost invisible.

```css
0 10px 40px rgba(0,0,0,.04)
```

---

## Grid

12-column desktop grid

8-column tablet

4-column mobile

Generous gutters

Consistent spacing

---

## Spacing Scale

```text
8

16

24

40

64

96

140
```

No random spacing values.

---

## Buttons

Black background.

White text.

Sharp corners.

Thin border.

Hover only slightly lightens the black and reveals a subtle underline animation. No glow, no scaling, no oversized transitions.

---

## Cards

Avoid traditional cards.

Content should live inside open layouts with thin dividers and generous spacing.

---

## Images

Photography is the hero.

Images should occupy 50–70% of each content section. Use full-bleed compositions where possible with crisp edges and no decorative frames.

---

## Hero

100vh minimum.

Massive photography.

Minimal copy.

One primary action.

The first screen should communicate atmosphere before information.

---

## Section Layout

Alternate image and text positions while scrolling to create rhythm.

Every section should have a clear visual pause before the next.

---

## Menu Design

Avoid boxed menu items.

Present dishes as an elegant printed menu with subtle separators, aligned pricing, and occasional chef recommendations.

---

## Gallery

Editorial masonry.

Mix portrait, landscape, and panoramic imagery.

Allow whitespace between images rather than forcing a rigid grid.

---

## Animations

Animations should never call attention to themselves.

Use slow fade-ins, slight upward movement, image reveal masks, and gentle zoom effects. Navigation transitions should feel effortless.

---

## Navigation

Transparent over the hero.

Solid white after scrolling.

Minimal links.

Sticky positioning.

Thin bottom border on scroll.

---

## Mobile Experience

Maintain the same premium identity.

Do not remove sections.

Do not hide the menu.

Keep images large and typography generous.

Navigation becomes a full-screen overlay with smooth transitions.

---

## Micro Interactions

Buttons gain an underline.

Images scale to 1.02 on hover.

Menu rows subtly highlight.

Navigation link underline grows from left to right.

Gallery images reveal captions on hover.

---

## Overall Feeling

If someone removed every piece of text from the website, the layout alone should still communicate that this is a premium rooftop café. It should feel composed, restrained, and memorable. The experience should resemble a boutique hotel or an architectural journal more than a typical restaurant website, because the atmosphere is the product just as much as the food.
