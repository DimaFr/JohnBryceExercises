/**
 * Created by dimitry.friedman on 12/23/2014.
 */
(function (window, angular) {
    angular.module('carRentApp')
        .controller("BookController",bookController)
    function bookController(){
        this.testmessage="This is Book Controller";
    }


})(window, angular);