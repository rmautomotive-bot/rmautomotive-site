'use client'
import { useEffect, useRef, useState } from 'react'

interface Props {
  end: number
  prefix?: string
  suffix?: string
  duration?: number
  className?: string
}

export default function CountUp({ end, prefix = '', suffix = '', duration = 2000, className }: Props) {
  const [value, setValue] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !started.current) {
            started.current = true
            const startTime = performance.now()
            const animate = (now: number) => {
              const elapsed = now - startTime
              const progress = Math.min(elapsed / duration, 1)
              const eased = 1 - Math.pow(1 - progress, 3)
              setValue(Math.floor(eased * end))
              if (progress < 1) {
                requestAnimationFrame(animate)
              } else {
                setValue(end)
              }
            }
            requestAnimationFrame(animate)
          }
        })
      },
      { threshold: 0.3 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [end, duration])

  return (
    <div ref={ref} className={className}>
      {prefix}{value.toLocaleString('fr-FR')}{suffix}
    </div>
  )
}
