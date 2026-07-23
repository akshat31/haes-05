import React, { useState } from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import useTranslations from '../lib/useTranslations'
import LanguageSwitcher from './LanguageSwitcher'
import ThemeToggle from './ThemeToggle'

export default function Nav(){
  const { t } = useTranslations()
  const { locale } = useParams()
  const location = useLocation()
  const base = locale || 'en'
  const [open, setOpen] = useState(false)

  const links = [
    { to: `/${base}`, label: t('nav.home') },
    { to: `/${base}/about`, label: t('nav.about') },
    { to: `/${base}/research`, label: t('nav.research') },
    { to: `/${base}/publications`, label: t('nav.publications') },
    { to: `/${base}/team`, label: t('nav.team') },
    { to: `/${base}/news`, label: t('nav.news') },
  ]

  const isActiveLink = (target) => {
    const currentPath = location.pathname.replace(/\/$/, '')
    const normalizedTarget = target.replace(/\/$/, '')

    if (normalizedTarget === `/${base}`) {
      return currentPath === `/${base}`
    }

    return currentPath.startsWith(normalizedTarget)
  }

  return (
    <motion.header
      initial={{ y: -12, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.28, ease: 'easeOut' }}
      className="site-header sticky top-0 z-50"
    >
      <div className="container">
        <div className="flex flex-wrap items-center justify-between gap-3 py-3 md:py-4">
          <Link to={`/${base}`} className="group flex items-center gap-3 rounded-full pr-2 transition-transform hover:-translate-y-0.5">
            <div className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-full site-logo shadow-[0_12px_30px_rgba(37,99,235,0.22)]">
              <span className="text-sm font-semibold tracking-[0.2em]">H</span>
              <span className="absolute inset-0 rounded-full border border-white/30" />
            </div>
            <div className="min-w-0">
              <div className="text-[11px] font-semibold uppercase tracking-[0.35em] site-brand-name sm:text-[12px]">{t('site.name')}</div>
              <div className="mt-0.5 hidden text-xs site-tagline sm:block">{t('site.tagline')}</div>
            </div>
          </Link>

          <div className="flex items-center gap-2 md:hidden">
            <button
              type="button"
              onClick={() => setOpen((prev) => !prev)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full site-toggle-btn"
              aria-label="Open navigation"
              aria-expanded={open}
            >
              <span className="text-lg">{open ? '×' : '☰'}</span>
            </button>
          </div>

          <nav className="hidden items-center gap-2 md:flex md:gap-2 text-sm site-nav-links">
            {links.map((link) => {
              const active = isActiveLink(link.to)
              return (
                <motion.span key={link.to} whileHover={{ y: -2 }} className={`nav-link ${active ? 'is-active' : ''}`}>
                  <Link to={link.to}>{link.label}</Link>
                </motion.span>
              )
            })}
            <div className="ml-2 flex items-center gap-2">
              <motion.div whileHover={{ scale: 1.02 }} className="hidden xl:block">
                <Link to={`/${base}/contact`} className="btn-primary btn-sm">{t('nav.contact')}</Link>
              </motion.div>
              <LanguageSwitcher />
              <ThemeToggle />
            </div>
          </nav>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.18 }}
            className="overflow-hidden site-mobile-menu md:hidden z-10"
          >
            <div className="container flex flex-col gap-3 py-3">
              <div className="rounded-3xl border border-white/70 bg-white/70 p-3 shadow-sm backdrop-blur">
                <p className="text-[10px] font-semibold uppercase tracking-[0.34em] site-lang-title">Navigation</p>
                <div className="mt-2 flex flex-col gap-1">
                  {links.map((link) => {
                    const active = isActiveLink(link.to)
                    return (
                      <Link
                        key={link.to}
                        to={link.to}
                        onClick={() => setOpen(false)}
                        className={`rounded-2xl px-3 py-3 text-sm transition ${active ? 'bg-blue-600/10 text-blue-700 shadow-sm' : 'site-mobile-link'}`}
                      >
                        {link.label}
                      </Link>
                    )
                  })}
                </div>
              </div>
              <Link
                to={`/${base}/contact`}
                onClick={() => setOpen(false)}
                className="rounded-2xl px-4 py-3 text-sm font-semibold site-mobile-cta transition"
              >
                {t('nav.contact')}
              </Link>
              <div className="rounded-3xl site-lang-card p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] site-lang-title">Language</p>
                <div className="mt-3 grid grid-cols-5 gap-2">
                  {['en', 'fr', 'de', 'es', 'it', 'nl', 'pt', 'sv', 'pl', 'da'].map((code) => (
                    <Link
                      key={code}
                      to={`/${code}${location.pathname.replace(/^\/[a-z]{2}/, '') || '/'}`}
                      onClick={() => setOpen(false)}
                      className={`rounded-2xl border px-2 py-2 text-center text-xs font-semibold transition site-mobile-lang ${locale === code ? 'site-mobile-lang-active' : ''}`}
                    >
                      {code.toUpperCase()}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
