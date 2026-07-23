import React from 'react'

const items = [
  { label: 'Countries', value: '24+' },
  { label: 'Research projects', value: '18' },
  { label: 'Publications', value: '32' },
  { label: 'Partners', value: '45' },
]

export default function Stats(){
  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {items.map((it, index) => (
        <div key={it.label} className="stat-card text-left">
          <div className="text-[10px] font-semibold uppercase tracking-[0.28em] text-slate-500">Signal {index + 1}</div>
          <div className="mt-3 text-3xl font-semibold text-blue-700">{it.value}</div>
          <div className="mt-2 text-sm text-slate-600">{it.label}</div>
        </div>
      ))}
    </div>
  )
}
