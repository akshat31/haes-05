import React from 'react'
import { motion } from 'framer-motion'
import useTranslations from '../lib/useTranslations'
import HeroBackground from '../components/HeroBackground'
import HeroIllustration from '../components/HeroIllustration'
import Stats from '../components/Stats'
import Features from '../components/Features'
import CTASection from '../components/CTASection'
import Reveal from '../components/Reveal'
import { Link, useParams } from 'react-router-dom'

const focusAreas = [
  'Ethical AI, governance and responsible deployment',
  'Future skills and curriculum design for the AI era',
  'Cross-border collaboration and policy engagement',
]

const highlights = [
  { title: 'Research-led', body: 'Evidence-based programs and policy insight.' },
  { title: 'Human-centred', body: 'Designing systems that keep people at the center.' },
  { title: 'Global', body: 'Working across Europe and beyond with diverse partners.' },
]

export default function Home(){
  const { t } = useTranslations()
  const { locale } = useParams()
  const base = locale || 'en'

  return (
    <section className="space-y-8 md:space-y-10">
      <motion.div
        className="hero-shell"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: 'easeOut' }}
      >
        <div className="absolute inset-0 pointer-events-none">
          <HeroBackground />
        </div>

        <div className="relative grid gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
          <div className="max-w-2xl">
            <span className="eyebrow">Global insight • Human-centred transformation</span>
            <h1 className="hero-title mt-4">{t('site.tagline')}</h1>
            <p className="hero-copy mt-5">
              {t('site.description')} We convene researchers, educators, and policymakers to build resilient learning ecosystems for the age of AI.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link to={`/${base}/contact`} className="btn-primary">Connect with HAES</Link>
              <Link to={`/${base}/research`} className="btn-secondary">Explore research</Link>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {['24+ countries', '18 research programs', 'Cross-sector partnerships'].map((chip) => (
                <span key={chip} className="rounded-full border border-slate-200/80 bg-white/85 px-3 py-2 text-sm text-slate-700 shadow-sm backdrop-blur">
                  {chip}
                </span>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="panel-strong p-5 md:p-7">
              <HeroIllustration />
              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                {highlights.map((item) => (
                  <div key={item.title} className="rounded-2xl border border-slate-200/80 bg-white/75 p-3 shadow-sm backdrop-blur">
                    <h3 className="text-sm font-semibold text-slate-900">{item.title}</h3>
                    <p className="mt-1 text-sm text-slate-600">{item.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <Reveal className="">
        <Stats />
      </Reveal>

      <Reveal>
        <section className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="panel">
          <p className="section-kicker">Premium perspectives</p>
          <h2 className="section-title mt-3">Images from our collaborative practice.</h2>
          <p className="mt-4 text-slate-700">Professional photo highlights from workshops, policy forums, and learning ecosystem strategy sessions with partners across Europe.</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              src: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80',
              alt: 'Professional team collaborating in a modern workspace',
            },
            {
              src: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80',
              alt: 'Senior advisors reviewing research insights together',
            },
            {
              src: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80',
              alt: 'Education leaders in a strategy session',
            },
          ].map((photo) => (
            <div key={photo.src} className="image-card aspect-[4/3] bg-slate-100">
              <img src={photo.src} alt={photo.alt} className="h-full w-full object-cover transition duration-500 hover:scale-105" loading="lazy" />
            </div>
          ))}
        </div>
      </section>
      </Reveal>

      <div className="grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">        <section className="panel">
          <p className="section-kicker">Why institutions partner with us</p>
          <h2 className="section-title mt-3">A premium partner for creating meaningful change in education systems.</h2>
          <p className="mt-4 text-slate-700">
            HAES Institute supports universities, policymakers, and organizations that want to design thoughtful, future-ready strategies with clarity and credibility.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {[
              'Evidence-led research and implementation',
              'Flexible programs for public and private institutions',
              'Responsible AI and digital transformation guidance',
              'Strategic support for regional and international collaboration',
            ].map((item) => (
              <div key={item} className="rounded-2xl border border-slate-200/80 bg-slate-50/70 p-4 text-sm text-slate-700">
                {item}
              </div>
            ))}
          </div>
        </section>

        <aside className="panel-soft">
          <p className="section-kicker">Current focus</p>
          <ul className="mt-5 space-y-4">
            {focusAreas.map((item) => (
              <li key={item} className="flex items-start gap-3 rounded-2xl border border-slate-200/70 bg-white/70 p-3 text-sm text-slate-700">
                <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-blue-600" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </aside>
      </div>

      <Features />
      <CTASection />
    </section>
  )
}
