import Header from './Header'
import Panel from './Panel'
import { SectionHeading, Tag } from './Panel'
import ProjectVisual from './ProjectVisual'
import { External } from './Icons'
import type { Project } from '../data/projects'
import Footer from './sections/Footer'

export default function ProjectDetail({ project }: { project: Project }) {
  const hasRepository = Boolean(project.repository)
  const hasScreenshots = Boolean(project.screenshots?.length)
  return (
    <>
      <Header />
      <main>
        <section className="border-b-2 border-[rgb(var(--c-border))] bg-[rgb(var(--c-panel-alt))]">
          <div className="mx-auto max-w-6xl px-5 py-16">
            <a href="/#projects" className="font-pixel text-[9px] text-accent hover:text-pink">← BACK TO STAGE SELECT</a>
            <p className="mt-10 font-pixel text-[10px] text-pink">{project.eyebrow}</p>
            <h1 className="mt-4 max-w-4xl font-pixel text-xl leading-[1.7] text-[rgb(var(--c-text))] sm:text-2xl">{project.title}</h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-[rgb(var(--c-text-soft))]">{project.description}</p>
            <div className="mt-7 flex flex-wrap items-center gap-4">
              <span className="status-chip">{project.status}</span>
              <span className="font-mono text-sm text-[rgb(var(--c-text-soft))]">ROLE: {project.role}</span>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 py-16">
          <ProjectVisual kind={project.visual} large />
          <p className="mt-3 text-center font-mono text-xs text-[rgb(var(--c-text-soft))]">
            {hasScreenshots ? 'Project screenshots are displayed above.' : 'Placeholder visual — replace with approved gameplay media when available.'}
          </p>

          <div className="mt-16 grid gap-12 lg:grid-cols-[1.1fr_.9fr]">
            <div>
              <SectionHeading eyebrow="Briefing" title="Purpose & contribution" />
              <h3 className="font-pixel text-[11px] leading-[1.7] text-[rgb(var(--c-text))]">Problem / purpose</h3>
              <p className="mt-3 leading-7 text-[rgb(var(--c-text-soft))]">{project.purpose}</p>
              <h3 className="mt-8 font-pixel text-[11px] leading-[1.7] text-[rgb(var(--c-text))]">My role</h3>
              <p className="mt-3 leading-7 text-[rgb(var(--c-text-soft))]">{project.role}</p>
            </div>
            <Panel className="p-6">
              <h3 className="font-pixel text-[10px] text-pink">LOADOUT</h3>
              <div className="mt-4 flex flex-wrap gap-2">{project.technologies.map((item) => <Tag key={item}>{item}</Tag>)}</div>
              <h3 className="mt-8 font-pixel text-[10px] text-pink">DEV STATUS</h3>
              <p className="mt-3 text-sm leading-6 text-[rgb(var(--c-text-soft))]">
                {project.status}. {hasRepository ? 'A public repository is available below; a public demo is not available yet.' : 'A public repository and demo are not available yet.'}
              </p>
            </Panel>
          </div>

          <div className="mt-16 grid gap-10 md:grid-cols-2">
            <div>
              <h2 className="font-pixel text-sm leading-[1.7] text-[rgb(var(--c-text))]">Key features &amp; concepts</h2>
              <ul className="mt-5 space-y-3">
                {project.features.map((feature) => (
                  <li className="flex gap-3 text-[rgb(var(--c-text-soft))]" key={feature}>
                    <span className="mt-1.5 h-2 w-2 shrink-0 bg-accent" aria-hidden="true" />{feature}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="font-pixel text-sm leading-[1.7] text-[rgb(var(--c-text))]">Future improvements</h2>
              <ul className="mt-5 space-y-3">
                {project.future.map((item) => (
                  <li className="flex gap-3 text-[rgb(var(--c-text-soft))]" key={item}>
                    <span className="mt-1.5 h-2 w-2 shrink-0 border border-[rgb(var(--c-text-soft))]" aria-hidden="true" />{item}
                    <span className="font-pixel text-[8px] text-pink">▸</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <Panel className="mt-16 border-dashed bg-panel/50 p-7">
            <h2 className="font-pixel text-sm leading-[1.7] text-[rgb(var(--c-text))]">Screenshots &amp; resources</h2>
            <p className="mt-3 max-w-xl text-[rgb(var(--c-text-soft))]">
              {hasRepository ? 'TOR System screenshots are displayed above. Its GitHub repository is available below; a public demo is not available yet.' : 'BAYANI currently uses a placeholder visual and has no public repository or demo.'}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {project.repository && (
                <a href={project.repository} target="_blank" rel="noreferrer" className="btn-game !px-4 !py-2.5 !text-[9px]">
                  REPOSITORY <External />
                </a>
              )}
              <button disabled className="inline-flex cursor-not-allowed items-center gap-2 border-2 border-navy-300 px-4 py-2.5 font-pixel text-[9px] text-[rgb(var(--c-text-soft))]">
                DEMO UNAVAILABLE <External />
              </button>
            </div>
          </Panel>
        </section>
      </main>
      <Footer />
    </>
  )
}
