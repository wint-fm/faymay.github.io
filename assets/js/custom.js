document.addEventListener('DOMContentLoaded', function() {
    if (typeof jQuery !== 'undefined' && typeof jQuery.fn.slick !== 'undefined') {
        jQuery('.carousel').slick({
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            adaptiveHeight: true,
            arrows: true, // Ensure arrows are enabled
            responsive: [
            {
                breakpoint: 736,
                settings: {
                    arrows: false, // Hide arrows on smaller screens
                }
            }
            ]
        });
        } else {
            console.error('jQuery or Slick carousel not loaded');
    }
});
