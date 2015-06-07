app.controller('NavController', [
  '$scope',
  '$rootScope',
  '$state',
  'StateService',
  function(
    $scope,
    $rootScope,
    $state,
    StateService) {

    'use strict';

    console.log('#### Nav Controller');

    var ctrl = this;

    $scope.navigate = function(route) {
      ctrl.toggleSidebar();
      if (route === 'home') {
        $state.go('app.v1.landing');
      }
      else if (route === 'music') {
        $state.go('app.v1.music-desktop');
      }
      else if (route === 'booking') {
        $state.go('app.v1.booking-desktop');
      }
      else if (route === 'cars') {
        console.log('navigate to cars');
      }
      else {
        console.error('route not found');
      }
    };

    $scope.getState = function(container, key) {
      return StateService.data[container][key];
    };

    ctrl.toggleSidebar = function() {
      StateService.data['sidebar'].isToggled = !(StateService.data['sidebar'].isToggled);
    };
  }
]);
