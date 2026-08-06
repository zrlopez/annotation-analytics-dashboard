import { cn } from '@/lib/utils'

export function StatusBadge({ status }: { status: 'operational' | 'warning' | 'error' | 'ok' | 'acknowledged' | 'active' }) {
  const styles = {
    operational: 'bg-success/15 text-success',
    ok: 'bg-success/15 text-success',
    warning: 'bg-warning/15 text-warning',
    error: 'bg-error/15 text-error',
    active: 'bg-error/15 text-error',
    acknowledged: 'bg-border/30 text-muted'
  }

  return <span className={cn('inline-flex rounded-full px-2 py-1 text-xs font-medium capitalize', styles[status])}>{status}</span>
}
