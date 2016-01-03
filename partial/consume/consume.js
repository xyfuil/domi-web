angular.module('domiWeb').controller('ConsumeCtrl', ['$scope', '$state', '$window', '$http', 'util', function($scope, $state, $window, $http, util){
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
    req.data = $scope.form;
    $http(req).success(function(data, status, headers, config) {
      $window.alert('添加成功！');
      $state.go('detail', {page:1});
    }).error(function() {
      console.log('err');
    });
  };
}]);
