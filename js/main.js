AOS.init({
    duration: 750, // values from 0 to 3000, with step 50ms
    disable: 'mobile',
    once: true,
});
if ($(window).width() < 992) {
    $('.navbar-nav').removeClass('nav-hover');
}
if ($(window).width() < 576) {
    $('.logo-container').css('width', '100px');
}
var scrollTop = 0;
$(window).scroll(function () {
    scrollTop = $(window).scrollTop();
    $('.counter').html(scrollTop);

    if (scrollTop >= 100) {
        $('nav').addClass('nav-scroll');
        $('.nav-item').addClass('nav-item-scroll');
        $('.logo-container').css('width', '100px');
    } else if (scrollTop < 100) {
        if ($(window).width() < 576) {
            $('.logo-container').css('width', '100px');
        }
        else {
            $('nav').removeClass('nav-scroll');
            $('.nav-item').removeClass('nav-item-scroll');
            $('.logo-container').css('width', '200px');
        }
    }
});
