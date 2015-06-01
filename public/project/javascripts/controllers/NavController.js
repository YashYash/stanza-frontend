app.controller('NavController', [
	'$scope',
	'$rootScope',
	'$state',
	function(
		$rootScope,
		$scope,
		$state) {
	'use strict';
	console.log('#### Nav Controller');
	$scope.goToDesktopRoute = function(route) {
		if(route === 'home') {
			$state.go('app.v1.landing');
		}
		if(route === 'music') {
			$state.go('app.v1.music-desktop');
		}
		if(route === 'booking') {
			$state.go('app.v1.booking-desktop');
		}
		$rootScope.$broadcast('hide sidenav');
	}
}]);
