import Header from '../Header'
import { Arrow } from '../Icons'

export default function Hero() {
  return (
    <>
      <Header />
      <main>
        <section className="relative overflow-hidden border-b border-white/5">
          <div className="hero-grid absolute inset-0 opacity-40" aria-hidden="true" />
          <div className="relative mx-auto grid max-w-6xl content-center gap-12 px-5 py-20 lg:min-h-[680px] lg:grid-cols-[1.2fr_.8fr] lg:py-24">
            <div className="animate-enter">
              <p className="mb-6 flex items-center gap-2.5">
                <span className="pulse-dot h-2 w-2 rounded-full bg-accent" aria-hidden="true" />
                <span className="hud-label">Available for learning &amp; collaboration</span>
              </p>
              <h1 className="font-display max-w-3xl text-4xl font-bold leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-7xl">
                Building systems, experiences, and games <span className="text-accent">through code.</span>
                <span className="mt-5 block font-mono text-sm font-medium tracking-[0.18em] text-slate-400 sm:text-base">— BSIT STUDENT &amp; DEVELOPER</span>
                <span className="mt-2 block text-lg font-normal tracking-normal text-slate-500 sm:text-xl">Daniel Saavedra</span>
              </h1>
              <p className="mt-7 max-w-xl text-lg leading-8 text-slate-400">
                I’m Daniel Saavedra, a BSIT student at NORSU Bais Campus I actively developing practical software projects and game experiences.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <a href="#projects" className="btn-game">View projects <Arrow /></a>
                <a href="#contact" className="btn-game-ghost">Contact me</a>
              </div>
            </div>
            <div className="relative flex items-center justify-center">
              <div className="absolute h-72 w-72 rounded-full border border-accent/15" aria-hidden="true" />
              <div className="game-panel relative w-72 overflow-hidden shadow-2xl">
                <img src="/images/Profile.jpeg" alt="Daniel Saavedra" className="h-80 w-full object-cover object-top" />
                <div className="border-t border-line bg-navy-900 px-4 py-3 font-mono text-xs text-slate-500">
                  STUDENT DEVELOPER · NORSU BAIS CAMPUS I
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-white/5 bg-navy-900/60">
            <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-x-8 gap-y-2 px-5 py-3 font-mono text-[11px] uppercase tracking-[0.2em] text-slate-500">
              <span><span className="text-accent">▸</span> Web systems</span>
              <span><span className="text-accent">▸</span> Game development</span>
              <span><span className="text-accent">▸</span> UI / UX</span>
              <span><span className="text-accent">▸</span> Databases</span>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
