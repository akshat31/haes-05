import React from 'react'
import { motion } from 'framer-motion'

export default function HeroBackground(){
  const blob = (className, style, delay=0) => (
    <motion.div className={"blob " + className} style={style} initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: [0.95, 1.05, 0.98], opacity: [0.6,0.85,0.7] }} transition={{ duration: 8, repeat: Infinity, repeatType: 'mirror', delay }} />
  )

  return (
    <>
      {blob('blob-1', { width: 420, height: 420, left: '-8%', top: '-12%', background: 'radial-gradient(closest-side, rgba(37,99,235,0.18), rgba(37,99,235,0.05))' }, 0)}
      {blob('blob-2', { width: 300, height: 300, right: '-6%', top: '-6%', background: 'radial-gradient(closest-side, rgba(124,58,237,0.14), rgba(124,58,237,0.03))' }, 1.5)}
      {blob('blob-3', { width: 260, height: 260, right: '8%', bottom: '-12%', background: 'radial-gradient(closest-side, rgba(219,39,119,0.12), rgba(219,39,119,0.03))' }, 3)}
    </>
  )
}
