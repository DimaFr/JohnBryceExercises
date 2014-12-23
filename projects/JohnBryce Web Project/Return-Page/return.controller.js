/**
 * Created by dimitry.friedman on 12/23/2014.
 */
(function (window, angular) {
    angular.module('carRentApp')
        .controller("ReturnController",returnController)
    function returnController(){
        this.testmessage ="This return controler."
    }


})(window, angular);