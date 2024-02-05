import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  build: {
    chunkSizeWarningLimit: 1100, // Adjust the limit as needed (in kB)

     resolve: {
    alias: {
      'jspdf',
    },
  },
})
