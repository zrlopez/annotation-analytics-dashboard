'use client'

import { Line, LineChart, ResponsiveContainer } from 'recharts'

export function SparkLine({ data, color = 'var(--color-primary)', height = 40 }: { data: number[]; color?: string; height?: number }) {
  const points = data.map((value, index) => ({ index, value }))

  return (
    <div style={{ height }}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={points}>
          <Line type="monotone" dataKey="value" stroke={color} strokeWidth={2} dot={false} isAnimationActive={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
