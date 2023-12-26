import { defineConfig } from "vite";
import preact from "@preact/preset-vite";

export default defineConfig({
  plugins: [preact()],
  build: {
    lib: {
      entry: "src/main.tsx",
      name: "SlickCarousel",
      fileName: "slick-carousel",
    },
    rollupOptions: {
      external: ["preact"],
      output: {
        globals: {
          preact: "Preact",
        },
      },
    },
  },
  resolve: {
    alias: {
      react: "preact/compat",
      "react-dom/test-utils": "preact/test-utils",
      "react-dom": "preact/compat",
      "react/jsx-runtime": "preact/jsx-runtime",
    },
  },
});
