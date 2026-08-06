'use client'

import { Area, AreaChart, Bar, BarChart, CartesianGrid, Line, LineChart, ReferenceLine, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { ChartCard } from '@/components/ui/ChartCard'
import { data } from '@/lib/data'

export function ThroughputCharts() {
  const hourly = data.throughputData.hourly
  const daily = data.throughputData.daily
  const byProcess = [...data.throughputData.byProcess].sort((a, b) => b.value - a.value)
  const top3 = [...hourly].sort((a, b) => b.value - a.value).slice(0, 3)

  return (
    <div className="grid gap-4 xl:grid-cols-2">
      <ChartCard title="Hourly Throughput"><div className="h-72"><ResponsiveContainer width="100%" height="100%"><LineChart data={hourly}><CartesianGrid stroke="var(--color-border)" /><XAxis dataKey="time" /><YAxis /><Tooltip /><Line type="monotone" dataKey="value" stroke="var(--color-primary)" strokeWidth={2} /></LineChart></ResponsiveContainer></div></ChartCard>
      <ChartCard title="Daily Throughput"><div className="h-72"><ResponsiveContainer width="100%" height="100%"><BarChart data={daily}><CartesianGrid stroke="var(--color-border)" /><XAxis dataKey="date" hide /><YAxis /><Tooltip /><Bar dataKey="value" fill="var(--color-primary)" /></BarChart></ResponsiveContainer></div></ChartCard>
      <ChartCard title="Throughput by Process"><div className="h-72"><ResponsiveContainer width="100%" height="100%"><BarChart data={byProcess} layout="vertical"><CartesianGrid stroke="var(--color-border)" /><XAxis type="number" /><YAxis dataKey="process" type="category" width={120} /><Tooltip /><Bar dataKey="value" fill="var(--color-primary)" /></BarChart></ResponsiveContainer></div></ChartCard>
      <ChartCard title="Peak Hours Analysis"><div className="h-72"><ResponsiveContainer width="100%" height="100%"><AreaChart data={hourly}><CartesianGrid stroke="var(--color-border)" /><XAxis dataKey="time" /><YAxis /><Tooltip /><Area dataKey="value" stroke="var(--color-primary)" fill="var(--color-primary)" fillOpacity={0.25} />{top3.map(p => <ReferenceLine key={p.time} x={p.time} stroke="var(--color-warning)" strokeDasharray="3 3" />)}</AreaChart></ResponsiveContainer></div></ChartCard>
    </div>
  )
}
