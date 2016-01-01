angular.module('domiWeb').controller('DetailCtrl', ['$scope', '$rootScope', '$stateParams', '$http', 'util', function($scope, $rootScope, $stateParams, $http, util){
  $scope.items = [];

  $scope.changeDate = function (stamp) {
    return util.stamp2date(stamp);
  };

  var req = {
    method: 'POST',
    url: $scope.host + '/info',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    data: {
      'startTime': $rootScope.startTime,
      'endTime': $rootScope.endTime,
      'page': $stateParams.page
    },
    transformRequest: util.transformData
  };

  $scope.getData = function () {
    $http(req).success(function(data, status, headers, config) {
      console.log(data);
      $scope.items = data.consume;
      return 0;
    }).error(function() {
      return console.log('err');
    });
  };

  $scope.delete = function (id) {
    console.log(id);
  };

  $scope.getData();
}]);
