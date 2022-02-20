const vueJsxPlugin = require("@vitejs/plugin-vue-jsx");
const vuePlugin = require("@vitejs/plugin-vue");
const dotenvPlugin = require("@import-meta-env/vite").default;

/**
 * @type {import('vite').UserConfig}
 */
module.exports = {
  plugins: [
    dotenvPlugin(),
    vueJsxPlugin({
      include: [/\.[jt]sx$/],
    }),
    vuePlugin(),
  ],
  build: {
    minify: false,
    rollupOptions: {
      output: {
        chunkFileNames: "assets/[name].js",
        entryFileNames: "assets/[name].js",
        assetFileNames: "assets/[name][extname]",
      },
    },
  },
};
