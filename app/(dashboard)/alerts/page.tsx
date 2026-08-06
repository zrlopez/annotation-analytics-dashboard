'use client'

import { useState } from 'react'
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { AlertItem } from '@/components/ui/AlertItem'
import { ChartCard } from '@/components/ui/ChartCard'
import { data } from '@/lib/data'
import type { Alert } from '@/lib/types'

export default function AlertsPage() {
  const [alerts, setAlerts] = useState<Alert[]>(data.alertsData.active)

  const onAcknowledge = (id: number) => {
    setAlerts(prev => prev.map(alert => (alert.id === id ? { ...alert, status: 'acknowledged' } : alert)))
  }

  return (
    <div className="space-y-4">
      <ChartCard title="Active Alerts"><div className="space-y-2">{alerts.map(alert => <AlertItem key={alert.id} alert={alert} onAcknowledge={onAcknowledge} />)}</div></ChartCard>
      <ChartCard title="Alert History"><div className="h-72"><ResponsiveContainer width="100%" height="100%"><BarChart data={data.alertsData.history}><CartesianGrid stroke="var(--color-border)" /><XAxis dataKey="date" /><YAxis /><Tooltip /><Bar dataKey="resolved" stackId="a" fill="var(--color-success)" /><Bar dataKey="pending" stackId="a" fill="var(--color-warning)" /></BarChart></ResponsiveContainer></div></ChartCard>
      <ChartCard title="Threshold Configuration"><div className="space-y-3">{data.alertsData.thresholds.map(t => {
        const pct = Math.min(100, (t.current / t.threshold) * 100)
        return (
          <div key={t.metric} className="space-y-1">
            <div className="flex justify-between text-sm"><span>{t.metric}</span><span>{t.current} / {t.threshold}</span></div>
            <div className="h-2 rounded-full bg-border/50"><div className="h-2 rounded-full bg-primary" style={{ width: `${pct}%` }} /></div>
          </div>
        )
      })}</div></ChartCard>
    </div>
  )
}
