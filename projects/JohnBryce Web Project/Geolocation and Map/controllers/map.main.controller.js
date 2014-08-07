/**
 * Created by admin on 7/27/14.
 */
(function (window, angular) {

    angular.module('carRentApp')
        .controller({'MapController': ['$scope', 'MapFactory', mapController]});

    function mapController(scope, MapFactory) {
        console.log("MapController is loaded");
        //TODO: add alert if geolocation is not supported by browser
        if ("geolocation" in navigator) {
            /* geolocation is available */
            console.log("geolocation is available")
        } else {
            /* geolocation IS NOT available */
            console.log("geolocation IS NOT available")
        }
        //create map and set default position
        scope.loadMap = false;


        var pointPromise = MapFactory.MyLocationPoint;
        pointPromise.then(function (latLng) {
            console.log("latitude: " + latLng.latitude + "\n" +
                "longitude: " + latLng.longitude);
            //load my location CREATE A GMAP
            scope.map=MapFactory.NewMap(latLng);
            console.log(scope.map);
            scope.loadMap = true;
            console.log('map should init')
        }, function (msg) {
            console.log("Failed: to resolve promise" + msg);
            //load default location
            scope.map=MapFactory.NewMap();
            scope.loadMap = true;
        })
    }

}(window, angular));