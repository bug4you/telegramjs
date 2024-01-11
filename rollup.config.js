// import { nodeResolve } from "@rollup/plugin-node-resolve";
// import terser from "@rollup/plugin-terser";
// import babel from "@rollup/plugin-babel";
// import pkg from "./package.json";

const {nodeResolve} = require("@rollup/plugin-node-resolve");
const terser = require("@rollup/plugin-terser");
const {babel} = require("@rollup/plugin-babel");
const pkg = require("./package.json");

const input = ["src/index.js"];
module.exports = [
    {
        // UMD
        input,
        plugins: [
            nodeResolve(),
            babel({
                babelHelpers: "bundled",
            }),
            process.env.NODE_ENV === 'production' && terser(),
        ],
        output: {
            file: `dist/${pkg.name}.min.js`,
            format: "umd",
            name: "TelegramBot", // this is the name of the global object
            esModule: false,
            exports: "named",
            sourcemap: true,
        },
    },
// ESM and CJS
    {
        input,
        plugins: [nodeResolve()],
        output: [
            {
                dir: "dist/esm",
                format: "esm",
                exports: "named",
                sourcemap: true,
            },
            {
                dir: "dist/cjs",
                format: "cjs",
                exports: "named",
                sourcemap: true,
            },
        ],
    },
];

