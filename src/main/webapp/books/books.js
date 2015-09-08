'use strict';

angular.module('myApp.books', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/books', {
		templateUrl: 'books/books.html',
		controller: 'BooksCtrl'
	});  
}])


.controller('BooksCtrl', ['$scope', 'BookSrv','$http',function($scope, BookSrv,$http) {
	$scope.books = BookSrv.query();
	$scope.price = 'age';
	
	
	
	$scope.displayBook = function(pdfUrl){
		$http.get(pdfUrl, {responseType: 'arraybuffer'})
	    .success(function (data) {
	    	
	        var file = new Blob([data], {type: 'application/pdf'});
	        var fileURL = URL.createObjectURL(file);
	        window.open(fileURL);
	 });
		
	}
	
}])

.factory('BookSrv',['$resource', function($resource){
	return $resource('booksDetails/:bookId.json', {}, {
		query: {method:'GET', params:{bookId:'books'}, isArray:true}
	});
}]);


