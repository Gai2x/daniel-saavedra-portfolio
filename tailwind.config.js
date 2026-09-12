/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Layered deep-navy panels on the near-black navy base
        ink: '#0b1020',
        navy: {
          300: '#263149',
          500: '#1a2340',
          700: '#131a2e',
          900: '#0e1426',
        },
        panel: '#131a2e',
        line: '#263149',
        // Electric cyan accent (was mint #77e0bd) — every text-accent/bg-accent usage follows
        accent: {
          DEFAULT: '#22d3ee',
          soft: '#67e8f9',
          dim: '#0e7490',
        },
        // Gold: reserved for earned credentials (education) only
        gold: {
          DEFAULT: '#fbbf24',
          soft: '#fde68a',
          dim: '#92400e',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      boxShadow: {
        // Subtle cyan glow used only on primary actions / hover lifts
        glow: '0 0 24px -6px rgba(34, 211, 238, 0.35)',
      },
    },
  },
  plugins: [],
}
