/**
 * Created by admin on 8/3/14.
 */
(function (window, angular) {
    angular.module('homePage')
        .factory({'CarsFactory': ["$http", "$q", carsFactory]})

    function carsFactory(http, q) {


        function getCarById(cars, plateId) {
            var myCar;
            for (var i = 0; i < cars.length; i++) {
                if (cars[i].plateId == plateId) {
                    myCar = cars[i];
                    console.log(myCar);
                    break;
                }
                return myCar;
            }
        };

        function getCarsPromise() {
            var defer = q.defer();
            var jsonUrlString = '../cardata.json';

            http.get(jsonUrlString)
                .success(function (response) {
                    defer.resolve(response);
                    console.log(response);
                })
                .error(function (response) {
                    defer.reject(response);
                    console.log("Error")
                })
            return defer.promise;
        };

        var carsFactory = {
            GetCarsPromise: getCarsPromise(),
            GetCarById: getCarById
        };


        return {"CarsFactory": carsFactory};
    }


}(window, angular));