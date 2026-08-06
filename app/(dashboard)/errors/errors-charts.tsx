'use client'

import { Bar, BarChart, CartesianGrid, Cell, Line, LineChart, Pie, PieChart, ReferenceLine, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { ChartCard } from '@/components/ui/ChartCard'
import { data } from '@/lib/data'

const sevColors: Record<string, string> = {
  Critical: 'var(--color-error)',
  High: 'var(--color-warning)',
  Medium: 'var(--color-primary)',
  Low: 'var(--color-success)'
}

export function ErrorsCharts() {
  const d = data.errorData
  return (
    <div className="grid gap-4 xl:grid-cols-2">
      <ChartCard title="Error Classification"><div className="h-72"><ResponsiveContainer width="100%" height="100%"><PieChart><Pie data={d.classification} dataKey="count" nameKey="type" fill="var(--color-primary)" /></PieChart></ResponsiveContainer></div></ChartCard>
      <ChartCard title="Error Trend"><div className="h-72"><ResponsiveContainer width="100%" height="100%"><LineChart data={d.trends}><CartesianGrid stroke="var(--color-border)" /><XAxis dataKey="date" hide /><YAxis /><Tooltip /><Line dataKey="value" stroke="var(--color-primary)" strokeWidth={2} /></LineChart></ResponsiveContainer></div></ChartCard>
      <ChartCard title="Severity Distribution"><div className="h-72"><ResponsiveContainer width="100%" height="100%"><BarChart data={d.severity}><CartesianGrid stroke="var(--color-border)" /><XAxis dataKey="level" /><YAxis /><Tooltip /><Bar dataKey="count">{d.severity.map(s => <Cell key={s.level} fill={sevColors[s.level] ?? 'var(--color-primary)'} />)}</Bar></BarChart></ResponsiveContainer></div></ChartCard>
      <ChartCard title="Resolution Time by Type"><div className="h-72"><ResponsiveContainer width="100%" height="100%"><BarChart data={d.resolutionTime.byType} layout="vertical"><CartesianGrid stroke="var(--color-border)" /><XAxis type="number" /><YAxis type="category" dataKey="type" width={120} /><Tooltip /><ReferenceLine x={d.resolutionTime.average} stroke="var(--color-success)" strokeDasharray="4 4" /><ReferenceLine x={d.resolutionTime.target} stroke="var(--color-warning)" strokeDasharray="4 4" /><Bar dataKey="time" fill="var(--color-primary)" /></BarChart></ResponsiveContainer></div></ChartCard>
    </div>
  )
}
