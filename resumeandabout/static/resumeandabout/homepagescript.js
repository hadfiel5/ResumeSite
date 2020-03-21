$(window).scroll(function(){
    var nav = $('#navbarMain');
    var mastheight = $('#masthead').height();

    if ($(window).scrollTop() >= mastheight - nav.outerHeight()) {

        nav.addClass('masthead-image');

    } else {
        nav.removeClass('masthead-image');
    }
});