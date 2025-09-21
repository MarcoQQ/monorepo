import { defineConfig } from "tsup"

export default defineConfig({
  entry: ["src/index.jsx"],
  format: ["esm"],
  outDir: "lib",
  dts: false,
})
