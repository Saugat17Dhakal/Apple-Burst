(function($) {
    "use strict";
    $(document).ready(function() {
        //jQuery for page scrolling feature - requires jQuery Easing plugin
        $('a.page-scroll').on('click', function(event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top
            }, 1500, 'easeInOutExpo');
            event.preventDefault();
        });
        $(".main-menu-area ul>li>ul").parent("li").addClass("menu-item-has-children");
        $('.main-menu-area ul li a').on('click', function(e) {
            var element = $(this).parent('li');
            if (element.hasClass('open')) {
                element.removeClass('open');
                element.find('li').removeClass('open');
                element.find('ul').slideUp(300, "swing");
            } else {
                element.addClass('open');
                element.children('ul').slideDown(300, "swing");
                element.siblings('li').children('ul').slideUp(300, "swing");
                element.siblings('li').removeClass('open');
                element.siblings('li').find('li').removeClass('open');
                element.siblings('li').find('ul').slideUp(300, "swing");
            }
        })
        $("#loading").delay(2000).fadeOut(500);
        $("#loading-center").on("click", function() {
            $("#loading").fadeOut(500);
        });
        var link,
            toggleScrollToTopLink = function() {
                if ($("body").scrollTop() > 0 || $("html").scrollTop() > 0) {
                    link.fadeIn(400);
                } else {
                    link.fadeOut(400);
                }

            };
        link = $(".scroll-img");
        $(window).scroll(toggleScrollToTopLink);
        toggleScrollToTopLink();
        link.on("click", function() {
            $("body").animate({
                scrollTop: 0
            });
            $("html").animate({
                scrollTop: 0
            });
        });
        var fixed_top = $(".menu-scroll");
        $(window).on('scroll', function() {
            if ($(this).scrollTop() > 100) {
                fixed_top.addClass("menu-fixed animated fadeInDown");
            } else {
                fixed_top.removeClass("menu-fixed animated fadeInDown");
            }
        });
        $(".color-btn").on("click", function() {
            $(".box-style").toggleClass('open')
        });
      jQuery(document).ready(function() {
        });
    });
})(jQuery);