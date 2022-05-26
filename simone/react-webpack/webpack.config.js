// webpack.config.js
const path = require('path');
const webpack = require('webpack');

module.exports = {
    plugins: [
        new webpack.NormalModuleReplacementPlugin(
            /^pdfjs-dist$/,
            resource => {
                resource.request = path.join(__dirname, './node_modules/pdfjs-dist/webpack');
            },
        ),
    ],
};