/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      colors: {
        primary: {
          DEFAULT: '#00d4ff',
          dark: '#0099bb',
          light: '#66e5ff',
        },
        accent: {
          DEFAULT: '#7c3aed',
          dark: '#5b21b6',
          light: '#a78bfa',
        },
        dark: {
          DEFAULT: '#0a0a0f',
          100: '#0d0d14',
          200: '#111118',
          300: '#16161f',
          400: '#1e1e2e',
          500: '#252535',
        },
        text: {
          primary: '#e2e8f0',
          secondary: '#94a3b8',
          muted: '#64748b',
        }
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4,0,0.6,1) infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'spin-slow': 'spin 8s linear infinite',
        'typing': 'typing 3.5s steps(40,end), blink-caret 0.75s step-end infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          'from': { textShadow: '0 0 10px #00d4ff, 0 0 20px #00d4ff, 0 0 30px #00d4ff' },
          'to': { textShadow: '0 0 20px #00d4ff, 0 0 30px #00d4ff, 0 0 40px #00d4ff, 0 0 50px #00d4ff' },
        },
        typing: {
          'from': { width: '0' },
          'to': { width: '100%' },
        },
        'blink-caret': {
          'from, to': { borderColor: 'transparent' },
          '50%': { borderColor: '#00d4ff' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero-gradient': 'linear-gradient(135deg, #0a0a0f 0%, #0d0d20 50%, #0a0a0f 100%)',
        'card-gradient': 'linear-gradient(135deg, rgba(0,212,255,0.05) 0%, rgba(124,58,237,0.05) 100%)',
      },
      boxShadow: {
        'neon-cyan': '0 0 20px rgba(0,212,255,0.3), 0 0 40px rgba(0,212,255,0.1)',
        'neon-purple': '0 0 20px rgba(124,58,237,0.3), 0 0 40px rgba(124,58,237,0.1)',
        'card': '0 4px 20px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.05)',
        'card-hover': '0 8px 40px rgba(0,212,255,0.15), 0 4px 20px rgba(0,0,0,0.6)',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
    },
  },
  plugins: [],
}
