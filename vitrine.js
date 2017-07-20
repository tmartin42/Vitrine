$(document).ready(function() {

    var scrollheight = document.body.scrollHeight;
    var windowheight = window.innerHeight;
    var meishidden = true;


    $(document).on('scroll', function(e) {
         var scrolltop = window.pageYOffset;
         var scrollamount = (scrolltop / (scrollheight-windowheight)) * 100;
         $('.parallax').css('top', -scrolltop * 0.5 + 'px');


        if (scrolltop >= 650 && meishidden == true) {
            meishidden = false;
            $('.me').removeClass('hiding');
        } else if (scrolltop < 650 && meishidden == false) {
            meishidden = true;
            $('.me').addClass('hiding');
        }
    })

    $(document).trigger('scroll');

})
