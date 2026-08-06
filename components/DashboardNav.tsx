'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import {
  LayoutDashboard,
  TrendingUp,
  AlertTriangle,
  Users,
  Server,
  Bell,
} from 'lucide-react';

const NAV_ITEMS = [
  { href: '/overview',   label: 'Overview',          icon: LayoutDashboard },
  { href: '/throughput', label: 'Throughput',         icon: TrendingUp },
  { href: '/errors',     label: 'Errors',             icon: AlertTriangle },
  { href: '/team',       label: 'Team Metrics',       icon: Users },
  { href: '/capacity',   label: 'Capacity Planning',  icon: Server },
  { href: '/alerts',     label: 'Alerts',             icon: Bell },
] as const;

export function DashboardNav() {
  const pathname = usePathname();

  return (
    <nav aria-label="Dashboard navigation">
      {/* Desktop sidebar */}
      <ul className="hidden md:flex flex-col gap-0.5" role="list">
        {NAV_ITEMS.map(({ href, label, icon: Icon }) => {
          const active = pathname === href || pathname.startsWith(href + '/');
          return (
            <li key={href}>
              <Link
                href={href}
                className={cn(
                  'flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors',
                  active
                    ? 'bg-[var(--color-primary-highlight)] text-primary'
                    : 'text-muted hover:bg-[var(--color-surface-dynamic)] hover:text-[var(--color-text)]',
                )}
                aria-current={active ? 'page' : undefined}
              >
                <Icon size={16} aria-hidden />
                {label}
              </Link>
            </li>
          );
        })}
      </ul>

      {/* Mobile bottom tab bar */}
      <ul
        className="md:hidden fixed bottom-0 left-0 right-0 z-50 flex items-center justify-around border-t border-[var(--color-divider)] bg-[var(--color-surface)] px-2 pb-safe"
        role="list"
      >
        {NAV_ITEMS.map(({ href, label, icon: Icon }) => {
          const active = pathname === href || pathname.startsWith(href + '/');
          return (
            <li key={href}>
              <Link
                href={href}
                className={cn(
                  'flex flex-col items-center gap-0.5 px-2 py-2 text-[10px] font-medium transition-colors',
                  active ? 'text-primary' : 'text-muted',
                )}
                aria-current={active ? 'page' : undefined}
              >
                <Icon size={20} aria-hidden />
                <span className="hidden xs:block">{label.split(' ')[0]}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
