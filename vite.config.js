import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import { compression } from 'vite-plugin-compression2';

export default defineConfig({
  base: '/ashutosh_lohani',
  plugins: [react(), compression()],
  build: {
    sourcemap: false,
    minify: 'terser',
    terserOptions: {
      compress: { drop_console: true, drop_debugger: true }
    },
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'framer': ['framer-motion'],
          'utils': ['clsx', 'tailwind-merge'],
        }
      }
    }
  }
});