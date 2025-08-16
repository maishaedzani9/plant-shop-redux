import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// If you deploy to GitHub Pages, set base to '/your-repo-name/'.
// Example: base: '/plant-shop-redux/'
export default defineConfig({
  plugins: [react()],
  // base: '/plant-shop-redux/',
})