import Panel from '../Panel'
import { SectionHeading } from '../Panel'

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-5 py-24">
      <div className="grid gap-12 lg:grid-cols-[.7fr_1.3fr]">
        <SectionHeading eyebrow="01 / Player profile" title="Learning by building real work." />
        <Panel className="p-7">
          <div className="mb-5 flex items-center justify-between gap-4">
            <p className="font-pixel text-[10px] text-pink">SELECT YOUR PLAYER</p>
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[rgb(var(--c-text-soft))]">P1 · CREDIT 01</p>
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[rgb(var(--c-text-soft))]">P2 · CREDIT 01</p>
          </div>
          <div className="max-w-2xl text-base leading-8 text-[rgb(var(--c-text-soft))]">
            <p>I’m an Information Technology student with interests across web development, software development, game development, system analysis, UI/UX, and database-driven applications.</p>
            <p className="mt-5">This portfolio is a record of projects I am actually working on—not fabricated professional experience. I’m focused on turning ideas into useful systems and memorable interactive experiences while continuing to learn.</p>
          </div>
        </Panel>
      </div>
    </section>
  )
}
