export const DOCS_PROJECTS = {
  components: 'components',
  layouts: 'layouts',
  backgrounds: 'backgrounds',
} as const

export type DocScope = keyof typeof DOCS_PROJECTS
