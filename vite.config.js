import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import Pages from "vite-plugin-pages";
import { visualizer } from "rollup-plugin-visualizer";

// https://vitejs.dev/config/
export default defineConfig({
  // base: "https://bv.univ-poitiers.fr/access/content/user/acalen01/portfolio/",
  plugins: [
    react(),
    Pages({
      dirs: "src/pages",
    }),
    visualizer()
  ],
  resolve: {
    alias: {

      "@": path.resolve(__dirname, "./src"),
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@assetspreuve": path.resolve(__dirname, "./src/assetspreuve"),
      "@styles": path.resolve(__dirname, "./src/styles"),
      "@pages": path.resolve(__dirname, "./src/pages"),
      "@geii": path.resolve(__dirname, "./src/pages/geii"),
      "@perso": path.resolve(__dirname, "./src/pages/perso"),
      "@travail": path.resolve(__dirname, "./src/pages/travail"),
      "@data": path.resolve(__dirname, "./src/data"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@liste": path.resolve(__dirname, "./src/components/page/liste"),
      "@3d": path.resolve(__dirname, "./src/components/3d"),
      "@page": path.resolve(__dirname, "./src/components/page"),
      "@layout": path.resolve(__dirname, "./src/components/layout"),
      "@images": path.resolve(__dirname, "./src/images"),


    },
  },
  build: {
    sourcemap: false,

    rollupOptions: {
      output: {
        dir: "builded/",
        entryFileNames: "plugin.js",

        assetFileNames: (assetInfo) => {
          let extType = assetInfo.name.split(".").at(1);
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
            extType = "img";
          }
          return `[name][extname]`;
        },
        chunkFileNames: "chunk.js",
        manualChunks: {
          vendor: ["react", "react-router-dom", "react-dom"],
        },
      },
    },
    target: ["es2020", "edge88", "firefox78", "chrome87", "safari12"],
  },
});
