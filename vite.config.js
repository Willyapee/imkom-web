import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/imkom-web/',
  plugins: [react()],
  assetsInclude: ['**/*.png', '**/*.PNG', '**/*.jpg', '**/*.JPG'],
});
