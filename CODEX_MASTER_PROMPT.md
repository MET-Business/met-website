# MET Website Elite Upgrade - Master Prompt for Codex

## CONTEXT
You are implementing an elite-tier upgrade for the Ministry of Enjoyment Taxi (MET) website. The current site is a functional MVP built with React, TypeScript, Vite, and TailwindCSS. Your goal is to transform it into a top-tier, institutional-grade digital platform.

## PROJECT STRUCTURE
```
met-website/
├── src/
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── Layout.tsx
│   │   ├── Seo.tsx
│   │   └── FloatingWhatsAppButton.tsx
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── Experience.tsx
│   │   ├── HowItWorks.tsx
│   │   ├── Partners.tsx
│   │   └── Book.tsx
│   ├── config/
│   │   ├── site.ts
│   │   └── whatsapp.ts
│   ├── styles/
│   │   └── index.css
│   ├── App.tsx
│   └── main.tsx
├── public/
├── index.html
├── package.json
├── tailwind.config.cjs
├── vite.config.ts
└── tsconfig.json
```

## OBJECTIVES

### 1. VISUAL DESIGN EXCELLENCE
- Implement premium typography system (Display serif + refined sans-serif)
- Create sophisticated multi-tier color system with depth
- Build advanced layout compositions (asymmetric, bento-grid, overlapping elements)
- Add elite-tier shadows, gradients, and glow effects

### 2. ADVANCED INTERACTIONS
- Implement scroll-triggered animations with stagger
- Add micro-interactions (hover states, magnetic buttons, cursor effects)
- Create smooth page transitions
- Build animated metric counters and data visualizations

### 3. TECHNICAL EXCELLENCE
- Optimize performance (code splitting, lazy loading, image optimization)
- Implement proper accessibility (WCAG 2.1 AA)
- Add analytics tracking
- Ensure cross-browser compatibility

## IMPLEMENTATION INSTRUCTIONS

### STEP 1: Install Dependencies

```bash
npm install framer-motion @tanstack/react-query zustand
```

### STEP 2: Update Font System

Add to `index.html` in `<head>`:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Fraunces:wght@400;600;700;900&family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
```

### STEP 3: Replace Tailwind Configuration

Replace `tailwind.config.cjs` with:

```javascript
module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0b0b0c",
        charcoal: {
          DEFAULT: "#111114",
          50: "#2a2a2e",
          100: "#1f1f22",
          200: "#191a1c",
          300: "#151617",
          400: "#111114",
          500: "#0e0e10",
          600: "#0b0b0c",
          700: "#080809",
          800: "#050506",
          900: "#020202",
        },
        gold: {
          DEFAULT: "#caa24a",
          50: "#f7f1e3",
          100: "#efe3c7",
          200: "#e7d5ab",
          300: "#dfc78f",
          400: "#d7b973",
          500: "#caa24a",
          600: "#b89038",
          700: "#a67e26",
          800: "#8a6920",
          900: "#6e5419",
        },
        offwhite: {
          DEFAULT: "#f5f2ea",
          50: "#ffffff",
          100: "#fdfcf9",
          200: "#f5f2ea",
          300: "#ede8db",
          400: "#e5decc",
          500: "#ddd4bd",
          600: "#d5caae",
          700: "#cdc09f",
          800: "#c5b690",
          900: "#bdac81",
        },
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        body: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Courier New', 'monospace'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem', letterSpacing: '0.05em' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem', letterSpacing: '-0.025em' }],
        '5xl': ['3rem', { lineHeight: '1.1', letterSpacing: '-0.025em' }],
        '6xl': ['3.75rem', { lineHeight: '1.1', letterSpacing: '-0.025em' }],
        '7xl': ['4.5rem', { lineHeight: '1.1', letterSpacing: '-0.025em' }],
      },
      boxShadow: {
        'glow': '0 0 45px rgba(202, 162, 74, 0.15)',
        'glow-sm': '0 0 20px rgba(202, 162, 74, 0.1)',
        'glow-lg': '0 0 60px rgba(202, 162, 74, 0.25)',
        'elite': '0 20px 60px rgba(0, 0, 0, 0.3), 0 0 40px rgba(202, 162, 74, 0.1)',
      },
      backgroundImage: {
        'radial-glow': 'radial-gradient(80% 80% at 20% 10%, rgba(202, 162, 74, 0.12) 0%, rgba(202, 162, 74, 0) 60%)',
        'grid-pattern': 'linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px)',
      },
      backgroundSize: {
        'grid': '64px 64px',
      },
      keyframes: {
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '-100% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.6s ease-out',
        'shimmer': 'shimmer 3s linear infinite',
      },
    },
  },
  plugins: [],
}
```

### STEP 4: Update CSS File

Replace `src/styles/index.css` with:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --font-display: 'Fraunces', 'Georgia', serif;
  --font-body: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif;
  --font-mono: 'JetBrains Mono', 'Courier New', monospace;
}

* {
  font-family: var(--font-body);
}

body {
  background-color: #0b0b0c;
  color: #f5f2ea;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.font-display {
  font-family: var(--font-display);
}

/* Elite Sections */
.section-elite {
  @apply py-24 md:py-32;
}

.section-title-elite {
  @apply font-display text-3xl font-bold leading-tight tracking-tight text-offwhite md:text-4xl lg:text-5xl;
}

.section-subtitle-elite {
  @apply mb-4 text-xs font-semibold uppercase tracking-[0.32em] text-gold;
}

/* Elite Cards */
.card-elite {
  @apply relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-charcoal/70 to-charcoal/50 p-6 backdrop-blur-sm transition-all duration-500;
  box-shadow: 0 0 45px rgba(202, 162, 74, 0.15);
}

.card-elite:hover {
  @apply -translate-y-2 border-gold/30;
  box-shadow: 0 0 60px rgba(202, 162, 74, 0.25);
}

.card-elite-feature {
  @apply card-elite p-8 md:p-10;
}

.card-elite-cta {
  @apply relative overflow-hidden rounded-3xl border border-gold/30 bg-gradient-to-br from-charcoal/90 to-ink/90 p-12 backdrop-blur-md md:p-16;
  box-shadow: 0 0 60px rgba(202, 162, 74, 0.25);
}

/* Elite Badges */
.badge-elite {
  @apply inline-flex items-center gap-2 rounded-full border border-white/15 bg-charcoal/80 px-4 py-2 text-xs font-medium uppercase tracking-[0.24em] text-offwhite/70 backdrop-blur-sm transition-all duration-300;
}

.badge-elite:hover {
  @apply border-gold/40 bg-charcoal/90 text-offwhite;
}

/* Elite Buttons */
.button-elite-primary {
  @apply inline-flex items-center justify-center gap-2 rounded-full border border-gold/60 bg-gradient-to-r from-gold/20 to-gold/10 px-8 py-4 text-sm font-semibold uppercase tracking-[0.24em] text-offwhite backdrop-blur-sm transition-all duration-300;
  box-shadow: 0 4px 16px rgba(202, 162, 74, 0.2);
}

.button-elite-primary:hover {
  @apply border-gold bg-gradient-to-r from-gold/30 to-gold/20;
  box-shadow: 0 8px 24px rgba(202, 162, 74, 0.3);
  transform: translateY(-2px);
}

.button-elite-secondary {
  @apply inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-transparent px-8 py-4 text-sm font-semibold uppercase tracking-[0.24em] text-offwhite/80 backdrop-blur-sm transition-all duration-300;
}

.button-elite-secondary:hover {
  @apply border-gold/40 bg-white/5 text-offwhite;
}

/* Bento Grid */
.bento-grid {
  @apply grid gap-6 md:grid-cols-2 lg:grid-cols-3;
}

/* Scrollbar */
::-webkit-scrollbar {
  width: 12px;
}

::-webkit-scrollbar-track {
  background: #0b0b0c;
}

::-webkit-scrollbar-thumb {
  background: #111114;
  border-radius: 6px;
  border: 2px solid #0b0b0c;
}

::-webkit-scrollbar-thumb:hover {
  background: rgba(202, 162, 74, 0.3);
}

::selection {
  background: rgba(202, 162, 74, 0.3);
  color: #f5f2ea;
}

html {
  scroll-behavior: smooth;
}
```

### STEP 5: Create Elite Homepage

Create new file `src/pages/HomeElite.tsx`:

```typescript
import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Seo from '../components/Seo';
import { buildWhatsAppUrl, BOOKING_MESSAGE } from '../config/whatsapp';

export default function HomeElite() {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    setTimeout(() => setIsVisible(true), 100);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const parallaxOffset = scrollY * 0.5;

  return (
    <div className="flex flex-col">
      <Seo
        title="Home"
        description="MET is Nairobi's nightlife transport operator built for late-night reliability, safety, and premium group movement."
      />

      {/* Hero Section */}
      <section 
        className="relative flex min-h-screen items-center overflow-hidden bg-gradient-to-br from-ink via-charcoal to-ink"
        style={{ transform: `translateY(${parallaxOffset}px)` }}
      >
        {/* Background Grid */}
        <div className="pointer-events-none absolute inset-0 bg-grid-pattern bg-grid" />
        
        {/* Radial Glows */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(202,162,74,0.15),transparent_50%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_60%,rgba(202,162,74,0.08),transparent_40%)]" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-20">
          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
            {/* Left Column */}
            <div className="flex flex-col gap-8">
              {/* Badges */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                transition={{ duration: 0.6 }}
                className="flex flex-wrap gap-3"
              >
                <span className="badge-elite">Nairobi Night Operations</span>
                <span className="badge-elite">Thu–Sun • 5PM–5AM</span>
                <span className="badge-elite">Westlands • Kilimani • Ngong Road</span>
              </motion.div>

              {/* Main Heading */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h1 className="font-display text-5xl font-bold leading-[1.1] tracking-tight text-offwhite md:text-6xl lg:text-7xl">
                  Night Transport,{' '}
                  <span className="bg-gradient-to-r from-gold via-gold-400 to-gold bg-clip-text text-transparent">
                    Engineered
                  </span>
                  <br />
                  for Nairobi's Night Economy
                </h1>
              </motion.div>

              {/* Description */}
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="max-w-2xl text-lg leading-relaxed text-offwhite/80 md:text-xl"
              >
                Ministry of Enjoyment Taxi (MET) is a nightlife-focused transport operator 
                designed for late-night reliability, safety, and premium group movement where 
                conventional ride-hailing systems fall short.
              </motion.p>

              {/* Value Props */}
              <motion.ul 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="space-y-3 text-base text-offwhite/70"
              >
                <li className="flex items-center gap-3">
                  <svg className="h-5 w-5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Controlled fleet access (leased/partner vehicles)
                </li>
                <li className="flex items-center gap-3">
                  <svg className="h-5 w-5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Professionally vetted night-shift drivers
                </li>
                <li className="flex items-center gap-3">
                  <svg className="h-5 w-5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Fixed operating windows and defined zones
                </li>
              </motion.ul>

              {/* CTAs */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="flex flex-wrap gap-4"
              >
                <a href={buildWhatsAppUrl(BOOKING_MESSAGE)} className="button-elite-primary group">
                  <span>Book via WhatsApp</span>
                  <svg className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
                <Link to="/book?intent=partner" className="button-elite-secondary">
                  Investor / Partner Inquiry
                </Link>
              </motion.div>
            </div>

            {/* Right Column - Stats Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="flex items-center"
            >
              <div className="card-elite w-full">
                <div className="mb-6 flex items-center justify-between">
                  <h3 className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
                    MET Snapshot
                  </h3>
                  <div className="h-2 w-2 animate-pulse rounded-full bg-gold shadow-[0_0_12px_rgba(202,162,74,0.6)]" />
                </div>
                
                <div className="space-y-6">
                  <div>
                    <p className="mb-1 text-xs uppercase tracking-wider text-offwhite/50">Operating Hours</p>
                    <p className="text-lg font-semibold text-offwhite">Thu–Sun, 5PM–5AM</p>
                  </div>
                  <div>
                    <p className="mb-1 text-xs uppercase tracking-wider text-offwhite/50">Coverage Zones</p>
                    <p className="text-lg font-semibold text-offwhite">3 Premium Areas</p>
                  </div>
                  <div>
                    <p className="mb-1 text-xs uppercase tracking-wider text-offwhite/50">Fleet Status</p>
                    <p className="text-lg font-semibold text-offwhite">Pilot Active</p>
                  </div>
                  <div>
                    <p className="mb-1 text-xs uppercase tracking-wider text-offwhite/50">Safety Record</p>
                    <p className="text-lg font-semibold text-offwhite">100% Vetted Drivers</p>
                  </div>
                </div>

                <div className="mt-8 rounded-xl border border-gold/20 bg-gold/5 p-4">
                  <p className="text-sm text-offwhite/70">
                    Premium, reliable group movement during peak risk hours with 
                    concierge booking and controlled dispatch.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="h-6 w-6 text-offwhite/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Rest of the sections... */}
      {/* Add other sections following the same pattern */}
    </div>
  );
}
```

### STEP 6: Update App.tsx for Code Splitting

```typescript
import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';

const Home = lazy(() => import('./pages/HomeElite'));
const Experience = lazy(() => import('./pages/Experience'));
const HowItWorks = lazy(() => import('./pages/HowItWorks'));
const Partners = lazy(() => import('./pages/Partners'));
const Book = lazy(() => import('./pages/Book'));

function PageLoader() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="h-12 w-12 animate-spin rounded-full border-4 border-gold border-t-transparent" />
    </div>
  );
}

export default function App() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/book" element={<Book />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
```

### STEP 7: Update Header Component

```typescript
import { NavLink, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { buildWhatsAppUrl, BOOKING_MESSAGE } from '../config/whatsapp';

const navLinkBase = 'text-sm uppercase tracking-[0.18em] text-offwhite/70 hover:text-offwhite transition-colors';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${
        scrolled 
          ? 'border-white/10 bg-ink/80 backdrop-blur-[24px] shadow-glow-sm' 
          : 'border-white/5 bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-3">
          <motion.img
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            src="/METlogo.png"
            alt="MET logo"
            className="h-12 w-auto"
            loading="eager"
            decoding="async"
          />
        </Link>
        
        <nav className="hidden items-center gap-6 md:flex">
          <NavLink to="/" end className={({ isActive }) => `${navLinkBase} ${isActive ? 'text-offwhite' : ''}`}>
            Home
          </NavLink>
          <NavLink to="/experience" className={({ isActive }) => `${navLinkBase} ${isActive ? 'text-offwhite' : ''}`}>
            Experience
          </NavLink>
          <NavLink to="/how-it-works" className={({ isActive }) => `${navLinkBase} ${isActive ? 'text-offwhite' : ''}`}>
            How It Works
          </NavLink>
          <NavLink to="/partners" className={({ isActive }) => `${navLinkBase} ${isActive ? 'text-offwhite' : ''}`}>
            Partners
          </NavLink>
          <NavLink to="/book" className={({ isActive }) => `${navLinkBase} ${isActive ? 'text-offwhite' : ''}`}>
            Book
          </NavLink>
        </nav>
        
        <motion.a
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          href={buildWhatsAppUrl(BOOKING_MESSAGE)}
          className="hidden rounded-full border border-gold/50 bg-gold/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-offwhite transition-all hover:border-gold hover:bg-gold/20 md:inline-block"
        >
          Book via WhatsApp
        </motion.a>
      </div>
      
      {/* Mobile Nav */}
      <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-4 px-6 pb-4 md:hidden">
        <NavLink to="/" end className={({ isActive }) => `${navLinkBase} ${isActive ? 'text-offwhite' : ''}`}>
          Home
        </NavLink>
        <NavLink to="/experience" className={({ isActive }) => `${navLinkBase} ${isActive ? 'text-offwhite' : ''}`}>
          Experience
        </NavLink>
        <NavLink to="/how-it-works" className={({ isActive }) => `${navLinkBase} ${isActive ? 'text-offwhite' : ''}`}>
          How It Works
        </NavLink>
        <NavLink to="/partners" className={({ isActive }) => `${navLinkBase} ${isActive ? 'text-offwhite' : ''}`}>
          Partners
        </NavLink>
        <NavLink to="/book" className={({ isActive }) => `${navLinkBase} ${isActive ? 'text-offwhite' : ''}`}>
          Book
        </NavLink>
      </div>
    </motion.header>
  );
}
```

## KEY DESIGN PRINCIPLES

1. **Typography Hierarchy**: Use `font-display` for headlines, default body font for text
2. **Color Usage**: Gold for accents, ink/charcoal for backgrounds, offwhite for text
3. **Spacing**: Generous whitespace, consistent padding (py-24 for sections)
4. **Animations**: Use Framer Motion for complex animations, CSS for simple ones
5. **Performance**: Lazy load pages, optimize images, minimize bundle size
6. **Accessibility**: Proper ARIA labels, keyboard navigation, color contrast

## TESTING REQUIREMENTS

After implementation, verify:
- [ ] All animations are smooth (60fps)
- [ ] Mobile responsive (375px, 768px, 1440px)
- [ ] No console errors
- [ ] All links work
- [ ] WhatsApp integration works
- [ ] Lighthouse score > 90

## NOTES

- Keep all existing functionality intact
- Preserve WhatsApp booking flow
- Maintain SEO optimization
- Follow TypeScript best practices
- Keep accessibility in mind

This implementation transforms MET into an elite, institutional-grade platform while maintaining all core functionality.
