import { ReactNode } from 'react'

/**
 * Props para el componente SpotlightCardProps
 */
export interface SpotlightCardProps {
  /** Contenido del contenedor flex. */
  children?: ReactNode

  colorGlow?: 'glowBlwe' | 'glowPurple' | 'glowTeal'
}
