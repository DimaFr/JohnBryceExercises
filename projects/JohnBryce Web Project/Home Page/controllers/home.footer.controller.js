/**
 * Created by dimitry.friedman on 8/3/2014.
 */
(function (window, angular) {
    angular.module('carRentApp')
        .controller({'HomeFooterController':footerController})

    function footerController(){
        var timeStamp = new Date().getTime();
        console.log(timeStamp+"footer comtroller loaded")
        this.copyrightYear= new Date().getFullYear();
    }

})(window, angular);
