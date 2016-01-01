angular.module('domiWeb').controller('IndexCtrl', ['$scope', '$rootScope', function($scope, $rootScope){
  $scope.search = function () {
    console.log($rootScope.startTime);
    console.log($rootScope.endTime);
  };
}]);
