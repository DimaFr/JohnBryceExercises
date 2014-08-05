/**
 * Created by admin on 8/3/14.
 */
(function (window, angular) {
    'use strict';
    angular.module('carRentApp')
        .factory({'CarsFactory': ["$http", "$q", carsFactory]});

    function carsFactory(http, q) {

        var timeStamp = new Date().getTime();
        console.log(timeStamp+"car factory loaded")
        var CarsFactory = function(){};
        var _cars;

        CarsFactory.getCarById=function(plateId){
            var myCar;
            if(_cars) {
                for (var i = 0; i < _cars.length; i++) {
                    if (_cars[i].plateId == plateId) {
                        myCar = _cars[i];

                        return myCar;
                        break;
                    }
                   }
            }
            else{
                this.getCarsData().then(function(response){
                    this.getCarsById(plateId);
                })
            }
        };
        CarsFactory.getCarsData=function(){
            var jsonUrlString = 'data/cardata.json';
            return http.get(jsonUrlString)
                .then(function (response) {
                    _cars=response.data.cars;
                    return _cars;
                })
                .catch(function (error) {
                    console.log("Error: "+error.status)
                })

        };
        CarsFactory.getCarsData();
        return CarsFactory;
    }


}(window, angular));