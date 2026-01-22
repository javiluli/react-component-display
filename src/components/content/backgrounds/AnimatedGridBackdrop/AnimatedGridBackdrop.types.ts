/**
 * Props para el componente AnimatedGridBackdrop
 */
export interface AnimatedGridBackdropProps {
  /**
   * Ancho de cada cuadrado en píxeles.
   * @default 80
   */
  squareWidth?: number

  /**
   * Alto de cada cuadrado en píxeles.
   * @default 80
   */
  squareHeight?: number

  /**
   * Número total de cuadrados animados.
   * @default 20
   */
  totalSquares?: number

  /**
   * Espaciado entre cuadrados.
   * @default 1
   */
  squareSpacing?: number

  /**
   * Array de colores para los cuadrados.
   * @default ['#FF4D4D', '#E1FF4D', '#4DFF88', '#4DA6FF', '#C44DFF']
   */
  squareColors?: string[]

  /**
   * Duración de la animación en segundos.
   * @default 8
   */
  duration?: number

  /**
   * Mostrar u ocultar la cuadrícula de fondo.
   * @default true
   */
  showGrid?: boolean

  /**
   * Color de la cuadrícula.
   * @default '#242424'
   */
  gridColors?: string
}
