import React from 'react'
import Reveal from '../components/Reveal'

export default function Contact(){
  return (
    <Reveal className="space-y-10">
      <section className="page-intro grid gap-8 lg:grid-cols-[1.05fr_0.95fr] items-center">
        <div className="space-y-6">
          <p className="eyebrow">Contact</p>
          <h1 className="section-title">Work with us to shape the future of education.</h1>
          <p className="text-slate-700 max-w-2xl">Whether you are interested in research partnerships, policy support, or pilot programs, we are ready to collaborate with institutions that want to lead responsibly.</p>
        </div>

        <div className="overflow-hidden rounded-[28px] shadow-2xl border border-slate-200/70">
          <img
            src="https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&w=1200&q=80"
            alt="Professional team in a consultation meeting"
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <div className="feature-card">
          <h2 className="text-xl font-semibold text-slate-900">Get in touch</h2>
          <p className="mt-3 text-slate-700">Please email us with your inquiry, and we will follow up with a proposal tailored to your organisation’s needs.</p>
          <div className="mt-6 space-y-4">
            <div className="rounded-2xl border border-slate-200/80 bg-white/80 p-5">
              <p className="text-sm uppercase tracking-[0.18em] text-slate-500">General inquiries</p>
              <p className="mt-2 text-slate-700">info@haes-institute.com</p>
            </div>
            <div className="rounded-2xl border border-slate-200/80 bg-white/80 p-5">
              <p className="text-sm uppercase tracking-[0.18em] text-slate-500">Partnerships</p>
              <p className="mt-2 text-slate-700">collaborations@haes-institute.com</p>
            </div>
          </div>
        </div>

        <div className="feature-card">
          <h2 className="text-xl font-semibold text-slate-900">Request a conversation</h2>
          <p className="mt-3 text-slate-700">Share your goals and we’ll design a conversation that explores the right path for your team.</p>
          <form className="mt-6 space-y-4">
            <input className="w-full rounded-2xl border border-slate-200 bg-white/90 px-4 py-3 text-slate-900 outline-none focus:border-slate-400" type="text" placeholder="Name" />
            <input className="w-full rounded-2xl border border-slate-200 bg-white/90 px-4 py-3 text-slate-900 outline-none focus:border-slate-400" type="email" placeholder="Email" />
            <textarea className="w-full rounded-2xl border border-slate-200 bg-white/90 px-4 py-3 text-slate-900 outline-none focus:border-slate-400" rows="4" placeholder="Brief project overview"></textarea>
            <button type="submit" className="btn-primary w-full">Send request</button>
          </form>
        </div>
      </section>

      <section className="contact-details grid gap-4 sm:grid-cols-3">
        <div><span>Based in</span><strong>Frankfurt am Main</strong><p>Kreuznacher Straße 50<br />60488 Frankfurt am Main</p></div>
        <div><span>Office hours</span><strong>Monday–Friday</strong><p>09:00–17:00<br />Appointments available by arrangement</p></div>
        <div><span>Working globally</span><strong>International engagements</strong><p>Research, coaching and advisory support across borders and cultures.</p></div>
      </section>
    </Reveal>
  )
}
