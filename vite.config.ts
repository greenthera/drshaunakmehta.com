import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  // Relative assets work on both the repository Pages URL and a future custom domain.
  base: './',
  plugins: [react()],
})
