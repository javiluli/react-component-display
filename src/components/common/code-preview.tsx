import { DynamicCodeBlock } from 'fumadocs-ui/components/dynamic-codeblock'
import fs from 'node:fs'
import path from 'node:path'
import { cache } from 'react'

type File = 'i' | 't' | 'c'

const categories = {
  layouts: ['Box', 'Flex', 'Masonry'],
  backgrounds: ['AnimatedGridBackdrop'],
  components: ['Marquee', 'SpotlightCard'],
} as const

const files: Record<File, string> = {
  i: 'index.tsx',
  t: '.types.ts',
  c: '.constants.ts',
}

interface CodePreviewProps {
  component: string
  file?: File
}

const COMPONENT_CATEGORY = Object.entries(categories).reduce<Record<string, string>>((acc, [category, components]) => {
  components.forEach((component) => {
    acc[component] = category
  })

  return acc
}, {})

const getCode = cache((component: string, file: File) => {
  const category = COMPONENT_CATEGORY[component]

  if (!category) {
    throw new Error(`Category not found for component "${component}"`)
  }

  const basePath = path.join(process.cwd(), 'src/components/content', category, component)

  const fileName = file === 'i' ? files[file] : `${component.toLowerCase()}${files[file]}`

  const filePath = path.join(basePath, fileName)

  return fs.readFileSync(filePath, 'utf-8')
})

export function CodePreview({ component, file = 'i' }: CodePreviewProps) {
  const code = getCode(component, file)

  return <DynamicCodeBlock lang="tsx" code={code} />
}
