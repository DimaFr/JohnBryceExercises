/**
 * Created by dimitry.friedman on 8/5/2014.
 */
(function (window, angular) {
    angular.module('carRentApp', ['ngRoute', 'ui.bootstrap', 'ui.router'])
    angular.module('carRentApp')
        .config(function ($stateProvider, $urlRouterProvider) {
            $stateProvider
                .state('home', {
                    url: '/',
                    templateUrl: 'Home%20Page/home.html',
                    controller:'HomeMainController'
                })
                .state('cars', {
                    url: '/cars',
                    templateUrl: 'Cars-Page/cars.html',
                    controller:'CarsTableController'
                })
        })


})(window, angular);