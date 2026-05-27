import { ReactNode } from 'react'

/**
 * Props para el componente SpotlightCardProps
 */
export interface SpotlightCardProps {
  /**
   * Elementos que aparecen en el compnente.
   * @default <div />
   */
  children?: ReactNode

  /**
   * Starting color stop
   * @default #1cd1c6
   */
  from?: string

  /**
   * Middle color stop
   * @default #407cff
   */
  via?: string

  /**
   * Ending color stop
   * @default transparent
   */
  to?: string
}
