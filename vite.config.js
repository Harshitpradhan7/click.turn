import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        premium: resolve(__dirname, 'premium-occasion.html'),
        admin: resolve(__dirname, 'admin-create.html'),
        intake: resolve(__dirname, 'intake.html')
      }
    }
  }
})
