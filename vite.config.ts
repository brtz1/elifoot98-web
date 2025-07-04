import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // In prod, serve assets from /elifoot98-web/; locally, from /
  base: process.env.NODE_ENV === 'production'
    ? '/elifoot98-web/'
    : '/',
  plugins: [react()],
});