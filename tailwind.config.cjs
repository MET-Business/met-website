module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["'Montserrat'", 'sans-serif'],
        body: ["'Sora'", "'Segoe UI'", 'system-ui', 'sans-serif'],
      },
      colors: {
        ink: '#000000',
        surface: '#0a0a0b',
        card: '#0e0e10',
        pink: '#FF42A1',
        purple: '#B14BF4',
        cyan: '#00D2FF',
        orange: '#FF8E71',
        gold: '#caa24a',
        offwhite: '#ffffff',
        muted: 'rgba(224,224,224,0.6)',
      },
      backgroundImage: {
        brand: 'linear-gradient(90deg, #FF42A1 0%, #B14BF4 50%, #00D2FF 100%)',
        'brand-reverse': 'linear-gradient(90deg, #00D2FF 0%, #B14BF4 50%, #FF42A1 100%)',
        'glow-pink': 'radial-gradient(circle at 15% 20%, rgba(255,66,161,0.18) 0%, transparent 55%)',
        'glow-cyan': 'radial-gradient(circle at 85% 75%, rgba(0,210,255,0.12) 0%, transparent 50%)',
      },
      boxShadow: {
        'glow-pink': '0 0 20px rgba(255,66,161,0.25), 0 0 60px rgba(255,66,161,0.08)',
        'glow-cyan': '0 0 20px rgba(0,210,255,0.25), 0 0 60px rgba(0,210,255,0.08)',
        'glow-purple': '0 0 20px rgba(177,75,244,0.25), 0 0 60px rgba(177,75,244,0.08)',
        'glow-gold': '0 0 30px rgba(202,162,74,0.2), 0 0 60px rgba(202,162,74,0.06)',
        card: '0 4px 24px rgba(0,0,0,0.4)',
        'card-hover': '0 8px 40px rgba(0,0,0,0.5), 0 0 30px rgba(177,75,244,0.12)',
      },
      animation: {
        fadeInUp: 'fadeInUp 0.7s cubic-bezier(.22,1,.36,1) both',
        fadeIn: 'fadeIn 0.6s ease both',
        glowPulse: 'glowPulse 3s ease-in-out infinite',
        shimmer: 'shimmer 1.6s infinite linear',
      },
      keyframes: {
        fadeInUp: {
          from: { opacity: '0', transform: 'translateY(28px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '1' },
        },
        shimmer: {
          '0%': { backgroundPosition: '200% 0' },
          '100%': { backgroundPosition: '-200% 0' },
        },
      },
    },
  },
  plugins: [],
};

