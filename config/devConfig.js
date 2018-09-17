const path=require('path');
const webpack=require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

const config={
    mode:'development',
    entry:path.resolve(__dirname,'../src/main.js'),
    output:{
        path:path.resolve(__dirname,'../dist'),
        filename:'[name].bundle.js',
        publicPath:'dist/'
    },
    devServer:{
        contentBase:'./',
        hot:true,
        port:6001
    },
    module:{
        rules:[
            // {
            //     test:/\.js$/,
            //     exclude:/(node_modules|bower_components)/,
            //     use:{
            //         loader:'babel-loader',
            //         options:{
            //             presets:['@babel/preset-env']
            //         }
            //     }
            // },
            {
                test:/\.vue$/,
                use:'vue-loader'
            },
            {
                test:/\.css$/,
                use:[
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test:/\.less$/,
                use:[
                    'style-loader',
                    'css-loader',
                    'less-loader'
                ]
            },
            {
                test:/\.(png|svg|jpg|jpeg|gif)$/,
                use:{
                    loader:'file-loader',
                    options:{
                        outputPath:'images/'
                    }
                }
            },
            {
                test:/\.(woff|woff2|eot|ttf|otf)$/,
                use:{
                    loader:'file-loader',
                    options:{
                        outputPath:'fonts/'
                    }
                }
            }
        ]
    },
    plugins:[
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new VueLoaderPlugin(),
        new webpack.ProvidePlugin({
            BScroll:'better-scroll'
        })
    ]
};

module.exports=config;
