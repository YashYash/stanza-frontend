var app = angular.module('app', ['ionic', 'ngStorage', 'ngSanitize', 'ngLoad']);
'use strict';

console.log('#### APP JS LOADED: app');
app.run(['$rootScope','$http','CarService','ClassService', function($rootScope, $http, CarService, ClassService) {

}]);

app.config(['$stateProvider','$urlRouterProvider',function($stateProvider, $urlRouterProvider) {
  console.log('#### State provider working');
  $urlRouterProvider.otherwise('/');
  $stateProvider

	.state('app', {
		url: '/',
		views: {
			'global': {
				templateUrl: '/project/views/global.html',
				controller: 'GlobalController'
			}
		}
	})
	.state('app.v1', {
    url: 'tab',
        abstract: true,
        views: {
        'global@': {
          templateUrl: '/project/views/v1/v1.html',
          controller: 'RootController'
        },
        'nav@app.v1': {
          templateUrl: '/project/views/v1/nav.html',
          controller: 'NavController'
        },
        'sidebar@app.v1': {
            templateUrl: '/project/views/v1/sidebar.html',
            controller: 'SidebarController'
        },
        'content@app.v1': {
          templateUrl: '/project/views/v1/content.html',
          controller: 'ContentController'
        }
    }
  })

  .state('app.v1.landing', {
    url: '/landing',
    views: {
      'content@app.v1': {
        templateUrl: '/project/views/v1/landing.html',
        controller: 'LandingController'
      }
    }
  })

  .state('app.v1.cars', {
    url: '/cars',
    views: {
      'cars@app.v1': {
        templateUrl: '/project/views/v1/cars.html',
        controller: 'CarController'
      }
    }
  })

  .state('app.v1.sell', {
    url: '/cars/sell',
    views: {
      'sell-cars@app.v1': {
        templateUrl: '/project/views/v1/sell-car-form.html',
        controller: 'CarController'
      }
    }
  });

}]);

app.constant('moment', moment);
app.filter('moment', function() {
  return function(dateString, format, calendar) {
    if (format === 'calendar') {
      return moment(dateString).calendar();
    } else {
      return moment(dateString).format(format);
    }
  };
});



