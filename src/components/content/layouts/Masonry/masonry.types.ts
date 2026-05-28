import { ReactNode } from 'react'

export interface MasonryProps<T> {
  /**
   * Items rendered inside the masonry layout.
   */
  items: T[]

  /**
   * Render function for each item.
   */
  renderItem: (item: T, index: number) => ReactNode

  /**
   * Classes applied to each masonry column item.
   *
   * @default "w-full sm:w-1/2 md:w-1/3"
   */
  columnClasses?: string

  /**
   * Space between masonry items.
   *
   * Accepts any valid CSS spacing value.
   *
   * @default "1rem"
   */
  gap?: string

  /**
   * Duration of the masonry transition animation.
   *
   * Accepts any valid CSS duration value.
   *
   * @default "0.25s"
   */
  transitionDuration?: string

  /**
   * Custom key extractor for each item.
   *
   * Useful for dynamic lists.
   */
  getKey?: (item: T, index: number) => string | number
}
