import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";

export default defineConfig({
  plugins: [react(), cssInjectedByJsPlugin()],
  build: {
    emptyOutDir: false,
    lib: {
      entry: "src/main.tsx",
      name: "SlickCarousel",
      fileName: (format) => `slick-carousel.${format}.js`,
    },
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
});
