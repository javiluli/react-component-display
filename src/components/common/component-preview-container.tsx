import { cn } from '@/lib/cn'
import { ReactNode } from 'react'

interface Props {
  children: ReactNode
  className?: string
}

export function ComponentPreviewContainer({ children, className }: Props) {
  return <div className={cn('h-125 relative border rounded-lg p-4 overflow-hidden', className)}>{children}</div>
}
