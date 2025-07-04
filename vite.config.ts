import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // Use a different base path in production vs. development
  base: process.env.NODE_ENV === 'production'
    ? '/elifoot98-web/'  // adjust to your GitHub Pages repo name
    : '/',
  plugins: [
    react(),
  ],
  // Optional: configure the dev server for SPA fallback
  server: {
    fs: {
      allow: ['.'],
    },
  },
  // Optional: add path aliases if you ever use '@' imports
  /*
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  */
});
