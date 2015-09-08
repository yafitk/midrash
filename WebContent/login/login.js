'use strict';

angular.module('myApp.login', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/login', {
    templateUrl: 'login/login.html',
    controller: 'LoginCtrl'
  });
  $routeProvider.when('/register', {
	    templateUrl: 'login/register.html',
	    controller: 'RegisterCtrl'
	  })
}])

.controller('LoginCtrl', ['UserService','$scope','$resource','$http',function(UserService,$scope,$resource,$http) {
	
	
	
	
	
	
	var Regions = $resource('user');

	$scope.regions = Regions.get();
	$scope.regions.$promise.then(function (result) {
	    $scope.regions = result;
	  
	});
	

}])



.controller('RegisterCtrl', ['$scope','$resource','UserService',function($scope,$resource,UserService) {
	$scope.register = function(){
			UserService.post();
		 
	};
	

}])

.service('UserService', ['$resource','$q', function($resource, $q) {
	
		    return $resource('user', {}, {
	      post: {method:'PUT', params:{id:'user1'}}
	    });

}]);
    