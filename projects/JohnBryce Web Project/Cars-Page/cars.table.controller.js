/**
 * Created by dimitry.friedman on 8/6/2014.
 */
(function (window, angular) {
    angular.module('carRentApp')
        .controller({'CarsTableController':['$scope','CarsFactory',carsTableController]})
function carsTableController(scope,CarsFactory){
    //TODO: work with local storage!!!!!
   CarsFactory.getCarsData().then(function(result){
        scope.cars=result;
       console.log(scope.cars);
    });


}

})(window, angular);