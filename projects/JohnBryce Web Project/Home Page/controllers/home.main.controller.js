/**
 * Created by dimitry.friedman on 8/5/2014.
 */
(function (window, angular) {
    angular.module('carRentApp')
        .controller({"HomeMainController":homeMainController})
    function homeMainController(){
        var timeStamp = new Date().getTime();
        console.log(timeStamp+"main comtroller loaded")

    }


})(window, angular);