var path = require('path');
var webpack = require('webpack');

//webpack
//npm run start
module.exports = {
    devServer: {
        inline: true,
        contentBase: './src',
        port: 3000
    },
    devtool: 'cheap-module-eval-source-map',
    entry: './dev/js/index.js',
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: ['babel?presets[]=react,presets[]=stage-2,presets[]=es2015'],
                exclude: /node_modules/,
            },
            {
                test: /\.scss/,
                loader: 'style-loader!css-loader!sass-loader'
            },
            { test: /\.jpe?g$|\.gif$|\.png$/i, loader: "file-loader" }
        ]
    },
    output: {
        path: 'src',
        filename: 'js/bundle.min.js'
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin()
    ]
};
