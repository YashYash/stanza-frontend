app.controller('CarController', [
	'$scope',
	'$rootScope',
	'$state',
	'CarService',
	function(
		$rootScope,
		$scope,
		$state,
		CarService) {
	'use strict';
	console.log('#### Car Controller');

	// use that service Mofo
	$scope.cars = CarService.cars
	console.log($scope.cars)

	$scope.goToSellCars = function() {
		$state.go('app.v1.sell');
	};

    $scope.update = function(car) {
    	console.log(car)
    	$scope.cars.push(car)
    	console.log($scope.cars)
	};



}]);