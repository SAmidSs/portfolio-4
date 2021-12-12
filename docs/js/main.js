$(function () {
    $('.tour-tabs__top-item').on('click', function(e){
        e.preventDefault();
        $('.tour-tabs__top-item').removeClass('tour-tabs__top-item--active');
        $(this).addClass('tour-tabs__top-item--active');

        $('.tour-tabs__content-item').removeClass('tour-tabs__content-item--active');
        $($(this).attr('href')).addClass('tour-tabs__content-item--active');
    });
})