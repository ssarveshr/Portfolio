/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#ffffff',
        surface: '#ffffff',
        'surface-secondary': '#f8fafc',
        primary: '#0284c7',
        accent: '#38bdf8',
        'accent-indigo': '#6366f1',
        'text-dark': '#0f172a',
        'text-[#090d16]': '#0f172a',
        'text-muted': '#475569',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['Fira Code', 'JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'light-card': '0 4px 20px -2px rgba(148, 163, 184, 0.12), 0 2px 6px -1px rgba(148, 163, 184, 0.08)',
        'light-hover': '0 12px 30px -4px rgba(14, 165, 233, 0.15), 0 4px 12px -2px rgba(99, 102, 241, 0.1)',
      }
    },
  },
  plugins: [],
}
