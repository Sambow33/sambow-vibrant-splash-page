
import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  base: '/',
  build: {
    outDir: 'dist',
  },
  server: {
    port: 8080
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src')
    }
  }
});
