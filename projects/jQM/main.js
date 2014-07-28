/**
 * Created by admin on 7/27/14.
 */
$(window).ready(function () {


    $(document).on('pageinit','#registerPage',function(){
       alert("registration page initialized");
        $("#email").bind('swipeleft',function(){
            alert("swiped left");
        });
        $("#email").bind('swiperight',function(){
            alert("swiped right");
        });


    })

    $(document).on('pageinit','#listPage',function(){

        var addCarBtn = $("addCarBtn");
        console.log(addCarBtn);
        addCarBtn.bind('vclick',function(){
            var dividersList = $("li[data-role='list-divider']");
            console.log(dividersList);


        });


    });


        /*
       1. add li then refresh list (div)!!!!
       2.  get first letter of a new car
       3. charAt[0];
       4. list dividers - search for letters
       list divider
       5.  if found insert (meanwhile as last element)
       6. if not create new with this letter
       7. add it in place with new car as brother
        */






});