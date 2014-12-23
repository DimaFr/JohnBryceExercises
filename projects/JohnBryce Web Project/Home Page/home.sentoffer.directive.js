/**
 * Created by dimitry.friedman on 12/23/2014.
 */
(function (window, angular) {
    angular.module('carRentApp')
        .directive("homeOffersent",homeOffersent)

    function homeOffersent() {
        return {
            restrict: 'A',
            templateUrl: 'Home%20Page/homeOffersent.html'
        };
    }


})(window, angular);