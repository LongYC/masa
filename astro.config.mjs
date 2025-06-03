// @ts-check
import { defineConfig, envField } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  base: '/masa',
  env: {
    schema: {
      FAVICON_PATH: envField.string({ context: 'client', access: 'public' })
    }
  }
});
