import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import { compression } from 'vite-plugin-compression2';

// https://vitejs.dev/config/
export default defineConfig({
   base: '/ashutosh_lohani',
   plugins: [react(), compression()],
});
