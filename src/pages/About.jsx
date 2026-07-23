import React from 'react'
import useTranslations from '../lib/useTranslations'
import Reveal from '../components/Reveal'

export default function About(){
  const { t } = useTranslations()

  return (
    <Reveal className="space-y-10">
      <section className="page-intro grid gap-8 lg:grid-cols-[1.05fr_0.95fr] items-center">
        <div className="space-y-6">
          <p className="eyebrow">About HAES Institute</p>
          <h1 className="section-title">A research-led platform for future-ready education policy.</h1>
          <p className="text-slate-700 max-w-2xl">{t('site.description')} Our work bridges research, practice, and governance to help institutions move from ambition to measurable impact in education transformation.</p>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="panel-soft">
              <h3 className="text-lg font-semibold text-slate-900">Purpose</h3>
              <p className="mt-3 text-slate-700">Support leaders and systems with insight-driven programs that place people first.</p>
            </div>
            <div className="panel-soft">
              <h3 className="text-lg font-semibold text-slate-900">Approach</h3>
              <p className="mt-3 text-slate-700">Blend rigorous research with collaborative design and practical implementation pathways.</p>
            </div>
          </div>
        </div>

        <div className="overflow-hidden rounded-[28px] shadow-2xl border border-slate-200/70">
          <img
            src="https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=1200&q=80"
            alt="Team discussion in a modern office"
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-3">
        {[
          {
            title: 'Evidence-led guidance',
            body: 'We partner with experts to turn research into strategic direction for education and workforce development.',
          },
          {
            title: 'Policy and practice',
            body: 'Our frameworks help governments, educators and institutions align policy with real-world capacity.',
          },
          {
            title: 'Collaborative delivery',
            body: 'From workshops to pilots, we design programs that people can adopt and scale with confidence.',
          },
        ].map((item) => (
          <div key={item.title} className="feature-card">
            <h3 className="text-xl font-semibold text-slate-900">{item.title}</h3>
            <p className="mt-3 text-slate-700">{item.body}</p>
          </div>
        ))}
      </section>

      <section className="panel editorial-section grid gap-8 lg:grid-cols-[0.78fr_1.22fr]">
        <div>
          <p className="section-kicker">How we think</p>
          <h2 className="section-title mt-3">Leadership that is equipped for change.</h2>
        </div>
        <div className="space-y-5 text-muted">
          <p>HaeS brings together intellectual depth, global perspective and practical adaptability. We help people and institutions respond to technological change without losing sight of the human relationships that make progress meaningful.</p>
          <p>Our work is grounded in integrity, collaboration and a commitment to lasting impact across cultures and generations. That means clear thinking, careful listening and solutions designed to work in the real world.</p>
          <div className="grid gap-3 sm:grid-cols-3">
            {['Integrity in every engagement', 'Excellence with purpose', 'Collaboration across borders'].map((item) => <div className="quiet-card" key={item}>{item}</div>)}
          </div>
        </div>
      </section>
    </Reveal>
  )
}
