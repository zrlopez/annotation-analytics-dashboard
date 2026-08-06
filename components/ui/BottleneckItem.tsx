import { StatusBadge } from '@/components/ui/StatusBadge'
import type { Bottleneck } from '@/lib/types'

export function BottleneckItem({ item }: { item: Bottleneck }) {
  const bar = item.severity === 'high' ? 'bg-error' : item.severity === 'medium' ? 'bg-warning' : 'bg-success'

  return (
    <div className="rounded-lg border border-border bg-surface p-3 shadow-sm">
      <div className="mb-2 flex items-center justify-between">
        <p className="font-medium">{item.resource}</p>
        <div className="flex items-center gap-2">
          <span className="text-sm">{item.utilization}%</span>
          <StatusBadge status={item.severity === 'high' ? 'active' : item.severity === 'medium' ? 'warning' : 'ok'} />
        </div>
      </div>
      <div className="h-2 rounded-full bg-border/50">
        <div className={`h-2 rounded-full ${bar}`} style={{ width: `${item.utilization}%` }} />
      </div>
    </div>
  )
}
