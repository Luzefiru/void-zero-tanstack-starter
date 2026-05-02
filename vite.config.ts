import { defineConfig } from "vite-plus";
import { devtools } from "@tanstack/devtools-vite";

import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import { cloudflare } from "@cloudflare/vite-plugin";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import rsc from "@vitejs/plugin-rsc";

const config = defineConfig({
  staged: {
    "*": "vp check --fix",
  },
  fmt: {},
  lint: { options: { typeAware: true, typeCheck: true } },
  resolve: { tsconfigPaths: true },
  plugins: [
    devtools(),
    tailwindcss(),
    cloudflare({
      viteEnvironment: {
        name: "ssr",
        childEnvironments: ["rsc"],
      },
    }),
    tanstackStart({
      rsc: {
        enabled: true,
      },
    }),
    rsc(),
    viteReact(),
  ],
});

export default config;
