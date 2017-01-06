'use strict';

import angular from 'angular'
import ngRoute from 'angular-route'
import ngAnimate from 'angular-animate'

import styles from './main.less'

let templates = {}
let routers = []
require('./_core/routers.js').default.forEach(router => {
    let templateId = router.template || router.name + '.html'

    if (!templates[templateId])
        templates[templateId] = require(`./templates/${templateId}`)

    routers.push({
        ...router,
        route: {
            templateUrl: templateId,
            controller: router.controller || router.type
        },
    })
})

const app = angular.module('app', [
    // 'ngSanitize'
    'ngRoute',
    'ngAnimate'
])

const services = [
    'app'
]

const controllers = [
    'route-switch',

    'page-home',
    'page-about'
]

const components = [
    'img-figure'
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
components.forEach(component => initModule(
    require(`./components/${component}`))
)

app.controller('root', (
    $scope,
    $rootScope,
    // $route,
    // $routeParams,
    // $location,
    $timeout,
    $app
) => {
    // $scope.$route = $route;
    // $scope.$location = $location;
    // $scope.$routeParams = $routeParams;

    $app.route.init()
    $timeout(() => {
        $app.ready(true)
    }, 1000)
    // $rootScope.ready = true
}).config((
    $routeProvider,
    $locationProvider,
    $animateProvider
) => {
    routers.forEach(router => {
        $routeProvider.when(router.path, router.route)
    })
    $routeProvider.otherwise({
        redirectTo: routers[0].path
    })

    $locationProvider.html5Mode(false)

    $animateProvider.classNameFilter(/angular-animate/)
}).run(function ($templateCache) {
    for (let i in templates) {
        $templateCache.put(i, templates[i]);
    }
});

// replaces ng-app="appName"
angular.element(document).ready(function () {
    angular.bootstrap(document, [app.name], {
        //strictDi: true
    });
});