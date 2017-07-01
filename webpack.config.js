const path = require('path');

module.exports = {
    entry: './app/index.jsx',
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, 'dist')
    },
    modules: {
        rules:[
            {
                test: /\.jsx$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader'
            }
        ]
    }
};
