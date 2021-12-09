$(document).ready(function(){
    'use strict';
    // banner slider;
    $('.banner-slider').slick({
        arrows: false,
        dots: true,
        autoplay:true,
    });

    // about video pop up
    $('.venobox').venobox();

    // banner slider;
    $('.testimonial-slider').slick({
        arrows: false,
        dots: true,
        slidesToShow :2,
    });


});