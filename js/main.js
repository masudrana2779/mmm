

$(document).ready(function () {
    
    //Only For Name
    
    
    $("#typed").typed({
        // strings: ["Typed.js is a <strong>jQuery</strong> plugin.", "It <em>types</em> out sentences.", "And then deletes them.", "Try it out!"],
        stringsElement: $('#typed-strings')
        , typeSpeed: 30
        , backDelay: 2000
        , loop: true
        , contentType: 'html', // or text
        // defaults to false for infinite loop
        loopCount: false
        , callback: function () {
            foo();
        }
        , resetCallback: function () {
            newTyped();
        }
    });
    $(".reset").click(function () {
        $("#typed").typed('reset');
    });

    function newTyped() { /* A new typed object */ }

    function foo() {
        console.log("Callback");
    }
    
    
    // JS for preloader
    
    
    
    setTimeout(function () {
        $('body').addClass('loaded');
        //$('h1').css('margin','0');
    }, 2000);
    
    
    
    //Only For Wondows load And Name load
    
    
    $(window).on("load", function () {
    "use strict";
    var hi = document.getElementById("hi")
        , name = document.getElementById("name")
        , job = document.getElementById("job")
        , hiText = "Hi, "
        , nameText = "I'm Masud Rana"
        , jobText = "Web & Graphic Designer"
        , text = ""
        , text2 = ""
        , text3 = ""
        , i = 0
        , j = 0
        , k = 0
        , typing;
    $(document).scrollTop(0);

    function type() {
        if (text !== hiText) {
            text = text + hiText.charAt(i);
            hi.innerHTML = text;
            i += 1
        }
        else if (text2 !== nameText) {
            text2 = text2 + nameText.charAt(j);
            name.innerHTML = text2;
            j += 1
        }
        else {
            text3 = text3 + jobText.charAt(k);
            job.innerHTML = text3;
            k += 1
        }
        if (text === hiText && text2 === nameText && text3 === jobText) {
            clearInterval(typing);
            $(".contact-button button").animate({
                opacity: 1
            }, 500)
        }
    }
    $(".loading").fadeOut(2500, function () {
        typing = setInterval(type, 150)
    })
});


    
    //js for most-popular-slider
    
    
    $('.headerSlider').slick({
        slidesToShow: 1
        , slidesToScroll: 1
        , autoplay: true
        , autoplaySpeed: 2000
        , dots: true
        , responsive: [
            {
                breakpoint: 991
                , settings: {
                    slidesToShow: 1
                    , slidesToScroll: 1
                    , autoplay: true
                    , autoplaySpeed: 2000
                    , dots: false
                    , arrows: false
                , }
		}
            , {
                breakpoint: 640
                , settings: {
                    slidesToShow: 1
                    , slidesToScroll: 1
                    , autoplay: true
                    , autoplaySpeed: 2000
                    , arrows: false
                    , dots: false
                , }
		}
	  ]
    });
    
    
    //js for footerCarousel
    
    
    $('.footerCarousel').slick({
        slidesToShow: 1
        , slidesToScroll: 1
        , autoplay: true
        , autoplaySpeed: 2000
        , dots: true
        , responsive: [
            {
                breakpoint: 991
                , settings: {
                    slidesToShow: 1
                    , slidesToScroll: 1
                    , autoplay: true
                    , autoplaySpeed: 2000
                    , dots: false
                    , arrows: false
                , }
		}
            , {
                breakpoint: 640
                , settings: {
                    slidesToShow: 1
                    , slidesToScroll: 1
                    , autoplay: true
                    , autoplaySpeed: 2000
                    , dots: false
                    , arrows: false
                , }
		}
	  ]
    });
    
    
    // JS for scrollspy
    
    
    $('a[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top - 110
                }, 2000);
                return false;
            }
        }
    });
    
    
    // JS for mobileView
    
    
    $(".mobileView").click(function (e) {
        e.preventDefault();
        $(".mobileView").toggleClass("dag");
    });
    
    
    // Scroll Top Fixed Menu JS
    
    
    var row = $('.headerTop');
    $(window).scroll(function () {
        if ($(this).scrollTop() > 90) {
            row.addClass("scrollFixed");
        }
        else {
            row.removeClass("scrollFixed");
        }
    });
    
    
    
    
    // JS for scrollTop
    
    
    $(window).scroll(function () {
        if ($(this).scrollTop() > 900) {
            $('.scrollToTop').fadeIn();
        }
        else {
            $('.scrollToTop').fadeOut();
        }
    });
    
    //Click event to scroll to top
    
    $('.scrollToTop').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 2000);
        return false;
    });
    
    
    //js for Tooltip
    
    
    $('[data-toggle="tooltip"]').tooltip();
    
    
});

