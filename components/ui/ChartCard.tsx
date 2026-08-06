import { cn } from '@/lib/utils'

export function ChartCard({ title, subtitle, children, className }: { title: string; subtitle?: string; children: React.ReactNode; className?: string }) {
  return (
    <section className={cn('rounded-lg border border-border bg-surface p-4 shadow-sm', className)}>
      <h2 className="text-lg font-semibold">{title}</h2>
      {subtitle ? <p className="text-sm text-muted">{subtitle}</p> : null}
      <div className="mt-4">{children}</div>
    </section>
  )
}
