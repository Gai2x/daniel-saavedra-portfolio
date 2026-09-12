export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-ink py-7">
      <div className="mx-auto flex max-w-6xl flex-col justify-between gap-2 px-5 text-sm text-slate-500 sm:flex-row">
        <p>© {new Date().getFullYear()} Daniel Saavedra. Built with React &amp; Tailwind CSS.</p>
        <p className="font-mono text-xs uppercase tracking-[0.2em]">BSIT Student &amp; Developer</p>
      </div>
    </footer>
  )
}
