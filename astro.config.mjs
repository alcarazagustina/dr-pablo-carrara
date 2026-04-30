// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: 'https://dr-pablo-carrara.vercel.app',
  integrations: [react()],
});
