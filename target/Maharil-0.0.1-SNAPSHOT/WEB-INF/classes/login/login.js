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

.controller('LoginCtrl', ['UserService','$scope',function(UserService,$scope) {
	$scope.data = UserService.getUserInfo();
	console.log(data);

}])



.controller('RegisterCtrl', [function() {

}])

.service('UserService', ['$http','$q', function($http, $q) {
    return {
        getUserInfo: function() {
            var deferred = $q.defer();

            $http.get('/user')
                .then(function (response) {
                    if (response.status == 200) {
                        deferred.resolve(response.data);
                    }
                    else {
                        deferred.reject('Error retrieving user info');
                    }
            });

            return deferred.promise;
        }
    }
}]);
    