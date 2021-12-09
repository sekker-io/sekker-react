import resolve from "rollup-plugin-node-resolve";
import babel from "rollup-plugin-babel";
import del from "rollup-plugin-delete";
import pkg from "./package.json";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";

export default [
  {
    input: "src/index.ts",
    output: [
      { file: pkg.main, format: "cjs" },
      { file: pkg.module, format: "esm" },
    ],
    plugins: [
      del({ targets: ["dist/*"] }),
      peerDepsExternal(),
      babel({ exclude: "node_modules/**" }),
      resolve(),
      commonjs(),
      typescript(),
    ],
    external: Object.keys(pkg.peerDependencies || {}),
  },
];
