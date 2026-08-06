'use client';

import { LineChart, Line, ResponsiveContainer } from 'recharts';
import type { DailyPoint } from '@/lib/types';

export function SparkLine({ data, positive = true }: { data: DailyPoint[]; positive?: boolean }) {
  const color = positive ? 'var(--color-success)' : 'var(--color-error)';
  return (
    <ResponsiveContainer width="100%" height={36}>
      <LineChart data={data} margin={{ top: 2, right: 2, bottom: 2, left: 2 }}>
        <Line
          type="monotone"
          dataKey="value"
          stroke={color}
          strokeWidth={1.5}
          dot={false}
          isAnimationActive={false}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
