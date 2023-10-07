import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  middlewares: [
    async (req, res, next) => {
      res.setHeader('Cross-Origin-Opener-Policy', 'same-origin');
      next();
    },
  ],
})
