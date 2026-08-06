import { cn, severityBg } from '@/lib/utils';
import type { Bottleneck } from '@/lib/types';

export function BottleneckItem({ item }: { item: Bottleneck }) {
  return (
    <div className="flex items-center gap-4 py-3 border-b border-[var(--color-divider)] last:border-0">
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between mb-1.5">
          <span className="text-sm font-medium text-[var(--color-text)] truncate">{item.resource}</span>
          <div className="flex items-center gap-2 ml-2">
            <span className="tabular text-sm font-semibold text-[var(--color-text)]">
              {item.utilization}%
            </span>
            <span className={cn('rounded-full px-2 py-0.5 text-xs font-medium', severityBg(item.severity))}>
              {item.severity}
            </span>
          </div>
        </div>
        <div className="h-2 w-full rounded-full bg-[var(--color-surface-dynamic)]">
          <div
            className={cn(
              'h-2 rounded-full transition-all duration-500',
              item.severity === 'high'   ? 'bg-error'   :
              item.severity === 'medium' ? 'bg-warning'  : 'bg-success',
            )}
            style={{ width: `${item.utilization}%` }}
            role="progressbar"
            aria-valuenow={item.utilization}
            aria-valuemin={0}
            aria-valuemax={100}
          />
        </div>
      </div>
    </div>
  );
}
