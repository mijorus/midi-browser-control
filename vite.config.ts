import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
const root = './src'

export default defineConfig({
  root,
  plugins: [svelte({
    configFile: '../svelte.config.js',
    // include: [`${root}/options/**/*.svelte`],
    exclude: [`controller/*`],
  })],
  publicDir: '../public',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    lib: {
      entry: [`${root}/background.ts`],
      formats: ['es'],
      name: 'MidiBrowserControl'
    },
    rollupOptions: {
      input: {
        'options/options': `${root}/options/index.html`,
        'background/background': `${root}/background/background.ts`,
        'popup/popup': `${root}/popup/index.html`,
        'controller/controller': `${root}/controller/index.html`,
      },
      output: {
        assetFileNames: () => {
          // For other assets, use the default naming strategy
          return 'assets/[name]-[hash][extname]';
        },
        // chunkFileNames: (asset) => {
        //   console.log(asset);
        //   return ''
        // }
        // entryFileNames: (chunkInfo) => {
        //   if (chunkInfo.name === 'options') {
        //     return 'options/index.js';
        //   }
        //   return '[name]/[name].js';
        // },
      }
    }
  },
})
