/**
 * Created by dimitry.friedman on 8/5/2014.
 */
(function (window, angular) {
    angular.module('carRentApp', ['ngRoute', 'ui.bootstrap', 'ui.router','google-maps',
        'mgcrea.ngStrap.helpers.dimensions','mgcrea.ngStrap.helpers.dateParser','mgcrea.ngStrap.tooltip','mgcrea.ngStrap.datepicker']);

    angular.module('carRentApp')

        .config(function ($datepickerProvider,$stateProvider, $urlRouterProvider) {
            angular.extend($datepickerProvider.defaults,{
                dateFormat:'dd/MM/yyyy',
                placement: 'top-left'
            });
            $urlRouterProvider.otherwise('/');
            $stateProvider
                .state('home', {
                    url: '/',
                    templateUrl: 'Home%20Page/home.html',
                    controller:'HomeMainController'
                })
                .state('about',{
                    url:'/about',
                    templateUrl:'About/about.html',
                    controller:'AboutController'
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
                .state('book',{
                    url:'/book',
                    templateUrl:'Book-Page/book.html',
                    controller:'BookController'
                })
                .state('return',{
                    url:'/return',
                    templateUrl:'Return-Page/return.html',
                    controller:'ReturnController'
                })

        })


})(window, angular);