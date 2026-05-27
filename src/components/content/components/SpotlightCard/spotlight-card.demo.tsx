'use client'

import { ComponentPreviewContainer } from '@/components/common/component-preview-container'
import { PreviewColorPicker } from '@/components/common/preview/previewColorPicker'
import { SpotlightCard } from '@/components/content/components/SpotlightCard'
import { Box } from '@/components/content/layouts/Box'
import { Flex } from '@/components/content/layouts/Flex'
import { useComponentProps } from '@/hooks/useComponentProps'
import { Heading } from 'fumadocs-ui/components/heading'

const defaultValue = {
  from: '#1cd1c6',
  via: '#407cff',
  to: 'transparent',
}

export function SpotlightCardDemo() {
  const { props, updateProp, resetProps, hasChanges } = useComponentProps(defaultValue)

  const { from, via, to } = props

  return (
    <div className="space-y-6">
      <ComponentPreviewContainer>
        <Flex justifyItems="center" alignItems="center" className="h-full">
          <SpotlightCard from={from} via={via} to={to}>
            <Box className="max-w-sm w-full py-4 px-6">
              <Heading>Lorem Ipsum Product</Heading>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.</p>
            </Box>
          </SpotlightCard>
        </Flex>
      </ComponentPreviewContainer>

      <Heading as="h2">Customize</Heading>

      <div className="p-4 grid grid-cols-3 gap-4 border">
        <PreviewColorPicker label="Color from" color={from} onChange={(e) => updateProp('from', e.target.value)} />
        <PreviewColorPicker label="Color via" color={via} onChange={(e) => updateProp('via', e.target.value)} />
        <PreviewColorPicker label="Color to" color={to} onChange={(e) => updateProp('to', e.target.value)} />
      </div>
    </div>
  )
}
