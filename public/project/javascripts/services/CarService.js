app.service('CarService', ['$rootScope','$http',
    function(
    $rootScope,
    $http) {
        'use strict';
        console.log('#### Car Service loaded');

        var carDummyData = [{
            title: "2012 Ford Focus Titanium * SAT RADIO * BLUETOOTH",
            price: "$14,475.00 plus applicable taxes",
            seller: "",
            make: "Ford",
            model: "Focus",
            address: "1194 Oxford Street E, London, ON, N5Y 3M3",
            kilometers: "124953",
            vehicletype: "Sedan",
            transmission: "Automatic",
            listed: "25-Jul-15",
            color: "Silver",
            drive: "Front-wheel drive (FWD)",
            fuel: "Gasoline",
            description: "Looking for a Ford? Visit us at www.CanadianAutoGroup.ca for view more like this vehicle. We have over 400+ in stock and offer financing for all credit situations! Come see us now",
            images: [
            "http://i.ebayimg.com/00/s/NzY4WDEwMjQ=/z/HHMAAOSw9N1VsPEg/$_35.JPG",
            "http://i.ebayimg.com/00/s/NzY4WDEwMjQ=/z/tCwAAOSwDNdVsPEg/$_35.JPG",
            "http://i.ebayimg.com/00/s/NzY4WDEwMjQ=/z/tCsAAOSwDNdVsPEg/$_35.JPG",
            "http://i.ebayimg.com/00/s/NzY4WDEwMjQ=/z/LzIAAOSwjVVVsPEg/$_35.JPG",
            "http://i.ebayimg.com/00/s/NzY4WDEwMjQ=/z/VEgAAOSwu4BVsPEh/$_35.JPG",
            "http://i.ebayimg.com/00/s/NzY4WDEwMjQ=/z/VBoAAOSwu4BVsPEg/$_35.JPG",
            "http://i.ebayimg.com/00/s/NzY4WDEwMjQ=/z/gWUAAOSwgQ9VsPEg/$_35.JPG"
            ]
        }];

        var cars = [];

        (function getCars() {
            console.log('getCars');
            $http.get('').
              success(function(data, status, headers, config) {
                  console.log("getCars success");
                  cars.push(carDummyData[0]);
                  console.log(cars);
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