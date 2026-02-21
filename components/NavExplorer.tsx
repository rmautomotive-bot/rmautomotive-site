'use client'
import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'

const items = [
  { href: '/missions', label: 'Galerie missions', desc: 'Nos interventions en photos' },
  { href: '/zones', label: 'Zones', desc: 'Île-de-France & Oise' },
  { href: '/blog', label: 'Blog & Conseils', desc: 'Guides pratiques auto' },
]

export default function NavExplorer() {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="text-sm font-medium text-gray-700 hover:text-red-600 transition-colors flex items-center gap-1"
      >
        Explorer
        <svg className={`w-3.5 h-3.5 transition-transform ${open ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && (
        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-52 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden z-50">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="flex flex-col px-4 py-3 hover:bg-gray-50 transition-colors border-b border-gray-50 last:border-0"
            >
              <span className="text-sm font-semibold text-gray-900">{item.label}</span>
              <span className="text-xs text-gray-400 mt-0.5">{item.desc}</span>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
