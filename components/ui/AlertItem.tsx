'use client'

import { StatusBadge } from '@/components/ui/StatusBadge'
import type { Alert } from '@/lib/types'

export function AlertItem({ alert, onAcknowledge }: { alert: Alert; onAcknowledge?: (id: number) => void }) {
  const priorityColor = alert.priority === 'high' ? 'bg-error' : alert.priority === 'medium' ? 'bg-warning' : 'bg-success'

  return (
    <div className="flex items-center gap-3 rounded-lg border border-border bg-surface p-3 shadow-sm">
      <span className={`h-2 w-2 rounded-full ${priorityColor}`} />
      <div className="flex-1">
        <p className="text-sm">{alert.message}</p>
        <p className="text-xs text-muted">{new Date(alert.timestamp).toLocaleString()}</p>
      </div>
      <StatusBadge status={alert.status} />
      {alert.status === 'active' && onAcknowledge ? (
        <button className="rounded-md bg-primary px-3 py-1 text-xs text-white" onClick={() => onAcknowledge(alert.id)}>
          Acknowledge
        </button>
      ) : null}
    </div>
  )
}
