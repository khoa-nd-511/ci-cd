/* eslint-disable @typescript-eslint/no-var-requires */
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: "production",
    devtool: false,
    performance: {
        maxEntrypointSize: 512000,
        maxAssetSize: 512000,
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "output.css",
        }),
    ],
};
