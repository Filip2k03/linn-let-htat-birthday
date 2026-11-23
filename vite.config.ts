import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
export default defineConfig({
  plugins: [react()],
  build: {
    target: 'es2020', sourcemap: false, cssCodeSplit: true,
    rollupOptions: { output: { manualChunks(id) {
      if (id.includes('node_modules/react-dom/') || id.includes('node_modules/react/')) return 'react';
      if (id.includes('node_modules/@react-three/fiber/')) return 'r3f';
      if (id.includes('node_modules/@react-three/drei/')) return 'drei';
      if (id.includes('node_modules/three/')) return 'three';
    } } }
  },
  server: { host: '0.0.0.0' }
});
