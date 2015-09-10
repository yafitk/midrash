'use strict';

angular.module('myApp.login', ['ngRoute','myApp.common'])

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
	
	 

      $scope.login = function (username, password) {
         alert(username);
          $http({
              method: 'POST',
              url: 'authenticate',
              data: 'username=' + username + '&password=' + password,
              headers: {
                  "Content-Type": "application/x-www-form-urlencoded",
                  "X-Login-Ajax-call": 'true'
              }
          })
          .then(function(response) {
              if (response.data == 'ok') {
                  window.location.replace('#/home');
              }
              else {
                  $scope.vm.errorMessages = [];
                  $scope.vm.errorMessages.push({description: 'Access denied'});
              }
          });
      }
	
	  $scope.onLogin = function () {
          console.log('Attempting login with username ' + $scope.vm.username + ' and password ' + $scope.vm.password);

          $scope.vm.submitted = true;
/*
          if ($scope.form.$invalid) {
              return;
          }*/
          alert($scope.vm.userName);

          $scope.login($scope.vm.userName, $scope.vm.password);

      };
	
	
/*	var Regions = $resource('user');

	$scope.regions = Regions.get();
	$scope.regions.$promise.then(function (result) {
	    $scope.regions = result;
	  
	});*/
	

}])



.controller('RegisterCtrl', ['$scope','$resource','UserService',function($scope,$resource,UserService) {
	$scope.register = function(){
			UserService.post();
		 
	};
	

}])

.service('UserService', ['$resource','$q', function($resource, $q) {
	
		    return $resource('user', {}, {
	      post: {method:'GET', params:{id:'user1'}}
	    });

}]);
    