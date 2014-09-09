/**
 * Created by admin on 8/3/14.
 */
(function (window, angular) {
    angular.module('carRentApp')
        .config(function(datepickerPopupConfig){
            datepickerPopupConfig.showButtonBar = false;
        })
        .controller({'HomeMainContainerController': ['$scope', 'CarsFactory', mainContainerController]})


    function mainContainerController(scope, CarsFactory) {
        var timeStamp = new Date().getTime();
        console.log(timeStamp + "container comtroller loaded")

        scope.showImage = false;
        scope.offer = {};
        scope.offer.msg = "Here goes template with some car class. Lorem ipsum dolor" +
            " sit amet, consectetur adipisicing elit. A" + "liquid amet commodi delectus" +
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
            scope.car.ImagePath = "resources/Cars/" + scope.car.mediumImage;
            scope.showImage = true;

        });


        scope.bookNowBtnClicked = function () {
            CarsFactory.getCarsData().then(function (data) {

            });
            var myCar = CarsFactory.getCarById(1111111);
            console.log(myCar);

        }

        /* OFFER WELL
         * Date picker
         * */
        scope.sendNewsletter = false;
        scope.startDate = new Date();
        scope.minDate = scope.startDate;
        //TODO: change - start date plus 7 days
        scope.endDate = new Date(scope.startDate.getTime() + 7 * 24 * 60 * 60 * 1000);
        scope.dateOptions = {
            showWeeks: 'false',
            maxMode: 'day'
        }
        //start date picker
        scope.open1 = function ($event) {
            $event.preventDefault();
            $event.stopPropagation();
            scope.opened2 = false;
            scope.opened1 = true;
        }
        //end date picker
        scope.open2 = function ($event) {
            $event.preventDefault();
            $event.stopPropagation();
            scope.opened1 = false;
            scope.opened2 = true;
        }
        scope.sendBtnClicked = function () {
            if(this.offerForm.$valid) {
                console.log(scope.startDate + "\n" + scope.endDate + "\n" + scope.email + "\n" + scope.sendNewsletter)
            }else(console.log("form invalid"))
        }


    }


}(window, angular));