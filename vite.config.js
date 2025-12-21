import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  base: '/product_fr_React/',
  plugins: [react()],
  server: {
    port: 3000,
    open: true
  }
})
