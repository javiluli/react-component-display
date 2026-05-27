import { ReactNode } from 'react'

export type Direction = 'normal' | 'reverse'

export interface MarqueeProps {
  /**
   * Elementos que aparecen en el compnente.
   * @default []
   */
  children: ReactNode

  /**
   * Duración de la animación (en segundos).
   * @default 30
   */
  animationDuration?: number

  /**
   * Direccion de la animacion (LTR o RTL)
   * @default "normal"
   */
  direction?: Direction
}
