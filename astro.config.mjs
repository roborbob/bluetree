import { defineConfig } from 'astro/config';

// https://astro.build/config
import react from "@astrojs/react";

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import mdx from "@astrojs/mdx";

// https://astro.build/config

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind(), mdx()],
  site: 'https://roborbob.github.io',
  base: '/astro-skeleton/',
  vite: {
    build: {
      rollupOptions: {
        output: {
          assetFileNames: 'astro-skeleton/assets/*.[extname]',
        },
      },
    },
  },
});