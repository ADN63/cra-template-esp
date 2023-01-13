const { WebpackManifestPlugin } = require('webpack-manifest-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
// const ProgmemGenerator = require('../client/progmem-generator');
const path = require('path');

module.exports = {
  webpack: function (config, env) {
    if (env === "production") {
      // rename the ouput file, we need it's path to be short, for embedded FS
      config.output.filename = 'js/app.bundle.js';
      // config.output.chunkFilename = 'js/[id].[chunkhash:4].js';
      // take out the manifest plugin
      config.plugins = config.plugins.filter((plugin) => !(plugin instanceof WebpackManifestPlugin));

      // shorten css filenames
      const miniCssExtractPlugin = config.plugins.find((plugin) => plugin instanceof MiniCssExtractPlugin);
      miniCssExtractPlugin.options.filename = "css/app.style.css";
      // miniCssExtractPlugin.options.chunkFilename = "css/[id].[contenthash:4].c.css";

      // don't emit license file
      const terserPlugin = config.optimization.minimizer.find((plugin) => plugin instanceof TerserPlugin);
      terserPlugin.options.extractComments = false;

      // build progmem data files
      // config.plugins.push(new ProgmemGenerator({ outputPath: "../lib/framework/WWWData.h", bytesPerLine: 20 }));
    }
    return config;
  },
  jest: function (config) {
    return config;
  },
  devServer: function(configFunction) {
    return function(proxy, allowedHost) {
      // Create the default config by calling configFunction with the proxy/allowedHost parameters
      const config = configFunction(proxy, allowedHost);
      // Change the dev server's config here...
      // Then return your modified config.
      return config;
    };
  },
  paths: function (paths, env) {

    // const appIndexJs = path.join(__dirname, "src/index.tsx");

    // paths["appIndexJs"] = appIndexJs;
    return paths;
  },
}