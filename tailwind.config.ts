import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: 'var(--color-bg)',
        surface: 'var(--color-surface)',
        primary: 'var(--color-primary)',
        text: 'var(--color-text)',
        muted: 'var(--color-text-muted)',
        border: 'var(--color-border)',
        error: 'var(--color-error)',
        warning: 'var(--color-warning)',
        success: 'var(--color-success)'
      },
      borderRadius: {
        lg: 'var(--radius-lg)'
      },
      boxShadow: {
        sm: 'var(--shadow-sm)'
      }
    }
  },
  plugins: []
}

export default config
