'use client';

import { cn } from '@/lib/utils';
import type { Alert } from '@/lib/types';

const priorityStyles = {
  high:   'border-l-[var(--color-error)]   bg-[var(--color-error-highlight)]',
  medium: 'border-l-[var(--color-warning)] bg-[var(--color-warning-highlight)]',
  low:    'border-l-[var(--color-success)] bg-[var(--color-success-highlight)]',
};

const priorityText = {
  high:   'text-error',
  medium: 'text-warning',
  low:    'text-success',
};

interface AlertItemProps {
  alert:        Alert;
  onAcknowledge?: (id: number) => void;
  onDismiss?:   (id: number) => void;
}

export function AlertItem({ alert, onAcknowledge, onDismiss }: AlertItemProps) {
  return (
    <div
      className={cn(
        'flex items-start gap-3 rounded-md border-l-4 p-3 text-sm',
        priorityStyles[alert.priority],
      )}
    >
      <div className="flex-1 min-w-0">
        <p className="font-medium text-[var(--color-text)]">{alert.message}</p>
        <div className="mt-1 flex items-center gap-3">
          <span className={cn('text-xs font-semibold uppercase', priorityText[alert.priority])}>
            {alert.priority}
          </span>
          <span className="text-xs text-muted">{alert.timestamp}</span>
          {alert.status === 'acknowledged' && (
            <span className="text-xs text-muted italic">acknowledged</span>
          )}
        </div>
      </div>

      <div className="flex shrink-0 gap-2">
        {alert.status === 'active' && onAcknowledge && (
          <button
            onClick={() => onAcknowledge(alert.id)}
            className="rounded px-2 py-1 text-xs font-medium bg-[var(--color-surface-2)] text-[var(--color-text)] hover:bg-[var(--color-surface-dynamic)] transition-colors"
          >
            Ack
          </button>
        )}
        {onDismiss && (
          <button
            onClick={() => onDismiss(alert.id)}
            aria-label="Dismiss alert"
            className="rounded px-2 py-1 text-xs text-muted hover:text-[var(--color-text)] transition-colors"
          >
            ✕
          </button>
        )}
      </div>
    </div>
  );
}
