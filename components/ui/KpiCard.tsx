'use client';

import { cn, formatNumber } from '@/lib/utils';
import { SparkLine } from '@/components/charts/SparkLine';
import type { DailyPoint } from '@/lib/types';

interface KpiCardProps {
  label:      string;
  value:      number | string;
  change:     string;
  unit?:      string;
  sparkData?: DailyPoint[];
  decimals?:  number;
  className?: string;
}

export function KpiCard({ label, value, change, unit, sparkData, decimals = 0, className }: KpiCardProps) {
  const isPositive = change.startsWith('+');
  const isNeutral  = change === '—' || change === '';

  const displayValue =
    typeof value === 'number' ? formatNumber(value, decimals) : value;

  return (
    <div
      className={cn(
        'flex flex-col gap-3 rounded-lg border border-[var(--color-border)] bg-surface p-5 shadow-sm',
        className,
      )}
    >
      <span className="text-xs font-medium uppercase tracking-wide text-muted">
        {label}
      </span>

      <div className="flex items-end justify-between gap-2">
        <div className="flex items-baseline gap-1">
          <span className="tabular text-2xl font-bold text-[var(--color-text)]">
            {displayValue}
          </span>
          {unit && (
            <span className="text-sm text-muted">{unit}</span>
          )}
        </div>

        {!isNeutral && (
          <span
            className={cn(
              'rounded-full px-2 py-0.5 text-xs font-semibold tabular',
              isPositive
                ? 'bg-[var(--color-success-highlight)] text-success'
                : 'bg-[var(--color-error-highlight)] text-error',
            )}
          >
            {change}
          </span>
        )}
      </div>

      {sparkData && sparkData.length > 0 && (
        <SparkLine data={sparkData} positive={isPositive} />
      )}
    </div>
  );
}
