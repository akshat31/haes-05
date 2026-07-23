import React, { useEffect, useState } from 'react'

const KEY = 'haes-theme'

export default function ThemeToggle(){
  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') return 'light'
    const saved = localStorage.getItem(KEY)
    if (saved) return saved
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  })

  useEffect(() => {
    const root = document.documentElement
    if (theme === 'dark'){
      root.classList.add('theme-dark')
      root.classList.remove('theme-light')
      root.setAttribute('data-theme','dark')
    } else {
      root.classList.add('theme-light')
      root.classList.remove('theme-dark')
      root.setAttribute('data-theme','light')
    }
    try{ localStorage.setItem(KEY, theme) } catch (e){}
  }, [theme])

  return (
    <button
      aria-label="Toggle theme"
      onClick={() => setTheme(t => t === 'dark' ? 'light' : 'dark')}
      className="site-toggle-btn ml-2 inline-flex h-10 w-10 items-center justify-center rounded-full"
    >
      {theme === 'dark' ? '☀︎' : '☾'}
    </button>
  )
}
