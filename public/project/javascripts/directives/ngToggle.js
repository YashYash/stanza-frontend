app.directive('ngToggle', function(StateService) {
  return {
    link: function(scope, element, attrs) {
      element.bind('click', function(event) {
        var isHamburger = (event.target.id === 'ion-burger');
        if (isHamburger) {
          StateService.data['sidebar'].isToggled = !(StateService.data['sidebar'].isToggled);
          scope.$apply();
        }
      });
    }
  }
  ngToggle.$inject('StateService');
});
