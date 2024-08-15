import type { Config } from 'tailwindcss';
import typography from '@tailwindcss/typography';

module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    // tailwindcss typography
    typography,
  ],
} satisfies Config;
