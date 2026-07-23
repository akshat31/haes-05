import React from 'react'
import Reveal from '../components/Reveal'

export default function News(){
  const articles = [
    {
      title: 'HAES Institute launches European learning systems review',
      date: 'July 2026',
      description: 'A new report outlines opportunities for AI-ready, human-centred education systems across Europe.',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1000&q=80',
    },
    {
      title: 'Roundtable for education leaders and policymakers',
      date: 'June 2026',
      description: 'Senior stakeholders met to discuss collaborative approaches to ethical digital learning.',
      image: 'https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&w=1000&q=80',
    },
    {
      title: 'New partnership established with innovation network',
      date: 'May 2026',
      description: 'HAES Institute has joined forces with a leading policy network to accelerate education transformation.',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=80',
    },
  ]

  return (
    <Reveal className="space-y-10">
      <section className="page-intro grid gap-8 lg:grid-cols-[1.05fr_0.95fr] items-center">
        <div className="space-y-6">
          <p className="eyebrow">News</p>
          <h1 className="section-title">Latest updates from HAES Institute.</h1>
          <p className="text-slate-700 max-w-2xl">Stay updated on our latest research, partnerships, and collaborations as we work to shape future-ready education systems.</p>
        </div>

        <div className="overflow-hidden rounded-[28px] shadow-2xl border border-slate-200/70">
          <img
            src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=1200&q=80"
            alt="People discussing in a news briefing"
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        {articles.map((article) => (
          <article key={article.title} className="feature-card">
            <div className="overflow-hidden rounded-3xl shadow-inner">
              <img src={article.image} alt={article.title} className="h-48 w-full object-cover" loading="lazy" />
            </div>
            <div className="mt-4">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-500">{article.date}</p>
              <h3 className="mt-3 text-xl font-semibold text-slate-900">{article.title}</h3>
              <p className="mt-3 text-slate-700">{article.description}</p>
            </div>
          </article>
        ))}
      </section>

      <section className="panel editorial-section grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <p className="section-kicker">Stay connected</p>
          <h2 className="section-title mt-3">A conversation that keeps moving.</h2>
        </div>
        <p className="self-end text-muted">Alongside programme news, we share perspectives from international research, policy dialogue and leadership development. Follow the work as it develops across institutions, disciplines and borders.</p>
      </section>
    </Reveal>
  )
}
