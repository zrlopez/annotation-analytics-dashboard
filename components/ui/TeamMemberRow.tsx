import { cn } from '@/lib/utils';
import type { TeamMember } from '@/lib/types';

const AVATAR_COLORS = [
  'bg-[var(--color-primary-highlight)] text-primary',
  'bg-[var(--color-blue-highlight)]    text-blue',
  'bg-[var(--color-purple-highlight)]  text-purple',
  'bg-[var(--color-success-highlight)] text-success',
  'bg-[var(--color-orange-highlight)]  text-orange',
  'bg-[var(--color-error-highlight)]   text-error',
];

interface TeamMemberRowProps {
  member: TeamMember;
  index:  number;
}

export function TeamMemberRow({ member, index }: TeamMemberRowProps) {
  return (
    <div className="flex items-center gap-4 py-3 border-b border-[var(--color-divider)] last:border-0">
      {/* Avatar */}
      <div
        className={cn(
          'flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-xs font-bold',
          AVATAR_COLORS[index % AVATAR_COLORS.length],
        )}
        aria-hidden
      >
        {member.avatar}
      </div>

      {/* Name + productivity bar */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between mb-1">
          <span className="text-sm font-medium text-[var(--color-text)] truncate">{member.name}</span>
          <span className="tabular text-sm font-semibold text-primary ml-2">{member.productivity}%</span>
        </div>
        <div className="h-1.5 w-full rounded-full bg-[var(--color-surface-dynamic)]">
          <div
            className="h-1.5 rounded-full bg-primary transition-all duration-500"
            style={{ width: `${member.productivity}%` }}
            role="progressbar"
            aria-valuenow={member.productivity}
            aria-valuemin={0}
            aria-valuemax={100}
          />
        </div>
      </div>

      {/* Stats */}
      <div className="hidden sm:flex gap-5 shrink-0 text-right">
        <div>
          <p className="tabular text-sm font-semibold text-[var(--color-text)]">{member.tasksCompleted}</p>
          <p className="text-xs text-muted">tasks</p>
        </div>
        <div>
          <p className="tabular text-sm font-semibold text-[var(--color-text)]">{member.avgTaskTime}h</p>
          <p className="text-xs text-muted">avg</p>
        </div>
      </div>
    </div>
  );
}
