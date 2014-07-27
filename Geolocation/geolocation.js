/**
 * Created by dimitry.friedman on 7/27/2014.
 */
(function (window, angular) {
//http://www.marthijnvandenheuvel.com/2014/05/07/create-an-angularjs-google-maps-directive/

    //http://ericpanorel.net/2013/08/11/angularjs-and-google-maps/
    angular.module('geolocation', [])

        .directive(myMap, function () {

            var linkFunction = function (scope, elem, attrs) {

                var map,

            }


            return {
                restrict: 'A',
                template: '<div id="map-canvas" class="jumbotron"></div>',
                replace: true,
                link: linkFunction
            }
        })


})(window, angular);