import type { ReactNode } from 'react'

/** Double-bordered neon panel used across the arcade UI. */
export default function Panel({ children, className = '', gold = false, hover = false }: { children: ReactNode; className?: string; gold?: boolean; hover?: boolean }) {
  const frame = gold ? 'game-panel-pink' : 'game-panel'
  return <div className={`${frame}${hover ? ' game-panel-hover' : ''} ${className}`}>{children}</div>
}

export function SectionHeading({ eyebrow, title, children, gold = false }: { eyebrow: string; title: string; children?: ReactNode; gold?: boolean }) {
  return (
    <div className="mb-10 max-w-2xl">
      <p className="mb-3 flex items-center gap-3">
        <span className={`inline-block h-1 w-8 ${gold ? 'bg-pink' : 'bg-accent'}`} aria-hidden="true" />
        <span className={gold ? 'hud-label-pink' : 'hud-label'}>{eyebrow}</span>
      </p>
      <h2 className="font-pixel text-base leading-[1.6] text-[rgb(var(--c-text))] sm:text-lg">{title}</h2>
      {children && <p className="mt-4 leading-7 text-[rgb(var(--c-text-soft))]">{children}</p>}
    </div>
  )
}

export function Tag({ children }: { children: string }) {
  return <span className="quest-tag">{children}</span>
}
