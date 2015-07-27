app.controller('LandingController', [
	'$scope',
	'$state',
	'$rootScope',
	'$http',
	'socket',
	'CarService',
	function(
		$scope,
		$state,
		$rootScope,
		$http,
		socket,
		CarService) {
	'use strict';
	console.log('#### Landing Controller');
	console.log(CarService.cars);
	console.log(socket);

	$scope.getCars = function() {
		console.log(CarService.cars)
	};
	$scope.goToCars = function() {
		$state.go('app.v1.cars');
	};


}]);