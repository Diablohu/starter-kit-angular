export default (app) => {
    app.controller('page-about', ($scope, $timeout) => {
        $scope.counter = 0

        const onTimeout = () => {
            $scope.counter++
            $timeout(onTimeout, 1000)
        }
        let timer = $timeout(onTimeout, 1000)

        $scope.$on("$destroy", function () {
            if (timer) {
                $timeout.cancel(timer)
                $scope.counter = 0
            }
        });
    })
}
