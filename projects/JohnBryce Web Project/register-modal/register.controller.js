/**
 * Created by dimitry.friedman on 8/5/2014.
 */
(function (window, angular) {
    angular.module('carRentApp')
        .controller({'RegisterController': ['$scope', '$modalInstance','DataService', registerController]})
//TODO: add: ,
    function registerController(scope, modalInstance,DataService) {
        console.log("register controller loaded");
        var users= DataService.RestoreState();
        scope.passwordsMatch = true;
        scope.user = {};
        scope.signUpUser = function () {
            console.log('signUpUser clicked');
            //TODO: valid entry check, duplicate users check
            var passwordsMatch = true;
            if (scope.user.password != scope.user.confirmPsw) {
                passwordsMatch = false;
            }
            if (scope.user && passwordsMatch) {
                users.push(scope.user);
                DataService.SaveState(users);
                DataService.SaveCurrentUser(scope.user);
                scope.user = {};
                //move to other page
                //$location.path("/HelloUser");
            }
        }

//        scope.signUpUser = function () {
//            console.log('signUpUser clicked');
//            //modalInstance.close({user: "new"})
//        }
        scope.cancel = function () {
            console.log("cancel 2 clicked");
            modalInstance.dismiss('cancel');
        }


    }

})(window, angular);