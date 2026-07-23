import React from 'react'
import Reveal from '../components/Reveal'

export default function Publications(){
  return (
    <Reveal className="space-y-10">
      <section className="page-intro grid gap-8 lg:grid-cols-[1.05fr_0.95fr] items-center">
        <div className="space-y-6">
          <p className="eyebrow">Publications</p>
          <h1 className="section-title">Insight and reports for educators, leaders, and policymakers.</h1>
          <p className="text-slate-700 max-w-2xl">Our publications are designed to share practical knowledge, highlight emerging trends, and support strategic decision-making across education systems.</p>
        </div>

        <div className="overflow-hidden rounded-[28px] shadow-2xl border border-slate-200/70">
          <img
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80"
            alt="Publication materials and projects on a desk"
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        {[
          {
            title: 'Policy brief: AI in education',
            description: 'A short-form guide to applying ethical AI practices in schools and universities.',
            badge: 'Download PDF',
          },
          {
            title: 'Research report: Skills for the future',
            description: 'A European analysis of how institutions can prepare students for a digital economy.',
            badge: 'Explore findings',
          },
          {
            title: 'Case study: Collaborative governance',
            description: 'A look at how cross-sector partnerships can accelerate education system change.',
            badge: 'Read case study',
          },
          {
            title: 'White paper: Learning ecosystems',
            description: 'A roadmap for building an interoperable, equitable learning infrastructure.',
            badge: 'View insights',
          },
        ].map((item) => (
          <article key={item.title} className="feature-card">
            <div className="flex items-center justify-between gap-4">
              <h3 className="text-xl font-semibold text-slate-900">{item.title}</h3>
              <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-600">{item.badge}</span>
            </div>
            <p className="mt-3 text-slate-700">{item.description}</p>
          </article>
        ))}
      </section>

      <section className="panel editorial-section grid gap-8 lg:grid-cols-[0.82fr_1.18fr]">
        <div>
          <p className="section-kicker">Our point of view</p>
          <h2 className="section-title mt-3">Useful knowledge, made accessible.</h2>
        </div>
        <div className="space-y-4 text-muted">
          <p>Our publication programme is designed for leaders who need a clear view of emerging questions without losing nuance. We share research through briefs, reports, case studies and thought leadership for global audiences.</p>
          <p>Each format is intended to make complex developments in AI, education and leadership easier to discuss, test and put into practice.</p>
        </div>
      </section>
    </Reveal>
  )
}
