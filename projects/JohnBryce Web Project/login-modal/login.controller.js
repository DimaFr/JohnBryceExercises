/**
 * Created by dimitry.friedman on 8/5/2014.
 */
(function (window, angular) {
    angular.module('carRentApp')
        .controller({'SignInController':['$scope','$modalInstance','DataService',signInController]})

    function signInController(scope,modalInstance,DataService) {
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
        scope.showSignInFail = false;
        scope.signInUser = function (user) {
            console.log('signinUser clicked');
            var currentUser;

            if(user && user.username && user.password){

                currentUser = DataService.UserExists(user.username,user.password);

                if (currentUser){
                    scope.showSignInFail=false;
                    DataService.SaveCurrentUser(currentUser);
                    modalInstance.close({state: "login",currentUser:currentUser})
                }else{
                    scope.showSignInFail=true;
                }

            }
            console.log(currentUser);
        }
        scope.createAccountBtn = function(){
            console.log('createAccoutBtn clicked');
            //todo: check if username exists if exists through message
            modalInstance.close({state:"register"})
        }
        scope.cancel = function () {
            console.log("cancel clicked");
            modalInstance.dismiss('cancel');
        };

    };


})(window, angular);