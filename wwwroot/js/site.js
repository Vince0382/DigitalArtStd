// Write your JavaScript code.

var clicked = false;

$(document).ready(function() {

        window.setNavBar($(window).scrollTop());

        $(window).on("scroll", function() {

            var scrollTop = $(window).scrollTop();

            if (scrollTop < window.vhTOpx(120)) {
                
                window.setNavBar(scrollTop);

                $(".panelRight").css({
                    opacity: function() {
                        var elementHeight = $(this).height();
                        return 1 - (elementHeight - scrollTop) / elementHeight;}
                });

               
                var wHeight = $(window).height();
                $(".caption").css({
                    opacity: function() {
                        var elementHeight = wHeight;
                        return (elementHeight - scrollTop) / elementHeight;}
                            });
                $(".topFooter").css({
                    opacity: function() {
                        var elementHeight = wHeight;
                        return (elementHeight - scrollTop) / elementHeight;}
                            });
                $(".banner").css({
                    opacity: function() {
                        var elementHeight = wHeight;
                    return (elementHeight - scrollTop) / elementHeight;}
                });
            } else {
                $(".customNav").addClass("active");
                $(".logo").css("margin-top",0);
                $(".logo").addClass("active");
            }

                // End of top block actions



            $('.nav-link').each(function() {
                if ($(this).prop('href') == window.location.href) {
                  $(this).addClass('active');
                }
            });

            $('.topic').each(function(i) {
                    if ($(this).position().top -150 < scrollTop) {
                            $('.panel-item.active').removeClass('active');
                            $('.panel-item a').eq(i).parent().addClass('active');
                    }
            }); 
        //    if ($(window).width() <= 992){
                 $(".shImg").each(function(i, el) {
                    var el = $(el);
                    if (el.visible(true)) {
                        el.addClass("zoomInZoomOut"); 
                    } 
                    else {
                        el.removeClass("zoomInZoomOut")
                    }
                 });

                 $(".shHeader").each(function(i, el) {
                    var el = $(el);
                    if (el.visible(true)) {
                        el.addClass("fromLeft");
                    } 
                    else {
                        el.removeClass("fromLeft");
                    } 
                 });
                 $(".shBody").each(function(i, el) {
                    var el = $(el);
                    if (el.visible(true)) {
                        el.addClass("fromRight");
                    } 
                    else {
                        el.removeClass("fromRight");
                    } 
                 });  
        //     }

        });  // End of On Scroll 

       $('a[href*="#"]')
          // Remove links that don't actually link to anything
          .not('[href="#"]')
          .not('[href="#0"]')
          .click(function(event) {
            // On-page links
            if (
              location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
              && 
              location.hostname == this.hostname
            ) {
              // Figure out element to scroll to
              var target = $(this.hash);
              target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
              // Does a scroll target exist?
              if (target.length) {
                // Only prevent default if animation is actually gonna happen
                event.preventDefault();
                $('html, body').animate({
                  scrollTop: target.offset().top
                }, 500, function() {
                  // Callback after animation
                  // Must change focus!
                  var $target = $(target);
                  $target.focus();
                  if ($target.is(":focus")) { // Checking if the target was focused
                    return false;
                  } else {
                    $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                    $target.focus(); // Set focus again
                  };
                });
              }
            }
          });

                  
          // Magnifier
    
    /*      var scrollToSection = window.GetParam('section');
          var elem = document.getElementById(scrollToSection);
          if (elem != null){  
            window.scrollTo(elem.offsetLeft,elem.offsetTop);
          } */

         if ($(window).width() <= 992){
             $('.flip-box').click(function() {
                 if(clicked==false){ 
                  $(this).addClass('active');
                  clicked=true;
                 }else {
                  $(this).removeClass('active');
                  clicked=false;
                 }
             });
         }

});

function GoTo (section,me) {
    $(".panel-item.active").removeClass("active");
    $(".topic.active").removeClass("active");

    $(".shImg.zoomInZoomOut").removeClass("zoomInZoomOut");
    $(".shHeader.fromLeft").removeClass("fromLeft");
    $(".shBody.fromRight").removeClass("fromRight");

    var elem = document.getElementById(section);
    elem.classList.add("active");
    window.scrollTo(elem.offsetLeft,elem.offsetTop);
    elem.getElementsByClassName("shHeader")[0].classList.add("fromLeft");
    elem.getElementsByClassName("shBody")[0].classList.add("fromRight");
    elem.getElementsByClassName("shImg")[0].classList.add("zoomInZoomOut");

    me.parentNode.classList.toggle("active"); 
}

function setNavBar (scrollPos) {
    if (scrollPos > window.vhTOpx(25)) {
        $(".customNav").addClass("active");
        $(".logo").css("margin-top",0);
        $(".logo").addClass("active");
     } else {
        //remove the background property so it comes transparent again (defined in your css)
        $(".customNav").removeClass("active");
        $(".logo").removeClass("active");
        $(".logo").css("margin-top", getMarginTop(window.vhTOpx(10),window.vhTOpx(30),scrollPos,-70));
     }
}

function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}

function LoadDetails(appName) {
        $.ajax  
                ({  
                    url: "/Home/" + appName,  
                    contentType: "application/html; charset=utf-8",  
                    type: "GET",  
                    cache: !0,  
                    datatype: "html",  
                    success: function(t)  
                    {  
                        $("#renderZone").html(t)  
                    },  
                    error: function()  
                    {  
                        $("#renderZone").html("Post Not Found")  
                    }  
                })  
}

function magnify(imgID, zoom) {
  var img, glass, w, h, bw;
  img = document.getElementById(imgID);

  /*create magnifier glass:*/
  glass = document.createElement("DIV");
  glass.setAttribute("class", "img-magnifier-glass");

  /*insert magnifier glass:*/
  img.parentElement.insertBefore(glass, img);

  /*set background properties for the magnifier glass:*/
  glass.style.backgroundImage = "url('" + img.src + "')";
  glass.style.backgroundRepeat = "no-repeat";
  glass.style.backgroundSize = (img.width * zoom) + "px " + (img.height * zoom) + "px";
  bw = 3;
  w = glass.offsetWidth / 2;
  h = glass.offsetHeight / 2;

  /*execute a function when someone moves the magnifier glass over the image:*/
  glass.addEventListener("mousemove", moveMagnifier);
  img.addEventListener("mousemove", moveMagnifier);

  img.addEventListener("mouseleave", removeMagnifier);

  /*and also for touch screens:*/
  glass.addEventListener("touchmove", moveMagnifier);
  img.addEventListener("touchmove", moveMagnifier);

  img.addEventListener("touchleave", removeMagnifier);

  function moveMagnifier(e) {
    var pos, x, y;
    /*prevent any other actions that may occur when moving over the image*/
    e.preventDefault();
    /*get the cursor's x and y positions:*/
    pos = getCursorPos(e);
    x = pos.x;
    y = pos.y;
    /*prevent the magnifier glass from being positioned outside the image:*/
    if (x > img.width - (w / zoom)) {x = img.width - (w / zoom);}
    if (x < w / zoom) {x = w / zoom;}
    if (y > img.height - (h / zoom)) {y = img.height - (h / zoom);}
    if (y < h / zoom) {y = h / zoom;}
    /*set the position of the magnifier glass:*/
    glass.style.left = (x - w) + "px";
    glass.style.top = (y - h) + "px";
    /*display what the magnifier glass "sees":*/
    glass.style.backgroundPosition = "-" + ((x * zoom) - w + bw) + "px -" + ((y * zoom) - h + bw) + "px";
  }

  function removeMagnifier(e) {
        var list = document.getElementsByClassName("img-magnifier-glass");
        for(var i = list.length - 1; 0 <= i; i--)
           if(list[i] && list[i].parentElement)
           list[i].parentElement.removeChild(list[i]);
  }

  function getCursorPos(e) {
    var a, x = 0, y = 0;
    e = e || window.event;
    /*get the x and y positions of the image:*/
    a = img.getBoundingClientRect();
    /*calculate the cursor's x and y coordinates, relative to the image:*/
    x = e.pageX - a.left;
    y = e.pageY - a.top;
    /*consider any page scrolling:*/
    x = x - window.pageXOffset;
    y = y - window.pageYOffset;
    return {x : x, y : y};
  }
}

function getMarginLeft(initial,scrollTop,marginMax) {
    var value = initial + (Math.min(initial,scrollTop) / 2);

    if (value > marginMax) {
        return marginMax;
    } else {
        return value;
    }
}

function getMarginTop(initial,elementHeight,scrollTop,marginMin) {
    value = initial - (scrollTop / 2);


    if (value <= marginMin) {
        return marginMin;
    } else {
        return value;
    }
}

function vwTOpx(value) {
    var w = window,
      d = document,
      e = d.documentElement,
      g = d.getElementsByTagName('body')[0],
      x = w.innerWidth || e.clientWidth || g.clientWidth,
      y = w.innerHeight|| e.clientHeight|| g.clientHeight;

    var result = (x*value)/100;
    return result;
}

function vhTOpx(value) {
    var w = window,
      d = document,
      e = d.documentElement,
      g = d.getElementsByTagName('body')[0],
      x = w.innerWidth || e.clientWidth || g.clientWidth,
      y = w.innerHeight|| e.clientHeight|| g.clientHeight;

    var result = (y*value)/100;
    return result;
}

function pxTOvw(value) {
    var w = window,
      d = document,
      e = d.documentElement,
      g = d.getElementsByTagName('body')[0],
      x = w.innerWidth || e.clientWidth || g.clientWidth,
      y = w.innerHeight|| e.clientHeight|| g.clientHeight;

    var result = (100*value)/x;
    return result;
}

function pxTOvh(value) {
    var w = window,
      d = document,
      e = d.documentElement,
      g = d.getElementsByTagName('body')[0],
      x = w.innerWidth || e.clientWidth || g.clientWidth,
      y = w.innerHeight|| e.clientHeight|| g.clientHeight;

    var result = (100*value)/y;
    return result;
}

function GetParam(sParam) {

    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++) {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam){
            return sParameterName[1];
        }
    }
}


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
