/**
 * Created by admin on 7/27/14.
 */
(function () {

    angular.module('myMap', ['google-maps'])

        .controller('MapController',function () {
        this.map = {
            center: {
                latitude: 45,
                longitude: -73
            },
            zoom: 4
        }
            console.log('map should init')
    })


}());