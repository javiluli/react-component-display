import { ReactNode } from 'react'

export interface MasonryProps {
  /**
   * Elementos que aparecen en el compnente.
   * @default []
   */
  children: ReactNode

  /**
   * Duración de la animación (en segundos).
   * @default []
   */
  dependencies: unknown[]

  /**
   * Direccion de la animacion (LTR o RTL)
   * @default "w-full sm:w-1/2 md:w-1/3"
   */
  columnClasses?: string
}
