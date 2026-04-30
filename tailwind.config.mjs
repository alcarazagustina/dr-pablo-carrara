/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#004e99',
          container: '#0a66c2',
          foreground: '#ffffff',
        },
        secondary: {
          DEFAULT: '#2f5ea1',
          foreground: '#ffffff',
        },
        background: '#faf9f6',
        surface: {
          DEFAULT: '#faf9f6',
          container: {
            lowest: '#ffffff',
            low: '#f4f3f0',
            DEFAULT: '#efeeeb',
            high: '#e9e8e5',
            highest: '#e3e2df',
          },
        },
        foreground: '#1b1c1a',
        'on-background': '#1b1c1a',
        'on-surface': '#1b1c1a',
        'on-surface-variant': '#414752',
        outline: {
          DEFAULT: '#727783',
          variant: '#c1c6d4',
        },
        muted: {
          DEFAULT: '#f4f3f0',
          foreground: '#414752',
        },
        accent: {
          DEFAULT: '#f4f3f0',
          foreground: '#1b1c1a',
        },
        destructive: {
          DEFAULT: '#ba1a1a',
          foreground: '#ffffff',
        },
        border: '#c1c6d4',
        input: '#c1c6d4',
        ring: '#004e99',
      },
      borderRadius: {
        lg: '0.5rem',
        md: '0.375rem',
        sm: '0.25rem',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
