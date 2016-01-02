angular.module('domiWeb').controller('IndexCtrl', ['$scope', '$rootScope', 'util', function($scope, $rootScope, util){
  $scope.search = function () {
    console.log($rootScope.startTime);
    console.log($rootScope.endTime);
  };

  util.getLeft();
}]);
