/**
 * Created by dimitry.friedman on 7/31/2014.
 */
(function (window, angular) {

 angular.module('myMap')
     .factory({'MapFactory': ["$q", mapFactory]})

//get current LatLng point
//get array of 5 places when type adress
//get LatLng from dropped marker
//calculate route,return distance in km
    function mapFactory(q) {
        var myLocationPoint = getMyLocation();


        function newMap(customPoint){
            var map;
            if(!customPoint){
                map = {
                    center: {
                        latitude: 42,
                        longitude: 10
                    },

                    zoom: 4,
                    control:{}
                }
            }else {

                map = {
                    center: {
                        latitude: customPoint.latitude,
                        longitude: customPoint.longitude
                    },
                    control: {},
                    zoom: 14
                }
            }
            return map;
        }


        function getMyLocation() {
            //create Q to return promise, we will load map only when we get the points or answer
            var deferred = q.defer();
            function onSuccess(position) {
                deferred.resolve({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude
                });
            }
            function onError(error) {
                deferred.reject("Code: " + error.code + "\n" + "Message: " + error.message + "\n");
                console.log("Code: " + error.code + "\n" + "Message: " + error.message + "\n");
                //TODO: add alert ???
            }
            navigator.geolocation.getCurrentPosition(onSuccess, onError);
            return deferred.promise;
        }
        var MapFactory = {
            MyLocationPoint: myLocationPoint,
            NewMap: newMap
        }
        return MapFactory;
    }






})(window, angular);