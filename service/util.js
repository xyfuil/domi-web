angular.module('domiWeb').service('util', ['$rootScope', '$http', function($rootScope, $http) {
  this.transformData = function(data){
    return $.param(data);
  };

  this.stamp2date = function(stamp) {
    return (new Date(stamp)).toLocaleDateString();
  };

  var leftReq = {
    method: 'POST',
    url: $rootScope.host + '/getRemain',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    data: {},
    transformRequest: this.transformData
  };

  this.getLeft = function () {
    $http(leftReq).success(function(data, status, headers, config) {
      $rootScope.left = data;
    }).error(function() {
      return console.log('err');
    });
  };

	return this;
}]);
