import { InputHTMLAttributes } from 'react'
import './styles.css'

interface PreviewSliderProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  value: number
  min: number
  max: number
}

export function PreviewSlider({ label, value, min, max, ...porps }: PreviewSliderProps) {
  return (
    <div className="flex gap-4 text-white/90">
      <span className="text-sm">{label}</span>
      <input type="range" min={min} max={max} value={value} className="slider" {...porps} />
      <code className="text-sm">{value}</code>
    </div>
  )
}
