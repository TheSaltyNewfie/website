// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
},

  output: "server",

  security: {
    allowedDomains: [
      {
        hostname: 'thesaltynewfie.ca',
        protocol: 'https'
      }
    ],
  },

  adapter: node({
    mode: "standalone",
  }),
  server: {
    host: true,
    port: 4321
  }
});
