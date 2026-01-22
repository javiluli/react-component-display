export type Actividad = {
  title: string
  description: string
}

export interface MarqueeProps {
  /**
   * Elementos que aparecen en el compnente.
   * @default []
   */
  activities: Actividad[]

  /**
   * Duración de la animación (en segundos).
   * @default 30
   */
  animationDuration?: number

  /**
   * Ancho de cada cuadrado en píxeles.
   * @default false
   */
  reverse?: boolean
}
