export default (app) => {
    app.factory('$app', ($rootScope, $location) => {
        let $app = {
            isReady: false,
            ngViewClass: '',
            ready: (state) => {
                $app.isReady = state
                $rootScope.ready = $app.isReady
            },
            route: {
                cur: '',
                // nameMap: {},
                init: () => {
                    if (!$app.route.nameMap) {
                        $app.route.nameMap = {}
                        require('../_core/routers.js').default.map((router, index) => {
                            $app.route.nameMap[router.name] = {
                                path: router.path,
                                title: router.title
                            }
                            if ($location.$$path == router.path || ((!$location.$$path || $location.$$path == '/') && !index)) {
                                $app.route.cur = router.name
                                $rootScope.ngViewClass = 'page-' + router.name
                            }
                            return router
                        })
                    }
                },
                change: (to) => {
                    $app.route.init()
                    let router = $app.route.nameMap[to]
                    $location.path(router.path)
                    $app.route.cur = to
                    $rootScope.ngViewClass = 'page-' + router.name
                    return $app.route.cur
                }
            }
        }
        return $app
    })
}