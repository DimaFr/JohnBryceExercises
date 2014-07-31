/**
 * Created by dimitry.friedman on 7/30/2014.
 */
(function (window, angular) {


    angular.module('myMap')
        .controller({"TravelPointsController": ["$scope", travelPointsController]})

    function travelPointsController(scope) {
        console.log("This is TravelPointsController");

//
//        var directionsDisplay;
//        var directionsService = new google.maps.DirectionsService();
//
//        if (scope.map&&scope.loadMap) {
//            directionsDisplay = new google.maps.DirectionsRenderer();
//            directionsDisplay.setMap(map);
//        } else {
//            console.log("poits ctrl can not read map in scope");
//        }
        scope.calculateRoute = function () {

            var directionsDisplay;
            var directionsService = new google.maps.DirectionsService();

console.log(scope.map)
            if (scope.map) {
                console.log("map is here in child")
                directionsDisplay = new google.maps.DirectionsRenderer();
                directionsDisplay.setMap(scope.map.control.getGMap());
            } else {
                console.log("points ctrl can not read map in scope");
            }


            var startPoint = scope.startPoint || "";
            var destPoint = scope.destPoint || "";

            var request = {
                origin: startPoint,
                destination: destPoint,
                travelMode: google.maps.TravelMode.DRIVING
            }
            directionsService.route(request, function (response, status) {
                if (status == google.maps.DirectionsStatus.OK) {
                    directionsDisplay.setDirections(response);

                } else {
                    console.log(status)
                }

            });
        }
    }
})
(window, angular);