/**
 * Created by dimitry.friedman on 7/31/2014.
 */
(function (window, angular) {

    angular.module('carRentApp')
        .factory({'MapFactory': ["$q", mapFactory]});

//get current LatLng point
//get array of 5 places when type adress
//get LatLng from dropped marker
//calculate route,return distance in km
    function mapFactory(q) {
        console.log("MapFactory is loaded");
        var myLocationPoint = getMyLocation();

//TODO: implement
        function newMarker(customPoint) {


            var marker =
            {
                //id:1,
                latitude: customPoint.latitude,
                longitude: customPoint.longitude,
                //showWindow: false,
                title: 'My Location Marker'
            };


            // var marker = new google.maps.Marker(markerOptions);
            return marker;

        }


        function newMap(customPoint) {
            var map;
            if (!customPoint) {
                map = {
                    center: {
                        latitude: 42,
                        longitude: 10
                    },
                    control: {},
                    zoom: 4,
                    markers: []

                }

            } else {

                map = {
                    center: {
                        latitude: customPoint.latitude,
                        longitude: customPoint.longitude
                    },
                    control: {},
                    zoom: 14,
                    markers: []
                }
            }
            map.markers.push(newMarker(customPoint));

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

        function getMyAddressPromise(lat, lng) {

            var deferred = q.defer();
            var geocoder = new google.maps.Geocoder();
            var latLng = new google.maps.LatLng(lat, lng);
            geocoder.geocode({"latLng": latLng}, function (results, status) {

                //TODO: check how to use notify
                deferred.notify("loads");
                if (status == google.maps.GeocoderStatus.OK) {
                    console.log(results);
                    deferred.resolve({results:results});

                }
                else {
                    console.log("ERROR: Geocoder failed due to: " + status);
                    deferred.reject({error:status});
                }
            });

            return deferred.promise

        }


        var MapFactory = {
            MyLocationPoint: myLocationPoint,
            GetMyAddressPromise:getMyAddressPromise,
            NewMap: newMap
        };
        return MapFactory;

    }


})(window, angular);