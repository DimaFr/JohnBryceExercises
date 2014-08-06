/**
 * Created by admin on 8/3/14.
 */
(function (window, angular) {
    'use strict';
    angular.module('carRentApp')
        .factory(
        {'CarsFactory': ["$http", carsFactory],
        'DataService':["$q", dataService]});

    function dataService(){
        console.log("DataService loaded");
        var _model = [];
        var _currentUser = {};
        var _saveState = function (model) {
            localStorage.usersData = angular.toJson(model);
        };
        var _restoreState = function () {

            _model = angular.fromJson(localStorage.usersData) || []

            return _model;
        };

        var _saveCurrentUser = function (user) {
            localStorage.currentUser = angular.toJson(user);
        };


        //TODO: create defer or find how to load factory before controllers



        var _restoreCurrentUser = function () {



                _currentUser = angular.fromJson(localStorage.currentUser) || {};



            return _currentUser;
        }
        var DataService = {
            //model: _model,
            //currentUser:_currentUser,
            SaveState: _saveState,
            RestoreState: _restoreState,
            SaveCurrentUser: _saveCurrentUser,
            RestoreCurrentUser: _restoreCurrentUser
        }
        return DataService;
    }

    function carsFactory(http, q) {

        var timeStamp = new Date().getTime();
        console.log(timeStamp + "car factory loaded")
        var CarsFactory = function () {
        };
        var _cars;

        CarsFactory.getCarById = function (plateId) {
            var myCar;
            if (_cars) {
                for (var i = 0; i < _cars.length; i++) {
                    if (_cars[i].plateId == plateId) {
                        myCar = _cars[i];

                        return myCar;
                        break;
                    }

                }
            }
            else {
                this.getCarsData().then(function (response) {
                    this.getCarsById(plateId);
                })
            }
            return myCar;
        };
        CarsFactory.getCarsData = function () {
            var jsonUrlString = 'data/cardata.json';
            return http.get(jsonUrlString)
                .then(function (response) {
                    _cars = response.data.cars;
                    return _cars;
                })
                .catch(function (error) {
                    console.log("Error: " + error.status)
                })

        };
        CarsFactory.getCarsData();
        return CarsFactory;
    }


}(window, angular));