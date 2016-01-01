angular.module('domiWeb').service('util', [function() {
  this.transformData = function(data){
    return $.param(data);
  };

  this.stamp2date = function(stamp) {
    return (new Date(stamp)).toLocaleDateString();
  };

	return this;
}]);
