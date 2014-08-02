/**
 * Created by admin on 8/1/14.
 */
(function () {


    angular.module('myMap')
        .factory({'MapDirectionsFactory': ["$scope", mapDirectionsFactory]})

    function mapDirectionsFactory(scope) {
        console.log("MapDirectionsFactory is loaded")
        var routeDistance = 0;
        var directionsDisplay;
        directionsDisplay = new google.maps.DirectionsRenderer();
        function initialize() {
            //TODO: check if old map distroys clear directions
            var myGMap = scope.map.control.getGMap();
            directionsDisplay.setMap(myGMap);
        }

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
                    routeDistance = response.routes[0].legs[0].distance.value / 1000;
                    console.log("Distance: " + response.routes[0].legs[0].distance.value)
                } else {
                    console.log(status)
                }
            });
        }

        function calculateRoute(startPoint, destPoint) {

            var directionsService = new google.maps.DirectionsService();


            initialize();
            createRoute(startPoint, destPoint);
        }

        var MapDirectionsFactory = {
            CalculateRoute: calculateRoute,
            RouteDistance: routeDistance
        }
        return MapDirectionsFactory;
    }

})();