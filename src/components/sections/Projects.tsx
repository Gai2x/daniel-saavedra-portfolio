import Panel from '../Panel'
import { SectionHeading, Tag } from '../Panel'
import ProjectVisual from '../ProjectVisual'
import { Arrow } from '../Icons'
import { projects, type Project } from '../../data/projects'

function ProjectCard({ project }: { project: Project }) {
  return (
    <Panel hover className="group flex flex-col overflow-hidden">
      <ProjectVisual kind={project.visual} image={project.screenshots?.[0]} />
      <div className="flex flex-1 flex-col p-6">
        <div className="mb-4 flex items-start justify-between gap-4">
          <p className="hud-label">{project.eyebrow}</p>
          <span className="status-chip whitespace-nowrap">{project.status}</span>
        </div>
        <h3 className="font-display text-xl font-bold leading-snug text-white">{project.title}</h3>
        <p className="mt-3 text-sm leading-6 text-slate-400">{project.description}</p>
        <div className="mt-5 flex flex-wrap gap-2">{project.technologies.slice(0, 4).map((item) => <Tag key={item}>{item}</Tag>)}</div>
        <div className="mt-6 flex flex-1 items-end">
          <a href={`/projects/${project.slug}`} className="inline-flex items-center gap-2 text-sm font-semibold text-white transition group-hover:text-accent">
            View quest <Arrow />
          </a>
        </div>
      </div>
    </Panel>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-5 py-24">
      <SectionHeading eyebrow="03 / Quest log" title="In progress, with purpose.">
        Two projects currently shaping my development experience.
      </SectionHeading>
      <div className="grid gap-6 lg:grid-cols-2">
        {projects.map((project) => <ProjectCard key={project.slug} project={project} />)}
      </div>
    </section>
  )
}
