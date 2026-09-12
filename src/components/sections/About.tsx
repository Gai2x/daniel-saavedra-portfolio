import Panel from '../Panel'
import { SectionHeading } from '../Panel'

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-5 py-24">
      <div className="grid gap-12 lg:grid-cols-[.7fr_1.3fr]">
        <SectionHeading eyebrow="01 / Character file" title="Learning by building real work." />
        <Panel className="p-7">
          <p className="hud-label-dim mb-5">DOSSIER · DS-01</p>
          <div className="max-w-2xl text-lg leading-8 text-slate-400">
            <p>I’m an Information Technology student with interests across web development, software development, game development, system analysis, UI/UX, and database-driven applications.</p>
            <p className="mt-5">This portfolio is a record of projects I am actually working on—not fabricated professional experience. I’m focused on turning ideas into useful systems and memorable interactive experiences while continuing to learn.</p>
          </div>
        </Panel>
      </div>
    </section>
  )
}
