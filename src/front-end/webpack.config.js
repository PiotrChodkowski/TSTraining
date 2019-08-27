const path = require('path');

module.exports = {
    mode: "development",

    entry: path.join(__dirname, "scripts/main.ts"),

    output: {
        path: path.join(__dirname, "..", "..", "dist"),
        filename: "bundle.js"
    },

    devtool: 'source-map',

    resolve: {
        extensions: [".js", ".ts"]
    },

    module : {
        rules: [
            {
                test: (/\.ts$/),
                use: [
                    {
                        loader: 'ts-loader',
                        options: {
                            transpileOnly: true
                        }
                    }
                ]
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