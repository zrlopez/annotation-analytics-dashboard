'use client'

import { Bar, BarChart, CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { ChartCard } from '@/components/ui/ChartCard'
import { TeamMemberRow } from '@/components/ui/TeamMemberRow'
import { HeatmapGrid } from '@/components/charts'
import { data } from '@/lib/data'

export function TeamCharts() {
  return (
    <div className="space-y-4">
      <ChartCard title="Team Members"><div>{data.teamData.members.map(member => <TeamMemberRow key={member.name} member={member} />)}</div></ChartCard>
      <div className="grid gap-4 xl:grid-cols-2">
        <ChartCard title="Productivity Trend"><div className="h-72"><ResponsiveContainer width="100%" height="100%"><LineChart data={data.teamData.productivity}><CartesianGrid stroke="var(--color-border)" /><XAxis dataKey="date" hide /><YAxis /><Tooltip /><Line dataKey="value" stroke="var(--color-primary)" strokeWidth={2} /></LineChart></ResponsiveContainer></div></ChartCard>
        <ChartCard title="Task Completion"><div className="h-72"><ResponsiveContainer width="100%" height="100%"><BarChart data={data.teamData.members}><CartesianGrid stroke="var(--color-border)" /><XAxis dataKey="name" /><YAxis /><Tooltip /><Bar dataKey="tasksCompleted" fill="var(--color-primary)" /></BarChart></ResponsiveContainer></div></ChartCard>
      </div>
      <ChartCard title="Utilization Heatmap"><HeatmapGrid data={data.teamData.utilization} /></ChartCard>
    </div>
  )
}
