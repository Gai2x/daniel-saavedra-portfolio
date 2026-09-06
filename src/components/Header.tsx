import { useState } from 'react'
import { Close, Menu } from './Icons'

const links = [['About', '#about'], ['Skills', '#skills'], ['Projects', '#projects'], ['Journey', '#journey'],]
export default function Header() {
  const [open, setOpen] = useState(false)
  const home = window.location.pathname === '/'
  return <header className="sticky top-0 z-30 border-b border-white/5 bg-ink/90 backdrop-blur-md">
    <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5" aria-label="Main navigation">
      <a href="/" className="font-display text-lg font-bold tracking-tight text-white">DS<span className="text-accent">.</span></a>
      <div className="hidden items-center gap-6 md:flex">{links.map(([label, href]) => <a key={label} className="text-sm text-slate-300 transition hover:text-accent" href={home ? href : `/${href}`}>{label}</a>)}</div>
      <a href={home ? '#contact' : '/#contact'} className="hidden rounded-md border border-accent/50 px-3 py-1.5 text-sm font-medium text-accent transition hover:bg-accent hover:text-ink md:block">Let’s connect</a>
      <button onClick={() => setOpen(!open)} className="rounded p-2 text-white md:hidden" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open}>{open ? <Close /> : <Menu />}</button>
    </nav>
    {open && <div className="border-t border-white/5 bg-ink px-5 pb-4 pt-2 md:hidden">{links.map(([label, href]) => <a onClick={() => setOpen(false)} key={label} className="block rounded px-3 py-3 text-slate-200 hover:bg-white/5" href={home ? href : `/${href}`}>{label}</a>)}</div>}
  </header>
}
