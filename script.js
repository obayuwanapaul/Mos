$(document).ready(function() {
    // Transition effect for navbar 
     
       /* For the sticky navigation */
    $('.js--about_us').waypoint(function(direction) {
        if (direction == "down") {
            $('.nav').addClass('sticky');
        } else {
            $('.nav').removeClass('sticky');
        }
    }, {
      offset: '60px;'
    });
});