document.addEventListener('DOMContentLoaded', function() {
    if (typeof jQuery !== 'undefined' && typeof jQuery.fn.slick !== 'undefined') {
        var $carousel = jQuery('.carousel');
        if ($carousel.length > 0) { // Check if the carousel element exists
            $carousel.slick({
                dots: false,
                infinite: true,
                speed: 500,
                slidesToShow: 1,
                slidesToScroll: 1,
                adaptiveHeight: true,
                arrows: true,
                prevArrow: '.carousel-prev',
                nextArrow: '.carousel-next',
                fade: true,
                cssEase: 'linear',
                responsive: [
                    {
                        breakpoint: 768,
                        settings: {
                            arrows: false,
                            fade: true
                        }
                    }
                ]
            });
        } else {
            console.error('Carousel element not found.');
        }
    } else {
        console.error('jQuery or Slick carousel not loaded');
    }
});
