'use client'

import { ComponentPreviewContainer } from '@/components/common/component-preview-container'
import { PreviewSelect } from '@/components/common/preview/preview-select'
import { PreviewSlider } from '@/components/common/preview/previewSlider'
import { Flex } from '@/components/content/layouts/Flex'
import { FlexAlign, FlexDirection, FlexJustify } from '@/components/content/layouts/Flex/flex.types'
import { useComponentProps } from '@/hooks/useComponentProps'
import { Link } from 'fumadocs-core/framework'
import { Heading } from 'fumadocs-ui/components/heading'

interface DefaultValueProps {
  spacing: number
  direction: FlexDirection
  justifyItems: FlexJustify
  alignItems: FlexAlign
}

const defaultValue: DefaultValueProps = {
  spacing: 0,
  direction: 'row',
  justifyItems: 'start',
  alignItems: 'stretch',
}

const DIRECTION_OPTIONS: FlexDirection[] = ['row', 'row-reverse', 'column', 'column-reverse']
const JUSTIFY_OPTIONS: FlexJustify[] = ['start', 'center', 'end', 'between', 'around', 'evenly']
const ALING_OPTIONS: FlexAlign[] = ['start', 'center', 'end', 'stretch', 'baseline']

export function FlexDemo() {
  const { props, updateProp, resetProps, hasChanges } = useComponentProps(defaultValue)

  const { spacing, direction, justifyItems, alignItems } = props

  return (
    <Flex direction="column">
      <ComponentPreviewContainer>
        <Flex
          spacing={spacing}
          direction={direction as FlexDirection}
          justifyItems={justifyItems as FlexJustify}
          alignItems={alignItems as FlexAlign}
          className="h-full"
        >
          <div className="flex justify-center items-center min-w-14 min-h-14 border-2 border-white rounded-lg">
            <span className="text-xl leading-none font-semibold">1</span>
          </div>
          <div className="flex justify-center items-center min-w-20 min-h-20 border-2 border-white rounded-lg">
            <span className="text-xl leading-none font-semibold">2</span>
          </div>
          <div className="flex justify-center items-center min-w-26 min-h-26 border-2 border-white rounded-lg">
            <span className="text-xl leading-none font-semibold">3</span>
          </div>
        </Flex>
      </ComponentPreviewContainer>

      <Heading as="h2" id="customize">
        Customize
        <Link href="#customize" />
      </Heading>

      <div className="p-4 grid grid-cols-3 gap-4 border">
        <PreviewSlider
          label="Spacing of elements"
          value={spacing}
          min={0}
          max={100}
          onChange={(e) => updateProp('spacing', Number(e.target.value))}
        />

        <PreviewSelect
          label={'Direction'}
          value={direction as FlexDirection}
          data={DIRECTION_OPTIONS}
          onChange={(e) => updateProp('direction', e.target.value as FlexDirection)}
        />

        <PreviewSelect
          label={'justifyContent'}
          value={justifyItems as FlexJustify}
          data={JUSTIFY_OPTIONS}
          onChange={(e) => updateProp('justifyItems', e.target.value as FlexJustify)}
        />

        <PreviewSelect
          label={'alignItems'}
          value={alignItems as FlexAlign}
          data={ALING_OPTIONS}
          onChange={(e) => updateProp('alignItems', e.target.value as FlexAlign)}
        />
      </div>
    </Flex>
  )
}
