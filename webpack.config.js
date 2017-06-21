var path = require('path');

var webpack = require('webpack');

var packageData = require('./package.json');

var filename = [packageData.name, packageData.version, 'js'];

module.exports = {
    entry: path.resolve(__dirname,packageData.main ),
    output: {
        path: path.resolve(__dirname, 'js/build'),
        filename: filename.join('.'),
    },
    devtool: 'source-map',
    module: {
      loaders: [
        { 
           test: /\.jsx?$/,         // Match both .js and .jsx files
           exclude: /node_modules/, 
           loader: "babel-loader", 
           query:
           {
              presets:['react','es2015'],
              plugins: ["transform-es2015-destructuring", "transform-object-rest-spread"]
           }
        }
      ]
    }
}
