import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from "@originjs/vite-plugin-federation";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "components",
      filename: "remoteEntry.js",
      exposes: {
        "./UserList": "./src/js/view/components/UserList",
        "./UserListEvents": "./src/js/view/components/UserList",
        "./UserForm": "./src/js/view/components/UserForm",
        "./UserFormEvents": "./src/js/view/components/UserForm",
        "./UserRole": "./src/js/view/components/UserRole",
        "./UserRoleEvents": "./src/js/view/components/UserRole",
      },
      shared: ["react", "react-dom"],
    })
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
})
