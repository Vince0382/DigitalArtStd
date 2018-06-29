// Write your JavaScript code.
$(document).ready(function() {
        $(window).on("scroll", function() {
            if ($(window).scrollTop() > 2) {
                $(".customNav").addClass("active");
                $(".logo").addClass("active");
                $("#mainLogo").attr("src","/images/Digital_min.png");

            } else {
                //remove the background property so it comes transparent again (defined in your css)
                $(".customNav").removeClass("active");
                $(".logo").removeClass("active");
                $("#mainLogo").attr("src","/images/Digital.png");
            }

            $(".shImg").each(function(i, el) {
                var el = $(el);
                if (el.visible(true)) {
                    el.addClass("shAnim"); 
                } 
            });

            $(".shFrame").each(function(i, el) {
                var el = $(el);
                if (el.visible(true)) {
                    el.addClass("shAnim");
                } 
            });
        });

        $('#carouselButton').click(function() {
            $('html, body').animate({
                scrollTop: $(".body-content").offset().top
            }, 1500);
        });

        $('.nav-link').each(function() {
            if ($(this).prop('href') == window.location.href) {
              $(this).addClass('active');
            }
        });

});

$(function(){
$(".dropdown").hover(            
        function() {
            $('.dropdown-menu', this).stop( true, true ).fadeIn("fast");
            $(this).toggleClass('open');
            $('b', this).toggleClass("caret caret-up");                
        },
        function() {
            $('.dropdown-menu', this).stop( true, true ).fadeOut("fast");
            $(this).toggleClass('open');
            $('b', this).toggleClass("caret caret-up");                
        });
});

(function($) {

  /**
   * Copyright 2012, Digital Fusion
   * Licensed under the MIT license.
   * http://teamdf.com/jquery-plugins/license/
   *
   * @author Sam Sehnert
   * @desc A small plugin that checks whether elements are within
   *     the user visible viewport of a web browser.
   *     only accounts for vertical position, not horizontal.
   */

  $.fn.visible = function(partial) {
    
      var $t            = $(this),
          $w            = $(window),
          viewTop       = $w.scrollTop(),
          viewBottom    = viewTop + $w.height(),
          _top          = $t.offset().top,
          _bottom       = _top + $t.height(),
          compareTop    = partial === true ? _bottom : _top,
          compareBottom = partial === true ? _top : _bottom;
    
    return ((compareBottom <= viewBottom) && (compareTop >= viewTop));

  };
    
})(jQuery);
