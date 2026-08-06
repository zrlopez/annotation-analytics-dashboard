'use client'
import { useState, useEffect } from 'react'
import type { KPIs } from '@/lib/types'
import { data } from '@/lib/data'

function jitter(value: number, pct = 0.025): number {
  return Math.round(value * (1 + (Math.random() * 2 - 1) * pct) * 10) / 10
}

export function useLiveKpis(intervalMs = 5000): { kpis: KPIs; lastUpdated: Date } {
  const [kpis, setKpis] = useState<KPIs>(data.kpis)
  const [lastUpdated, setLastUpdated] = useState(new Date())

  useEffect(() => {
    const id = setInterval(() => {
      setKpis(prev => ({
        ...prev,
        totalThroughput: Math.round(jitter(prev.totalThroughput)),
        errorRate: Math.round(jitter(prev.errorRate) * 10) / 10,
        teamEfficiency: Math.round(jitter(prev.teamEfficiency) * 10) / 10,
        capacityUtilization: Math.round(jitter(prev.capacityUtilization) * 10) / 10,
      }))
      setLastUpdated(new Date())
    }, intervalMs)
    return () => clearInterval(id)
  }, [intervalMs])

  return { kpis, lastUpdated }
}
