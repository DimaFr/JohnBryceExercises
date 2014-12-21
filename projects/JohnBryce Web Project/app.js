/**
 * Created by dimitry.friedman on 8/5/2014.
 */
(function (window, angular) {
    angular.module('carRentApp', ['ngRoute', 'ui.bootstrap', 'ui.router','google-maps'])
    angular.module('carRentApp')
        .config(function ($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise('/');
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
                .state('map',{
                    url:'/map',
                    templateUrl:'Geolocation%20and%20Map/map.html',
                    controller:'MapController'
                })
                .state('about',{
                    url:'/about',
                    templateUrl:'About/about.html',
                    controller:'AboutController'
                       })
        })


})(window, angular);