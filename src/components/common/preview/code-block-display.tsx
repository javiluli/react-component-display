'use client'

import { DynamicCodeBlock } from 'fumadocs-ui/components/dynamic-codeblock'

function inferLanguageFromExt(ext?: string): string {
  if (!ext) return 'tsx'
  const map: Record<string, string> = {
    ts: 'tsx',
    tsx: 'tsx',
    js: 'jsx',
    jsx: 'jsx',
    css: 'css',
    md: 'md',
    mdx: 'md',
  }
  return (ext && map[ext.toLowerCase()]) ?? 'text'
}

export interface CodeDisplayProps {
  file: { code: string; ext: string }
}

// Componente principal
export function CodeBlockDisplay(props: CodeDisplayProps) {
  const { file } = props
  const language = inferLanguageFromExt(file.ext)

  return <DynamicCodeBlock lang={language} code={file.code} />
}
