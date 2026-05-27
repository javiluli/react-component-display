import { cn } from '@/lib/cn'
import { useEffect, useRef } from 'react'
import { SpotlightCardProps } from './spotlightCard.types'

export function SpotlightCard({ from = '#1cd1c6', via = '#407cff', to = 'transparent', children }: SpotlightCardProps) {
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
    <div ref={cardRef} className="relative p-px bg-neutral-900 rounded-xl overflow-hidden">
      <div className="relative rounded-[calc(var(--radius-xl)-1px)] z-10 bg-neutral-900">{children}</div>
      <div
        ref={glowRef}
        className={cn(
          'absolute w-75 h-75 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none blur-2xl mix-blend-lighten',
        )}
        style={{
          left: -500,
          top: -500,
          background: `radial-gradient(300px circle,${from},${via},${to})`,
        }}
      />
    </div>
  )
}
