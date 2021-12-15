$(function () {
    $('.tour-tabs__top-item').on('click', function (e) {
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
    $(window).scroll(startCounter);
    function startCounter() {
        if ($(window).scrollTop() > 5000) {
            $(window).off("scroll", startCounter);
            $('.statistic__item-num').each(function () {
                var $this = $(this);
                jQuery({ Counter: 0 }).animate({ Counter: $this.text() }, {
                    duration: 1000,
                    easing: 'swing',
                    step: function () {
                        $this.text(Math.ceil(this.Counter));
                    }
                });
            });
        }
    }































    // var mixer = mixitup(containerEl, {
    // });

    // $('.statistic__item-num').each(function(){
    //     $(this).prop('statistic__items', 0).animate({
    //         Counter:$(this).text()
    //     },{
    //         duration: 1000,
    //         easing: 'swing',
    //         step: function(now){
    //             $(this).text(Math.ceil(now))
    //         }
    //     });
    // });




    // var number = document.querySelector('.number'),
    //     numberTop = number.getBoundingClientRect().top,
    //     start = +number.innerHTML, end = +number.dataset.max;

    // window.addEventListener('scroll', function onScroll() {
    //     if (window.pageYOffset > numberTop - window.innerHeight / 2) {
    //         this.removeEventListener('scroll', onScroll);
    //         var interval = setInterval(function () {
    //             number.innerHTML = ++start;
    //             if (start == end) {
    //                 clearInterval(interval);
    //             }
    //         }, 0.1);
    //     }
    // });

    // var number1 = document.querySelector('.number1'),
    //     number1Top = number1.getBoundingClientRect().top,
    //     start1 = +number1.innerHTML, end1 = +number1.dataset.max;

    // window.addEventListener('scroll', function onScroll() {
    //     if (window.pageYOffset > number1Top - window.innerHeight / 2) {
    //         this.removeEventListener('scroll', onScroll);
    //         var interval1 = setInterval(function () {
    //             number1.innerHTML = ++start1;
    //             if (start1 == end1) {
    //                 clearInterval(interval1);
    //             }
    //         }, 0.1);
    //     }
    // });

    // var number2 = document.querySelector('.number2'),
    //     number2Top = number2.getBoundingClientRect().top,
    //     start2 = +number2.innerHTML, end2 = +number2.dataset.max;

    // window.addEventListener('scroll', function onScroll() {
    //     if (window.pageYOffset > number2Top - window.innerHeight / 2) {
    //         this.removeEventListener('scroll', onScroll);
    //         var interval2 = setInterval(function () {
    //             number2.innerHTML = ++start2;
    //             if (start2 == end2) {
    //                 clearInterval(interval2);
    //             }
    //         }, 0.1);
    //     }
    // });

    // var number3 = document.querySelector('.number3'),
    //     number3Top = number3.getBoundingClientRect().top,
    //     start3 = +number3.innerHTML, end3 = +number3.dataset.max;

    // window.addEventListener('scroll', function onScroll() {
    //     if (window.pageYOffset > number3Top - window.innerHeight / 2) {
    //         this.removeEventListener('scroll', onScroll);
    //         var interval3 = setInterval(function () {
    //             number3.innerHTML = ++start3;
    //             if (start3 == end3) {
    //                 clearInterval(interval3);
    //             }
    //         }, 0.1);
    //     }
    // });
})