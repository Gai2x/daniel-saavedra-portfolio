import Panel from '../Panel'
import { SectionHeading } from '../Panel'
import { Trophy } from '../Icons'

export default function Education() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-24">
      <SectionHeading eyebrow="05 / Credential earned" title="Bachelor of Science in Information Technology" gold />
      <Panel gold className="p-7">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className="hud-label-gold">CREDENTIAL · IN PROGRESS</p>
            <p className="mt-3 font-display text-xl font-bold text-white">Negros Oriental State University</p>
            <p className="mt-2 text-slate-400">NORSU Bais Campus I · BSIT student</p>
          </div>
          <Trophy />
        </div>
        <p className="mt-5 max-w-2xl leading-7 text-slate-400">
          Building a foundation in information technology while gaining practical experience through software and game development projects.
        </p>
      </Panel>
    </section>
  )
}
