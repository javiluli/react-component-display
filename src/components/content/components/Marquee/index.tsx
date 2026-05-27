import { useEffect, useRef, useState } from 'react'
import { MarqueeProps } from './marquee.types'

export function Marquee({ children, animationDuration = 30, direction = 'normal' }: MarqueeProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const unitRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const offsetRef = useRef(0)
  const lastTimeRef = useRef<number | null>(null)
  const rafRef = useRef<number | null>(null)
  const isPausedRef = useRef(false)
  const directionRef = useRef(direction)
  const [repetitions, setRepetitions] = useState(2)
  const [unitWidth, setUnitWidth] = useState(0)

  const renderItems = (prefix: 'first' | 'second', withMeasureRef = false) => (
    <>
      <div ref={withMeasureRef ? unitRef : null} className="flex shrink-0 items-center gap-4 px-2">
        {children}
      </div>
      {[...Array(Math.max(0, repetitions - 1))].map((_, i) => (
        <div key={`${prefix}-${i}`} className="flex shrink-0 items-center gap-4 px-2">
          {children}
        </div>
      ))}
    </>
  )

  useEffect(() => {
    if (!containerRef.current || !unitRef.current) return

    const calculate = () => {
      if (containerRef.current && unitRef.current) {
        const containerWidth = containerRef.current.offsetWidth
        const unitWidth = unitRef.current.offsetWidth
        if (unitWidth > 0) {
          const needed = Math.ceil(containerWidth / unitWidth)
          const nextRepetitions = Math.max(1, needed)

          setRepetitions((prev) => (prev === nextRepetitions ? prev : nextRepetitions))
          setUnitWidth((prev) => (prev === unitWidth ? prev : unitWidth))
        }
      }
    }

    calculate()

    const resizeObserver =
      typeof ResizeObserver !== 'undefined'
        ? new ResizeObserver(() => {
            calculate()
          })
        : null

    if (resizeObserver) {
      resizeObserver.observe(containerRef.current)
      resizeObserver.observe(unitRef.current)
    }

    window.addEventListener('resize', calculate)
    return () => {
      resizeObserver?.disconnect()
      window.removeEventListener('resize', calculate)
    }
  }, [children])

  useEffect(() => {
    if (!trackRef.current || unitWidth <= 0) return

    const safeDuration = Number.isFinite(animationDuration) && animationDuration > 0 ? animationDuration : 30

    const pxPerSecond = unitWidth / safeDuration
    const prefersReducedMotion =
      typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (prefersReducedMotion) {
      trackRef.current.style.transform = 'translate3d(0, 0, 0)'
      return
    }

    offsetRef.current = ((offsetRef.current % unitWidth) + unitWidth) % unitWidth

    if (directionRef.current !== direction) {
      offsetRef.current = (unitWidth - offsetRef.current) % unitWidth
      directionRef.current = direction
    }

    const step = (time: number) => {
      const track = trackRef.current
      if (!track) return

      if (lastTimeRef.current === null) {
        lastTimeRef.current = time
      }

      const delta = (time - lastTimeRef.current) / 1000
      lastTimeRef.current = time

      if (!isPausedRef.current) {
        offsetRef.current = (offsetRef.current + pxPerSecond * delta) % unitWidth
      }

      const translateX = direction === 'normal' ? -offsetRef.current : offsetRef.current - unitWidth
      track.style.transform = `translate3d(${translateX}px, 0, 0)`

      rafRef.current = window.requestAnimationFrame(step)
    }

    rafRef.current = window.requestAnimationFrame(step)

    return () => {
      if (rafRef.current) window.cancelAnimationFrame(rafRef.current)
      rafRef.current = null
      lastTimeRef.current = null
    }
  }, [animationDuration, direction, unitWidth])

  useEffect(() => {
    const onVisibilityChange = () => {
      isPausedRef.current = document.hidden
    }

    document.addEventListener('visibilitychange', onVisibilityChange)
    return () => document.removeEventListener('visibilitychange', onVisibilityChange)
  }, [])

  return (
    <div
      ref={containerRef}
      className="relative flex w-full overflow-hidden py-4"
      onMouseEnter={() => {
        isPausedRef.current = true
      }}
      onMouseLeave={() => {
        isPausedRef.current = false
      }}
    >
      <div ref={trackRef} className="flex w-max flex-nowrap will-change-transform">
        <div className="flex shrink-0 items-center">{renderItems('first', true)}</div>
        <div className="flex shrink-0 items-center" aria-hidden="true">
          {renderItems('second')}
        </div>
      </div>
    </div>
  )
}
