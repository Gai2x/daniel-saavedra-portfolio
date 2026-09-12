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
        <section className="border-b border-white/5 bg-navy-900">
          <div className="mx-auto max-w-6xl px-5 py-16">
            <a href="/#projects" className="text-sm text-accent hover:underline">← Back to projects</a>
            <p className="mt-10 hud-label">{project.eyebrow}</p>
            <h1 className="mt-4 max-w-4xl font-display text-4xl font-bold leading-tight text-white sm:text-5xl">{project.title}</h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-400">{project.description}</p>
            <div className="mt-7 flex flex-wrap items-center gap-4">
              <span className="status-chip">{project.status}</span>
              <span className="font-mono text-sm text-slate-400">ROLE: {project.role}</span>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 py-16">
          <ProjectVisual kind={project.visual} large />
          <p className="mt-3 text-center font-mono text-xs text-slate-500">
            {hasScreenshots ? 'Project screenshots are displayed above.' : 'Placeholder visual — replace with approved gameplay media when available.'}
          </p>

          <div className="mt-16 grid gap-12 lg:grid-cols-[1.1fr_.9fr]">
            <div>
              <SectionHeading eyebrow="Briefing" title="Purpose & contribution" />
              <h3 className="font-display text-lg font-bold text-white">Problem / purpose</h3>
              <p className="mt-3 leading-7 text-slate-400">{project.purpose}</p>
              <h3 className="mt-8 font-display text-lg font-bold text-white">My role</h3>
              <p className="mt-3 leading-7 text-slate-400">{project.role}</p>
            </div>
            <Panel className="p-6">
              <h3 className="hud-label">LOADOUT</h3>
              <div className="mt-4 flex flex-wrap gap-2">{project.technologies.map((item) => <Tag key={item}>{item}</Tag>)}</div>
              <h3 className="mt-8 hud-label">DEV STATUS</h3>
              <p className="mt-3 text-sm leading-6 text-slate-400">
                {project.status}. {hasRepository ? 'A public repository is available below; a public demo is not available yet.' : 'A public repository and demo are not available yet.'}
              </p>
            </Panel>
          </div>

          <div className="mt-16 grid gap-10 md:grid-cols-2">
            <div>
              <h2 className="font-display text-2xl font-bold text-white">Key features & concepts</h2>
              <ul className="mt-5 space-y-3">
                {project.features.map((feature) => (
                  <li className="flex gap-3 text-slate-400" key={feature}>
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />{feature}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="font-display text-2xl font-bold text-white">Future improvements</h2>
              <ul className="mt-5 space-y-3">
                {project.future.map((item) => (
                  <li className="flex gap-3 text-slate-400" key={item}>
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full border border-slate-500" aria-hidden="true" />{item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <Panel className="mt-16 border-dashed bg-panel/50 p-7">
            <h2 className="font-display text-2xl font-bold text-white">Screenshots & resources</h2>
            <p className="mt-3 max-w-xl text-slate-400">
              {hasRepository ? 'TOR System screenshots are displayed above. Its GitHub repository is available below; a public demo is not available yet.' : 'BAYANI currently uses a placeholder visual and has no public repository or demo.'}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {project.repository && (
                <a href={project.repository} target="_blank" rel="noreferrer" className="btn-game !px-4 !py-2.5 font-mono text-xs uppercase tracking-wider">
                  Repository <External />
                </a>
              )}
              <button disabled className="inline-flex cursor-not-allowed items-center gap-2 border border-navy-300 px-4 py-2.5 font-mono text-xs uppercase tracking-wider text-slate-400">
                Demo unavailable <External />
              </button>
            </div>
          </Panel>
        </section>
      </main>
      <Footer />
    </>
  )
}
