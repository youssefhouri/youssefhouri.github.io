import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
//https://youssefhouri.github.io/
export default defineConfig({
  base: "/youssefhouri.github.io/",
  plugins: [react()],
})
