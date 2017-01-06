import styles from './route-switch.less'

export default (app) => {
    app.controller('route-switch', ($scope, $rootScope, $app) => {
        $scope.routers = require('../_core/routers.js').default
        $scope.cur = $app.route.cur
        $scope.routeChange = (name, $event) => {
            $event.preventDefault()
            $scope.cur = $app.route.change(name)
        }
    })
}
