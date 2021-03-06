import babel from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import nodeResolve from "@rollup/plugin-node-resolve";
import strip from "@rollup/plugin-strip";
import del from "rollup-plugin-delete";
const extensions = [".ts", ".tsx", ".js"];

/** @type {import('rollup').RollupOptions} */
const config = {
  input: "src/index.ts",
  external: ["solid-js", "chart.js"],
  treeshake: true,
  output: {
    dir: "dist",
    format: "es",
  },
  plugins: [
    nodeResolve({
      extensions,
    }),
    babel({
      extensions,
      babelHelpers: "bundled",
      presets: ["solid", "@babel/preset-typescript"],
      exclude: /node_modules\//,
    }),
    commonjs({
      extensions,
    }),
    strip({
      include: /\.(js|mjs|ts|tsx|jsx)/,
    }),
    del({ targets: "dist/*" }),
  ],
};
export default config;
