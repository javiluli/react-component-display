import { InputHTMLAttributes } from 'react'

interface PreviewSliderProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  value: number
  min: number
  max: number
}

export function PreviewSlider({ label, value, min, max, ...porps }: PreviewSliderProps) {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex justify-between items-center">
        <span className="text-md font-semibold">{label}</span>
        <span className="px-2 py-1.5 text-sm font-semibold bg-fd-muted rounded-md">{value}</span>
      </div>
      <input type="range" min={min} max={max} value={value} {...porps} />
    </div>
  )
}
