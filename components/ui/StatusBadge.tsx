import { cn } from '@/lib/utils';

type Status = 'operational' | 'warning' | 'error' | 'ok';

const styles: Record<Status, string> = {
  operational: 'bg-[var(--color-success-highlight)] text-success',
  ok:          'bg-[var(--color-success-highlight)] text-success',
  warning:     'bg-[var(--color-warning-highlight)] text-warning',
  error:       'bg-[var(--color-error-highlight)]   text-error',
};

export function StatusBadge({ status, label }: { status: Status; label?: string }) {
  const display = label ?? status.charAt(0).toUpperCase() + status.slice(1);
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-medium',
        styles[status],
      )}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-current" aria-hidden />
      {display}
    </span>
  );
}
