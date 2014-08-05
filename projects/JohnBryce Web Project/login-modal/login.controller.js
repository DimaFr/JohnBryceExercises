/**
 * Created by dimitry.friedman on 8/5/2014.
 */
(function (window, angular) {
    angular.module('carRentApp')
        .controller({'SignInController':['$scope','$modalInstance',signInController]})

    function signInController(scope,modalInstance) {
      //  DataService, AuthService, $location
//        scope.users = DataService.RestoreState();
//
//        scope.user = {};
//
//        scope.signInUser = function () {
//            AuthService.DoSmth();
//            AuthService.LoginSuccess(this.user);
//            DataService.SaveCurrentUser(this.user);
//            //move to other page
//            $location.path("/HelloUser");
//        }
        scope.signInUser = function () {
            console.log('signinUser clicked');
            //todo: Q defer - authenticate
            modalInstance.close({user:"login"})
        }
        scope.createAccountBtn = function(){
            console.log('createAccoutBtn clicked');
            modalInstance.close({user:"register"})
        }
        scope.cancel = function () {
            console.log("cancel clicked");
            modalInstance.dismiss('cancel');
        };

    };


})(window, angular);