import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { VitePWA } from 'vite-plugin-pwa';
import path from 'path';

import manifest from './manifest.json';
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
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
