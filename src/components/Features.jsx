import React from 'react'

const features = [
  { title: 'Ethical AI', desc: 'Designing responsible frameworks and governance for AI in education.', accent: '01' },
  { title: 'Future skills', desc: 'Developing curricula and capabilities for the AI economy and changing labour markets.', accent: '02' },
  { title: 'Interoperability', desc: 'Creating standards for connected learning environments and shared digital infrastructure.', accent: '03' },
  { title: 'Global policy', desc: 'Engaging with institutions and policymakers to shape scalable, inclusive transformation.', accent: '04' },
]

export default function Features(){
  return (
    <section className="grid gap-5 lg:grid-cols-2">
      {features.map((feature) => (
        <article key={feature.title} className="feature-card group">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="text-[10px] font-semibold uppercase tracking-[0.3em] text-slate-500">Strategic focus</div>
              <h3 className="mt-4 text-xl font-semibold text-slate-900">{feature.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-700">{feature.desc}</p>
            </div>
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-slate-200/80 bg-white/80 text-sm font-semibold text-slate-700 shadow-sm">
              {feature.accent}
            </div>
          </div>
          <div className="mt-6 h-1.5 w-20 rounded-full bg-gradient-to-r from-blue-600 via-violet-500 to-slate-300" />
        </article>
      ))}
    </section>
  )
}
