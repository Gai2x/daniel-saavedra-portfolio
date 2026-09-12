import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Skills from './components/sections/Skills'
import Projects from './components/sections/Projects'
import Journey from './components/sections/Journey'
import Education from './components/sections/Education'
import Contact from './components/sections/Contact'
import Footer from './components/sections/Footer'
import ProjectDetail from './components/ProjectDetail'
import { projects } from './data/projects'

const projectPath = window.location.pathname.split('/').filter(Boolean).at(-1)

export default function App() {
  const project = projects.find((item) => item.slug === projectPath)
  if (project) return <ProjectDetail project={project} />
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Journey />
      <Education />
      <Contact />
      <Footer />
    </>
  )
}
