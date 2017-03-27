var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './src/index.jsx',
    output: {
        path: path.join(__dirname, 'public/dist'),
        filename: 'bundle.js',
    },
    module: {
        loaders: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            loader: 'babel',
        }]
    },
    //plugins: [
    //    new webpack.optimize.UglifyJsPlugin({
    //        compress: { warnings: false }
    //    })
    //],
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
};
