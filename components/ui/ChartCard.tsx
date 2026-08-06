import { cn } from '@/lib/utils';

interface ChartCardProps {
  title:       string;
  subtitle?:   string;
  children:    React.ReactNode;
  action?:     React.ReactNode;
  className?:  string;
  bodyClass?:  string;
}

export function ChartCard({ title, subtitle, children, action, className, bodyClass }: ChartCardProps) {
  return (
    <div
      className={cn(
        'flex flex-col rounded-lg border border-[var(--color-border)] bg-surface shadow-sm overflow-hidden',
        className,
      )}
    >
      <div className="flex items-start justify-between gap-4 border-b border-[var(--color-divider)] px-5 py-4">
        <div>
          <h3 className="font-semibold text-[var(--color-text)]" style={{ fontSize: 'var(--text-sm)' }}>
            {title}
          </h3>
          {subtitle && (
            <p className="mt-0.5 text-xs text-muted">{subtitle}</p>
          )}
        </div>
        {action && <div className="shrink-0">{action}</div>}
      </div>
      <div className={cn('flex-1 p-5', bodyClass)}>
        {children}
      </div>
    </div>
  );
}
