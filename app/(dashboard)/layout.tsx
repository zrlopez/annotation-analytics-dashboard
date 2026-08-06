'use client'

import { DashboardNav } from '@/components/DashboardNav'
import { useLiveKpis } from '@/hooks/useLiveKpis'

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const { lastUpdated } = useLiveKpis()

  return (
    <div className="min-h-screen md:flex">
      <DashboardNav lastUpdated={lastUpdated} />
      <main className="flex-1 p-4 md:p-6">{children}</main>
    </div>
  )
}
