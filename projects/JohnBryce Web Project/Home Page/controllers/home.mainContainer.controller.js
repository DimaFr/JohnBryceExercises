/**
 * Created by admin on 8/3/14.
 */
(function (window, angular) {
    angular.module('carRentApp')
        .controller({'HomeMainContainerController': ['$scope', 'CarsFactory', mainContainerController]})

    function mainContainerController(scope, CarsFactory) {
        var timeStamp = new Date().getTime();
        console.log(timeStamp+"container comtroller loaded")

        scope.showImage = false;
        scope.offer = {};
        scope.offer.msg = "Here goes template with some car class. Lorem ipsum dolor" +
            " sit amet, consectetur adipisicing elit. A" + "liquid amet commodi delectus"+
        "  Lorem ipsum dolor sit amet, consectetur adipisicing elit." +
        " A aliquid amet commodi delectus doloremque dolorum ducimus explicabo" +
        " facere, hic illo laboriosam libero nesciunt nobis omnis repellendus" +
        " sapiente voluptatum. Dolorum, fugia";
        scope.offer.mainMsg = "New 2014 design, the little five-door hatchback is fun to toss around and" +
            " has a clean if modestly equipped cabin. Now at 20% off." +
            " doloremque dolorum ducimus explicabo facere, hic illo laboriosam libero" +
            " nesciunt nobis omnis repellendus sapiente voluptatum. Dolorum, fugiat!";

        CarsFactory.getCarsData().then(function (data) {

            scope.car = CarsFactory.getCarById(1111111);
            console.log(scope.car);
            scope.carImagePath = "resources/Cars/" + scope.car.mediumImage;
            scope.showImage = true;

        });


        this.bookNowBtnClicked = function () {
            CarsFactory.getCarsData().then(function (data) {

            });
            var myCar = CarsFactory.getCarById(1111111);
            console.log(myCar);

        }

    }


}(window, angular));