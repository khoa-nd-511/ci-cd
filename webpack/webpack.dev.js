module.exports = {
    mode: "development",
    module: {
        rules: [
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: ["style-loader", "css-loader"],
            },
        ],
    },
    devtool: "cheap-module-source-map",
};
