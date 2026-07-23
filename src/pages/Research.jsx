import React from 'react'
import useTranslations from '../lib/useTranslations'
import Reveal from '../components/Reveal'

export default function Research(){
  const { t } = useTranslations()

  return (
    <Reveal className="space-y-10">
      <section className="page-intro grid gap-8 lg:grid-cols-[0.95fr_1.05fr] items-center">
        <div className="space-y-6">
          <p className="eyebrow">Research</p>
          <h1 className="section-title">Leading insight for ethical, future-ready learning systems.</h1>
          <p className="text-slate-700 max-w-2xl">{t('home.research_heading')} Our research is designed to help educators, institutions and policymakers align strategy with emerging digital and social realities.</p>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="panel-soft">
              <h3 className="text-lg font-semibold text-slate-900">Human-centred analysis</h3>
              <p className="mt-3 text-slate-700">We look beyond technology to the people and systems affected by change.</p>
            </div>
            <div className="panel-soft">
              <h3 className="text-lg font-semibold text-slate-900">Policy-ready findings</h3>
              <p className="mt-3 text-slate-700">Our outputs are tailored to support decision-making at all institutional levels.</p>
            </div>
          </div>
        </div>

        <div className="overflow-hidden rounded-[28px] shadow-2xl border border-slate-200/70">
          <img
            src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?auto=format&fit=crop&w=1200&q=80"
            alt="Researchers discussing education strategy"
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        {[
          {
            title: 'Ethical AI in education',
            body: 'Research on responsible algorithmic use, student privacy, and inclusive digital practices.',
          },
          {
            title: 'Future skills and pathways',
            body: 'Curriculum design, workforce readiness and lifelong learning for changing economies.',
          },
          {
            title: 'Connected learning ecosystems',
            body: 'Interoperability, digital infrastructure, and shared learning experiences across institutions.',
          },
          {
            title: 'Policy and governance',
            body: 'Fresh thinking for national strategies, regulatory frameworks and collaborative governance.',
          },
        ].map((item) => (
          <article key={item.title} className="feature-card">
            <h3 className="text-xl font-semibold text-slate-900">{item.title}</h3>
            <p className="mt-3 text-slate-700">{item.body}</p>
          </article>
        ))}
      </section>

      <section className="panel editorial-section">
        <div className="max-w-3xl">
          <p className="section-kicker">From insight to impact</p>
          <h2 className="section-title mt-3">Research that travels beyond the report.</h2>
          <p className="mt-5 text-muted">We translate international research into useful conversations for policy forums, learning communities, conferences and public discourse. The aim is not only to understand the changing education landscape, but to create shared standards and practical next steps.</p>
        </div>
        <div className="mt-7 grid gap-4 md:grid-cols-3">
          {[
            ['Discover', 'Surface the questions, evidence and lived experience shaping a challenge.'],
            ['Connect', 'Bring researchers, institutions and decision-makers into one informed dialogue.'],
            ['Advance', 'Share findings through practical formats that support confident action.'],
          ].map(([title, body], index) => <article className="process-card" key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{body}</p></article>)}
        </div>
      </section>
    </Reveal>
  )
}
