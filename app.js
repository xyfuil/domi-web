angular.module('domiWeb', ['ui.bootstrap','ui.utils','ui.router','ngAnimate']);

angular.module('domiWeb').config(function($stateProvider, $urlRouterProvider) {

    $stateProvider.state('index', {
        url: '/index',
        templateUrl: 'partial/index/index.html'
    });
    /* Add New States Above */
    $urlRouterProvider.otherwise('/home');

});

angular.module('domiWeb').run(function($rootScope) {

    $rootScope.safeApply = function(fn) {
        var phase = $rootScope.$$phase;
        if (phase === '$apply' || phase === '$digest') {
            if (fn && (typeof(fn) === 'function')) {
                fn();
            }
        } else {
            this.$apply(fn);
        }
    };

});
