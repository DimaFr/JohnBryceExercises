/**
 * Created by dimitry.friedman on 7/30/2014.
 */
(function (window, angular) {


    angular.module('myMap')
        .controller({"TravelPointsController": ["$scope", travelPointsController]})

    function travelPointsController(scope) {
        console.log("This is TravelPointsController");
        //TODO: remove before release - hardcoded points
        scope.startPoint = "Paris";
        scope.destPoint = "Dakar";
        var directionsDisplay;
        directionsDisplay = new google.maps.DirectionsRenderer();
//TODO: not in use
//        function clearMap() {
//            if (directionsDisplay) {
//                console.log(directionsDisplay.maps)
//                directionsDisplay.setMap(null);
//            }
//        }

        function initialize() {
            //TODO: check if old map distroys clear directions
            var myGMap = scope.map.control.getGMap();
            directionsDisplay.setMap(myGMap);
        }

        scope.calculateRoute = function () {
            var startPoint = scope.startPoint || "";
            var destPoint = scope.destPoint || ""
            var directionsService = new google.maps.DirectionsService();
            function createRoute(firstPoint, secondPoint) {
                var request = {
                    origin: firstPoint,
                    destination: secondPoint,
                    travelMode: google.maps.TravelMode.DRIVING,
                    unitSystem: google.maps.UnitSystem.METRIC
                }
                directionsService.route(request, function (response, status) {
                    if (status == google.maps.DirectionsStatus.OK) {
                        directionsDisplay.setDirections(response);
                        //show travel distance
                        scope.distance = response.routes[0].legs[0].distance.value / 1000;
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