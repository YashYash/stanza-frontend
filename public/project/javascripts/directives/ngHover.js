app.directive('ngHover', function($rootScope, StateService) {
  return {
    link: function(scope, element, attrs) {
      element.bind('mouseover', function(event) {

        var obj = {};

        var isHomeRow = (event.target.id === 'home-row') || (event.target.id === 'home-row-copy');
        var isCarsRow = (event.target.id === 'cars-row') || (event.target.id === 'cars-row-copy');
        var isLanding = (event.target.parentNode.id === 'landing-body') || (event.target.parentNode.id === 'desktop-nav');

        if (!isLanding) {
          scope.hoverHome = isHomeRow;
          scope.hoverCars = isCarsRow;
          scope.$apply();

          /* only broadcast if the sidebar is toggled */
        } else if (StateService.data['sidebar'].isToggled) {
          obj.container = 'sidebar';
          obj.key = 'isToggled';
          $rootScope.$broadcast('landingBody:toggleSidebar', obj);
          $rootScope.$apply();
        }
      });
    }
  }
  ngHover.$inject('$rootScope, StateService');
});
