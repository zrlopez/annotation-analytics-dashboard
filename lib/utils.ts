import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/** Tailwind class merge utility */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Generates N ISO date strings ending today and going back N-1 days. */
export function buildDateSeries(n: number): string[] {
  return Array.from({ length: n }, (_, i) => {
    const d = new Date();
    d.setDate(d.getDate() - (n - 1 - i));
    return d.toISOString().slice(0, 10);
  });
}

/** Generates N ISO date strings starting tomorrow. */
export function buildFutureDateSeries(n: number): string[] {
  return Array.from({ length: n }, (_, i) => {
    const d = new Date();
    d.setDate(d.getDate() + i + 1);
    return d.toISOString().slice(0, 10);
  });
}

/** Format a number with commas and optional decimal places. */
export function formatNumber(value: number, decimals = 0): string {
  return new Intl.NumberFormat('en-US', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(value);
}

/** Clamp a value between min and max. */
export function clamp(value: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, value));
}

/** Apply ±variance% random drift to a number. */
export function drift(value: number, variancePct = 2.5): number {
  const delta = value * (variancePct / 100) * (Math.random() * 2 - 1);
  return Math.round((value + delta) * 10) / 10;
}

/** Map a bottleneck/priority level to a Tailwind color class. */
export function severityColor(level: 'high' | 'medium' | 'low'): string {
  return { high: 'text-error', medium: 'text-warning', low: 'text-success' }[level];
}

export function severityBg(level: 'high' | 'medium' | 'low'): string {
  return {
    high:   'bg-[var(--color-error-highlight)]   text-error',
    medium: 'bg-[var(--color-warning-highlight)] text-warning',
    low:    'bg-[var(--color-success-highlight)] text-success',
  }[level];
}
