import styles from './styles.less'

export default (app) => {
    app.controller('test', ($scope, $rootScope) => {
        let time = new Date()

        $scope.elapsed = time.valueOf() - $rootScope.timeStart.valueOf()
    })
}
