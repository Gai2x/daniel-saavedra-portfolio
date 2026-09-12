import type { ReactNode } from 'react'

/** Corner-bracketed panel used across the game-profile UI. */
export default function Panel({ children, className = '', gold = false, hover = false }: { children: ReactNode; className?: string; gold?: boolean; hover?: boolean }) {
  const frame = gold ? 'game-panel-gold' : 'game-panel'
  return <div className={`${frame}${hover ? ' game-panel-hover' : ''} ${className}`}>{children}</div>
}

export function SectionHeading({ eyebrow, title, children, gold = false }: { eyebrow: string; title: string; children?: ReactNode; gold?: boolean }) {
  return (
    <div className="mb-10 max-w-2xl">
      <p className="mb-3 flex items-center gap-3">
        <span className={`inline-block h-px w-8 ${gold ? 'bg-gold/60' : 'bg-accent/60'}`} aria-hidden="true" />
        <span className={gold ? 'hud-label-gold' : 'hud-label'}>{eyebrow}</span>
      </p>
      <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">{title}</h2>
      {children && <p className="mt-4 leading-7 text-slate-400">{children}</p>}
    </div>
  )
}

export function Tag({ children }: { children: string }) {
  return <span className="quest-tag">{children}</span>
}
