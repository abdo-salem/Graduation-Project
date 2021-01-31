/*global $, window*/
$(function () {

    "use strict";

    $('.header').height($(window).height());

    $(window).on('resize', function () {
        $('.header').height($(window).height());
    });

    $('.arrow').click(function () {
        $('html, body').animate({
            scrollTop: $('.news').offset().top
        }, 1000);
    });

    $('.bar').click(function () {
        $('.drop').slideToggle('active-links');
    });
    
    $('.header .drop').height($(window).height());
    //>>>>>>>>>>>>>>>>>>Start Story Of Success<<<<<<<<<<<<<<<<<<<<<<<
    $(window).scroll(function () {

        var wScroll = $(this).scrollTop(),
            offset = Math.min(0, wScroll - $('.story').offset().top + $(window).height() - 550);

        if (wScroll > $('.story').offset().top - $(window).height()) {
            $('.character').css({
                'transform': 'translate(' + Math.abs(offset) + 'px, ' + Math.abs(offset * 0.001) + 'px)'
            });
        }
    });
    //>>>>>>>>>>>>>>>>>>End Story Of Success<<<<<<<<<<<<<<<<<<<<<<<
    //>>>>>>>>>>>>>>>>>>Start Scroll Top Element<<<<<<<<<<<<<<<<<<<<<<<
    var scrollIcon = $("#scroll-top");

    $(window).scroll(function () {
        //        console.log($(this).scrollTop());
        if ($(this).scrollTop() >= 800) {

            scrollIcon.show(600);
        } else {
            scrollIcon.hide(600);
        }

    });

    scrollIcon.click(function () {
        $("body,html").animate({
            scrollTop: 0
        }, 1100);
    });
    //>>>>>>>>>>>>>>>>>>>>>End Scroll Top Element<<<<<<<<<<<<<<<<<<<<<<
});