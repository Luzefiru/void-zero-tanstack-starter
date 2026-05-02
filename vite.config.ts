import { defineConfig } from "vite-plus";

import { devtools } from "@tanstack/devtools-vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { voidPlugin } from "void";

const isTest = process.env.VITEST === "true";

export default defineConfig({
  staged: {
    "*": "vp check --fix",
  },

  fmt: {},

  lint: {
    options: {
      typeAware: true,
      typeCheck: true,
    },
  },

  resolve: {
    tsconfigPaths: true,
  },

  plugins: [
    devtools(),
    tailwindcss(),
    ...(!isTest ? [voidPlugin()] : []),
    tanstackStart(),
    viteReact(),
  ],
});
