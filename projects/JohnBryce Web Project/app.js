/**
 * Created by dimitry.friedman on 8/5/2014.
 */
(function (window, angular) {
    angular.module('carRentApp', ['ngRoute', 'ui.bootstrap', 'ui.router','google-maps','ngAnimate',
        'mgcrea.ngStrap.helpers.dimensions','mgcrea.ngStrap.helpers.dateParser','mgcrea.ngStrap.tooltip','mgcrea.ngStrap.datepicker']);

    angular.module('carRentApp')

        .config(function ($datepickerProvider,$stateProvider, $urlRouterProvider) {
            //new datepicker configuration
            angular.extend($datepickerProvider.defaults,{
                dateFormat:'dd/MM/yyyy',
                placement: 'top-left'
            });

            $urlRouterProvider.otherwise('/');
            $stateProvider
                //header navigation menu
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
                    controller:'TravelPointsController'
                })
                .state('book',{
                    url:'/book',
                    templateUrl:'Geolocation%20and%20Map/map.html',
                    controller:'TravelPointsController'
                })
                .state('return',{
                    url:'/return',
                    templateUrl:'Return-Page/return.html',
                    controller:'ReturnController'
                })

        })


})(window, angular);