module.exports = {
    entry: "./entry.js",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css/, loader: "style-loader!css-loader" },
            //{ test: /\.jpe?g$|\.png$|\.svg$|\.woff$|\.ttf$/, loader: "file-loader" }
            { test: /\.(jpe?g|png|gif|svg)$/i, loader: ['file?hash=sha512&digest=hex&name=[hash].[ext]','image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false']}
        ]
    }
};