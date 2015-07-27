app.controller('SidebarController', [
	'$scope',
	'$rootScope',
	'$state',
	function(
		$rootScope,
		$scope,
		$state) {
	'use strict';
	console.log('#### Sidebar Controller');

    $scope.toggleSidebar = function() {
        $scope.showSidebar = !$scope.showSidebar;
        console.log($scope.showSidebar);
    };

    $scope.goToDesktopRoute = function(route) {
        console.log(route)
        if(route === 'home') {
            $state.go('app.v1.landing');
        }
        if(route === 'music') {
            $state.go('app.v1.music-desktop');
        }
        if(route === 'booking') {
            $state.go('app.v1.booking-desktop');
        }
        if(route === 'cars') {
            $state.go('app.v1.cars');
            console.log('app.v1.cars')
        }
        $rootScope.$broadcast('hide sidenav');
    };

}]);
