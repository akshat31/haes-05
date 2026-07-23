import React from 'react'
import Reveal from '../components/Reveal'

export default function Team(){
  const members = [
    {
      name: 'Dr. Lena Moreau',
      role: 'Director of Research',
      focus: 'Ethical AI, education policy, and emerging workforce skills.',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80',
    },
    {
      name: 'Marco Silva',
      role: 'Program Lead',
      focus: 'Institutional partnerships, strategy delivery and stakeholder engagement.',
      image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=80',
    },
    {
      name: 'Sofia Nieminen',
      role: 'Policy Advisor',
      focus: 'Governance, regulation and collaborative ecosystem design.',
      image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80',
    },
  ]

  return (
    <Reveal className="space-y-10">
      <section className="page-intro grid gap-8 lg:grid-cols-[0.9fr_1.1fr] items-center">
        <div className="space-y-6">
          <p className="eyebrow">Team</p>
          <h1 className="section-title">A diverse team of thinkers, practitioners, and conveners.</h1>
          <p className="text-slate-700 max-w-2xl">Our team brings expertise from research, education, policy, and digital transformation to support meaningful system change.</p>
        </div>

        <div className="overflow-hidden rounded-[28px] shadow-2xl border border-slate-200/70">
          <img
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80"
            alt="Group workshop for education leaders"
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        {members.map((member) => (
          <article key={member.name} className="feature-card">
            <div className="overflow-hidden rounded-3xl shadow-inner">
              <img src={member.image} alt={member.name} className="h-48 w-full object-cover" loading="lazy" />
            </div>
            <div className="mt-4">
              <h3 className="text-xl font-semibold text-slate-900">{member.name}</h3>
              <p className="mt-1 text-sm uppercase tracking-[0.2em] text-slate-500">{member.role}</p>
              <p className="mt-3 text-slate-700">{member.focus}</p>
            </div>
          </article>
        ))}
      </section>

      <section className="panel editorial-section grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="section-kicker">Our culture</p>
          <h2 className="section-title mt-3">Expertise with a human centre.</h2>
        </div>
        <div className="space-y-5 text-muted">
          <p>Our specialists combine research, programme delivery, project operations and technical expertise. This mix lets us move thoughtfully from a first conversation to a well-run engagement.</p>
          <p>We work as an international team: curious about context, precise in delivery and committed to creating an environment where clients, partners and colleagues can do their best work.</p>
        </div>
      </section>
    </Reveal>
  )
}
