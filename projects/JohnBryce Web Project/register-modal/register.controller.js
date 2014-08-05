/**
 * Created by dimitry.friedman on 8/5/2014.
 */
(function (window, angular) {
    angular.module('carRentApp')
        .controller({'RegisterController': ['$scope', '$modalInstance', registerController]})

    function registerController(scope, modalInstance) {

//    scope.users = DataService.RestoreState();
//    // this.user = {};
//    scope.signupUser = function () {
//        //TODO: valid entry check, duplicate check
//        if (scope.user) {
//            scope.users.push(scope.user);
//            DataService.SaveState(scope.users);
//            DataService.SaveCurrentUser(scope.user);
//            scope.user = {};
//            //move to other page
//            $location.path("/HelloUser");
//        }
//        //TODO: separate to directive or service
//        scope.isConfirmPsw = function () {
//            if(scope.user.password!==scope.user.confirmPsw){
//
//
//            }
//
//        }
//
//    }

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