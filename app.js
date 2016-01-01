angular.module('domiWeb', ['ui.bootstrap','ui.utils','ui.router','ngAnimate']);

angular.module('domiWeb').config(function($stateProvider, $urlRouterProvider) {

    $stateProvider.state('index', {
        url: '/index',
        templateUrl: 'partial/index/index.html'
    });
    $stateProvider.state('detail', {
        url: '/detail/:page',
        templateUrl: 'partial/detail/detail.html'
    });
    $stateProvider.state('consume', {
        url: '/consume',
        templateUrl: 'partial/consume/consume.html'
    });
    $stateProvider.state('income', {
        url: '/income',
        templateUrl: 'partial/income/income.html'
    });
    /* Add New States Above */
    $urlRouterProvider.otherwise('/index');

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
