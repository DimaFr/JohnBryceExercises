/**
 * Created by dimitry.friedman on 8/5/2014.
 */
(function (window, angular) {
    angular.module('carRentApp')
        .config(function($routeProvider){
            $routeProvider
                .when('/',{
                    templateUrl:'Home%20Page/home.html',

                    controller:'HomeMainController'



                })
        })



})(window, angular);