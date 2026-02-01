module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      // Elite Color System
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

      // Elite Font Families
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        body: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Courier New', 'monospace'],
      },

      // Enhanced Typography Scale
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
        '8xl': ['6rem', { lineHeight: '1', letterSpacing: '-0.025em' }],
        '9xl': ['8rem', { lineHeight: '1', letterSpacing: '-0.025em' }],
      },

      // Enhanced Spacing Scale
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '100': '25rem',
        '112': '28rem',
        '128': '32rem',
      },

      // Elite Box Shadows
      boxShadow: {
        'glow': '0 0 45px rgba(202, 162, 74, 0.15)',
        'glow-sm': '0 0 20px rgba(202, 162, 74, 0.1)',
        'glow-md': '0 0 30px rgba(202, 162, 74, 0.15)',
        'glow-lg': '0 0 45px rgba(202, 162, 74, 0.2)',
        'glow-xl': '0 0 60px rgba(202, 162, 74, 0.25)',
        'glow-2xl': '0 0 80px rgba(202, 162, 74, 0.3)',
        'inner-glow': 'inset 0 0 30px rgba(202, 162, 74, 0.1)',
        'elite': '0 20px 60px rgba(0, 0, 0, 0.3), 0 0 40px rgba(202, 162, 74, 0.1)',
      },

      // Enhanced Background Images
      backgroundImage: {
        'radial-glow': 'radial-gradient(80% 80% at 20% 10%, rgba(202, 162, 74, 0.12) 0%, rgba(202, 162, 74, 0) 60%)',
        'radial-glow-strong': 'radial-gradient(70% 70% at 30% 20%, rgba(202, 162, 74, 0.2) 0%, rgba(202, 162, 74, 0) 50%)',
        'grid-pattern': 'linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px)',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'shimmer': 'linear-gradient(90deg, transparent, rgba(202, 162, 74, 0.1), transparent)',
      },

      // Background Size
      backgroundSize: {
        'grid': '64px 64px',
      },

      // Enhanced Border Radius
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },

      // Animation Timing
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
        '800': '800ms',
        '1200': '1200ms',
      },

      // Elite Animation Keyframes
      keyframes: {
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(202, 162, 74, 0.2)' },
          '50%': { boxShadow: '0 0 40px rgba(202, 162, 74, 0.4)' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '-100% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'fade-in-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        'fade-in-down': {
          '0%': {
            opacity: '0',
            transform: 'translateY(-20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        'slide-in-left': {
          '0%': {
            opacity: '0',
            transform: 'translateX(-20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        'scale-in': {
          '0%': {
            opacity: '0',
            transform: 'scale(0.95)',
          },
          '100%': {
            opacity: '1',
            transform: 'scale(1)',
          },
        },
      },

      // Animation Classes
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'shimmer': 'shimmer 3s linear infinite',
        'fade-in-up': 'fade-in-up 0.6s ease-out',
        'fade-in-down': 'fade-in-down 0.6s ease-out',
        'slide-in-left': 'slide-in-left 0.6s ease-out',
        'scale-in': 'scale-in 0.4s ease-out',
      },

      // Backdrop Blur
      backdropBlur: {
        'xs': '2px',
        'elite': '24px',
      },

      // Z-Index Scale
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      },

      // Grid Template Columns for Bento
      gridTemplateColumns: {
        'bento': 'repeat(auto-fit, minmax(300px, 1fr))',
      },

      // Custom Aspect Ratios
      aspectRatio: {
        'ultra-wide': '21 / 9',
        'card': '3 / 4',
      },
    },
  },
  plugins: [
    // Custom Plugin for Elite Utilities
    function({ addUtilities }) {
      const newUtilities = {
        '.text-shadow-sm': {
          textShadow: '0 1px 2px rgba(0, 0, 0, 0.5)',
        },
        '.text-shadow': {
          textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)',
        },
        '.text-shadow-lg': {
          textShadow: '0 4px 8px rgba(0, 0, 0, 0.5)',
        },
        '.text-glow': {
          textShadow: '0 0 20px rgba(202, 162, 74, 0.5)',
        },
        '.backdrop-blur-elite': {
          backdropFilter: 'blur(24px) saturate(180%)',
          WebkitBackdropFilter: 'blur(24px) saturate(180%)',
        },
        '.glass-elite': {
          backdropFilter: 'blur(24px) saturate(180%)',
          WebkitBackdropFilter: 'blur(24px) saturate(180%)',
          backgroundColor: 'rgba(255, 255, 255, 0.05)',
          borderColor: 'rgba(255, 255, 255, 0.1)',
        },
      }
      addUtilities(newUtilities)
    },
  ],
}
