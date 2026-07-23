import React from 'react'
import { Link, useParams } from 'react-router-dom'

export default function Footer(){
  const { locale } = useParams()
  const base = locale || 'en'

  const exploreLinks = [
    { to: `/${base}/about`, label: 'About' },
    { to: `/${base}/research`, label: 'Research' },
    { to: `/${base}/publications`, label: 'Publications' },
    { to: `/${base}/team`, label: 'Team' },
  ]

  return (
    <footer className="site-footer mt-12">
      <div className="container py-8 md:py-10">
        <div className="site-footer-card rounded-[2rem] p-6 md:p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.8fr_0.75fr] lg:items-start">
            <div>
              <p className="eyebrow">HAES Institute</p>
              <h3 className="mt-3 text-2xl font-semibold site-footer-headline">Shaping human-centred education for the digital age.</h3>
              <p className="mt-4 max-w-xl site-footer-copy">A global research and policy platform connecting educators, institutions, and innovators to build smarter, more resilient learning systems.</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {['Research-led', 'Human-centred', 'Global reach'].map((chip) => (
                  <span key={chip} className="rounded-full border border-slate-200/80 bg-white/70 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.24em] text-slate-600 shadow-sm">
                    {chip}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-sm font-semibold uppercase tracking-[0.24em] site-footer-heading">Explore</h4>
              <ul className="mt-3 space-y-2 text-sm site-footer-links">
                {exploreLinks.map((link) => (
                  <li key={link.to}>
                    <Link className="site-footer-link inline-flex rounded-full px-2 py-1 transition hover:bg-blue-600/10 hover:px-3" to={link.to}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold uppercase tracking-[0.24em] site-footer-heading">Contact</h4>
              <div className="mt-3 space-y-3 text-sm site-footer-links">
                <a className="block rounded-2xl border border-slate-200/80 bg-white/80 px-3 py-3 text-slate-800 shadow-sm transition hover:border-blue-200 hover:bg-blue-50/70" href="mailto:info@haes-institute.com">
                  <span className="block text-[10px] font-semibold uppercase tracking-[0.28em] text-slate-500">Email</span>
                  <span className="mt-1 block font-semibold text-slate-900">info@haes-institute.com</span>
                </a>
                <Link className="inline-flex rounded-full border border-slate-200/80 bg-white/80 px-3 py-2 font-semibold text-slate-800 shadow-sm transition hover:border-blue-200 hover:bg-blue-50/70" to={`/${base}/contact`}>
                  Start a conversation
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-3 site-footer-bottom pt-6 text-sm sm:flex-row sm:items-center sm:justify-between">
            <p>© {new Date().getFullYear()} HAES Institute. All rights reserved.</p>
            <p>Transforming education systems for the age of AI and digital transformation.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
