/**
 * Created by dimitry.friedman on 8/3/2014.
 */
(function (window, angular) {
    angular.module('homePage')
        .controller({'HomeFooterController':footerController})

    function footerController(){
        this.copyrightYear= new Date().getFullYear();
    }

})(window, angular);
