'use client'

import Link from 'next/link'
import { KpiCard } from '@/components/ui/KpiCard'
import { StatusBadge } from '@/components/ui/StatusBadge'
import { data } from '@/lib/data'
import { useLiveKpis } from '@/hooks/useLiveKpis'

function downloadCsv(kpi: ReturnType<typeof useLiveKpis>['kpis']) {
  const rows = [
    ['metric', 'value'],
    ['totalThroughput', String(kpi.totalThroughput)],
    ['errorRate', String(kpi.errorRate)],
    ['teamEfficiency', String(kpi.teamEfficiency)],
    ['capacityUtilization', String(kpi.capacityUtilization)]
  ]
  const blob = new Blob([rows.map(r => r.join(',')).join('\n')], { type: 'text/csv;charset=utf-8;' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = 'kpi-report.csv'
  a.click()
  URL.revokeObjectURL(url)
}

export function OverviewClient() {
  const { kpis } = useLiveKpis()
  const spark = data.throughputData.hourly.map(p => p.value)

  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <KpiCard title="Total Throughput" value={kpis.totalThroughput.toLocaleString()} change={kpis.throughputChange} sparklineData={spark} />
        <KpiCard title="Error Rate" value={kpis.errorRate} change={kpis.errorRateChange} unit="%" sparklineData={spark} />
        <KpiCard title="Team Efficiency" value={kpis.teamEfficiency} change={kpis.teamEfficiencyChange} unit="%" sparklineData={spark} />
        <KpiCard title="Capacity Utilization" value={kpis.capacityUtilization} change={kpis.capacityUtilizationChange} unit="%" sparklineData={spark} />
      </div>

      <section className="rounded-lg border border-border bg-surface p-4 shadow-sm">
        <h2 className="mb-3 text-lg font-semibold">System Status</h2>
        <div className="space-y-2 text-sm">
          <div className="flex items-center justify-between"><span>Data Processing Pipeline</span><StatusBadge status="operational" /></div>
          <div className="flex items-center justify-between"><span>Error Detection System</span><StatusBadge status="operational" /></div>
          <div className="flex items-center justify-between"><span>Team Monitoring</span><StatusBadge status="operational" /></div>
          <div className="flex items-center justify-between"><span>Capacity Planning</span><StatusBadge status="warning" /></div>
        </div>
      </section>

      <section className="rounded-lg border border-border bg-surface p-4 shadow-sm">
        <h2 className="mb-3 text-lg font-semibold">Quick Actions</h2>
        <div className="flex flex-wrap gap-2">
          <button onClick={() => downloadCsv(kpis)} className="rounded-md bg-primary px-3 py-2 text-sm text-white">Export Report</button>
          <Link href="/alerts" className="rounded-md bg-primary px-3 py-2 text-sm text-white">View All Alerts</Link>
          <Link href="/alerts" className="rounded-md bg-primary px-3 py-2 text-sm text-white">Configure Thresholds</Link>
        </div>
      </section>
    </div>
  )
}
