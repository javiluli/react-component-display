import { ElementType } from 'react'
import { BoxProps } from './box.types'

export function Box<T extends ElementType = 'div'>({ component, className, children, ...props }: BoxProps<T>) {
  const Component = component ?? 'div'

  return (
    <Component className={className} {...props}>
      {children}
    </Component>
  )
}
