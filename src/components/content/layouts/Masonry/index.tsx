import imagesLoaded from 'imagesloaded'
import MasonryLayout from 'masonry-layout'
import React, { ReactNode, useEffect, useRef } from 'react'

interface Props {
  children: ReactNode
  dependencies: unknown[]
  columnClasses?: string
}

export const Masonry: React.FC<Props> = ({ children, dependencies, columnClasses = 'w-full sm:w-1/2 md:w-1/3' }) => {
  const containerRef = useMasonry<HTMLDivElement>(dependencies)

  return (
    <div ref={containerRef} className="-mx-2">
      <div className={`grid-sizer ${columnClasses}`} />
      {children}
    </div>
  )
}

interface UseMasonryOptions {
  itemSelector?: string
  columnWidth?: string
  percentPosition?: boolean
  transitionDuration?: string
}

export function useMasonry<T extends HTMLElement>(dependencies: unknown[], options: UseMasonryOptions = {}) {
  const containerRef = useRef<T>(null)
  const masonryRef = useRef<MasonryLayout | null>(null)

  useEffect(() => {
    if (!containerRef.current) return

    // 1. Inicializar Masonry
    masonryRef.current = new MasonryLayout(containerRef.current, {
      itemSelector: options.itemSelector || '.grid-item',
      columnWidth: options.columnWidth || '.grid-sizer',
      percentPosition: options.percentPosition ?? true,
      transitionDuration: options.transitionDuration || '0.3s',
    })

    // 2. Controlar la carga de imágenes para recalcular posiciones
    const imgLoad = imagesLoaded(containerRef.current)

    const handleProgress = () => {
      masonryRef.current?.layout?.()
    }

    imgLoad.on('progress', handleProgress)

    // 3. Limpieza total al desmontar o cambiar dependencias
    return () => {
      imgLoad.off('progress', handleProgress)
      masonryRef.current?.destroy?.()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies)

  return containerRef
}
