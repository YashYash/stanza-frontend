app.service('CarService', ['$rootScope','$http',
    function(
    $rootScope,
    $http) {
        'use strict';
        console.log('#### Car Service loaded');

        var carDummyData = [
            {
                title: "2012 Ford Focus Titanium * SAT RADIO * BLUETOOTH",
                price: "$14,475.00 plus applicable taxes",
                address: "1194 Oxford Street E, London, ON, N5Y 3M3",
                images: [
                "http://i.ebayimg.com/00/s/NzY4WDEwMjQ=/z/HHMAAOSw9N1VsPEg/$_35.JPG"
                ]
            },
            {
                title: "2012 Ford Focus Titanium * SAT RADIO * BLUETOOTH",
                price: "$14,475.00 plus applicable taxes",
                address: "1194 Oxford Street E, London, ON, N5Y 3M3",
                images: [
                "http://i.ebayimg.com/00/s/NzY4WDEwMjQ=/z/HHMAAOSw9N1VsPEg/$_35.JPG"
                ]
            }
        ];
        // console.log(carDummyData)

        var cars = [];

        (function getCars() {
            console.log('getCars');
            $http.get('/api/scrape/cars/1').
              success(function(data, status, headers, config) {
                  console.log("getCars success");
                  // console.log(carDummyData.length);
                  for (var i = 0; i < data.length; i++) {
                    cars.push(data[i]);
                    // console.log(carDummyData[i])
                  }
                }).
                error(function(data, status, headers, config) {
                  console.log("getCars failure");
            });
        }());


        return {
            cars
        }
    }
]);