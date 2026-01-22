import './styles.css'

interface PreviewSwitchProps {
  label: string
  checked: boolean
  onChange: (v: boolean) => void
}

export function PreviewSwitch({ label, checked, onChange }: PreviewSwitchProps) {
  return (
    <div className="flex gap-4 text-white/90 items-center">
      <span className="text-sm">{label}</span>
      <input type="checkbox" checked={checked} onChange={(e) => onChange(e.target.checked)} className="switch" />
      <code className="text-sm">{checked ? 'ON' : 'OFF'}</code>
    </div>
  )
}
