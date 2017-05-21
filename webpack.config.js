/**
 * Created by Frank on 2017/5/21.
 */
const path = require('path');
const webpack = require('webpack')
//const HtmlWebpackPlugin = required('html')
module.exports = {
    entry:{
        vendor:[
            'angular',
            'angular-ui-router',
            'jquery'
        ],
        //入口
        app:'./index.js'
    },
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules:[
            {
                test: /\.css$/,
                use:[
                    {loader: "css-loader"},
                    {loader: "style-loader",options:{modules:true}}
                ]
            }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name:'vendor'
        })
    ]
};