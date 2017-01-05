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

const initModule = (module) => {
    if (module.default)
        return module.default(app)
    if (typeof module === 'function')
        return module(app)
}

services.forEach(service => initModule(
    require(`./services/${service}`))
)
controllers.forEach(controller => initModule(
    require(`./controllers/${controller}`))
)

app.controller('root', ($scope, $rootScope, $timeout) => {
    $rootScope.ready = false
    $rootScope.timeStart = new Date()

    $timeout(() => {
        $rootScope.ready = true
    }, 1000)
})

// replaces ng-app="appName"
angular.element(document).ready(function () {
    angular.bootstrap(document, [app.name], {
        //strictDi: true
    });
});