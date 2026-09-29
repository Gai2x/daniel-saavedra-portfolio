/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Theme-swapped via CSS variables on :root (dark) / body.light-mode (light)
        ink: 'rgb(var(--c-bg) / <alpha-value>)',
        navy: {
          300: 'rgb(var(--c-border) / <alpha-value>)',
          500: 'rgb(var(--c-panel) / <alpha-value>)',
          700: 'rgb(var(--c-panel) / <alpha-value>)',
          900: 'rgb(var(--c-panel-alt) / <alpha-value>)',
        },
        panel: 'rgb(var(--c-panel) / <alpha-value>)',
        line: 'rgb(var(--c-border) / <alpha-value>)',
        accent: {
          DEFAULT: 'rgb(var(--c-accent) / <alpha-value>)',
          soft: 'rgb(var(--c-accent-soft) / <alpha-value>)',
          dim: 'rgb(var(--c-accent-dim) / <alpha-value>)',
        },
        pink: {
          DEFAULT: 'rgb(var(--c-pink) / <alpha-value>)',
          soft: 'rgb(var(--c-pink-soft) / <alpha-value>)',
          dim: 'rgb(var(--c-pink-dim) / <alpha-value>)',
        },
        gold: {
          DEFAULT: 'rgb(var(--c-pink) / <alpha-value>)',
          soft: 'rgb(var(--c-pink-soft) / <alpha-value>)',
          dim: 'rgb(var(--c-pink-dim) / <alpha-value>)',
        },
      },
      fontFamily: {
        pixel: ['"Press Start 2P"', 'monospace'],
        mono: ['"Fira Code"', '"JetBrains Mono"', 'monospace'],
        sans: ['"Fira Code"', '"JetBrains Mono"', 'monospace'],
        display: ['"Press Start 2P"', 'monospace'],
      },
      boxShadow: {
        // Bound to variables so glows vanish in light mode
        'neon-cyan': 'var(--shadow-cyan)',
        'neon-pink': 'var(--shadow-pink)',
        'neon-cyan-sm': 'var(--shadow-cyan-sm)',
        'neon-pink-sm': 'var(--shadow-pink-sm)',
      },
    },
  },
  plugins: [],
}
