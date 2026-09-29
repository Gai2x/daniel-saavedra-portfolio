import { useEffect, useState } from 'react'

export default function BootScreen() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) return
    setVisible(true)
    const timer = setTimeout(() => setVisible(false), 1500)
    return () => clearTimeout(timer)
  }, [])

  if (!visible) return null
  return (
    <div className="boot-screen" aria-hidden="true">
      <p className="font-pixel text-[10px] text-accent">LOADING<span className="blink">...</span></p>
      <div className="boot-bar"><span className="boot-fill" /></div>
      <p className="font-pixel text-[8px] text-pink">PRESS START</p>
    </div>
  )
}
