const {loaderByName, addBeforeLoader} = require('@craco/craco')

module.exports = {
  overrideWebpackConfig:
      ({webpackConfig, cracoConfig, pluginOptions, context: {env, paths}}) => {
        const rawLoader = {test: pluginOptions.test, use: ['raw-loader']}

        addBeforeLoader(webpackConfig, loaderByName('file-loader'), rawLoader)

        return webpackConfig
      }
}