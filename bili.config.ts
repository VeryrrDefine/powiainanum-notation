import { Config } from "bili";

const config: Config = {
  input: "src/index.ts",
  extendRollupConfig: (config) => {
    config.outputConfig.exports = "auto";
    return config;
  },
  output: {
    format: ["umd", "umd-min", "esm", "cjs"],
    moduleName: "PowiainaNumNotations",
    sourceMap: false,
    fileName: (context, defaultFileName) => {
      switch (context.format) {
        case "umd":
          return context.minify
            ? "powiainanum-notations.min.js"
            : "powiainanum-notations.js";
        case "esm":
          return "powiainanum-notations.esm.js";
        case "cjs":
          return context.minify
            ? "powiainanum-notations.min.cjs.js"
            : "powiainanum-notations.cjs.js";
        default:
          return defaultFileName;
      }
    },
  },
};

export default config;
