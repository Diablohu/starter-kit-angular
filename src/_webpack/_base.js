"use strict"

const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');

const srcPath = path.resolve(process.cwd(), 'src')

const defaults = {
    distPath: path.resolve(process.cwd(), 'app/'),
    publicPath: '',
    target: 'web',
    browserList: [],
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(srcPath, 'index.html'),
            filename: 'index.html',
            inject: false,
            minify: {
                removeComments: true,
                collapseWhitespace: true
            }
        })
    ]
}

module.exports = (options = {}) => {
    let settings = Object.assign({}, defaults, options)
    return {
        entry: {
            critical: [
                path.join(srcPath, 'critical.js')
            ],
            main: [
                path.join(srcPath, 'main.js')
            ]
        },
        output: {
            path: settings.distPath,
            publicPath: settings.publicPath,
            filename: 'js/[name].js',
            chunkFilename: 'js/chunks/[id].js'
        },
        target: settings.target,
        module: {
            rules: [
                {
                    test: /\.(ico|gif|png|jpg|jpeg|svg|webp)$/,
                    exclude: /node_modules/,
                    loader: 'file-loader',
                    options: {
                        name: 'commons/[hash].[ext]'
                    }
                },
                {
                    test: /\.(html)$/,
                    include: [
                        path.resolve(srcPath, "components"),
                        path.resolve(srcPath, "templates")
                    ],
                    loader: 'html-loader',
                    options: {
                    }
                },
                {
                    test: /\.js?$|\.jsx$/,
                    exclude: /node_modules/,
                    use: [
                        {
                            loader: 'ng-annotate-loader'
                        },
                        {
                            loader: 'babel-loader',
                            options: {
                                presets: [
                                    [
                                        'env', {
                                            targets: {
                                                browsers: settings.browserList
                                            },
                                            modules: false
                                        }
                                    ],
                                    'angular'
                                ]
                            }
                        }
                    ]
                },
                {
                    test: /\.css$/,
                    use: [
                        {
                            loader: 'style-loader'
                        },
                        {
                            loader: 'css-loader',
                            options: {
                                camelCase: true,
                                autoprefixer: {
                                    'browsers': settings.browserList,
                                    add: true
                                }
                            }
                        }
                    ]
                },
                {
                    test: /\.less$/,
                    use: [
                        {
                            loader: 'style-loader'
                        },
                        {
                            loader: 'css-loader',
                            options: {
                                camelCase: true,
                                autoprefixer: {
                                    'browsers': settings.browserList,
                                    add: true
                                }
                            }
                        },
                        {
                            loader: 'less-loader'
                        }
                    ]
                }
            ],
            noParse: /\.min\./
        },
        plugins: settings.plugins
    }
}