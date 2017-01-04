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

app.controller('root', ($scope, $rootScope, $timeout) => {
    $rootScope.ready = false
    $rootScope.timeStart = new Date()

    $timeout(() => {
        $rootScope.ready = true
    }, 1000)
})

services.forEach(service => {
    require(`./${service}/controller`).default(app)
})

controllers.forEach(controller => {
    require(`./${controller}/controller`).default(app)
})

// replaces ng-app="appName"
angular.element(document).ready(function () {
    angular.bootstrap(document, [app.name], {
        //strictDi: true
    });
});