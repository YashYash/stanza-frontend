app.directive('ngToggle', function($timeout, StateService) {
  return {
    link: function(scope, element, attrs) {
      element.bind('click', function(event) {

        var isHamburger = (event.target.id === 'ion-burger');
        var isNavigateHome = (event.target.id === 'home-row') || (event.target.id === 'home-row-copy');
        var isNavigateCars = (event.target.id === 'cars-row') || (event.target.id === 'cars-row-copy');

        if (isHamburger || isNavigateHome || isNavigateCars) {
          StateService.data['sidebar'].isToggled = !(StateService.data['sidebar'].isToggled);
          scope.$apply();

          /* Handle case for hovering outside of the sidebar before its been fully opened (.5sec CSS3 transition) */
          $timeout(function() {
            StateService.data['sidebar'].isFullyOpen = !(StateService.data['sidebar'].isFullyOpen);
            scope.$apply();
          }, 500);
        }
      });
    }
  }
  ngToggle.$inject('$timeout, StateService');
});
