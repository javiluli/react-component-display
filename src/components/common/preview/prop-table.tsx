import React from 'react'

interface TableProps {
  data: Record<string, React.ReactNode>[]
}

export function PropTable({ data }: TableProps) {
  return (
    <div className="overflow-x-auto rounded-lg border border-white/10 my-6">
      <table className="w-full border-collapse text-sm">
        <thead className="bg-white/5">
          <tr>
            <th className="px-4 py-3 text-left font-medium text-white">Property</th>
            <th className="px-4 py-3 text-left font-medium text-white">Type</th>
            <th className="px-4 py-3 text-left font-medium text-white">Default</th>
            <th className="px-4 py-3 text-left font-medium text-white">Description</th>
          </tr>
        </thead>

        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex} className="border-t border-white/10 transition">
              <td className="px-5 py-6 text-white/80">{row.property}</td>
              <td className="px-5 py-6 text-white">{row.type}</td>
              <td className="px-5 py-6 text-white/80">{row.default}</td>
              <td className="px-5 py-6 text-white">{row.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
