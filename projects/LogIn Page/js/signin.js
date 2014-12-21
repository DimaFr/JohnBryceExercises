/**
 * Created by dimitry.friedman on 7/13/2014.
 */
angular.module("LogInBootstrap")
    .controller('SignInController', function (DataService, AuthService, $location) {

        this.users = DataService.RestoreState();
        //actually thios is credentials
        this.user = {};

        this.showSignInFail = false;

        this.signInUser = function () {

            var success = AuthService.LoginSuccess(this.user);

            if (!success.Success) {
                console.log("Username or password is invalid.Please try again.");
                this.showSignInFail = true;
            } else {
                // set current user
                DataService.SaveCurrentUser(success.WithUser);
                this.showSignInFail = false;
                $location.path("/HelloUser");
            }
        };
    });
