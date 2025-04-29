import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  // --- REMOVED: base property (defaults to '/') ---
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});