import { motion } from 'framer-motion'
import { useEffect, useId, useRef, useState } from 'react'
import { AnimatedGridBackdropProps } from './AnimatedGridBackdrop.types'

interface Square {
  id: number
  pos: [number, number]
  color: string
  cycle: number
}

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

  // -----------------------------
  // Funciones de utilidad
  // -----------------------------

  // Elegir un color aleatorio del array
  const getPos = (): [number, number] =>
    dimensions.width && dimensions.height
      ? [
          Math.floor((Math.random() * (dimensions.width - squareWidth)) / (squareWidth + squareSpacing)),
          Math.floor((Math.random() * (dimensions.height - squareHeight)) / (squareHeight + squareSpacing)),
        ]
      : [0, 0]

  // Crear un cuadrado completo con id y ciclo inicial
  const getColor = (): string => squareColors[Math.floor(Math.random() * squareColors.length)]

  // Generar array de cuadrados
  const generateSquares = (count: number): Square[] =>
    Array.from({ length: count }, (_, i) => ({
      id: i,
      pos: getPos(),
      color: getColor(),
      cycle: 0,
    }))

  // Actualizar un cuadrado al terminar su animación:
  // - nueva posición
  // - nuevo color
  // - incrementar ciclo para reiniciar animación
  const respawnSquare = (id: number) => {
    setSquares((current) =>
      current.map((sq) =>
        sq.id === id
          ? {
              ...sq,
              pos: getPos(),
              color: getColor(),
              cycle: sq.cycle + 1,
            }
          : sq,
      ),
    )
  }

  // -----------------------------
  // Efectos
  // -----------------------------

  // Generar cuadrados cuando cambian dimensiones o totalSquares
  useEffect(() => {
    if (dimensions.width && dimensions.height) {
      setSquares(generateSquares(totalSquares))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dimensions, totalSquares])

  // Observador de tamaño del contenedor
  useEffect(() => {
    const resizeObserver = new ResizeObserver(([entry]) => {
      setDimensions({
        width: entry.contentRect.width,
        height: entry.contentRect.height,
      })
    })

    if (containerRef.current) resizeObserver.observe(containerRef.current)

    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      if (containerRef.current) resizeObserver.unobserve(containerRef.current)
    }
  }, [containerRef])

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

      {/* fondo con pattern */}
      <rect width="100%" height="100%" fill={`url(#${id})`} />

      {/* cuadrados animados */}
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
            x={xPos * (squareWidth + squareSpacing)}
            y={yPos * (squareHeight + squareSpacing)}
            width={squareWidth}
            height={squareHeight}
            fill={color}
          />
        )
      })}
    </svg>
  )
}
