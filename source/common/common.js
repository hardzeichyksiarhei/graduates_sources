//Fonts
import '../fonts/fonts.sass';

//Common plugin style
import 'bootstrap-sass-grid/css/bootstrap-sass-grid.css';

//Common style
import './common.sass';

$(function () {

    let
        $window = $(window),
        windowHeight = 0;

    //---------------- Methods -----------------
    //------------------------------------------

    function onResize() {
        windowHeight = $(window).height();
    }onResize();

    function arrowRotate() {
        if ($window.scrollTop() > windowHeight / 2) {
            $('.arrow-down__icon').css({
                'transform': 'rotate(180deg)'
            });
        }
        else {
            $('.arrow-down__icon').css({
                'transform': 'rotate(0)'
            });
        }
    }arrowRotate();

    function initFirstLetter() {
        $('.init-first-letter').each(function () {
            this.innerHTML = this.innerHTML.replace( /^(.+?\s)/, '<span class="first-letter">$1</span>' );
        });
    }initFirstLetter();

    //------------------------------------------
    //------------------------------------------



    //---------------- Events ------------------
    //------------------------------------------

    $window.on('scroll', function () {
        arrowRotate();
    });

    $window.on('resize', function () {
        onResize();
    });

    //------------------------------------------
    //------------------------------------------

});