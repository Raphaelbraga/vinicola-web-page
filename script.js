new WOW().init();

$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        margin: 5,
        loop: true,
        dots: false,
        autoplay: true,
        fluidSpeed: 10000,
        autoplayTimeout: 3000,
        autoplaySpeed: true,
        responsive: {
            0: {
                items: 1
            },
            360: {
                items: 3
            }
        }
    });
});
