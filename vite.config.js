import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    historyApiFallback: true,
  },
  assetsInclude: ['**/*.glb'],
  build: {
    rollupOptions: {
      
      external: ['three-stdlib'],
    },
    chunkSizeWarningLimit: 1000, 
  },
  optimizeDeps: {
    esbuildOptions: {
    
      logOverride: {
        'eval': 'silent', 
      },
    },
  },
});
