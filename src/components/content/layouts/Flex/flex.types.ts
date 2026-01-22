import { CSSProperties, ReactNode } from 'react'

export type FlexDirection = 'row' | 'row-reverse' | 'column' | 'column-reverse'
export type FlexJustify = 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly'
export type FlexAlign = 'start' | 'center' | 'end' | 'stretch' | 'baseline'
export type FlexWrap = 'nowrap' | 'wrap' | 'wrap-reverse'

/**
 * Props del componente `Flex`.
 *
 * Wrapper de `display: flex` con una API tipada y semántica,
 * basada en las propiedades nativas de Flexbox.
 */
export interface FlexProps {
  /** Contenido del contenedor flex. */
  children: ReactNode

  /**
   * Espacio entre elementos.
   *
   * Recibe un número (px) o string (cualquier unidad CSS).
   * Puede ser útil para diseños responsivos.
   *
   * @defaultValue 0
   */
  spacing?: number | string

  /**
   * Define la dirección del eje principal del contenedor flex.
   *
   * Equivale a la propiedad CSS `flex-direction`.
   */
  direction?: FlexDirection

  /**
   * Alinea los elementos **a lo largo del eje principal**.
   *
   * Equivale a la propiedad CSS `justify-content`.
   */
  justifyItems?: FlexJustify

  /**
   * Alinea los elementos **a lo largo del eje transversal**.
   *
   * Equivale a la propiedad CSS `align-items`.
   */
  alignItems?: FlexAlign

  /**
   * Controla si los elementos pueden saltar a una nueva línea.
   *
   * Equivale a la propiedad CSS `flex-wrap`.
   */
  wrap?: FlexWrap

  /** Clases adicionales */
  className?: string

  /** Estilos inline extra */
  style?: CSSProperties
}
