import { InputHTMLAttributes } from 'react'
import './styles.css'

interface PreviewColorPickerProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  color: string
  showColorText?: boolean
}

export function PreviewColorPicker({ label = '', color = '#ffffff', showColorText = false, ...porps }: PreviewColorPickerProps) {
  return (
    <div className="flex items-center gap-4 text-white/90">
      <span className="text-sm">{label}</span>
      <input type="color" value={color} className="color-picker shadow-md" {...porps} />
      {showColorText && <input type="text" value={color} className="text-input" />}
    </div>
  )
}
