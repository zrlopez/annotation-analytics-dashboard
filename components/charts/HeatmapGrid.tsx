import { cn } from '@/lib/utils';
import type { UtilizationRow } from '@/lib/types';

const DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'] as const;

function intensityClass(value: number): string {
  if (value >= 95) return 'bg-[color-mix(in_oklch,var(--color-primary)_90%,transparent)]';
  if (value >= 90) return 'bg-[color-mix(in_oklch,var(--color-primary)_70%,transparent)]';
  if (value >= 85) return 'bg-[color-mix(in_oklch,var(--color-primary)_55%,transparent)]';
  if (value >= 80) return 'bg-[color-mix(in_oklch,var(--color-primary)_40%,transparent)]';
  if (value >= 75) return 'bg-[color-mix(in_oklch,var(--color-primary)_28%,transparent)]';
  return                  'bg-[color-mix(in_oklch,var(--color-primary)_14%,transparent)]';
}

export function HeatmapGrid({ data }: { data: UtilizationRow[] }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-xs" role="grid" aria-label="Weekly utilization heatmap">
        <thead>
          <tr>
            <th className="py-2 pr-3 text-left text-muted font-medium w-24">Member</th>
            {DAYS.map(d => (
              <th key={d} className="py-2 px-1 text-center text-muted font-medium">{d}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map(row => (
            <tr key={row.member}>
              <td className="py-1.5 pr-3 text-sm text-[var(--color-text)] font-medium">{row.member}</td>
              {DAYS.map(day => {
                const val = row[day.toLowerCase() as 'mon' | 'tue' | 'wed' | 'thu' | 'fri'];
                return (
                  <td key={day} className="py-1.5 px-1">
                    <div
                      className={cn(
                        'flex h-8 w-full min-w-[2.5rem] items-center justify-center rounded text-xs font-semibold tabular',
                        intensityClass(val),
                        val >= 85 ? 'text-[var(--color-text-inverse)]' : 'text-[var(--color-text)]',
                      )}
                      title={`${row.member} ${day}: ${val}%`}
                    >
                      {val}%
                    </div>
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
