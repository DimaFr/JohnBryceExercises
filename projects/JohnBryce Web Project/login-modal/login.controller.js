/**
 * Created by dimitry.friedman on 8/5/2014.
 */
(function (window, angular) {
    angular.module('carRentApp')
        .controller({'SignInController':['$scope','$modalInstance',signInController]})

    function signInController(scope,modalInstance) {
      //  DataService, AuthService, $location
//        this.users = DataService.RestoreState();
//        //actually this is credentials
//        this.user = {};
//
//        this.showSignInFail = false;
//
//        this.signInUser = function () {
//
//            var success = AuthService.LoginSuccess(this.user);
//
//            if (!success.Success) {
//                console.log("Username or password is invalid.Please try again.");
//                this.showSignInFail = true;
//            } else {
//                // set current user
//                DataService.SaveCurrentUser(success.WithUser);
//                this.showSignInFail = false;
//                $location.path("/HelloUser");
//            }
//        };
        scope.signInUser = function () {
            console.log('signinUser clicked');

            if(scope.user && scope.password){
            //todo: Q defer - authenticate
                modalInstance.close({user: "login"})
            }
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