'use client'

import type { UtilizationRow } from '@/lib/types'

const headers: Array<keyof Omit<UtilizationRow, 'member'>> = ['mon', 'tue', 'wed', 'thu', 'fri']

function shade(value: number) {
  const pct = Math.max(0, Math.min(100, ((value - 80) / 20) * 100))
  return `color-mix(in oklch, var(--color-primary) ${pct}%, var(--color-surface))`
}

export function HeatmapGrid({ data }: { data: UtilizationRow[] }) {
  return (
    <div className="grid gap-2">
      <div className="grid grid-cols-6 gap-2 text-xs text-muted">
        <div />
        <div className="text-center">Mon</div>
        <div className="text-center">Tue</div>
        <div className="text-center">Wed</div>
        <div className="text-center">Thu</div>
        <div className="text-center">Fri</div>
      </div>
      {data.map(row => (
        <div key={row.member} className="grid grid-cols-6 gap-2 items-center">
          <div className="text-sm font-medium">{row.member}</div>
          {headers.map(day => (
            <div
              key={day}
              className="rounded-md border border-border py-2 text-center text-xs"
              style={{ background: shade(row[day]) }}
            >
              {row[day]}%
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}
