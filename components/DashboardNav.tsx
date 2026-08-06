'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { AlertTriangle, Bell, Gauge, LayoutDashboard, TrendingUp, Users } from 'lucide-react'
import { ThemeToggle } from '@/components/ui/ThemeToggle'
import { cn } from '@/lib/utils'

const items = [
  { href: '/overview', label: 'Overview', icon: LayoutDashboard },
  { href: '/throughput', label: 'Throughput', icon: TrendingUp },
  { href: '/errors', label: 'Errors', icon: AlertTriangle },
  { href: '/team', label: 'Team', icon: Users },
  { href: '/capacity', label: 'Capacity', icon: Gauge },
  { href: '/alerts', label: 'Alerts', icon: Bell }
]

export function DashboardNav({ lastUpdated }: { lastUpdated: Date }) {
  const pathname = usePathname()

  return (
    <>
      <aside className="hidden w-60 flex-col border-r border-border bg-surface p-4 md:flex">
        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-xl font-bold">PAT</h1>
          <ThemeToggle />
        </div>
        <div className="mb-4 flex items-center gap-2 text-xs text-muted">
          <span className="h-2 w-2 animate-pulse rounded-full bg-success" />
          <span>Live • {lastUpdated.toLocaleTimeString()}</span>
        </div>
        <nav className="space-y-1">
          {items.map(item => {
            const active = pathname === item.href
            const Icon = item.icon
            return (
              <Link key={item.href} href={item.href} className={cn('flex items-center gap-2 rounded-md px-3 py-2 text-sm', active ? 'bg-primary/15 text-primary' : 'text-muted hover:bg-border/30')}>
                <Icon size={16} />
                {item.label}
              </Link>
            )
          })}
        </nav>
      </aside>
      <div className="border-b border-border bg-surface p-3 md:hidden">
        <div className="mb-2 flex items-center justify-between">
          <h1 className="text-lg font-bold">PAT</h1>
          <ThemeToggle />
        </div>
        <div className="mb-2 flex items-center gap-2 text-xs text-muted">
          <span className="h-2 w-2 animate-pulse rounded-full bg-success" />
          <span>{lastUpdated.toLocaleTimeString()}</span>
        </div>
        <nav className="flex gap-2 overflow-x-auto">
          {items.map(item => {
            const active = pathname === item.href
            const Icon = item.icon
            return (
              <Link key={item.href} href={item.href} className={cn('inline-flex items-center gap-1 rounded-md px-3 py-1 text-sm', active ? 'bg-primary/15 text-primary' : 'text-muted')}>
                <Icon size={14} />
                {item.label}
              </Link>
            )
          })}
        </nav>
      </div>
    </>
  )
}
