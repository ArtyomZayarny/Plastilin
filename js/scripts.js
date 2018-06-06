$('document').ready(function () {

    //Slider
    /*Get button*/
    var next = $('#next');

    var curSlide = $('.slider-item');


    next.click(function () {
        event.preventDefault();
        curSlide.toggleClass('show');
    });

    function checkPosition() {
        if (window.matchMedia('(max-width: 767px)').matches) {

            setInterval(function () {
                curSlide.toggleClass('show');
                $('span.dot').toggleClass('dot-active');
            }, 3000);
        }
    };
    checkPosition();
});