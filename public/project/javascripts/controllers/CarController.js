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

	$scope.newcars = [
		{
			title: "nissan GTX",
			year: "2015"
		}
	]

}]);