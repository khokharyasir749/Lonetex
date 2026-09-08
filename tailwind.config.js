/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1.5rem',
        lg: '2rem',
        xl: '2.5rem',
        '2xl': '3rem',
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1440px',
      },
    },
    extend: {
      colors: {
        // Deep Forest & Industrial Emerald Green Palette (Matching lonetex.co)
        lonetex: {
          50: '#ecfdf5',
          100: '#d1fae5',
          200: '#a7f3d0',
          300: '#6ee7b7',
          400: '#34d399', // Mint highlight
          500: '#10b981', // Emerald accent
          600: '#059669',
          700: '#047857',
          800: '#0f5132', // Deep forest brand green
          900: '#064e3b', // Primary lonetex.co deep industrial green
          950: '#022c22', // Ultra dark background/borders
        },
        // Official WhatsApp Brand Green
        whatsapp: {
          50: '#eefdf4',
          100: '#d6f9e2',
          500: '#25D366',
          600: '#1ebe5b',
          700: '#128C7E',
          800: '#075E54',
          900: '#05463e',
        },
        // Crisp Slate Grays & Surface Neutrals
        slate: {
          50: '#F9FAFB', // Off-white card canvas
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
          950: '#020617',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        heading: ['"Plus Jakarta Sans"', 'Montserrat', 'Inter', 'sans-serif'],
        display: ['Montserrat', '"Plus Jakarta Sans"', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
      },
      boxShadow: {
        'emerald-sm': '0 2px 4px 0 rgba(6, 78, 59, 0.08)',
        'emerald-md': '0 4px 14px -2px rgba(6, 78, 59, 0.16), 0 2px 6px -1px rgba(6, 78, 59, 0.08)',
        'emerald-lg': '0 10px 25px -3px rgba(6, 78, 59, 0.22), 0 4px 10px -2px rgba(6, 78, 59, 0.12)',
        'emerald-glow': '0 0 20px -2px rgba(16, 185, 129, 0.40)',
        'card-hover': '0 12px 30px -5px rgba(15, 23, 42, 0.10), 0 4px 10px -2px rgba(15, 23, 42, 0.04)',
      },
      letterSpacing: {
        tightest: '-0.04em',
        tighter: '-0.03em',
        tight: '-0.02em',
        normal: '0',
        wide: '0.025em',
        wider: '0.05em',
        widest: '0.1em',
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-in': 'fadeIn 0.25s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(6px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
}
