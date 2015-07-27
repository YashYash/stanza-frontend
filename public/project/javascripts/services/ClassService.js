app.service('ClassService', ['$rootScope','$http',
    function(
    $rootScope,
    $http) {
        'use strict';
        console.log('#### Class Service loaded');

        // Attempt to set up a helper so I can swap classes on the body between views, allowing for better overall control and background images rather than fixed position background div (which makes the rest of the layout ghetto)
        var viewCars = false;

        return {
            viewCars
        }
    }
]);