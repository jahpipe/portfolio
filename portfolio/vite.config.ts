import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  // Sa local dev: base = '/' 
  // Sa production (deploy sa Vercel/Netlify): base = './'
  base: mode === 'production' ? './' : '/',
  plugins: [
    react(),
    tailwindcss(),
  ],
}))
