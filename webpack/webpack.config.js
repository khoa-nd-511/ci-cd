/* eslint-disable @typescript-eslint/no-var-requires */
const commonConfig = require("./webpack.common");
const { merge } = require("webpack-merge");

module.exports = ({ env }) => {
    const config = require(`./webpack.${env}`);
    return merge(commonConfig, config);
};
