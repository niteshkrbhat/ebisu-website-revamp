/*-----------------------------------------------------------------------------------
    Template Name: Landio - Multipurpose Landing Page HTML Template
    Template URI: https://webtend.net/demo/html/landio/
    Author: WebTend
    Author URI:  https://webtend.net/
    Version: 1.3

    Note: This is Main Js file
-----------------------------------------------------------------------------------
    Js INDEX
    ===================
    #. Main Menu
    #. Brand Slider One
    #. Brand Slider Two
    #. Progress bar
    #. Active Nice Select
    #. Hero Slider
    #. Sticky Header
    #. Scroll To Top
-----------------------------------------------------------------------------------*/

(function ($) {
    'use strict';

    // ===== Main Menu
    function mainMenu() {
        const navbarToggler = $('.navbar-toggler'),
            navMenu = $('.nav-menu'),
            mobilePanel = $('.mobile-slide-panel'),
            mobilePanelMenu = $('.mobile-menu'),
            mobileOverly = $('.panel-overlay'),
            navClose = $('.panel-close');

        // Show Mobile Slide Panel
        navbarToggler.on('click', function (e) {
            e.preventDefault();
            mobilePanel.toggleClass('panel-on');
        });

        // Close Mobile Slide Panel
        navClose.add(mobileOverly).on('click', function (e) {
            e.preventDefault();
            mobilePanel.removeClass('panel-on');
        });

        // Adds toggle button to li items that have children
        navMenu.find('li a').each(function () {
            if ($(this).next().length > 0) {
                $(this).append('<span class="dd-trigger"><i class="fas fa-angle-down"></i></span>');
            }
        });

        mobilePanelMenu.find('li a').each(function () {
            if ($(this).next().length > 0) {
                $(this).append('<span class="dd-trigger"><i class="fas fa-angle-down"></i></span>');
            }
        });

        // Expands the dropdown menu on each click
        mobilePanelMenu.find('.dd-trigger').on('click', function (e) {
            e.preventDefault();
            $(this).parent().parent('li').children('ul.sub-menu').stop(true, true).slideToggle(350);
            $(this).toggleClass('sub-menu-opened');
        });


        const offCanvasBtn = $('.off-canvas-btn'),
            offCanvasClose = $('.canvas-close'),
            canvasOverly = $('.canvas-overlay'),
            offCanvasPanel = $('.off-canvas-wrapper');

        // Show Off canvas Panel
        offCanvasBtn.on('click', function (e) {
            e.preventDefault();
            offCanvasPanel.addClass('canvas-on');
        });

        // Hide Off canvas Panel
        offCanvasClose.add(canvasOverly).on('click', function (e) {
            e.preventDefault();
            offCanvasPanel.removeClass('canvas-on');
        });
    }

    // ===== Brand Slider One
    function brandSlider() {
        const slider = $('.brand-slider-one-active');

        slider.slick({
            infinite: true,
            dots: false,
            arrows: false,
            speed: 500,
            slidesToShow: 5,
            slidesToScroll: 1,
            autoplay: false,
            autoplaySpeed: 5000,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 4,
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 500,
                    settings: {
                        slidesToShow: 2,
                    }
                },
            ]
        });
    }

    // ===== Active Nice Select
    function activeNiceSelect() {
        $('select').niceSelect();
    }

    // ===== Hero Slider
    function heroSlider() {
        const slider = $('.hero-slider');

        slider.slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: false,
            autoplaySpeed: 5000,
            speed: 500,
            arrows: true,
            fade: false,
            dots: true,
            swipe: true,
            prevArrow: '<button class="slick-arrow prev-arrow"><i  class="fas fa-angle-left"></i></button>',
            nextArrow: '<button class="slick-arrow next-arrow"><i  class="fas fa-angle-right"></i></button>',
            responsive: [
                {
                    breakpoint: 576,
                    settings: {
                        dots: false,
                    }
                },
                {
                    breakpoint: 425,
                    settings: {
                        dots: false,
                        arrows: false,
                    }
                }
            ]
        });
    }

    // ==== Sticky Header
    function stickyHeader() {
        const scroll_top = $(window).scrollTop(),
            siteHeader = $('.template-header');

        if (siteHeader.hasClass('sticky-header')) {
            if (scroll_top < 110) {
                siteHeader.removeClass('sticky-on');
            } else {
                siteHeader.addClass('sticky-on');
            }
        }
    }

    // ===== Scroll To Top
    function scrollToTop() {
        var $scrollUp = $('#scroll-top'),
            $lastScrollTop = 0,
            $window = $(window);

        $window.on('scroll', function () {
            var st = $(this).scrollTop();
            if (st > $lastScrollTop) {
                $scrollUp.removeClass('show');
            } else {
                if ($window.scrollTop() > 200) {
                    $scrollUp.addClass('show');
                } else {
                    $scrollUp.removeClass('show');
                }
            }
            $lastScrollTop = st;
        });

        $scrollUp.on('click', function (evt) {
            $('html, body').animate({ scrollTop: 0 }, 600);
            evt.preventDefault();
        });
    }

    /*---------------------
    === Document Ready  ===
    ----------------------*/
    $(document).ready(function () {
        mainMenu();
        testimonialActiveOne();
        testimonialActiveTwo();
        testimonialActiveThree();
        testimonialActiveFour();
        testimonialActiveFive();
        testimonialActiveSix();
        counterUp();
        serviceSliderActive();
        brandSlider();
        testimonialWidgetSlider();
        progressBar();
        activeNiceSelect();
        heroSlider();
        brandSliderTwo();
        screenshotSlider();
        videoPopup();
        teamSliderOne();
        scrollToTop();
        portfolioFilter();
    });

    /*---------------------
    === Window Scroll  ===
    ----------------------*/
    $(window).on('scroll', function () {
        stickyHeader();
    });

    /*------------------
    === Window Load  ===
    --------------------*/
    $(window).on('load', function () {
        preloader();

        // wow Init
        new WOW().init();
    });

})(jQuery);