app.directive('ngHover', function(StateService) {
  return {
    link: function(scope, element, attrs) {
      element.bind('mouseover', function(event) {

        var onHoverHome = (event.target.id === 'home-row');
        var onHoverCars = (event.target.id === 'cars-row');

        scope.hoverHome = onHoverHome;
        scope.hoverCars = onHoverCars;
        scope.$apply();
      });
    }
  }
  ngHover.$inject('StateService');
});
