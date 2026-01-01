import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  base: '/product_fr/',
  build: {
    outDir: 'docs'
  },
  plugins: [react()],
  server: {
    port: 3000,
    open: true
  }
})
