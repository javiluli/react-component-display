import { cn } from '@/lib/cn'
import { useEffect, useRef } from 'react'
import { SpotlightCardProps } from './spotlightCard.types'
import './styles.css'

export function SpotlightCard({ colorGlow = 'glowBlwe', children }: SpotlightCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const glowRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const card = cardRef.current
      if (!card) return

      const glow = glowRef.current
      const rect = card.getBoundingClientRect()

      const x = e.clientX - rect.left
      const y = e.clientY - rect.top

      if (glow) {
        glow.style.left = `${x}px`
        glow.style.top = `${y}px`
      }

      card.style.setProperty('--xPos', `${x}px`)
      card.style.setProperty('--yPos', `${y}px`)
    }

    document.addEventListener('mousemove', handleMouseMove)

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <div ref={cardRef} className="relative p-0.75 bg-neutral-900 rounded-[0.75em] overflow-hidden">
      <div className="relative w-auto h-full rounded-[0.813em] z-10 bg-neutral-900">{children}</div>
      <div
        ref={glowRef}
        className={cn(
          colorGlow,
          'absolute w-125 h-125 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none blur-2xl mix-blend-lighten',
        )}
        style={{ left: -500, top: -500 }}
      />
    </div>
  )
}
