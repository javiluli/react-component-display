// utils/extractDocs.ts
/**
 * Extrae el bloque de código entre // @docs:start y // @docs:end
 * Si no encuentra los marcadores, devuelve todo el código limpio (trim)
 */
export function extractDocs(code: string): string {
  const startMarker = '// @docs:start'
  const endMarker = '// @docs:end'

  // Si no existen los marcadores, devuelve todo el código
  if (!code.includes(startMarker) || !code.includes(endMarker)) {
    return code.trim()
  }

  // Extrae solo el bloque entre los marcadores
  const startIndex = code.indexOf(startMarker) + startMarker.length
  const endIndex = code.indexOf(endMarker)
  const block = code.slice(startIndex, endIndex)

  return block.trim()
}
