import { useId, InputHTMLAttributes } from 'react'
import './styles.css'

interface PreviewRadioProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label: string
  value: string
  groupName: string
}

export function PreviewRadio({ label, groupName, value, ...props }: PreviewRadioProps) {
  const id = useId()

  return (
    <div className="flex items-center gap-3 text-white/90">
      <input type="radio" id={id} name={groupName} value={value} className="radio" {...props} />
      <label htmlFor={id} className="text-sm cursor-pointer">
        {label}
      </label>
    </div>
  )
}
