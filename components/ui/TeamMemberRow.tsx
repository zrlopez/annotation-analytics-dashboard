import type { TeamMember } from '@/lib/types'

export function TeamMemberRow({ member }: { member: TeamMember }) {
  const initials = member.name.split(' ').map(n => n[0]).join('').slice(0, 2)

  return (
    <div className="grid grid-cols-12 items-center gap-2 border-b border-border py-3 text-sm">
      <div className="col-span-4 flex items-center gap-2">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/20 text-xs font-semibold">{initials}</div>
        <span>{member.name}</span>
      </div>
      <div className="col-span-4">
        <div className="h-2 rounded-full bg-border/50">
          <div className="h-2 rounded-full bg-primary" style={{ width: `${member.productivity}%` }} />
        </div>
      </div>
      <div className="col-span-2 text-right">{member.tasksCompleted}</div>
      <div className="col-span-2 text-right">{member.avgTaskTime}h</div>
    </div>
  )
}
