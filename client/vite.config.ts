import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 4200,
    // Proxy /api/* requests đến API server khi dev
    proxy: {
      "/api": {
        target: "http://localhost:53216",
        changeOrigin: true,
        // Không cần rewrite path vì API đã có /api prefix
      },
    },
  },
});
