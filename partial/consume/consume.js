angular.module('domiWeb').controller('ConsumeCtrl', ['$scope', 'util', function($scope, util){
  $scope.form = {};

  var req = {
    method: 'POST',
    url: $scope.host + '/consumeAdd',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    data: $scope.form,
    transformRequest: util.transformData
  };

  $scope.submit = function () {
    console.log($scope.form);
  };
}]);
