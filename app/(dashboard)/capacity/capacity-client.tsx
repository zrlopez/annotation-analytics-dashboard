'use client'

import { CartesianGrid, ComposedChart, Line, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { BottleneckItem } from '@/components/ui/BottleneckItem'
import { ChartCard } from '@/components/ui/ChartCard'
import { data } from '@/lib/data'

export function CapacityClient() {
  const combined = [
    ...data.capacityData.historical.map(p => ({ ...p, confidence: null })),
    ...data.capacityData.forecast
  ]

  return (
    <div className="space-y-4">
      <ChartCard title="Capacity Forecast"><div className="h-72"><ResponsiveContainer width="100%" height="100%"><ComposedChart data={combined}><CartesianGrid stroke="var(--color-border)" /><XAxis dataKey="date" hide /><YAxis /><Tooltip /><Line dataKey="predicted" stroke="var(--color-primary)" strokeDasharray="5 5" /><Line dataKey="actual" stroke="var(--color-primary)" strokeWidth={3} /></ComposedChart></ResponsiveContainer></div></ChartCard>
      <ChartCard title="Current Bottlenecks"><div className="space-y-2">{data.capacityData.bottlenecks.map(item => <BottleneckItem key={item.resource} item={item} />)}</div></ChartCard>
      <ChartCard title="Recommendations"><div className="grid gap-3 md:grid-cols-2">{data.capacityData.recommendations.map(rec => (
        <div key={`${rec.type}-${rec.resource}`} className="rounded-lg border border-border bg-surface p-3 shadow-sm">
          <p className="text-sm font-semibold">{rec.type} {rec.resource}</p>
          <p className="text-xs text-muted">{rec.impact}</p>
          <span className="mt-2 inline-flex rounded-full bg-primary/15 px-2 py-0.5 text-xs text-primary">{rec.priority}</span>
        </div>
      ))}</div></ChartCard>
    </div>
  )
}
