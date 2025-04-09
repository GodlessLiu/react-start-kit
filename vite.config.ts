import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { VitePWA } from 'vite-plugin-pwa';
import Pages from 'vite-plugin-pages';
import path from 'path';

import manifest from './manifest.json';

const pageRegx = /\.page$/;
export default defineConfig({
  plugins: [
    react(),
    Pages({
      dirs: [
        {
          dir: 'src/pages',
          baseRoute: '',
          filePattern: '**/*.page.tsx',
        },
      ],
      extendRoute(route) {
        if (pageRegx.test(route.path)) {
          const path = route.path.replace(pageRegx, '');
          route.path = path === 'index' ? '' : path;
          return route;
        }
        return route;
      },
    }),
    VitePWA({
      manifest,
      registerType: 'autoUpdate',
      devOptions: {
        // 如果想在`vite dev`命令下调试PWA, 必须启用它
        enabled: true,
      },
      workbox: { globPatterns: ['**/*.{js,css,html}', '**/*.{svg,png,jpg,gif}'] },
    }),
  ],
  resolve: { alias: { '@': path.resolve(__dirname, './src') } },
});
