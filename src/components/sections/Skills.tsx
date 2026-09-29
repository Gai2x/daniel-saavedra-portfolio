import { SectionHeading, Tag } from '../Panel'
import { skills } from '../../data/projects'

export default function Skills() {
  return (
    <section id="skills" className="border-y border-[rgb(var(--c-border)/0.3)] bg-navy-900">
      <div className="mx-auto max-w-6xl px-5 py-24">
        <SectionHeading eyebrow="02 / Skill tree" title="Tools I’m building with.">
          Skills are presented as working knowledge and active learning—not inflated claims.
        </SectionHeading>
        <div className="grid gap-4 md:grid-cols-3">
          {skills.map((group, index) => (
            <article key={group.title} className="game-panel p-6">
              <p className="font-pixel text-[10px] text-pink">BRANCH 0{index + 1}</p>
              <h3 className="mt-3 font-pixel text-[11px] leading-[1.7] text-[rgb(var(--c-text))]">{group.title}</h3>
              <p className="mt-2 font-mono text-xs text-accent">{group.level}</p>
              <div className="mt-6 flex flex-wrap gap-2">{group.items.map((item) => <Tag key={item}>{item}</Tag>)}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
