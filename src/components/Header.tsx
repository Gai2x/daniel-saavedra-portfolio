import { useState } from 'react'
import { Close, Menu } from './Icons'
import ThemeToggle from './ThemeToggle'

const links = [['About', '#about'], ['Skills', '#skills'], ['Projects', '#projects'], ['Journey', '#journey']]

export default function Header() {
  const [open, setOpen] = useState(false)
  const home = window.location.pathname === '/'
  return (
    <header className="sticky top-0 z-30">
      <div className="marquee" aria-hidden="true">
        <div className="marquee-track font-pixel text-[9px]">
          <span className="mr-8">★ DANIEL SAAVEDRA ★ INSERT COIN TO CONTINUE ★ BUILDING SYSTEMS, EXPERIENCES &amp; GAMES ★ PLAYER 1 READY ★ </span>
          <span className="mr-8">★ DANIEL SAAVEDRA ★ INSERT COIN TO CONTINUE ★ BUILDING SYSTEMS, EXPERIENCES &amp; GAMES ★ PLAYER 1 READY ★ </span>
        </div>
      </div>
      <nav className="flex h-14 items-center justify-between border-b-2 border-[rgb(var(--c-border))] bg-[rgb(var(--c-bg))]/95 px-5 backdrop-blur-md" aria-label="Main navigation">
        <a href="/" className="font-pixel text-sm text-accent">DS.</a>
        <div className="hidden items-center gap-6 md:flex">
          {links.map(([label, href]) => (
            <a key={label} className="font-pixel text-[9px] text-[rgb(var(--c-text))] transition hover:text-accent" href={home ? href : `/${href}`}>{label}</a>
          ))}
        </div>
        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />
          <a href={home ? '#contact' : '/#contact'} className="btn-game-ghost !px-3 !py-1.5 !text-[8px]">CONNECT</a>
        </div>
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button onClick={() => setOpen(!open)} className="rounded p-2 text-[rgb(var(--c-text))]" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open}>{open ? <Close /> : <Menu />}</button>
        </div>
      </nav>
      {open && <div className="border-t-2 border-[rgb(var(--c-border))] bg-[rgb(var(--c-bg))] px-5 pb-4 pt-2 md:hidden">
        {links.map(([label, href]) => (
          <a onClick={() => setOpen(false)} key={label} className="block px-3 py-3 font-pixel text-[9px] uppercase text-[rgb(var(--c-text))] transition hover:text-accent" href={home ? href : `/${href}`}>{label}</a>
        ))}
      </div>}
    </header>
  )
}
