const { plugins } = require("./webpack.common")

module.exports = {
    plugins: [require("postcss-preset-env")]
}

// these plugins by default look to the root for a config file.