import path from "node:path";
import { defineConfig } from "vite";
import { qwikVite } from "@builder.io/qwik/optimizer";

export default defineConfig(() => {
  return {
    root: __dirname,
    resolve: {
      alias: {
        "qwik-lib-starter": path.resolve("./src/index.ts"),
      },
    },
    plugins: [qwikVite()],
  };
});
