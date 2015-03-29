/**
 * Created by dimitry.friedman on 7/30/2014.
 */
(function (window, angular) {


    angular.module('carRentApp')
        .controller({"TravelPointsController": ['$scope', 'MapFactory', travelPointsController]});

    function travelPointsController(scope, MapFactory) {
        console.log("TravelPointsController is loaded");
        //TODO:  before release - hardcoded points,add default points if no current location

        var currentGMap;

        /**/

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
                scope.map = MapFactory.NewMap(latLng);
                console.log(scope.map);
                scope.loadMap = true;
                console.log('map should init')
            }, function (msg) {
                console.log("Failed: to resolve promise" + msg);
                //load default location
                scope.map = MapFactory.NewMap();
                scope.loadMap = true;
            })


        /* */

        MapFactory.MyLocationPoint.then(function (point) {
            console.log(point);
            MapFactory.GetMyAddressPromise(point.latitude, point.longitude).then(function (results) {
                console.log(results);
                scope.startPoint = results.results[1].formatted_address;
                scope.destPoint = "Dakar";
            })
        });

        scope.goToMyLocation = function () {
            MapFactory.MyLocationPoint.then(function (point) {
                console.log(point);
                MapFactory.GetMyAddressPromise(point.latitude, point.longitude).then(function (results) {
                    console.log(results);
                    scope.startPoint = results.results[1].formatted_address;
                    scope.map.markers.push({latitude: point.latitude, longitude: point.longitude});
                    scope.map.control.refresh({latitude: point.latitude, longitude: point.longitude});
//                  scope.map.control.getGMap().setZoom(14);
                    //currentGMap.setZoom(14);
                    scope.map.zoom = 16;

                })
            });
        };

        var directionsDisplay;
        directionsDisplay = new google.maps.DirectionsRenderer();
        function initialize() {
            //TODO: check if old map distroys clear directions
            currentGMap = scope.map.control.getGMap();
            directionsDisplay.setMap(currentGMap);

        }

        scope.calculateRoute = function () {
            var startPoint = scope.startPoint || "";
            var destPoint = scope.destPoint || "";

            var directionsService = new google.maps.DirectionsService();

            function createRoute(firstPoint, secondPoint) {
                var request = {
                    origin: firstPoint,
                    destination: secondPoint,
                    travelMode: google.maps.TravelMode.DRIVING,
                    unitSystem: google.maps.UnitSystem.METRIC
                };
                directionsService.route(request, function (response, status) {
                    if (status == google.maps.DirectionsStatus.OK) {
                        //remove all previous markers
                        scope.map.markers = [];
                        directionsDisplay.setDirections(response);
                        //show travel distance
                        var routeDistance = 0;
                        routeDistance = response.routes[0].legs[0].distance.value;
                        scope.distance = routeDistance / 1000;
                        console.log("Distance: " + response.routes[0].legs[0].distance.value)
                    } else {
                        console.log(status)
                    }
                });
            }

            initialize();
            createRoute(startPoint, destPoint);
        }
    }
})
(window, angular);