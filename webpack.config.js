const webpack = require('webpack');

module.exports = {
    entry: './src/main.js',
    output: {
            path: './bin',
            filename: 'bundle.js',
    },
    module: {
    },
    externals: {
            "google-maps": 'google.maps',
    },
    devtool: 'source-map',
}
