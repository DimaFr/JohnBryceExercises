/**
 * Created by admin on 7/27/14.
 */
(function (window, angular) {
    angular.module('myMap', ['google-maps'])
        .controller({'MapController': mapController})


    function mapController($scope) {
        //create map and set default position
        this.map = {
            center: {
                latitude: 45,
                longitude: -73
            },
            zoom: 4
        }
        console.log('map should init')
//TODO: add alert if geolocation is not supported by browser
//TODO: create geolocation service!!!
        if ("geolocation" in navigator) {
            /* geolocation is available */
            console.log("geolocation is available")
        } else {
            /* geolocation IS NOT available */
            console.log("geolocation IS NOT available")
        }
        //Set current position
        var onSuccess = function (position) {
            console.log(position);
            this.map = {center: {
                latitude: position.coords.latitude,
                longitude: position.coords.longitude
            },
                zoom: 14};
            $scope.$digest();
        }.bind(this)

        function onError(error) {
            console.log("Code: " + error.code + "\n" + "Message: " + error.message + "\n")
        }

        navigator.geolocation.getCurrentPosition(onSuccess, onError);
    }

}(window, angular));