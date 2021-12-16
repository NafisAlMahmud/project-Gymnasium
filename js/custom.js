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
    $('.brand-slider').slick({
        arrows: true,
        
        slidesToShow :5,
        centerMode: true,
        centerPadding: '0px',
        prevArrow: '<i class = "fas fa-chevron-left prevArrow"></i>',
        nextArrow: '',
    });


});