const path = require('path');

module.exports = {
    mode: "development",

    entry: path.join(__dirname, "main.ts"),

    output: {
        path: path.join(__dirname, "..", "..", "dist"),
        filename: "bundle.js"
    },

    resolve: {
        extensions: [".js", ".ts"]
    },

    module : {
        rules: [
            {
                test: (/\.ts$/),
                use: 'ts-loader'
            },
            {
                test: (/\.html/),
                use: "file-loader?name=[name].html"
            },
            {
                test: (/\.css$/),
                use: ["style-loader", "css-loader"]
            }
        ]
    }

}