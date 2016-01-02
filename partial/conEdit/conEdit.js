angular.module('domiWeb').controller('ConeditCtrl', ['$scope', '$stateParams', '$http', 'util', function($scope, $stateParams, $http, util){
  $scope.form = {'id': $stateParams.id};

  var getReq = {
    method: 'POST',
    url: $scope.host + '/getConsumeById',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    data: {'id': $stateParams.id},
    transformRequest: util.transformData
  };

  $http(getReq).success(function(data, status, headers, config) {
    console.log(data);
    $scope.form = data;
    return 0;
  }).error(function() {
    return console.log('err');
  });

  var req = {
    method: 'POST',
    url: $scope.host + '/consumeUpdate',
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
