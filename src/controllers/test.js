import styles from './test.less'

export default (app) => {
    app.controller('test', ($scope, $rootScope, $timeout) => {
        let imgs = [
            require('../commons/1.jpg'),
            require('../commons/2.jpg')
        ]
        let imgIndex = 0
        $scope.imgSrc = imgs[imgIndex]
        $scope.imgSwitch = () => {
            if (imgIndex >= imgs.length - 1)
                imgIndex = 0
            else
                imgIndex++
            $scope.imgSrc = imgs[imgIndex]
        }
    })
}
