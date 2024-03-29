# DEPRECATED
> ⚠️ The status of Craco is uncertain, this still works for older CRA versions.
But starting with v5 you can use [Asset Modules](https://webpack.js.org/guides/asset-modules/)

## Craco Raw Plugin

[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

This is a [craco](https://github.com/sharegate/craco) plugin that makes it easy to use the webpack [raw-loader](https://github.com/webpack-contrib/raw-loader) with [create-react-app](https://facebook.github.io/create-react-app/) version >= 2.

## Installation

```bash
$ yarn add -D craco-raw-loader

# OR

$ npm install craco-raw-loader --save-dev
```

## Basic Usage

`craco-raw-loader` expect a `test` option containing your regex selector.

Here is a simple `craco.config.js` example for `frag` (OpenGL Fragment Shader) files:

```js
const rawLoader = require('craco-raw-loader')

module.exports = {
    plugins: [
     { 
       plugin: rawLoader,
       options: { test: /\.frag$/ }
     }
}
```
