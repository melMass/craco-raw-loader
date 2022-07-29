const { loaderByName, addBeforeLoader } = require("@craco/craco");

console.log("Wesh");
module.exports = {
  overrideWebpackConfig: ({
    webpackConfig,
    cracoConfig,
    pluginOptions,
    context: { env, paths },
  }) => {
    const rawLoader = {
      test: pluginOptions.test,
      use: [
        {
          loader: "raw-loader",
        },
      ],
      type: "javascript/auto",
    };

    addBeforeLoader(webpackConfig, loaderByName("file-loader"), rawLoader);

    return webpackConfig;
  },
};
