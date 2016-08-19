$(document).ready(function() {
    
    //Nav Scroll Script
    var nav = $('#nav');
    $(window).scroll(function() {
        if ( $(this).scrollTop() > 175 && $(this).width() > 500 ) {
            nav.addClass('nav-fixed');
        } else {
            nav.removeClass('nav-fixed');
        }
    });
    
    
    //Mobile Menu Button Script
    var menu = $('#menu-btn');
    menu.click(function() {
        if (nav.css('display') === 'none') {
            nav.css('display', 'block');
        } else {
            nav.css('display', 'none');
        }
    });
    
});