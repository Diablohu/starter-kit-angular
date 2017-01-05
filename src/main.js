'use strict';

import angular from 'angular'

import styles from './main.less'

const app = angular.module('app', [
    // 'ngSanitize'
])

const services = [
]

const controllers = [
    'test'
]

const getModule = (filePath) => {
    let module = require(filePath)
    if( typeof module === 'function' )
        return module(app)
    if( module.default )
        return module.default(app)
}

app.controller('root', ($scope, $rootScope, $timeout) => {
    $rootScope.ready = false
    $rootScope.timeStart = new Date()

    $timeout(() => {
        $rootScope.ready = true
    }, 1000)
})

services.forEach(service => getModule(`./services/${service}`))
controllers.forEach(controller => getModule(`./controllers/${controller}`))

// replaces ng-app="appName"
angular.element(document).ready(function () {
    angular.bootstrap(document, [app.name], {
        //strictDi: true
    });
});