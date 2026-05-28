'use client'

import { useEffect, useRef } from 'react'
import { MasonryProps } from './masonry.types'

interface MasonryInstance {
  layout: () => void
  destroy: () => void
  reloadItems: () => void
  on: (event: string, callback: () => void) => void
}

export function Masonry<T>({
  items,
  renderItem,
  columnClasses = 'w-full sm:w-1/2 md:w-1/3 lg:w-1/4',
  gap = '1rem',
  transitionDuration = '0.25s',
  getKey,
}: MasonryProps<T>) {
  const containerRef = useRef<HTMLDivElement>(null)

  const masonryRef = useRef<MasonryInstance | null>(null)

  useEffect(() => {
    if (!containerRef.current) return

    let mounted = true

    async function init() {
      const MasonryModule = await import('masonry-layout')
      const ImagesLoadedModule = await import('imagesloaded')

      if (!mounted || !containerRef.current) return

      const MasonryLayout = MasonryModule.default

      const imagesLoaded = ImagesLoadedModule.default

      if (!masonryRef.current) {
        masonryRef.current = new MasonryLayout(containerRef.current, {
          itemSelector: '.grid-item',
          columnWidth: '.grid-sizer',
          percentPosition: true,
          transitionDuration,
        }) as MasonryInstance

        masonryRef.current.on('layoutComplete', () => {
          if (!containerRef.current) return

          const elements = Array.from(containerRef.current.querySelectorAll('.masonry-item-content'))

          elements.forEach((element, index) => {
            requestAnimationFrame(() => {
              setTimeout(() => {
                element.classList.remove('opacity-0', 'translate-y-6')

                element.classList.add('opacity-100', 'translate-y-0')
              }, index * 60)
            })
          })
        })
      } else {
        masonryRef.current.reloadItems()

        masonryRef.current.layout()
      }

      imagesLoaded(containerRef.current).on('progress', () => {
        masonryRef.current?.layout()
      })
    }

    void init()

    return () => {
      mounted = false
    }
  }, [items, transitionDuration])

  useEffect(() => {
    return () => {
      masonryRef.current?.destroy()

      masonryRef.current = null
    }
  }, [])

  return (
    <div
      ref={containerRef}
      style={{
        margin: `calc(${gap} / -2)`,
      }}
    >
      <div
        className={`grid-sizer ${columnClasses}`}
        style={{
          padding: `calc(${gap} / 2)`,
        }}
      />

      {items.map((item, index) => (
        <div
          key={getKey?.(item, index) ?? index}
          className={`grid-item ${columnClasses}`}
          style={{
            padding: `calc(${gap} / 2)`,
            boxSizing: 'border-box',
            willChange: 'transform',
            backfaceVisibility: 'hidden',
          }}
        >
          <div
            className="
              masonry-item-content
              opacity-0
              translate-y-6
              transition-all
              duration-500
              ease-[cubic-bezier(0.16,1,0.3,1)]
              will-change-transform
              will-change-opacity
            "
          >
            {renderItem(item, index)}
          </div>
        </div>
      ))}
    </div>
  )
}
