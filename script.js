$(document).ready(function() {
    
    var nav = $('#nav')
    $(window).scroll(function() {
        if ( $(this).scrollTop() > 175 ) {
            nav.addClass('nav-fixed');
        } else {
            nav.removeClass('nav-fixed');
        }
    });
});