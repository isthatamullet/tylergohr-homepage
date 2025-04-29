import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Define repository name for GitHub Pages subdirectory
const repoName = 'tylergohr-homepage';

// https://vitejs.dev/config/
export default defineConfig({
  // --- ADDED: Set the base path for deployment ---
  base: `/${repoName}/`,
  // ---------------------------------------------
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});