const path = require('path');

module.exports = {
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
            }
        ]
    }

}