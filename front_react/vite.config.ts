import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import alias from '@rollup/plugin-alias';
import { resolve } from 'path';

const projectRootDir = resolve(__dirname);

export default defineConfig({
  plugins: [react(), alias()],
  build: {
    outDir: '../build'
  },
  server: {
    proxy: {
      '/api': 'http://localhost:8000'
    }
  },
  resolve: {
    alias: {
      containers: resolve(projectRootDir, 'src/containers'),
      components: resolve(projectRootDir, 'src/components'),
      utils: resolve(projectRootDir, 'src/utils'),
      services: resolve(projectRootDir, 'src/services'),
      routes: resolve(projectRootDir, 'src/routes'),
      common: resolve(projectRootDir, 'src/common'),
      contexts: resolve(projectRootDir, 'src/contexts'),
      src: resolve(projectRootDir, 'src')
    }
  },
  css: {
    preprocessorOptions: {
      sass: {
        // Options Sass ici
      }
    }
  }
});
