angular.module('domiWeb').controller('DetailCtrl', ['$scope', '$rootScope', '$state', '$stateParams', '$http', '$window', 'util', function($scope, $rootScope, $state, $stateParams, $http, $window, util){
  $scope.items = [];
  $scope.curPage = $stateParams.page;
  $scope.pages = [1];
  $scope.left = 0;
  $scope.right = 0;

  $scope.changeDate = function (stamp) {
    return util.stamp2date(stamp);
  };

  var getReq = {
    method: 'POST',
    url: $scope.host + '/consume',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    data: {
      'start': Date.parse(new Date($rootScope.startTime)),
      'end': Date.parse(new Date($rootScope.endTime)),
      'page': $stateParams.page
    },
    transformRequest: util.transformData
  };

  $scope.getData = function () {
    $http(getReq).success(function(data, status, headers, config) {
      $scope.items = data.data;
      $scope.pages = data.show_page.split(',');
      $scope.left = data.left;
      $scope.right = data.right;
    }).error(function() {
      console.log('err');
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
    var r = $window.confirm('是否删除？');
    if (r === true) {
      delReq.data.id = id;
      $http(delReq).success(function(data, status, headers, config) {
        $scope.getData();
      }).error(function() {
        console.log('err');
      });
    }
  };

  $scope.toPage = function (page) {
    if (page === '<') {
      page = ~~$scope.curPage - 1;
    } else if (page === '>') {
      page = ~~$scope.curPage + 1;
    }
    $state.go('detail', {page: page});
  };

  $scope.getData();
}]);
