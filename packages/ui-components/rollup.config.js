import Typescript from "rollup-plugin-typescript2";

const config = {
  input: ["src/index.ts"],
  output: {
    dir: "build",
    format: "esm",
    sourcemap: true,
    preserveModules: true,
  },
  plugins: [Typescript()],
  external: ["react", "@mui/material"],
};

export default config;
