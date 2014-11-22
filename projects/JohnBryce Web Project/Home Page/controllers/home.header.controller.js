/**
 * Created by dimitry.friedman on 8/3/2014.
 */
(function (window, angular) {
    angular.module('carRentApp')
        .controller({'HomeHeaderController': ['$scope','$modal', '$log', '$location', 'DataService', headerController]})

    function headerController(scope,modal,log,location,DataService) {
//highlight the relevant "btn" than page open
        scope.isActive = function (viewLocation) {
            var path = location.$$path;
            return viewLocation === path;
        };
       var user = DataService.RestoreCurrentUser();

       if(user.username) {
           scope.loggedUsername = "Hello " + user.username;
           scope.logBtnTitle = "Log out";
       }
        else{
           scope.loggedUsername = "";
           scope.logBtnTitle = "Register/Login";
       }

        scope.logInBtnClicked = function () {

            console.log('logInBtnClicked');

            if (scope.logBtnTitle == "Register/Login") {

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

                        //TODO: doesnot work should pass resuly and update this.btn and this.currentUser
                       // updateCurrentUser(result.currentUser);


                        scope.logBtnTitle = "Log Out";
                        scope.loggedUsername = "Hello "+result.currentUser.username;

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
                scope.logBtnTitle = "Register/Login";
                scope.loggedUsername = null;
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

    }


})(window, angular);