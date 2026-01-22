import { ReactNode } from 'react'

interface ComponentPreviewContainer {
  children: ReactNode
}

export function ComponentPreviewContainer({ children }: ComponentPreviewContainer) {
  return <div className="h-125 relative border border-[#e5e7eb] rounded-lg p-5 overflow-hidden">{children}</div>
}
