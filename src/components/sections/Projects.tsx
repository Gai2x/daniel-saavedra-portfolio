import Panel from '../Panel'
import { SectionHeading, Tag } from '../Panel'
import ProjectVisual from '../ProjectVisual'
import { Arrow } from '../Icons'
import { projects, type Project } from '../../data/projects'

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <Panel hover className="group flex flex-col transition-transform duration-300 will-change-transform hover:scale-[1.03] hover:z-10">
      <div className="flex items-center justify-between gap-3 border-b-2 border-accent/40 bg-navy-900 px-4 py-2.5">
        <p className="font-pixel text-[10px] text-pink">STAGE 0{index + 1}</p>
        <span className="status-chip whitespace-nowrap">{project.status}</span>
        <p className="font-pixel text-[8px] text-accent">HI-SCORE</p>
      </div>
      <ProjectVisual kind={project.visual} image={project.screenshots?.[0]} />
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-pixel text-xs leading-[1.7] text-[rgb(var(--c-text))] sm:text-sm">{project.title}</h3>
        <p className="mt-3 text-sm leading-6 text-[rgb(var(--c-text-soft))]">{project.description}</p>
        <div className="mt-5 flex flex-wrap gap-2">{project.technologies.slice(0, 4).map((item) => <Tag key={item}>{item}</Tag>)}</div>
        <div className="mt-6 flex flex-1 items-end">
          <a href={`/projects/${project.slug}`} className="inline-flex items-center gap-2 font-pixel text-[9px] text-accent transition hover:text-pink">
            VIEW STAGE <Arrow />
          </a>
        </div>
      </div>
    </Panel>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-5 py-24">
      <SectionHeading eyebrow="03 / High score stages" title="In progress, with purpose.">
        Two projects currently shaping my development experience.
      </SectionHeading>
      <div className="grid gap-6 lg:grid-cols-2">
        {projects.map((project, index) => <ProjectCard key={project.slug} project={project} index={index} />)}
      </div>
    </section>
  )
}
