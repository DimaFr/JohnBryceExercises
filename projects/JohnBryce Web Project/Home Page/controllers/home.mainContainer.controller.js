/**
 * Created by admin on 8/3/14.
 */
(function (window, angular) {
    angular.module('homePage')
        .controller({'HomeMainContainerController': ['$http', 'CarsFactory', mainContainerController]})

    function mainContainerController(http, CarsFactory) {


             this.hireNowBtnClicked = function () {


            CarsFactory.GetCarsPromise.then(function(data){
                var cars = data;
                console.log(data);
            });



//            var cars = CarsFactory.CarsArray;
//            console.log(cars);
//            var cars = {};
//            var jsonUrlString = '../cardata.json';
//            http.get(jsonUrlString)
//                .success(function (response) {
//                    console.log(response.cars);
//                })
//                .error(function (data) {
//                    console.log(data);
//
//                })


        }


    }


}(window, angular));