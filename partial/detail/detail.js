angular.module('domiWeb').controller('DetailCtrl', ['$scope', '$rootScope', '$stateParams', '$http', 'util', function($scope, $rootScope, $stateParams, $http, util){
  $scope.items = [];
  $scope.curPage = $stateParams.page;
  $scope.pages = [1];

  $scope.changeDate = function (stamp) {
    return util.stamp2date(stamp);
  };

  var getReq = {
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
    $http(getReq).success(function(data, status, headers, config) {
      $scope.items = data.consume;
      return 0;
    }).error(function() {
      return console.log('err');
    });
  };

  var delReq = {
    method: 'POST',
    url: $scope.host + '/consumeDel',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    data: {},
    transformRequest: util.transformData
  };

  $scope.delete = function (id) {
    console.log(id);
    delReq.data.id = id;
    $http(delReq).success(function(data, status, headers, config) {
      $scope.getData();
      return 0;
    }).error(function() {
      return console.log('err');
    });
  };

  $scope.getData();
}]);
