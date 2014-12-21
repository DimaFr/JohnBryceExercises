/**
 * Created by dimitry.friedman on 7/9/2014.
 */
(function (window, angular) {
    var app = angular.module("LogInBootstrap", ['ngRoute']);
    /*
     +++++++++++++++++++++++++++++++++++++++++++++++++
     VIEWS
     */
    app.config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: "views/startLogin.html",
                controller: "StartPageController as startCtrl"
            })
            .when('/SignUp', {
                templateUrl: "views/signup.html",
                controller: "SignUpController as signupCtrl"
            })
            .when('/SignIn', {
                templateUrl: "views/signin.html",
                controller: "SignInController as signInCtrl"
            })
            .when('/HelloUser', {
                templateUrl: "views/helloUser.html",
                controller: ""
            })
    });
    /*+++++++++++++++++++++++++++++++++++++++++++++++++
     START PAGE CONTROLLERS
     */

    app.controller("StartPageController", function ($location) {
        this.goToSignUp = function () {
            $location.path("/SignUp");
        };
        this.goToSignIn = function () {
            $location.path("/SignIn");
        }
    });

    /*
     +++++++++++++++++++++++++++++++++++++++++++++++++
     SIGN IN CONTROLLERS
     */
//    app.controller('SignInController', function (DataService, AuthService, $location) {
//
//        this.users = DataService.RestoreState();
//        //actually thios is credentials
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
//    })

    /*
     +++++++++++++++++++++++++++++++++++++++++++++++++
     SIGN UP CONTROLLERS
     */
    app.controller('SignUpController', function (DataService, $location) {

        this.users = DataService.RestoreState();
      // this.passwordsMatch = true;
        // this.user = {};
        this.signupUser = function () {
            //TODO: valid entry check, duplicate users check
           var passwordsMatch = true;
            if (this.user.password != this.user.confirmPsw) {
               passwordsMatch = false;
            }
            if (this.user && passwordsMatch) {
                this.users.push(this.user);
                DataService.SaveState(this.users);
                DataService.SaveCurrentUser(this.user);
                this.user = {};
                //move to other page
                $location.path("/HelloUser");
            }
        }
    });
    /*
     +++++++++++++++++++++++++++++++++++++++++++++++++
     HELLO USER CONTROLLERS
     */
    app.controller('HelloUserController', function (DataService) {
        this.user = DataService.RestoreCurrentUser();
        this.users = DataService.RestoreState();

    });

    /*
     +++++++++++++++++++++++++++++++++++++++++++++++++
     SERVICES
     */

    //TODO: may be add variable to manage key values for different data like users cars something
    app.factory('DataService', function () {
        var _model = [];
        var _currentUser = {};
        var _saveState = function (model) {
            localStorage.usersData = angular.toJson(model);
        };
        var _restoreState = function () {
            _model = angular.fromJson(localStorage.usersData) || [];
            return _model;
        };
        var _saveCurrentUser = function (user) {
            localStorage.currentUser = angular.toJson(user);
        };
        var _restoreCurrentUser = function () {
            _currentUser = angular.fromJson(localStorage.currentUser) || {};
            return _currentUser;
        };
        var DataService = {
            //model: _model,
            //currentUser:_currentUser,
            SaveState: _saveState,
            RestoreState: _restoreState,
            SaveCurrentUser: _saveCurrentUser,
            RestoreCurrentUser: _restoreCurrentUser
        };
        return DataService;
    });

    app.factory('AuthService', ["DataService",
        function (DataService) {
            var users = DataService.RestoreState();
            var loginSuccess = function (credentials) {
                //use native for instead of angular.forEach !!! faster and can break
                var success = false;
                var loggedUser = {};
                for (i = 0; i < users.length; i++) {
                    var current = users[i];
                    if (current.username == credentials.username && current.password == credentials.password) {
                        console.log(credentials.username);
                        console.log("SUCCESS");
                        loggedUser = current;
                        success = true;
                        break;
                    }
                    console.log(loggedUser);
                    console.log("Fail");
                }
                return {Success: success,
                    WithUser: loggedUser}
            };
            var AuthService = {
                LoginSuccess: loginSuccess
            };
            return AuthService;
        }
    ])
})(window, angular);
