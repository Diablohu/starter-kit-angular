"use strict"

const browserList = [
    'Chrome >= 20',
    'Edge >= 12',
    'Firefox >= 20',
    'ie >= 11',
    'iOS >= 5',
    'Android >= 2',
    'ChromeAndroid >= 20',
    'ExplorerMobile >= 11'
]

let config = require('./_base.js')({
    browserList: browserList
})

module.exports = config