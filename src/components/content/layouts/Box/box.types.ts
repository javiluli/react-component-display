import { ElementType, ReactNode } from 'react'

/**
 * Props del componente `Box`.
 *
 * Componente polimórfico genérico que actúa como wrapper,
 * permitiendo renderizar cualquier elemento HTML o componente React
 * mediante la prop `component`, manteniendo tipado y autocompletado.
 */
export interface BoxProps<T extends ElementType = 'div'> {
  /** Contenido del contenedor. */
  children?: ReactNode

  /**
   * Elemento o componente React que se renderizará.
   *
   * Por defecto es un `div`, pero puede ser cualquier elemento HTML
   * (`section`, `main`, `a`, etc.) o un componente React.
   *
   * @default 'div'
   */
  component?: T

  /** Clases adicionales */
  className?: string
}
