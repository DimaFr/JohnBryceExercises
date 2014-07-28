/**
 * Created by dimitry.friedman on 7/27/2014.
 */
(function (window, angular) {
//http://www.marthijnvandenheuvel.com/2014/05/07/create-an-angularjs-google-maps-directive/

    //http://ericpanorel.net/2013/08/11/angularjs-and-google-maps/
    angular.module('geolocation', [])

        .directive('myMap', function () {

            var linkFunction = function (scope, elem, attrs) {

                console.log(attrs.ngModel);

                var map,infoWindow;
                var markers =[];

                var mapOptions={
                    center: new google.maps.LatLng(50,2),
                    zoom:4,
                    mapTypeId: google.maps.MapTypeId.ROADMAP,
                    zoomControl: true,
                    panControl: true

                }
                console.log(elem[0]);
                function initMap(){
                  if(map===void 0){
                      //TODO: why elem[0]
                      console.log(elem[0]);
                      map=new google.maps.Map(elem[0],mapOptions)

                  }
                }
                initMap();

            };


            return {
                restrict: 'A',
                template: '<div id="map-canvas" class="my-jumbotron"></div>',
                replace: true,
                link: linkFunction
            }
        })


})(window, angular);