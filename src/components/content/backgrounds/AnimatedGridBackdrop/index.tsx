import { motion } from 'framer-motion'
import { useEffect, useId, useMemo, useRef, useState } from 'react'
import { AnimatedGridBackdropProps } from './animatedGridBackdrop.types'

interface Square {
  id: number
  pos: [number, number]
  color: string
  cycle: number
}

const HARD_MAX_SQUARES = 120

export function AnimatedGridBackdrop({
  squareWidth = 80,
  squareHeight = 80,
  totalSquares = 20,
  squareSpacing = 1,
  squareColors = ['#FF4D4D', '#E1FF4D', '#4DFF88', '#4DA6FF', '#C44DFF'],
  duration = 8,
  showGrid = true,
  gridColors = '#242424',
  ...props
}: AnimatedGridBackdropProps) {
  const id = useId()
  const containerRef = useRef<SVGSVGElement | null>(null)
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  const [squares, setSquares] = useState<Square[]>([])

  const cellWidth = squareWidth + squareSpacing
  const cellHeight = squareHeight + squareSpacing
  const safeTotalSquares = Number.isFinite(totalSquares) ? Math.max(0, Math.floor(totalSquares)) : 0
  const safeColors = squareColors.length > 0 ? squareColors : ['#4DA6FF']

  const validPositions = useMemo<[number, number][]>(() => {
    const positions: [number, number][] = []
    if (dimensions.width > 0 && dimensions.height > 0 && cellWidth > 0 && cellHeight > 0) {
      // Include edge cells even when they are partially visible.
      for (let x = 0; x < dimensions.width; x += cellWidth) {
        for (let y = 0; y < dimensions.height; y += cellHeight) {
          positions.push([x, y])
        }
      }
    }
    return positions
  }, [dimensions.width, dimensions.height, cellWidth, cellHeight])

  const maxCells = validPositions.length

  const getColor = (): string => safeColors[Math.floor(Math.random() * safeColors.length)]
  const encodePos = (x: number, y: number): string => `${x}:${y}`

  const pickFreePos = (occupied: Set<string>): [number, number] | null => {
    if (occupied.size >= maxCells) return null

    for (let attempts = 0; attempts < 12; attempts += 1) {
      const candidate = validPositions[Math.floor(Math.random() * validPositions.length)]
      if (candidate && !occupied.has(encodePos(candidate[0], candidate[1]))) return candidate
    }

    const free = validPositions.filter(([x, y]) => !occupied.has(encodePos(x, y)))
    if (free.length === 0) return null
    return free[Math.floor(Math.random() * free.length)]
  }

  const generateSquares = (count: number): Square[] => {
    const target = Math.min(count, maxCells, HARD_MAX_SQUARES)
    const occupied = new Set<string>()
    const created: Square[] = []

    for (let i = 0; i < target; i += 1) {
      const nextPos = pickFreePos(occupied)
      if (!nextPos) break
      occupied.add(encodePos(nextPos[0], nextPos[1]))
      created.push({
        id: i,
        pos: nextPos,
        color: getColor(),
        cycle: 0,
      })
    }

    return created
  }

  const respawnSquare = (id: number) => {
    setSquares((current) => {
      const occupied = new Set<string>()
      let currentSquare: Square | null = null

      for (const sq of current) {
        if (sq.id === id) {
          currentSquare = sq
          continue
        }
        occupied.add(encodePos(sq.pos[0], sq.pos[1]))
      }

      if (!currentSquare) return current

      const nextPos = pickFreePos(occupied) ?? currentSquare.pos
      return current.map((sq) =>
        sq.id === id
          ? {
              ...sq,
              pos: nextPos,
              color: getColor(),
              cycle: sq.cycle + 1,
            }
          : sq,
      )
    })
  }

  useEffect(() => {
    if (dimensions.width && dimensions.height && maxCells > 0) {
      setSquares(generateSquares(safeTotalSquares))
    } else {
      setSquares([])
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dimensions, safeTotalSquares, squareWidth, squareHeight, squareSpacing, maxCells])

  useEffect(() => {
    const resizeObserver = new ResizeObserver(([entry]) => {
      setDimensions({
        width: entry.contentRect.width,
        height: entry.contentRect.height,
      })
    })

    if (containerRef.current) resizeObserver.observe(containerRef.current)

    return () => {
      resizeObserver.disconnect()
    }
  }, [])

  return (
    <svg
      ref={containerRef}
      aria-hidden="true"
      className="absolute inset-0 h-full w-full pointer-events-none"
      {...props}
    >
      {showGrid && (
        <>
          <defs>
            <pattern
              id={id}
              width={squareWidth + squareSpacing}
              height={squareHeight + squareSpacing}
              patternUnits="userSpaceOnUse"
              x={-1}
              y={-1}
            >
              <path
                d={`M.5 ${squareHeight + squareSpacing}V.5H${squareWidth + squareSpacing}`}
                fill="none"
                stroke={gridColors}
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill={`url(#${id})`} />
        </>
      )}

      {squares.map(({ pos, id, color, cycle }, index) => {
        const [xPos, yPos] = pos ?? [0, 0]
        return (
          <motion.rect
            key={`${id}-${cycle}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 1, 0] }}
            transition={{
              duration,
              times: [0, 0.15, 0.65, 1],
              delay: index * 0.35,
              ease: ['easeIn', 'linear', 'easeOut'],
            }}
            onAnimationComplete={() => respawnSquare(id)}
            x={xPos}
            y={yPos}
            width={squareWidth}
            height={squareHeight}
            fill={color}
          />
        )
      })}
    </svg>
  )
}
