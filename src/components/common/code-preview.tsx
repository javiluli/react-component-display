import { DynamicCodeBlock } from 'fumadocs-ui/components/dynamic-codeblock'
import fs from 'node:fs'
import path from 'node:path'

interface CodePreviewProps {
  componentPath: string
  children: React.ReactNode
}

export function CodePreview({ componentPath }: CodePreviewProps) {
  // Leemos el código del archivo físicamente
  const filePath = path.join(process.cwd(), 'src/components/content', componentPath)
  const code = fs.readFileSync(filePath, 'utf-8')

  return <DynamicCodeBlock lang="tsx" code={code} />
}
