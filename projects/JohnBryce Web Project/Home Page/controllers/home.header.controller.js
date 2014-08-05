/**
 * Created by dimitry.friedman on 8/3/2014.
 */
(function (window, angular) {
    angular.module('carRentApp')
        .controller({'HomeHeaderController':['$modal','$log',headerController]})

    function headerController(modal,log){
        var timeStamp = new Date().getTime();
        console.log(timeStamp+"header comtroller loaded")
       var userLogged = false;

       this.logBtnTitle = userLogged ? "Log Out" :"Register/Login";

        this.logInBtnClicked = function(){

            console.log('logInBtnClicked');

           var modalInstance =modal.open({
               templateUrl:'login-modal/login.html',
               controller:'SignInController',
               size:'sm'
           })

            modalInstance.result.then(function(result){
                if(result.user=="login")
                {
                    log.debug(result.user);
                }
                if(result.user=="register")
                {
                    log.debug(result.user);
                    openRegisterModal();
                }
            }, function(msg){
                log.info("Modal dismissed with data: "+msg+" at: "+ new Date());
            });

            function openRegisterModal(){
//todo: create register template
                var modalInstance =modal.open({
                    templateUrl:'register-modal/register.html',
                    controller:'RegisterController',
                    size:'sm'
                })
                modalInstance.result.then(function(result){
                    if(result.user=="login")
                    {
                        log.debug("2: "+result.user);
                    }
                    if(result.user=="register")
                    {
                        log.debug("2: "+result.user);
                    }
                }, function(msg){
                    log.info("2: Modal dismissed with data: "+msg+" at: "+ new Date());
                });



            }

       }
    }


})(window, angular);