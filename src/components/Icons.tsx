import type { ReactNode } from 'react'

export function Icon({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{children}</svg>
}

export const Arrow = () => <Icon className="h-4 w-4"><path d="M5 12h14" /><path d="m13 6 6 6-6 6" /></Icon>
export const Menu = () => <Icon className="h-6 w-6"><path d="M4 7h16M4 12h16M4 17h16" /></Icon>
export const Close = () => <Icon className="h-6 w-6"><path d="m6 6 12 12M18 6 6 18" /></Icon>
export const Code = () => <Icon className="h-5 w-5"><path d="m8 9-3 3 3 3M16 9l3 3-3 3M14 5l-4 14" /></Icon>
export const Mail = () => <Icon className="h-5 w-5"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></Icon>
export const External = () => <Icon className="h-4 w-4"><path d="M14 5h5v5M19 5l-8 8" /><path d="M19 14v4a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h4" /></Icon>
export const User = () => <Icon className="h-5 w-5"><circle cx="12" cy="8" r="3.5" /><path d="M5 19.5c1.6-3 4-4.5 7-4.5s5.4 1.5 7 4.5" /></Icon>
export const Trophy = () => <Icon className="h-5 w-5"><path d="M8 21h8" /><path d="M12 17v4" /><path d="M7 4h10v5a5 5 0 0 1-10 0Z" /><path d="M7 6H4.5a.5.5 0 0 0-.5.5C4 9 5.5 10.5 7 10.5" /><path d="M17 6h2.5a.5.5 0 0 1 .5.5c0 2.5-1.5 4-3 4" /></Icon>
export const LinkIcon = () => <Icon className="h-5 w-5"><path d="M10 14a4 4 0 0 0 6 .4l2.2-2.2a4 4 0 0 0-5.6-5.6L11.4 7.8" /><path d="M14 10a4 4 0 0 0-6-.4l-2.2 2.2a4 4 0 0 0 5.6 5.6l1.2-1.2" /></Icon>
export const Chevron = () => <Icon className="h-4 w-4"><path d="m9 6 6 6-6 6" /></Icon>
