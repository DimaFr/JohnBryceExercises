/**
 * Created by dimitry.friedman on 12/21/2014.
 */
(function (window, angular) {
    angular.module('carRentApp')
        .controller({'AboutController': [aboutCtrl]});

    function aboutCtrl() {

      this.testname = "This is about controller";
    }


})(window, angular);