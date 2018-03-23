$(document).ready(function() { 

//navbar-collapse toggler for when link is clicked
$("body").click(function(event) {
         if ($(".navbar-collapse").is(":visible") && $(".navbar-toggler").is(":visible") ) {
            $('.navbar-collapse').collapse('toggle');
        }
  });

})