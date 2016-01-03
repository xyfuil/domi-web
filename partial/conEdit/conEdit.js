angular.module('domiWeb').controller('ConeditCtrl', ['$scope', '$state', '$stateParams', '$http', '$window', 'util', function($scope, $state, $stateParams, $http, $window, util){
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
    $scope.form = data;
  }).error(function() {
    console.log('err');
  });

  var updateReq = {
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
    updateReq.data = $scope.form;
    $http(updateReq).success(function(data, status, headers, config) {
      $window.alert('更新成功！');
      $state.go('detail', {page:1});
    }).error(function() {
      console.log('err');
    });
  };
}]);
