const path = require( 'path' );
const HtmlWebpackPlugin = require( 'html-webpack-plugin' );
const CleanWebpackPlugin = require( 'clean-webpack-plugin' );
const webpack = require( 'webpack' );

module.exports = {
    entry: {
        app: './src/index.ts',
    },
    mode: "production",
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
        hot: true
    },
    plugins: [
        new CleanWebpackPlugin( [ 'dist' ] ),
        new HtmlWebpackPlugin( {
            title: 'Super Mario',
            template: "./src/index.html"
        } ),
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [ 'file-loader' ]
            },
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: [ '.ts', '.js' ]
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve( __dirname, 'dist' ),
        publicPath: '/'
    }
};
