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
            fade: true, // Add this line for fade effect
            cssEase: 'linear', // Optional: Makes the fade smoother
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        arrows: false,
                        fade: true // Ensure fade effect is also applied on smaller screens
                    }
                }
            ]
        });
    } else {
        console.error('jQuery or Slick carousel not loaded');
    }
});
