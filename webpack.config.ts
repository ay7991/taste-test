const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
    mode: process.env.NODE_ENV,
    entry : path.join(__dirname, "./src/index.tsx"),
    output : {
        path: path.resolve(__dirname, "build"),
        filename: "bundle.js",
        publicPath: '/'
    },
    devServer: {
        static: {
            directory: path.join(__dirname, "./src"),
        },
        historyApiFallback: true,
        proxy: [
            {
              context: ['/api'],
              target: "http://localhost:1025",
            },
        ],
        hot: true,
        compress: true,
        port: 8080,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/static/index.html",
        }),
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: ['ts-loader']
                // can potentially use @babel/preset-typescript to load js and ts
            },
            {
                test: /\.s[ac]ss$/i,
                use: // order of loaders is very important for tailwind implementation 
                [
                    "style-loader",
                    "css-loader",                 
                    {
                        loader: "postcss-loader",
                        options: {
                          postcssOptions: {
                            plugins: [
                              require('tailwindcss'),
                              require('autoprefixer'),
                            ],
                          },
                        },
                    },
                    "sass-loader", 
                ],
            },
        ],
    },
    resolve: {
        extensions: [".js", ".jsx", '.tsx', '.ts'],
    },
}