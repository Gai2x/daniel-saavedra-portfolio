export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-ink py-7">
      <div className="mx-auto flex max-w-6xl flex-col justify-between gap-3 px-5 text-sm text-[rgb(var(--c-text-soft))] sm:flex-row">
        <p>© {new Date().getFullYear()} Daniel Saavedra. Built with React &amp; Tailwind CSS.</p>
        <p className="font-pixel text-[8px] text-accent">GAME OVER? <span className="blink text-pink">CONTINUE?</span></p>
      </div>
      <div className="mx-auto mt-3 max-w-6xl px-5 font-mono text-xs text-[rgb(var(--c-text-soft))]">BSIT Student &amp; Developer</div>
    </footer>
  )
}
