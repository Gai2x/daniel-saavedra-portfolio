import { SectionHeading } from '../Panel'

const steps = [
  {
    label: 'Now',
    title: 'Building practical projects',
    body: 'Developing a local academic service system and contributing to a game in progress.',
    accent: true,
  },
  {
    label: 'Approach',
    title: 'System-minded learning',
    body: 'Exploring analysis, interface design, implementation, and data-backed workflows.',
    accent: false,
  },
  {
    label: 'Next',
    title: 'Keep iterating',
    body: 'Expanding skills through coursework, team collaboration, and new technologies.',
    accent: false,
  },
]

export default function Journey() {
  return (
    <section id="journey" className="border-y border-white/5 bg-navy-900">
      <div className="mx-auto max-w-6xl px-5 py-24">
        <SectionHeading eyebrow="04 / Objective track" title="Growing through active development." />
        <div className="grid gap-5 md:grid-cols-3">
          {steps.map((step) => (
            <article key={step.label} className={`border-l-2 bg-panel p-5 ${step.accent ? 'border-accent' : 'border-navy-300'}`}>
              <p className={step.accent ? 'hud-label' : 'hud-label-dim'}>{step.label}</p>
              <h3 className="mt-3 font-display text-lg font-bold text-white">{step.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-400">{step.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
