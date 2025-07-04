import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/elifoot98-web/' : '/',
  plugins: [react()],

  // Resolve imports using '@' alias for 'src'
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },

  // Folder for static assets
  publicDir: 'public',

  // Build options
  build: {
    outDir: 'dist',        // Output directory
    emptyOutDir: true,     // Clean before build
    rollupOptions: {
      // Externalize dependencies not meant to be bundled
      external: [],
    },
  },

  // Development server
  server: {
    port: 3000,
    open: true,
  },

  // Preview server for 'vite preview'
  preview: {
    port: 8080,
  },
});