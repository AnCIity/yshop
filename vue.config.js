const path = require("path");

module.exports = {
    pluginOptions: {
        "style-resources-loader": {
            preProcessor: "stylus",
            patterns: [path.resolve(__dirname, "./src/stylus/index.styl")]
        }
    },
    //axios域代理，解决axios跨域问题
    devServer: {
        proxy: {
            "": {
                target: "http://47.106.12.223:8569",
                changeOrigin: true,
                pathRewrite: {}
            }
        }
    }
};
