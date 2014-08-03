/**
 * Created by dimitry.friedman on 8/3/2014.
 */
(function (window, angular) {
    angular.module('homePage')
        .controller({'HomeHeaderController':headerController})

    function headerController(){
       var userLogged = false;

       this.logBtnTitle = userLogged ? "Log Out" :"Register/Login";
    }


})(window, angular);