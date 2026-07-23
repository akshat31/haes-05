import React, { useEffect, useRef } from 'react'

export default function HeroIllustration(){
  const ref = useRef()

  useEffect(() => {
    const el = ref.current
    if (!el) return
    function onScroll(){
      const rect = el.getBoundingClientRect()
      const center = window.innerHeight / 2
      const diff = rect.top - center
      const pct = Math.max(Math.min(diff / center, 1), -1)
      el.style.transform = `translateY(${pct * -8}px) scale(${1 - Math.abs(pct) * 0.02})`
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div ref={ref} className="mx-auto w-full max-w-[520px] md:mx-0 hero-illustration">
      <div className="relative overflow-hidden rounded-[28px] border border-white/80 bg-slate-950/90 p-2 shadow-[0_28px_70px_rgba(15,23,42,0.18)]">
        <img src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?auto=format&fit=crop&w=1400&q=80" alt="HAES collaboration" className="block h-full w-full rounded-[22px] object-cover" loading="lazy" />
        <div className="pointer-events-none absolute inset-0 rounded-[22px] bg-gradient-to-t from-slate-950/60 via-slate-950/10 to-transparent" />
        <div className="absolute left-4 top-4 rounded-full border border-white/30 bg-white/80 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.28em] text-slate-800 backdrop-blur">
          Strategic insight
        </div>
        <div className="absolute bottom-4 right-4 rounded-2xl border border-white/30 bg-white/90 p-3 text-left shadow-lg backdrop-blur">
          <div className="text-[10px] font-semibold uppercase tracking-[0.3em] text-slate-500">Live engagement</div>
          <div className="mt-1 text-lg font-semibold text-slate-900">24+ countries</div>
        </div>
      </div>
    </div>
  )
}
