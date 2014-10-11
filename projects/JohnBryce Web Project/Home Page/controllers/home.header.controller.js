/**
 * Created by dimitry.friedman on 8/3/2014.
 */
(function (window, angular) {
    angular.module('carRentApp')
        .controller({'HomeHeaderController': ['$modal', '$log', '$location', 'DataService', headerController]})

    function headerController(modal, log, location, DataService) {
//highlight the relevant "btn" than page open
        this.isActive = function (viewLocation) {
            var path = location.$$path;
            return viewLocation === path;
        };

        updateCurrentUser(this.logBtnTitle,this.loggedUsername);

//        var timeStamp = new Date().getTime();
//        console.log(timeStamp + "header controller loaded")
//
//
//        var userLogged = false;
//        console.log(DataService.RestoreCurrentUser().username);
//        //if their is user
//        if (DataService.RestoreCurrentUser().username) {
//            userLogged = true;
//            console.log(DataService.RestoreCurrentUser().username);
//        }
//
//        this.logBtnTitle = userLogged ? "Log Out" : "Register/Login";


        this.logInBtnClicked = function () {

            console.log('logInBtnClicked');

            if (this.logBtnTitle == "Register/Login") {

                var modalInstance = modal.open({
                    templateUrl: 'login-modal/login.html',
                    controller: 'SignInController',
                    resolve: function () {

                    },
                    size: 'sm'
                })

                modalInstance.result.then(function (result) {
                    if (result.state == "login") {
                        log.debug("login success");
                        log.info(result.currentUser);
                        updateCurrentUser(this.logBtnTitle,this.loggedUsername);
                    }
                    if (result.state == "register") {
                        log.debug(result.state);
                        openRegisterModal();
                    }
                }, function (msg) {
                    log.info("Modal dismissed with data: " + msg + " at: " + new Date());
                });


            } else {
                DataService.SaveCurrentUser(null);
                this.logBtnTitle = "Register/Login";
            }
        }
        function openRegisterModal() {


            var modalInstance = modal.open({
                templateUrl: 'register-modal/register.html',
                controller: 'RegisterController',
                size: 'sm'
            })
            modalInstance.result.then(function (result) {
                if (result.state == "login") {
                    log.debug("2 login: " + result.state);
                }
                if (result.state == "register") {
                    log.debug("2 register: " + result.state);
                }
            }, function (msg) {
                log.info("2: Modal dismissed with data: " + msg + " at: " + new Date());
            });
        }

        function updateCurrentUser(btn,username) {
            var name = DataService.RestoreCurrentUser().username;
            if(name){
                btn = "Log Out";
                username = "Hello "+name;
            }else{
                btn = "Register/Login";
                username="";
            }

        }
    }


})(window, angular);