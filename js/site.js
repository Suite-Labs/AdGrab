$(".section-two-zoom").click(function () {
    $('html, body').animate({
        scrollTop: $(".section-two").offset().top
    }, 500);
});