import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { join } from 'node:path';
import { viteMockServe } from 'vite-plugin-mock';
import mkcert from 'vite-plugin-mkcert';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: true,
  },
  resolve: {
    alias: {
      '@/': `${join(__dirname, 'src')}/`,
    },
  },
  plugins: [
    react(),
    viteMockServe({
      mockPath: 'mock',
      enable: process.env.NODE_ENV === 'development',
    }),
    mkcert(),
  ],
});
