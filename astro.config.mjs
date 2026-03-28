// @ts-check
import { defineConfig, envField } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  base: '/masa',

  build: {
    assets: 'assets'
  },

  env: {
    schema: {
      FAVICON_PATH: envField.string({ context: 'client', access: 'public' })
    }
  },

  vite: {
    plugins: [tailwindcss()]
  }
});