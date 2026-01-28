'use client'

import { ComponentPreviewContainer } from '@/components/common/component-preview-container'
import { Box } from '@/components/content/layouts/Box'
import { Flex } from '@/components/content/layouts/Flex'

export function BoxDemo() {
  return (
    <Flex direction="column">
      <ComponentPreviewContainer>
        <Flex justifyItems="center" alignItems="center" className="h-full">
          <Box className=" w-44 h-44 bg-blue-600 mx-auto hover:bg-blue-300 transition-all" />
        </Flex>
      </ComponentPreviewContainer>
    </Flex>
  )
}
