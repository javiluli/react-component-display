'use client'

import { ComponentPreviewContainer } from '@/components/common/component-preview-container'
import { PreviewSelect } from '@/components/common/preview/preview-select'
import { PreviewSlider } from '@/components/common/preview/previewSlider'
import { Marquee } from '@/components/content/components/Marquee'
import { Flex } from '@/components/content/layouts/Flex'
import { useComponentProps } from '@/hooks/useComponentProps'
import { Link } from 'fumadocs-core/framework'
import { Heading } from 'fumadocs-ui/components/heading'
import { Direction, MarqueeProps } from './marquee.types'

const defaultValue: MarqueeProps = {
  children: null,
  animationDuration: 60,
  direction: 'normal',
}

const DIRECTION_OPTIONS: Direction[] = ['normal', 'reverse']

export function MarqueeDemo() {
  const { props, updateProp } = useComponentProps(defaultValue)

  const { animationDuration, direction } = props

  return (
    <Flex direction="column">
      <ComponentPreviewContainer>
        <Flex direction="column" justifyItems="center" className="h-full">
          <Marquee animationDuration={animationDuration} direction={direction}>
            {activities.map((i) => (
              <Flex
                key={`${i.id}`}
                spacing={12}
                direction="column"
                justifyItems="center"
                alignItems="center"
                className="px-4 py-2 ring-2 ring-white/20 rounded-xl shrink-0 transition-all hover:ring-white/80 hover:cursor-pointer"
              >
                <span className="text-2xl font-bold">{i.title}</span>
                <div className="w-full h-px bg-white/20" />
                <span className="text-base">{i.description}</span>
              </Flex>
            ))}
          </Marquee>
        </Flex>
      </ComponentPreviewContainer>

      <Heading as="h2" id="customize">
        Customize
        <Link href="#customize" />
      </Heading>

      <div className="p-4 grid grid-cols-3 gap-4 border">
        <PreviewSlider
          label="Animation duration"
          value={animationDuration || 60}
          min={1}
          max={120}
          onChange={(e) => updateProp('animationDuration', Number(e.target.value))}
        />

        <PreviewSelect
          label={'Direction'}
          value={direction as Direction}
          data={DIRECTION_OPTIONS}
          onChange={(e) => updateProp('direction', e.target.value as Direction)}
        />
      </div>
    </Flex>
  )
}

const activities = [
  {
    id: 1,
    title: 'Step',
    description: 'Coordinate and burn calories to the rhythm of the music.',
  },
  {
    id: 2,
    title: 'Zumba',
    description: 'Dance and work out with contagious energy.',
  },
  {
    id: 3,
    title: 'Weights and Cardio',
    description: 'Effectively combine weight training and cardio.',
  },
  {
    id: 4,
    title: 'Yoga',
    description: 'Connect body and mind with balance.',
  },
  {
    id: 5,
    title: 'Pilates',
    description: 'Strengthen your core and improve flexibility.',
  },
  {
    id: 6,
    title: 'Boxing Zone',
    description: 'Train strength and endurance with proper technique.',
  },
]
