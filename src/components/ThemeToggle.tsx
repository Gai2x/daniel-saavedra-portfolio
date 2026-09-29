import { useEffect, useState } from 'react'

type Theme = 'dark' | 'light'
const STORAGE_KEY = 'portfolio-theme'

export function readInitialTheme(): Theme {
  const saved = localStorage.getItem(STORAGE_KEY)
  if (saved === 'dark' || saved === 'light') return saved
  return 'dark' // Neon Arcade Night is the default
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(() => readInitialTheme())

  useEffect(() => {
    document.body.classList.toggle('light-mode', theme === 'light')
    localStorage.setItem(STORAGE_KEY, theme)
  }, [theme])

  return (
    <button
      type="button"
      className="theme-toggle"
      aria-pressed={theme === 'light'}
      aria-label={theme === 'light' ? 'Switch to dark mode (Neon Arcade Night)' : 'Switch to light mode (90s Retro Print)'}
      title={theme === 'light' ? 'NEON ARCADE NIGHT' : '90s RETRO PRINT'}
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      <span className="coin-slot" aria-hidden="true" />
      {theme === 'light' ? 'NIGHT' : 'PRINT'}
    </button>
  )
}
