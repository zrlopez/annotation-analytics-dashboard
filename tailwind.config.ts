import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class', '[data-theme="dark"]'],
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        bg:              'var(--color-bg)',
        surface:         'var(--color-surface)',
        'surface-2':     'var(--color-surface-2)',
        'surface-off':   'var(--color-surface-offset)',
        border:          'var(--color-border)',
        divider:         'var(--color-divider)',
        text:            'var(--color-text)',
        muted:           'var(--color-text-muted)',
        faint:           'var(--color-text-faint)',
        primary:         'var(--color-primary)',
        'primary-hover': 'var(--color-primary-hover)',
        success:         'var(--color-success)',
        warning:         'var(--color-warning)',
        error:           'var(--color-error)',
        orange:          'var(--color-orange)',
        gold:            'var(--color-gold)',
        blue:            'var(--color-blue)',
      },
      fontFamily: {
        sans:    ['var(--font-body)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        sm:   'var(--radius-sm)',
        md:   'var(--radius-md)',
        lg:   'var(--radius-lg)',
        xl:   'var(--radius-xl)',
        full: 'var(--radius-full)',
      },
      boxShadow: {
        sm: 'var(--shadow-sm)',
        md: 'var(--shadow-md)',
        lg: 'var(--shadow-lg)',
      },
    },
  },
  plugins: [],
};

export default config;
