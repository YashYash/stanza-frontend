app.controller('NavController', [
	'$scope',
	'$rootScope',
	'$state',
	'StateService',

	function(
	$rootScope,
	$scope,
	$state,
	StateService) {
		'use strict';
		console.log('#### Nav Controller');

	    $scope.getData = function(state) {
	    	return StateService.data[state];
	    };

	    $scope.toggleNav = function() {
	    	if(StateService.data['NavController'].slideContent) {
	    		StateService.data['NavController'].slideContent = false;
	    	} else {
	    		StateService.data['NavController'].slideContent = true;
	    	}
	    };

	    $scope.goToDesktopRoute = function(state) {
	      $state.go(state);
	    };
	
		// $scope.goToDesktopRoute = function(route) {
		// 	if(route === 'home') {
		// 		$state.go('app.v1.landing');
		// 	}
		// 	if(route === 'music') {
		// 		$state.go('app.v1.music-desktop');
		// 	}
		// 	if(route === 'booking') {
		// 		$state.go('app.v1.booking-desktop');
		// 	}
		// 	$rootScope.$broadcast('hide sidenav');
		// }
  	}
]);


