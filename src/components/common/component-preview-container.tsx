import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export function ComponentPreviewContainer({ children }: Props) {
  return <div className="h-125 relative border rounded-lg p-4 overflow-hidden">{children}</div>
}
