'use client';

import { useState, useEffect, useRef } from 'react';
import type { KpiSnapshot } from '@/lib/types';
import { drift } from '@/lib/utils';
import { initialData } from '@/lib/data';

const BASE = initialData.kpis;

function formatChange(current: number, base: number, suffix = ''): string {
  const delta = ((current - base) / base) * 100;
  const sign = delta >= 0 ? '+' : '';
  return `${sign}${delta.toFixed(1)}%${suffix}`;
}

export function useLiveKpis(intervalMs = 5000): KpiSnapshot {
  const [kpis, setKpis] = useState<KpiSnapshot>(BASE);
  const baseRef = useRef(BASE);

  useEffect(() => {
    const id = setInterval(() => {
      setKpis(prev => {
        const totalThroughput      = Math.round(drift(prev.totalThroughput));
        const errorRate            = Math.round(drift(prev.errorRate) * 10) / 10;
        const teamEfficiency       = Math.round(drift(prev.teamEfficiency) * 10) / 10;
        const capacityUtilization  = Math.round(drift(prev.capacityUtilization) * 10) / 10;

        return {
          totalThroughput,
          throughputChange:          formatChange(totalThroughput,     baseRef.current.totalThroughput),
          errorRate,
          errorRateChange:           formatChange(errorRate,            baseRef.current.errorRate),
          teamEfficiency,
          teamEfficiencyChange:      formatChange(teamEfficiency,       baseRef.current.teamEfficiency),
          capacityUtilization,
          capacityUtilizationChange: formatChange(capacityUtilization,  baseRef.current.capacityUtilization),
        };
      });
    }, intervalMs);

    return () => clearInterval(id);
  }, [intervalMs]);

  return kpis;
}
