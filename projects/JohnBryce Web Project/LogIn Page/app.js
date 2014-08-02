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
                templateUrl: "startLogin.html",
                controller: "StartPageController"
            })
            .when('/SignUp', {
                templateUrl: "signup.html",
                controller: "SignUpController"
            })
            .when('/SignIn', {
                templateUrl: "signin.html",
                controller: "SignInController"
            })
            .when('/HelloUser', {
                templateUrl: "helloUser.html",
                controller: ""
            })
    });

    /*
     +++++++++++++++++++++++++++++++++++++++++++++++++
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
     SIGHN IN CONTROLLERS
     */
    app.controller('SignInController', function (DataService, AuthService, $location) {

        this.users = DataService.RestoreState();

        this.user = {};

        this.signinUser = function () {
            AuthService.DoSmth();
            AuthService.LoginSuccess(this.user);
            DataService.SaveCurrentUser(this.user);
            //move to other page
            $location.path("/HelloUser");
        }
    });

    /*
     +++++++++++++++++++++++++++++++++++++++++++++++++
     SIGN UP CONTROLLERS
     */
    app.controller('SignUpController', function (DataService, $location) {

        this.users = DataService.RestoreState();
        // this.user = {};
        this.signupUser = function () {
            //TODO: valid entry check, duplicate check
            if (this.user) {
                this.users.push(this.user);
                DataService.SaveState(this.users);
                DataService.SaveCurrentUser(this.user);
                this.user = {};
                //move to other page
                $location.path("/HelloUser");
            }
            //TODO: separate to directive or service
            this.isConfirmPsw = function () {
                if(this.user.password!==this.user.confirmPsw){


                }

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

            var user = {};
            var users = DataService.RestoreState();
            var loginSuccess = false;

            loginSuccess = function (user) {
                //use native for instead of angular.forEach !!! faster and can break
                for (i = 0; i < users.length; i++) {
                    var current = users[i];
                    if (current.username == user.username && current.password == user.password) {
                        console.log(current.username);
                        console.log("SUCCESS");
                        break;
                    }
                    console.log(current);
                    console.log("Fail");
                }
            };
            var doSmth = function () {
                console.log("authentication factory");
            };
            return {
                DoSmth: doSmth,
                LoginSuccess: loginSuccess
            }

        }
    ])

})(window, angular);
