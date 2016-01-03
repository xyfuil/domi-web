angular.module('domiWeb').controller('IndexCtrl', ['$scope', '$rootScope', '$state', 'util', function($scope, $rootScope, $state, util){
  util.getLeft();
  $scope.search = function () {
    $rootScope.startTime = $scope.startTime;
    $rootScope.endTime = $scope.endTime;
    console.log($rootScope);
    $state.go('detail', {page:1});
  }
}]);
