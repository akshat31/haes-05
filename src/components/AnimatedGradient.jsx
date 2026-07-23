import React from 'react'
import { motion } from 'framer-motion'

export default function AnimatedGradient(){
  return (
    <div aria-hidden className="absolute inset-0 -z-20 overflow-hidden">
      <motion.div
        className="absolute -left-20 top-0 w-[60rem] h-[60rem] rounded-full opacity-60 blur-3xl"
        style={{ background: 'linear-gradient(90deg,#7c3aed,#2563eb,#db2777)' }}
        animate={{ x: [0, 80, 0], y: [0, -30, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 18, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute right-0 -bottom-32 w-[48rem] h-[48rem] rounded-full opacity-50 blur-2xl"
        style={{ background: 'linear-gradient(90deg,#06b6d4,#60a5fa,#a78bfa)' }}
        animate={{ x: [0, -60, 0], y: [0, 30, 0], rotate: [0, -8, 0] }}
        transition={{ duration: 20, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' }}
      />
    </div>
  )
}
