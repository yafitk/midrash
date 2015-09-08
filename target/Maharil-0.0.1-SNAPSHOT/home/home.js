'use strict';

angular.module('myApp.home', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {
    templateUrl: 'home/home.html',
    controller: 'HomeCtrl'
  });
 
}])

.controller('HomeCtrl', ['UserService','$scope','$resource','$http',function(UserService,$scope,$resource,$http) {
	
	
		        $('.carousel').carousel({
		  interval: 3500
		})
	  
	

}]);
    