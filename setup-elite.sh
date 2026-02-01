#!/bin/bash

# MET Website Elite Upgrade - Automated Setup Script
# This script automates the implementation of the elite-tier upgrade

set -e  # Exit on error

echo "🚀 MET Website Elite Upgrade - Setup Script"
echo "============================================="
echo ""

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Step 1: Install Dependencies
echo -e "${BLUE}Step 1: Installing dependencies...${NC}"
npm install framer-motion @tanstack/react-query zustand
echo -e "${GREEN}✓ Dependencies installed${NC}"
echo ""

# Step 2: Backup existing files
echo -e "${BLUE}Step 2: Creating backups...${NC}"
mkdir -p .backups
cp tailwind.config.cjs .backups/tailwind.config.cjs.backup 2>/dev/null || true
cp src/styles/index.css .backups/index.css.backup 2>/dev/null || true
cp src/components/Header.tsx .backups/Header.tsx.backup 2>/dev/null || true
cp src/App.tsx .backups/App.tsx.backup 2>/dev/null || true
echo -e "${GREEN}✓ Backups created in .backups/${NC}"
echo ""

# Step 3: Update Tailwind Config
echo -e "${BLUE}Step 3: Updating Tailwind configuration...${NC}"
cat > tailwind.config.cjs << 'EOF'
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
        },
        offwhite: {
          DEFAULT: "#f5f2ea",
          50: "#ffffff",
          100: "#fdfcf9",
          200: "#f5f2ea",
          300: "#ede8db",
          400: "#e5decc",
        },
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'glow': '0 0 45px rgba(202, 162, 74, 0.15)',
        'glow-sm': '0 0 20px rgba(202, 162, 74, 0.1)',
        'glow-lg': '0 0 60px rgba(202, 162, 74, 0.25)',
      },
      backgroundImage: {
        'radial-glow': 'radial-gradient(80% 80% at 20% 10%, rgba(202, 162, 74, 0.12) 0%, rgba(202, 162, 74, 0) 60%)',
        'grid-pattern': 'linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px)',
      },
      backgroundSize: {
        'grid': '64px 64px',
      },
    },
  },
  plugins: [],
}
EOF
echo -e "${GREEN}✓ Tailwind config updated${NC}"
echo ""

# Step 4: Update CSS
echo -e "${BLUE}Step 4: Updating styles...${NC}"
cat > src/styles/index.css << 'EOF'
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --font-display: 'Fraunces', 'Georgia', serif;
  --font-body: 'Inter', system-ui, sans-serif;
}

* {
  font-family: var(--font-body);
}

body {
  background-color: #0b0b0c;
  color: #f5f2ea;
  -webkit-font-smoothing: antialiased;
}

.font-display {
  font-family: var(--font-display);
}

.section-elite {
  @apply py-24 md:py-32;
}

.section-title-elite {
  @apply font-display text-3xl font-bold leading-tight tracking-tight text-offwhite md:text-4xl lg:text-5xl;
}

.section-subtitle-elite {
  @apply mb-4 text-xs font-semibold uppercase tracking-[0.32em] text-gold;
}

.card-elite {
  @apply relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-charcoal/70 to-charcoal/50 p-6 backdrop-blur-sm transition-all duration-500;
  box-shadow: 0 0 45px rgba(202, 162, 74, 0.15);
}

.card-elite:hover {
  @apply -translate-y-2 border-gold/30;
  box-shadow: 0 0 60px rgba(202, 162, 74, 0.25);
}

.badge-elite {
  @apply inline-flex items-center gap-2 rounded-full border border-white/15 bg-charcoal/80 px-4 py-2 text-xs font-medium uppercase tracking-[0.24em] text-offwhite/70 backdrop-blur-sm transition-all duration-300;
}

.button-elite-primary {
  @apply inline-flex items-center justify-center gap-2 rounded-full border border-gold/60 bg-gradient-to-r from-gold/20 to-gold/10 px-8 py-4 text-sm font-semibold uppercase tracking-[0.24em] text-offwhite backdrop-blur-sm transition-all duration-300;
}

.button-elite-primary:hover {
  @apply border-gold;
  transform: translateY(-2px);
}

.button-elite-secondary {
  @apply inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-transparent px-8 py-4 text-sm font-semibold uppercase tracking-[0.24em] text-offwhite/80 backdrop-blur-sm transition-all duration-300;
}

.button-elite-secondary:hover {
  @apply border-gold/40 bg-white/5 text-offwhite;
}

::-webkit-scrollbar {
  width: 12px;
}

::-webkit-scrollbar-track {
  background: #0b0b0c;
}

::-webkit-scrollbar-thumb {
  background: #111114;
  border-radius: 6px;
}

::selection {
  background: rgba(202, 162, 74, 0.3);
  color: #f5f2ea;
}
EOF
echo -e "${GREEN}✓ Styles updated${NC}"
echo ""

# Step 5: Update index.html with fonts
echo -e "${BLUE}Step 5: Adding premium fonts to index.html...${NC}"
# Check if fonts are already added
if ! grep -q "fonts.googleapis.com/css2?family=Fraunces" index.html; then
  # Add fonts before closing head tag
  sed -i 's|</head>|  <link rel="preconnect" href="https://fonts.googleapis.com">\n  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>\n  <link href="https://fonts.googleapis.com/css2?family=Fraunces:wght@400;600;700;900\&family=Inter:wght@300;400;500;600;700\&family=JetBrains+Mono:wght@400;500\&display=swap" rel="stylesheet">\n</head>|' index.html
  echo -e "${GREEN}✓ Fonts added to index.html${NC}"
else
  echo -e "${YELLOW}⚠ Fonts already present in index.html${NC}"
fi
echo ""

# Step 6: Build to test
echo -e "${BLUE}Step 6: Building project to verify...${NC}"
npm run build
echo -e "${GREEN}✓ Build successful${NC}"
echo ""

# Success message
echo ""
echo -e "${GREEN}=============================================${NC}"
echo -e "${GREEN}✓ Elite upgrade setup complete!${NC}"
echo -e "${GREEN}=============================================${NC}"
echo ""
echo "Next steps:"
echo "1. Review the changes in your code editor"
echo "2. Run 'npm run dev' to start development server"
echo "3. Test the site at http://localhost:5173"
echo "4. Implement the elite homepage (see IMPLEMENTATION_GUIDE.md)"
echo ""
echo "Backups of original files are in .backups/"
echo ""
echo "To restore backups:"
echo "  cp .backups/tailwind.config.cjs.backup tailwind.config.cjs"
echo "  cp .backups/index.css.backup src/styles/index.css"
echo ""
