# Accredian Enterprise — Full Stack Developer Intern Assignment

A pixel-faithful, fully responsive clone of [enterprise.accredian.com](https://enterprise.accredian.com), built as part of the Accredian Full Stack Developer Intern selection task.

🔗 **Live Demo:** https://accredian-enterprise-xi.vercel.app/  
📁 **GitHub:** https://github.com/Aniket2832/accredian-enterprise

---

## Tech Stack

| Layer      | Technology                          |
|------------|--------------------------------------|
| Framework  | Next.js 16 (App Router)              |
| Styling    | Tailwind CSS v4 + Inline styles      |
| Icons      | Lucide React                         |
| Fonts      | Sora + DM Sans (Google Fonts)        |
| Backend    | Next.js API Routes (App Router)      |
| Storage    | File-based JSON (`leads.json`)       |
| Deployment | Vercel                               |

---

## Features

### Landing Page Sections
- **Navbar** — Sticky, transparent-on-load, glass effect on scroll, responsive hamburger menu
- **Hero** — Full-screen gradient, animated headline, feature bullets, CTA buttons, institute badges, floating stat cards
- **Trusted By** — Auto-scrolling marquee of 12 enterprise company logos with fade edges
- **Stats** — 4 animated counter cards that count up on scroll into view
- **Why Accredian** — 6 hover-lift feature cards with scroll-triggered animations
- **Programs** — 6 program cards with live category filter tabs (All / Technology / Management / Data & AI / Leadership)
- **How It Works** — 4-step process with colored connector line and step badges
- **Testimonials** — 3 quote cards on desktop, swipeable carousel on mobile
- **Lead Capture Form** — Full form with validation, success state, and API persistence *(Bonus)*
- **Footer** — Brand column, 3 link columns, contact info, social icons, legal bar

### Bonus — Lead Capture API
- `POST /api/leads` — Validates and stores lead data to `leads.json`
- `GET /api/leads` — Returns all captured leads with total count
- Client-side validation (required fields, email format)
- Success/error state handling with visual feedback

---

## Getting Started

### Prerequisites
- Node.js 18+
- npm

### Installation

```bash
git clone https://github.com/Aniket2832/accredian-enterprise.git
cd accredian-enterprise
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### API Endpoints

| Method | Endpoint     | Description              |
|--------|--------------|--------------------------|
| POST   | `/api/leads` | Submit a lead enquiry    |
| GET    | `/api/leads` | Retrieve all leads (dev) |

**POST `/api/leads` — Request Body:**
```json
{
  "name": "Rajesh Mehta",
  "company": "Tata Digital",
  "email": "rajesh@tata.com",
  "phone": "+91 98765 43210",
  "size": "201–500",
  "program": "Full Stack Development"
}
```

---

## Project Structure

```
accredian-enterprise/
├── app/
│   ├── globals.css          # Brand tokens, animations, fonts
│   ├── layout.tsx           # Root layout + metadata
│   ├── page.tsx             # Page assembly
│   └── api/
│       └── leads/
│           └── route.ts     # Lead capture API (POST + GET)
├── components/
│   ├── Navbar.tsx           # Sticky nav with mobile menu
│   ├── Hero.tsx             # Full-screen hero section
│   ├── TrustedBy.tsx        # Scrolling marquee
│   ├── Stats.tsx            # Animated counters
│   ├── WhyAccredian.tsx     # Feature cards
│   ├── Programs.tsx         # Tabbed program cards
│   ├── HowItWorks.tsx       # 4-step process
│   ├── Testimonials.tsx     # Quote cards + mobile carousel
│   ├── LeadForm.tsx         # Lead capture form (bonus)
│   └── Footer.tsx           # Site footer
└── leads.json               # Auto-generated on first form submit
```

---

## Approach

### Design Decisions
- **Inline styles over Tailwind utilities** for layout-critical properties — this ensures consistent rendering across Tailwind v4's new engine without needing additional config for responsive breakpoints
- **CSS `<style>` tags for breakpoints** — scoped responsive rules within each component keep styles co-located and avoid Tailwind's JIT purge edge cases
- **`"use client"` only where needed** — components with event handlers, `useState`, `useEffect`, or `IntersectionObserver` are marked as client components; the rest are server components by default

### Performance Considerations
- `IntersectionObserver` used for all scroll animations — no layout thrashing
- Marquee implemented with CSS `animation` only — no JS interval
- Fonts loaded via Google Fonts with `display=swap` to avoid FOIT
- Images replaced with SVG icons and CSS gradients — zero external image dependencies

### API Design
- Lead data is validated server-side before persisting
- File-based storage (`leads.json`) keeps the setup dependency-free for a demo context
- In production, this would be replaced with a PostgreSQL table or Supabase insert

---

## AI Usage Disclosure

This project was developed with the assistance of Claude (Anthropic) as a coding assistant. AI was used for:
- Generating component boilerplate and layout structure
- Debugging CSS and TypeScript errors
- Suggesting animation and UX patterns

All code was reviewed, understood, and verified by the developer before use. The architecture decisions, section structure, and design system were directed by the developer throughout the build process.

---

## Potential Improvements

1. **Database integration** — Replace `leads.json` with Supabase or PostgreSQL for scalable lead storage
2. **Email notifications** — Send confirmation email to lead + internal alert using Resend API on form submit
3. **Admin dashboard** — Protected `/admin` route to view and export all captured leads
4. **CMS integration** — Connect programs and testimonials to a headless CMS (Sanity / Contentful) for easy content updates
5. **Animations** — Add Framer Motion for more polished page transitions and stagger effects
6. **SEO** — Add Open Graph tags, Twitter card meta, and structured data (JSON-LD) for better discoverability
7. **Analytics** — Integrate PostHog or Vercel Analytics to track CTA clicks and form conversion rates
8. **Testing** — Add Playwright E2E tests for the lead form submission flow

---

## Author

**Aniket** — Full Stack Developer  
B.Tech Computer Science, JSPM's JSCOE, Pune  
[GitHub](https://github.com/Aniket2832) · [LinkedIn](https://linkedin.com/in/aniket2832)
