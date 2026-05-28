'use client'

import { ComponentPreviewContainer } from '@/components/common/component-preview-container'
import { Masonry } from '@/components/content/layouts/Masonry'
import { Flex } from '@/components/content/layouts/Flex'
import { Heading } from 'fumadocs-ui/components/heading'

// const defaultValue: MarqueeProps = {
//   children: null,
//   animationDuration: 60,
//   direction: 'normal',
// }

const INITIAL_IMAGES = [
  'https://picsum.photos/400/500?random=1',
  'https://picsum.photos/400/300?random=2',
  'https://picsum.photos/400/600?random=3',
  'https://picsum.photos/400/400?random=4',
  'https://picsum.photos/400/700?random=5',
  'https://picsum.photos/400/350?random=6',
  'https://picsum.photos/400/450?random=7',
  'https://picsum.photos/400/550?random=8',
  'https://picsum.photos/400/320?random=9',
  'https://picsum.photos/400/620?random=10',
  'https://picsum.photos/400/480?random=11',
  'https://picsum.photos/400/360?random=12',
  'https://picsum.photos/400/520?random=13',
  'https://picsum.photos/400/680?random=14',
  'https://picsum.photos/400/390?random=15',
  'https://picsum.photos/400/580?random=16',
]

export function MasonryDemo() {
  // const { props, updateProp } = useComponentProps(defaultValue)

  // const { animationDuration, direction } = props

  const columnClasses = 'w-full sm:w-1/2 md:w-1/3 px-2'

  return (
    <Flex direction="column">
      <ComponentPreviewContainer className="overflow-y-scroll">
        <Masonry dependencies={INITIAL_IMAGES} columnClasses={columnClasses}>
          {INITIAL_IMAGES.map((url, index) => (
            <div key={`${url}`} className={`grid-item mb-4 ${columnClasses}`}>
              <div className="overflow-hidden rounded-lg shadow-md hover:opacity-90 transition-opacity">
                <img src={url} alt={`Gallery item ${index}`} className="mt-0 mb-0 w-full h-auto block" />
              </div>
            </div>
          ))}
        </Masonry>
      </ComponentPreviewContainer>

      <Heading as="h2">Customize</Heading>
    </Flex>
  )
}
