app.directive('ngHover', function($rootScope, StateService) {
  return {
    link: function(scope, element, attrs) {
      element.bind('mouseover', function(event) {

        var obj = {};

        var isHomeRow = (event.target.id === 'home-row') || (event.target.id === 'home-row-copy');
        var isCarsRow = (event.target.id === 'cars-row') || (event.target.id === 'cars-row-copy');
        var isOutsideSidebar = (event.target.parentNode.id === 'landing-view') || (event.target.parentNode.id === 'nav-view');

        if (!isOutsideSidebar) {
          scope.hoverHome = isHomeRow;
          scope.hoverCars = isCarsRow;
          scope.$apply();

          /* only broadcast if the sidebar is toggled */
        } else if (StateService.data['sidebar'].isToggled && StateService.data['sidebar'].isFullyOpen) {
          obj.container = 'sidebar';
          obj.key = 'isToggled';
          $rootScope.$broadcast('toggleSidebar', obj);
          $rootScope.$apply();
        }
      });
    }
  }
  ngHover.$inject('$rootScope, StateService');
});
