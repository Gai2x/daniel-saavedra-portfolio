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
            <p className="font-pixel text-[10px] text-pink">CREDENTIAL · IN PROGRESS</p>
            <p className="mt-4 font-pixel text-xs leading-[1.7] text-[rgb(var(--c-text))]">Negros Oriental State University</p>
            <p className="mt-3 text-[rgb(var(--c-text-soft))]">NORSU Bais Campus I · BSIT student</p>
          </div>
          <Trophy />
        </div>
        <p className="mt-5 max-w-2xl leading-7 text-[rgb(var(--c-text-soft))]">
          Building a foundation in information technology while gaining practical experience through software and game development projects.
        </p>
      </Panel>
    </section>
  )
}
