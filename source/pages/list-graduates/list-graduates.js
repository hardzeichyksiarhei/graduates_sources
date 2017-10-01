//Common plugin style
import 'owl.carousel/dist/assets/owl.carousel.css';

import "./list-graduates.sass"

import 'owl.carousel';

$(function () {

    let
        $window = $(window),
        graduatesList = $('.graduates-list');

    //---------------- Plugins -----------------
    //------------------------------------------

    $('.date-filter-carousel').owlCarousel({
        items: 10,
        nav: true,
        navSpeed: 800,
        dotsSpeed: 800,
        rtl:true,
        navText: [
            '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="0 0 129 129" enable-background="new 0 0 129 129" width="512px" height="512px">' +
            '    <path d="m40.4,121.3c-0.8,0.8-1.8,1.2-2.9,1.2s-2.1-0.4-2.9-1.2c-1.6-1.6-1.6-4.2 0-5.8l51-51-51-51c-1.6-1.6-1.6-4.2 0-5.8 1.6-1.6 4.2-1.6 5.8,0l53.9,53.9c1.6,1.6 1.6,4.2 0,5.8l-53.9,53.9z"/>' +
            '</svg>',
            '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="0 0 129 129" enable-background="new 0 0 129 129" width="512px" height="512px">' +
            '    <path d="m40.4,121.3c-0.8,0.8-1.8,1.2-2.9,1.2s-2.1-0.4-2.9-1.2c-1.6-1.6-1.6-4.2 0-5.8l51-51-51-51c-1.6-1.6-1.6-4.2 0-5.8 1.6-1.6 4.2-1.6 5.8,0l53.9,53.9c1.6,1.6 1.6,4.2 0,5.8l-53.9,53.9z"/>' +
            '</svg>'
        ]
    });

    //------------------------------------------
    //------------------------------------------



    //---------------- Methods -----------------
    //------------------------------------------

    function onResize() {
        graduatesList.find('.graduates-list__item').css('height', 'auto').equivalent();
    }onResize();

    //------------------------------------------
    //------------------------------------------



    //---------------- Events ------------------
    //------------------------------------------

    $window.on('resize', function () {
        onResize();
    });

    //------------------------------------------
    //------------------------------------------

});

$.fn.equivalent = function () {
    let $blocks = $(this),
        maxH    = $blocks.eq(0).height();

    $blocks.each(function () {
        maxH = ( $(this).height() > maxH ) ? $(this).height() : maxH;
    });

    $blocks.height(maxH);
};