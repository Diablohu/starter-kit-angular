"use strict"

const path = require('path')
const defaults = {
    distPath: path.resolve(process.cwd(), 'app/dist/'),
    publicPath: '/app/dist/',
    target: 'web',
    browserList: [],
    plugins: []
}

module.exports = (options = {}) => {
    const srcPath = path.resolve(process.cwd(), 'src')
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
            path: options.distPath || defaults.distPath,
            publicPath: options.publicPath || defaults.publicPath,
            filename: '[name].js',
            chunkFilename: '[id].chunk.js'
        },
        target: options.target || defaults.target,
        module: {
            rules: [
                {
                    test: /\.(ico|gif|png|jpg|jpeg|svg|webp)$/,
                    exclude: /node_modules/,
                    loader: 'file-loader',
                    options: {
                        name: 'files/[hash].[ext]'
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
                                                browsers: options.browserList || defaults.browserList
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
                                    'browsers': options.browserList || defaults.browserList,
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
                                    'browsers': options.browserList || defaults.browserList,
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
        plugins: options.plugins || defaults.plugins
    }
}