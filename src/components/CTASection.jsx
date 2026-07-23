import React from 'react'
import { Link, useParams } from 'react-router-dom'

export default function CTASection(){
  const { locale } = useParams()
  const base = locale || 'en'

  return (
    <section className="relative overflow-hidden rounded-[32px] border border-slate-200/80 bg-slate-950/95 px-6 py-8 text-white shadow-[0_30px_80px_rgba(2,6,23,0.18)] md:px-10 md:py-10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(96,165,250,0.22),_transparent_45%)] pointer-events-none" />
      <div className="absolute -right-10 top-0 h-40 w-40 rounded-full bg-blue-500/20 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-48 w-48 rounded-full bg-violet-500/20 blur-3xl" />
      <div className="relative z-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-2xl">
          <p className="eyebrow bg-white/10 text-white/90">Collaborate with HAES</p>
          <h3 className="mt-4 text-2xl font-semibold text-white">Bring ambitious ideas into action with a trusted partner.</h3>
          <p className="mt-3 text-sm text-slate-200 md:text-base">Partner on research, pilot programs, or policy work to shape the future of learning and digital transformation.</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link to={`/${base}/contact`} className="btn-primary bg-white text-slate-900 shadow-none">Contact us</Link>
          <Link to={`/${base}/research`} className="btn-secondary border-white/20 bg-white/10 text-white hover:bg-white/20">Our research</Link>
        </div>
      </div>
    </section>
  )
}
