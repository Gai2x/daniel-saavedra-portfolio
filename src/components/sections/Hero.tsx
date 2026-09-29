import Header from '../Header'
import { Arrow } from '../Icons'

export default function Hero() {
  return (
    <>
      <Header />
      <main>
        <section className="relative overflow-hidden border-b border-[rgb(var(--c-border)/0.3)]">
          <div className="hero-grid absolute inset-0 opacity-40" aria-hidden="true" />
          <div className="relative mx-auto grid max-w-6xl content-center gap-12 px-5 py-20 lg:min-h-[640px] lg:grid-cols-[1.2fr_.8fr] lg:py-24">
            <div className="animate-enter">
              <p className="mb-6 flex items-center gap-2.5">
                <span className="pulse-dot h-2 w-2 bg-accent" aria-hidden="true" />
                <span className="font-pixel text-[10px] text-accent">AVAILABLE FOR LEARNING &amp; COLLABORATION</span>
              </p>
              <h1 className="font-pixel max-w-3xl text-2xl leading-[1.6] text-[rgb(var(--c-text))] sm:text-3xl sm:leading-[1.55] lg:text-4xl lg:leading-[1.5]">
                Building systems, experiences, and games <span className="text-pink" style={{ textShadow: '0 0 12px rgba(255, 0, 127, .8)' }}>through code.</span>
                <span className="mt-6 block font-mono text-sm font-medium tracking-[0.18em] text-[rgb(var(--c-text-soft))]">— BSIT STUDENT &amp; DEVELOPER</span>
                <span className="mt-2 block font-mono text-lg font-normal tracking-normal text-[rgb(var(--c-text-soft))]">Daniel Saavedra</span>
              </h1>
              <p className="mt-7 max-w-xl text-base leading-8 text-[rgb(var(--c-text-soft))]">
                I’m Daniel Saavedra, a BSIT student at NORSU Bais Campus I actively developing practical software projects and game experiences.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <a href="#projects" className="btn-game">VIEW PROJECTS</a>
                <a href="#contact" className="btn-game-ghost">CONTACT ME</a>
              </div>
            </div>
            <div className="relative flex items-center justify-center">
              <div className="game-panel-pink relative w-72 overflow-hidden">
                <img src="/images/Profile.jpeg" alt="Daniel Saavedra" className="h-80 w-full object-cover object-top" />
                <div className="border-t-2 border-pink/40 bg-navy-900 px-4 py-3 font-mono text-xs text-[rgb(var(--c-text-soft))]">
                  STUDENT DEVELOPER · NORSU BAIS CAMPUS I
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-[rgb(var(--c-border)/0.3)] bg-navy-900/60">
            <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-x-8 gap-y-2 px-5 py-3 font-mono text-[11px] uppercase tracking-[0.2em] text-[rgb(var(--c-text-soft))]">
              <span><span className="text-accent">▸</span> Web systems</span>
              <span><span className="text-accent">▸</span> Game development</span>
              <span><span className="text-pink">▸</span> UI / UX</span>
              <span><span className="text-pink">▸</span> Databases</span>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
