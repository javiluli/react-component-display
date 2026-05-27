import { SelectHTMLAttributes } from 'react'

interface PreviewSelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string
  value: string
  data: string[]
}

export function PreviewSelect({ label, value, data, ...props }: PreviewSelectProps) {
  return (
    <div className="flex flex-col gap-3">
      <span className="text-md font-semibold">{label}</span>
      <select
        value={value}
        className="h-10 rounded-md border border-fd-border bg-fd-background px-3 text-sm"
        {...props}
      >
        {data.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  )
}
