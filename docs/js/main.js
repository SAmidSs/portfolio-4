$(function () {
    $('.tour-tabs__top-item').on('click', function(e){
        e.preventDefault();
        $('.tour-tabs__top-item').removeClass('tour-tabs__top-item--active');
        $(this).addClass('tour-tabs__top-item--active');

        $('.tour-tabs__content-item').removeClass('tour-tabs__content-item--active');
        $($(this).attr('href')).addClass('tour-tabs__content-item--active');
    });


    var mixer = mixitup('.portfolio__content', {
        animation: {
            "duration": 250,
            "nudge": true,
            "reverseOut": true,
            "effects": "fade translateZ(-100px)"
        }
    });
    // var mixer = mixitup(containerEl, {
    // });
})