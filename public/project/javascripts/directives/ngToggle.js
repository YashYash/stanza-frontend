app.directive('ngToggle', function(StateService) {
  return {
    link: function(scope, element, attrs) {
      element.bind('click', function(event) {

        var isHamburger = (event.target.id === 'ion-burger');
        var isNavigateHome = (event.target.id === 'home-row') || (event.target.id === 'home-row-copy');
        var isNavigateCars = (event.target.id === 'cars-row') || (event.target.id === 'cars-row-copy');

        if (isHamburger || isNavigateHome || isNavigateCars) {
          StateService.data['sidebar'].isToggled = !(StateService.data['sidebar'].isToggled);
          scope.$apply();
        }
      });
    }
  }
  ngToggle.$inject('StateService');
});
