document.addEventListener('DOMContentLoaded', function() {
    if (typeof jQuery !== 'undefined' && typeof jQuery.fn.slick !== 'undefined') {
        jQuery('.carousel').slick({
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            adaptiveHeight: true,
            arrows: true,
            prevArrow: '.carousel-prev',
            nextArrow: '.carousel-next',
            responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                }
            }
            ]
        });
    } else {
        console.error('jQuery or Slick carousel not loaded');
    }
});