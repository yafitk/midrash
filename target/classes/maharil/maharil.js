'use strict';

angular.module('myApp.maharil', ['ngRoute','angularBootstrapNavTree'])

.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/maharil', {
		templateUrl: 'maharil/maharil.html',
		controller: 'MaharilCtrl'
	});  
}])


.controller('MaharilCtrl', ['$scope', '$timeout', function($scope, $timeout) {
	var apple_selected, tree, treedata_avm, treedata_geography;


	$scope.my_tree_handler = function(branch) {
		var _ref;
		$scope.output = "You selected: " + branch.label;
		if ((_ref = branch.data) != null ? _ref.description : void 0) {
			return $scope.output += '(' + branch.data.description + ')';
		}
	};


	apple_selected = function(branch) {
		return $scope.output = "APPLE! : " + branch.label;
	};


	treedata_avm = [
	                {
	                	label: 'ש"ס',
	                	data:{
	                		isFolder:true
	                	},
	                	children: [
	                	           {
	                	        	   label: 'זרעים',
	                	        	   data: {
	                	        		   isFolder:true	  
	                	        	   },
	                	        	   children:[
	                	        	             {label: 'דף 1',
	                	        	            	 data: {
	                	        	            		 file:true	  
	                	        	            	 }


	                	        	             }
	                	        	             ]
	                	           },{
	                	        	   label:"נשים",
	                	        	   data: {
	                	        		   isFolder:true	  
	                	        	   },
	                	        	   children:[
	                	        	             {label: 'דף 1',
	                	        	            	 data: {
	                	        	            		 file:true	  
	                	        	            	 }


	                	        	             }
	                	        	             ], data: {
	                	        	            	 isFolder:true	  
	                	        	             },
	                	        	             children:[
	                	        	                       {label: 'דף 1',
	                	        	                    	   data: {
	                	        	                    		   file:true	  
	                	        	                    	   }


	                	        	                       }
	                	        	                       ]

	                	           }



	                	           , {
	                	        	   label: 'Cat',
	                	        	   data: {
	                	        		   description: "Felis catus"
	                	        	   }
	                	           }, {
	                	        	   label: 'Hippopotamus',
	                	        	   data: {
	                	        		   description: "hungry, hungry"
	                	        	   }
	                	           }, {
	                	        	   label: 'Chicken',
	                	        	   children: ['White Leghorn', 'Rhode Island Red', 'Jersey Giant']
	                	           }
	                	           ]
	                }, {
	                	label: 'Vegetable',
	                	data: {
	                		definition: "A plant or part of a plant used as food, typically as accompaniment to meat or fish, such as a cabbage, potato, carrot, or bean.",
	                		data_can_contain_anything: true
	                	},
	                	onSelect: function(branch) {
	                		return $scope.output = "Vegetable: " + branch.data.definition;
	                	},
	                	children: [
	                	           {
	                	        	   label: 'Oranges'
	                	           }, {
	                	        	   label: 'Apples',
	                	        	   children: [
	                	        	              {
	                	        	            	  label: 'Granny Smith',
	                	        	            	  onSelect: apple_selected
	                	        	              }, {
	                	        	            	  label: 'Red Delicous',
	                	        	            	  onSelect: apple_selected
	                	        	              }, {
	                	        	            	  label: 'Fuji',
	                	        	            	  onSelect: apple_selected
	                	        	              }
	                	        	              ]
	                	           }
	                	           ]
	                }, {
	                	label: 'Mineral',
	                	children: [
	                	           {
	                	        	   label: 'Rock',
	                	        	   children: ['Igneous', 'Sedimentary', 'Metamorphic']
	                	           }, {
	                	        	   label: 'Metal',
	                	        	   children: ['Aluminum', 'Steel', 'Copper']
	                	           }, {
	                	        	   label: 'Plastic',
	                	        	   children: [
	                	        	              {
	                	        	            	  label: 'Thermoplastic',
	                	        	            	  children: ['polyethylene', 'polypropylene', 'polystyrene', ' polyvinyl chloride']
	                	        	              }, {
	                	        	            	  label: 'Thermosetting Polymer',
	                	        	            	  children: ['polyester', 'polyurethane', 'vulcanized rubber', 'bakelite', 'urea-formaldehyde']
	                	        	              }
	                	        	              ]
	                	           }
	                	           ]
	                }
	                ];



	$scope.my_data = treedata_avm;


	$scope.my_tree = tree = {};

	$scope.try_async_load = function() {
		$scope.my_data = [];
		$scope.doing_async = true;
		return $timeout(function() {
			if (Math.random() < 0.5) {
				$scope.my_data = treedata_avm;
			} else {
				$scope.my_data = treedata_geography;
			}
			$scope.doing_async = false;
			return tree.expand_all();
		}, 1000);
	};


}]);




