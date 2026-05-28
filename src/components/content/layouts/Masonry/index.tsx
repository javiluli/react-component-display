import React, { ReactNode, useEffect, useRef } from 'react'

interface Props {
  children: ReactNode
  dependencies: unknown[]
  columnClasses?: string
}

export const Masonry: React.FC<Props> = ({
  children,
  dependencies,
  columnClasses = 'w-full sm:w-1/2 md:w-1/3 px-2',
}) => {
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
  const masonryRef = useRef<any>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const container = containerRef.current

    let imgLoad: any

    async function initMasonry() {
      const MasonryLayout = (await import('masonry-layout')).default
      const imagesLoaded = (await import('imagesloaded')).default

      masonryRef.current = new MasonryLayout(container, {
        itemSelector: options.itemSelector || '.grid-item',
        columnWidth: options.columnWidth || '.grid-sizer',
        percentPosition: options.percentPosition ?? true,
        transitionDuration: options.transitionDuration || '0.3s',
      })

      imgLoad = imagesLoaded(container)

      const handleProgress = () => {
        masonryRef.current?.layout?.()
      }

      imgLoad.on('progress', handleProgress)
    }

    initMasonry()

    return () => {
      imgLoad?.off?.('progress')
      masonryRef.current?.destroy?.()
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies)

  return containerRef
}
