/**
 * Created by dimitry.friedman on 12/22/2014.
 */
(function (window, angular) {
    angular.module('carRentApp')
        .directive("homeDatepicker",homeDatepicker)

    function homeDatepicker(){
        return{
            restrict:'A',
            templateUrl: 'Home%20Page/homeDatepicker.html'
        };
    }


})(window, angular);
