export default function ProjectVisual({ kind, image, large = false }: { kind: 'system' | 'game'; image?: string; large?: boolean }) {
  const container = large ? 'h-72 md:h-96' : 'h-52'
  const systemImage = image ?? '/images/tor-system/TorLandingPage.png'
  const systemScreenshots = [
    systemImage,
    '/images/tor-system/Screenshot 2026-04-25 144533.png',
    '/images/tor-system/Screenshot 2026-05-13 120705.png',
    '/images/tor-system/Screenshot 2026-05-13 120300.png',
  ]
  if (kind === 'system' && large) return <div className={`relative grid grid-cols-2 gap-2 overflow-hidden bg-[#182039] ${container}`}>
    {systemScreenshots.map((screenshot) => <img key={screenshot} src={screenshot} alt="TOR System interface screenshot" className="h-full min-h-0 w-full object-cover object-top" />)}
  </div>
  if (kind === 'system') return <div className={`relative overflow-hidden bg-[#182039] ${container}`}>
    <img src={systemImage} alt="TOR System interface screenshot" className="h-full w-full object-cover object-top" />
    <div className="absolute inset-0 bg-gradient-to-t from-[#0b1120]/80 via-transparent to-transparent" />
    <span className="absolute bottom-5 left-6 text-xs font-medium tracking-[.2em] text-white/80">TOR SYSTEM SCREENSHOT</span>
  </div>
  return <div className={`relative overflow-hidden bg-[#151b33] ${container}`} aria-label="BAYANI placeholder visual" role="img">
    <div className="absolute -right-12 -top-16 h-56 w-56 rounded-full border-[22px] border-amber-300/10" /><div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-[#09101f] to-transparent" />
    <div className="absolute inset-x-0 bottom-0 h-24 opacity-70 [clip-path:polygon(0_100%,0_70%,15%_30%,26%_70%,43%_15%,56%_65%,75%_20%,100%_72%,100%_100%)] bg-[#243153]" />
    <div className="absolute left-[43%] top-[31%] h-24 w-12 rounded-t-full bg-amber-200/85 shadow-[0_0_45px_#fbbf24]" /><div className="absolute left-[48%] top-[23%] h-9 w-9 rounded-full bg-amber-100" />
    <span className="absolute bottom-5 left-6 text-xs font-medium tracking-[.2em] text-amber-100/70">GAMEPLAY PLACEHOLDER</span>
  </div>
}
