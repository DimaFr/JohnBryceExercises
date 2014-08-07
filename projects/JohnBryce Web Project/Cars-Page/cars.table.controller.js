/**
 * Created by dimitry.friedman on 8/6/2014.
 */
(function (window, angular) {
    angular.module('carRentApp')
        .controller({'CarsTableController': ['$scope', 'CarsFactory','$state', carsTableController]})

    function carsTableController(scope, CarsFactory,state) {
        //TODO: work with local storage!!!!!
        CarsFactory.getCarsData().then(function (result) {
            scope.cars = result;
            console.log(scope.cars);
        });

        scope.rentThisCar = function (thisCar) {
            console.log(thisCar.model);
         state.go('map')
        }


    }

})(window, angular);