import type { ReactNode } from 'react'
import { Tabs as FumadocsTabs } from 'fumadocs-ui/components/tabs'

interface Props {
  children: ReactNode
}

export function Tabs({ children }: Props) {
  return <FumadocsTabs items={['Preview', 'Code']}>{children}</FumadocsTabs>
}
