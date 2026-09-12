import { SectionHeading } from '../Panel'
import { Arrow, Code, External, LinkIcon, Mail } from '../Icons'

export default function Contact() {
  return (
    <section id="contact" className="border-t border-white/5 bg-[#10182b]">
      <div className="mx-auto max-w-6xl px-5 py-24">
        <SectionHeading eyebrow="06 / Comms" title="Let’s build something thoughtful.">
          Reach me through email or connect with me online.
        </SectionHeading>
        <div className="grid gap-4 sm:grid-cols-3">
          <a href="mailto:dzdanielsaavedra@gmail.com" className="contact-card">
            <Mail />
            <span><b>Email</b><small>dzdanielsaavedra@gmail.com</small></span>
            <Arrow />
          </a>
          <a href="https://github.com/Gai2x?tab=repositories" target="_blank" rel="noreferrer" className="contact-card">
            <Code />
            <span><b>GitHub</b><small>github.com/Gai2x</small></span>
            <External />
          </a>
          <a href="https://www.linkedin.com/in/saavedra-daniel-a-09a375434/" target="_blank" rel="noreferrer" className="contact-card">
            <LinkIcon />
            <span><b>LinkedIn</b><small>linkedin.com/in/saavedra-daniel-a-09a375434</small></span>
            <External />
          </a>
        </div>
      </div>
    </section>
  )
}
