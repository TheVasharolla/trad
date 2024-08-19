// vite.config.js
import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "file:///home/krisley/Documents/projects/trad/node_modules/vite/dist/node/index.js";
import vue from "file:///home/krisley/Documents/projects/trad/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import vueDevTools from "file:///home/krisley/Documents/projects/trad/node_modules/vite-plugin-vue-devtools/dist/vite.mjs";
var __vite_injected_original_import_meta_url = "file:///home/krisley/Documents/projects/trad/vite.config.js";
var vite_config_default = defineConfig({
  plugins: [
    vue(),
    vueDevTools()
  ],
  css: {
    loaderOptions: {
      postcss: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {}
        }
      }
    }
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", __vite_injected_original_import_meta_url))
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS9rcmlzbGV5L0RvY3VtZW50cy9wcm9qZWN0cy90cmFkXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvaG9tZS9rcmlzbGV5L0RvY3VtZW50cy9wcm9qZWN0cy90cmFkL3ZpdGUuY29uZmlnLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9ob21lL2tyaXNsZXkvRG9jdW1lbnRzL3Byb2plY3RzL3RyYWQvdml0ZS5jb25maWcuanNcIjtpbXBvcnQgeyBmaWxlVVJMVG9QYXRoLCBVUkwgfSBmcm9tICdub2RlOnVybCdcblxuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcbmltcG9ydCB2dWUgZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlJ1xuaW1wb3J0IHZ1ZURldlRvb2xzIGZyb20gJ3ZpdGUtcGx1Z2luLXZ1ZS1kZXZ0b29scydcblxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHBsdWdpbnM6IFtcbiAgICB2dWUoKSxcbiAgICB2dWVEZXZUb29scygpLFxuICBdLFxuICBjc3M6IHtcbiAgICBsb2FkZXJPcHRpb25zOiB7XG4gICAgICBwb3N0Y3NzOiB7XG4gICAgICAgIHBsdWdpbnM6IHtcbiAgICAgICAgICB0YWlsd2luZGNzczoge30sXG4gICAgICAgICAgYXV0b3ByZWZpeGVyOiB7fSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbiAgcmVzb2x2ZToge1xuICAgIGFsaWFzOiB7XG4gICAgICAnQCc6IGZpbGVVUkxUb1BhdGgobmV3IFVSTCgnLi9zcmMnLCBpbXBvcnQubWV0YS51cmwpKVxuICAgIH1cbiAgfVxufSlcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBaVMsU0FBUyxlQUFlLFdBQVc7QUFFcFUsU0FBUyxvQkFBb0I7QUFDN0IsT0FBTyxTQUFTO0FBQ2hCLE9BQU8saUJBQWlCO0FBSjBKLElBQU0sMkNBQTJDO0FBT25PLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVM7QUFBQSxJQUNQLElBQUk7QUFBQSxJQUNKLFlBQVk7QUFBQSxFQUNkO0FBQUEsRUFDQSxLQUFLO0FBQUEsSUFDSCxlQUFlO0FBQUEsTUFDYixTQUFTO0FBQUEsUUFDUCxTQUFTO0FBQUEsVUFDUCxhQUFhLENBQUM7QUFBQSxVQUNkLGNBQWMsQ0FBQztBQUFBLFFBQ2pCO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUEsTUFDTCxLQUFLLGNBQWMsSUFBSSxJQUFJLFNBQVMsd0NBQWUsQ0FBQztBQUFBLElBQ3REO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
