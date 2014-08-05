/**
 * Created by dimitry.friedman on 8/5/2014.
 */
(function (window, angular) {
    angular.module('carRentApp')
        .controller({'RegisterController': ['$scope', '$modalInstance', registerController]})

    function registerController(scope, modalInstance) {

//        this.users = DataService.RestoreState();
//        // this.passwordsMatch = true;
//        // this.user = {};
//        this.signupUser = function () {
//            //TODO: valid entry check, duplicate users check
//            var passwordsMatch = true;
//            if (this.user.password != this.user.confirmPsw) {
//                passwordsMatch = false;
//            }
//            if (this.user && passwordsMatch) {
//                this.users.push(this.user);
//                DataService.SaveState(this.users);
//                DataService.SaveCurrentUser(this.user);
//                this.user = {};
//                //move to other page
//                $location.path("/HelloUser");
//            }
//        }

        scope.signUpUser = function () {
            console.log('signUpUser clicked');
            //modalInstance.close({user: "new"})
        }
        scope.cancel = function () {
            console.log("cancel 2 clicked");
            //modalInstance.dismiss('cancel');
        }


    }

})(window, angular);