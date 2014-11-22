/**
 * Created by admin on 11/22/14.
 */
(function (window,angular){
   angular.module("Modal",[]);
   angular.module("Modal")
     .controller("MainController",['$scope',mainController])


    function mainController(scope){
        scope.username = "Dima";
        console.log ("controller is here");

    }


})(window,angular);