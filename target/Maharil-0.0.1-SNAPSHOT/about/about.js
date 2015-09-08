'use strict';

angular.module('myApp.about', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/about', {
		templateUrl: 'about/about.html',
		controller: 'AboutCtrl'
	});  
}])


.controller('AboutCtrl', ['$scope','$resource',function($scope,$resource) {
	 var Stub = $resource('files/:filename', {}, {'getText': {
	        transformResponse: function(data, headersGetter, status) {
	            return {content: data};
	        }
	    }});
	 
	 
	 Stub.getText({'filename': 'about.txt'}, function(response) {
	      $scope.data = response.content;
	        
	    });
}])


.factory('AboutSrv',['$resource', function($resource){
	
	

	  
	}]);	
	



