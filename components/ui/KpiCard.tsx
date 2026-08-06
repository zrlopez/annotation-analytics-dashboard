import { SparkLine } from '@/components/charts'

export function KpiCard({
  title,
  value,
  change,
  unit,
  sparklineData
}: {
  title: string
  value: string | number
  change: string
  unit?: string
  sparklineData?: number[]
}) {
  const trendClass = change.startsWith('+') ? 'bg-success/15 text-success' : 'bg-error/15 text-error'

  return (
    <div className="rounded-lg border border-border bg-surface p-4 shadow-sm">
      <p className="text-sm text-muted">{title}</p>
      <div className="mt-1 flex items-end gap-2">
        <p className="text-2xl font-semibold">{value}{unit}</p>
        <span className={`rounded-full px-2 py-0.5 text-xs ${trendClass}`}>{change}</span>
      </div>
      {sparklineData ? <div className="mt-3"><SparkLine data={sparklineData} /></div> : null}
    </div>
  )
}
