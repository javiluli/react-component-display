import { cn } from '@/lib/cn'
import { alignMap, directionMap, justifyMap, wrapMap } from './flex.constants'
import { FlexProps } from './flex.types'

export function Flex({ spacing, direction, justifyItems, alignItems, wrap, className, children }: FlexProps) {
  return (
    <div
      className={cn(
        'flex',
        className,
        direction && directionMap[direction],
        justifyItems && justifyMap[justifyItems],
        alignItems && alignMap[alignItems],
        wrap && wrapMap[wrap],
      )}
      style={{
        gap: typeof spacing === 'number' ? `${spacing}px` : spacing,
      }}
    >
      {children}
    </div>
  )
}
