app.controller('LandingController', [
	'$scope',
	'$state',
	'$rootScope',
	'$http',
	'socket',
	'CarService',
	'ClassService',
	function(
		$scope,
		$state,
		$rootScope,
		$http,
		socket,
		CarService,
		ClassService) {
	'use strict';
	console.log('#### Landing Controller');
	console.log(CarService.cars);
	console.log(socket);


	$scope.getCars = function() {
		console.log(CarService.cars);
	};
	$scope.goToCars = function() {
		ClassService.viewCars = !ClassService.viewCars;
		$state.go('app.v1.cars');
		console.log(ClassService.viewCars);
	};

}]);