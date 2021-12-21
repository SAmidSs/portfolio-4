$(function () {
    $(function () {
        $('.menu__btn').on('click', function () {
            $('.menu__list').toggleClass('menu__list--active');
            $('.menu__btn').toggleClass('menu__btn--active');
            $('body').toggleClass('menu-open');
            $('header').toggleClass('header__menu');  
        });
    })


    $("#menu").on("click", "a", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({ scrollTop: top }, 900);
        $('.menu__link').removeClass('menu__link--active');
        $(this).addClass('menu__link--active');
    });




    $('.portfolio__content').slick({
        dots: false,
        arrows: false,
        slidesToShow: 5.5,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1800,
            settings: {
                slidesToShow: 4.5,
                slidesToScroll: 1,
            }
          },
          {
            breakpoint: 1380,
            settings: {
                slidesToShow: 3.5,
                slidesToScroll: 1,
            }
          },
          {
            breakpoint: 980,
            settings: {
                slidesToShow: 2.5,
                slidesToScroll: 1,
            }
          },
          {
            breakpoint: 740,
            settings: {
                slidesToShow: 1.5,
                slidesToScroll: 1,
            }
          },
          {
            breakpoint: 530,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
          }
        ]
    });

    $('.quote__items').slick({
        dots: false,
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        // fade: true,
        prevArrow: '<button type="button" class="slick-prev"><svg xmlns="http://www.w3.org/2000/svg"xmlns:xlink="http://www.w3.org/1999/xlink"width="32px" height="32px"><path fill-rule="evenodd"  fill="rgb(255, 255, 255)"d="M16.263,0.481 C7.796,0.481 0.911,7.361 0.911,15.821 C0.911,24.281 7.796,31.166 16.263,31.166 C24.717,31.166 31.602,24.281 31.602,15.821 C31.602,7.361 24.717,0.481 16.263,0.481 L16.263,0.481 ZM16.263,30.065 C8.408,30.065 2.016,23.675 2.016,15.821 C2.016,7.966 8.408,1.580 16.263,1.580 C24.111,1.580 30.503,7.966 30.503,15.821 C30.503,23.675 24.111,30.065 16.263,30.065 L16.263,30.065 Z"/><path fill-rule="evenodd"  fill="rgb(255, 255, 255)"d="M20.279,8.169 C20.062,7.955 19.717,7.955 19.497,8.169 L11.851,15.821 L19.497,23.479 C19.607,23.585 19.747,23.639 19.887,23.639 C20.032,23.639 20.172,23.585 20.279,23.479 C20.493,23.265 20.493,22.915 20.279,22.700 L13.405,15.821 L20.279,8.947 C20.493,8.730 20.493,8.383 20.279,8.169 L20.279,8.169 Z"/></svg></button >',

        nextArrow: '<button type="button" class="slick-next"><svg xmlns="http://www.w3.org/2000/svg"xmlns:xlink="http://www.w3.org/1999/xlink"width="32px" height="32px"><path fill-rule="evenodd"  fill="rgb(255, 255, 255)"d="M15.992,0.481 C7.532,0.481 0.646,7.361 0.646,15.826 C0.646,24.284 7.532,31.166 15.992,31.166 C24.453,31.166 31.338,24.284 31.338,15.826 C31.338,7.361 24.453,0.481 15.992,0.481 L15.992,0.481 ZM15.992,30.065 C8.139,30.065 1.752,23.675 1.752,15.826 C1.752,7.972 8.139,1.580 15.992,1.580 C23.844,1.580 30.233,7.972 30.233,15.826 C30.233,23.675 23.844,30.065 15.992,30.065 L15.992,30.065 Z"/><path fill-rule="evenodd"  fill="rgb(255, 255, 255)"d="M11.971,8.169 C11.754,8.383 11.754,8.730 11.971,8.947 L18.848,15.826 L11.971,22.700 C11.754,22.915 11.754,23.265 11.971,23.479 C12.077,23.585 12.217,23.639 12.362,23.639 C12.499,23.639 12.642,23.585 12.752,23.479 L20.406,15.826 L12.752,8.169 C12.531,7.955 12.182,7.955 11.971,8.169 L11.971,8.169 Z"/></svg></button>'
        // responsive: [
        //   {
        //     breakpoint: 1030,
        //     settings: {
        //       slidesToShow: 2,
        //       slidesToScroll: 2,
        //     }
        //   },
        //   {
        //     breakpoint: 677,
        //     settings: {
        //       slidesToShow: 1,
        //       slidesToScroll: 1
        //     }
        //   }
        // ]
    });




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