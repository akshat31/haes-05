import React, { useState, useEffect, useRef } from 'react'
import { useNavigate, useParams, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'

const locales = [
  { code: 'en', label: 'EN', name: 'English' },
  { code: 'fr', label: 'FR', name: 'Français' },
  { code: 'de', label: 'DE', name: 'Deutsch' },
  { code: 'es', label: 'ES', name: 'Español' },
  { code: 'it', label: 'IT', name: 'Italiano' },
  { code: 'nl', label: 'NL', name: 'Nederlands' },
  { code: 'pt', label: 'PT', name: 'Português' },
  { code: 'sv', label: 'SV', name: 'Svenska' },
  { code: 'pl', label: 'PL', name: 'Polski' },
  { code: 'da', label: 'DA', name: 'Dansk' }
]

export default function LanguageSwitcher(){
  const { locale } = useParams()
  const location = useLocation()
  const navigate = useNavigate()
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    function onDocClick(e){ if (ref.current && !ref.current.contains(e.target)) setOpen(false) }
    function onEsc(e){ if (e.key === 'Escape') setOpen(false) }
    document.addEventListener('click', onDocClick)
    document.addEventListener('keydown', onEsc)
    return () => { document.removeEventListener('click', onDocClick); document.removeEventListener('keydown', onEsc) }
  }, [])

  const current = locales.find(l => l.code === locale) || locales[0]

  // maintain current path after switching locale: remove leading /{locale} prefix
  const path = location.pathname.replace(/^\/[a-z]{2}/, '') || '/'
  const selectLanguage = (code) => {
    setOpen(false)
    navigate(`/${code}${path}`)
  }

  const onKeyDown = (event) => {
    if (event.key === 'Escape') setOpen(false)
    if (event.key === 'ArrowDown') {
      event.preventDefault()
      setOpen(true)
    }
  }

  return (
    <div ref={ref} className="relative ml-2 overflow-visible">
      <button
        type="button"
        aria-expanded={open}
        aria-haspopup="listbox"
        aria-label={`Choose language, currently ${current.name}`}
        onClick={() => setOpen(v => !v)}
        onKeyDown={onKeyDown}
        className="language-trigger"
      >
        <span>{current.label}</span>
        <svg className={`h-3.5 w-3.5 transition-transform ${open ? 'rotate-180' : ''}`} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
          <path d="M5 7l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.18 }}
            role="listbox"
            aria-label="Choose language"
            className="language-menu"
          >
            {locales.map(l => (
              <li key={l.code}>
                <button
                  type="button"
                  role="option"
                  aria-selected={locale === l.code}
                  className={`language-option ${locale === l.code ? 'is-selected' : ''}`}
                  onClick={() => selectLanguage(l.code)}
                >
                  <span>{l.name}</span>
                  <span aria-hidden="true">{l.label}</span>
                </button>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  )
}
