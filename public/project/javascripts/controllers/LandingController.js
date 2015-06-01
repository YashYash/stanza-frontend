app.controller('LandingController', [
	'$scope', 
	'$state',
	'$rootScope',
	'$http',
	'socket',
	function(
		$scope,
		$state,
		$rootScope,
		$http,
		socket) {
	'use strict';
	console.log('#### Landing Controller');

	$http.get('/api/scrape/cars/2').success(function(response) {
		console.log(response);
	});

	socket.on("progress", function(data) {
		console.log(data);
	});
}]);