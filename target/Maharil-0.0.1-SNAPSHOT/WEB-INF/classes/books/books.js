'use strict';

angular.module('myApp.books', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/books', {
		templateUrl: 'books/books.html',
		controller: 'BooksCtrl'
	});  
}])


.controller('BooksCtrl', ['$scope', 'BookSrv',function($scope, BookSrv) {
	$scope.books = BookSrv.query();
	$scope.price = 'age';
}])

.factory('BookSrv',['$resource', function($resource){
	return $resource('booksDetails/:bookId.json', {}, {
		query: {method:'GET', params:{bookId:'books'}, isArray:true}
	});
}]);


