const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const webpack = require('webpack')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

const { name } = require('./package.json')

const libFileName = `${name}`

const entryFile = './index.ts'

module.exports = {
  entry: {
    [libFileName]: entryFile,
    [libFileName + '.min']: entryFile
  },

  mode: 'production',

  // https://stackoverflow.com/questions/49111086/webpack-4-universal-library-target/
  // https://github.com/webpack/webpack/issues/6525
  target: 'node',

  context: path.resolve(__dirname, 'src'),

  output: {
    filename: `[name].js`,
    library: {
      root: 'SimpleResourcePool',
      amd: 'simple-resource-pool',
      commonjs: 'simple-resource-pool'
    },
    libraryTarget: 'umd',
    umdNamedDefine: true,
    path: path.resolve(__dirname, 'lib'),
    // https://stackoverflow.com/questions/49111086/webpack-4-universal-library-target/
    // https://github.com/webpack/webpack/issues/6525
    globalObject: 'this'
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        include: [path.resolve(__dirname, 'src')]
      }
    ]
  },

  resolve: {
    extensions: ['.ts']
  },

  // built in minimizer disabled, using Uglify with ".min" rules to only
  // minimize the .min output file
  optimization: {
    minimize: false
  },
  plugins: [
    new CleanWebpackPlugin(['lib']),
    
    new UglifyJsPlugin({
      include: /\.min\.js$/,
      uglifyOptions: {
        ecma: 5,
        keep_classnames: true,
        mangle: {
          keep_classnames: true
        }
      },
      
    }),
  ]
  
}
