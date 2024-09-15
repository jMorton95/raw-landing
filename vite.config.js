import { defineConfig } from 'vite'
import mkcert from 'vite-plugin-mkcert'
import react from '@vitejs/plugin-react'
import path from "path"

export default defineConfig({
  server: {
    https: true
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@public": path.resolve(__dirname, "./public")
    },
  },
  plugins: [react(), mkcert()]
})
