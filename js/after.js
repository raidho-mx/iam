// MANIFIESTO: Manifiesto Slider Navigation
$('.sliderM').each(function(i){
	$(this).attr('id', 'sliderM'+ (i+1));
	$(".manifiesto-slides ul").each( function(){
		var t = ["one", "two", "three", "four", "five", "six"];
		$(this).append("<li><a href='#sliderM" + (i+1) + "'>" + t[i] + "</a></li>");
	});
});



// When Document is ready:
$(document).ready( function() {
	var headerHeight = $("header").outerHeight();
	$("body").css({"margin-top" : headerHeight });
});



// When Document is resized:
$(window).on('resize', function(){
	var headerHeight = $("header").outerHeight();
	var bodyWidth = $('body').width();

	$("body").css({"margin-top" : headerHeight });
	$(".manifiesto-slider-wrapper").css({"top" : headerHeight});
	$('.ltr-scroll-home .main-content').css({'margin-top' : headerHeight });
	$('.ltr-scroll-home .featured-content, .ltr-scroll-home .main-content').css({ 'width' : bodyWidth });
});



// HUGE MAIN MENU: Trigger Menu
$(document).ready(function(){
	var expadedNav = $("#expandedHeight").outerHeight();
	$(".expanded-nav").css({"margin-top": - expadedNav});
	$(".open-menu").click(function(e){
		e.preventDefault();
		if ($(".expanded-nav").hasClass("hide")){
			$(".expanded-nav").removeClass("hide");
			$(".expanded-nav").css({"margin-top" : 0 });
			$(".expanded-nav").addClass("opened");
			$("body").addClass("noScroll");
		} else {
			$(".expanded-nav").css({"margin-top": - expadedNav});
			$(".expanded-nav").removeClass("opened");
			$(".expanded-nav").addClass("hide");
			$("body").removeClass("noScroll");
		}
	});
});



// Fade Cards at ltr Modal Box
$(function() {
	// var elementHeight = $("childElements li").outerHeight();
	$.each($("#childElements > li"), function(index, span) {
		var randomize = Math.floor((Math.random() * 100) + 1);
		var eachElement = $(this).outerHeight();
		var halfElement = eachElement / 2;
		// var eachElementWidth = $(this).width();
		// var halfElementWidth = eachElementWidth / 2;
		if (index % 2 === 0) {
			$(span).addClass("odd");
			$(span).css({"top" :  halfElement, "left": randomize});
		} else {
			$(span).addClass("even");
			$(span).css({"top" : - halfElement, "left": -randomize});
		}
	});

	$("#childElements > li").each(function (i, element) {
		setTimeout(function () {
			$(element).css({"opacity": "1"});
		}, i * 200);
	});
});



// VIDEOS PAGE: Series Sub Menu
$(document).ready(function() {
	$(".filter-menu ul li a").click(function(event) {
		event.preventDefault();
		$(this).parent().addClass("current");
		$(this).parent().siblings().removeClass("current");
		var tab = $(this).attr("href");
		$(".tab-content").not(tab).css("display", "none");
		$(tab).fadeIn();
	});
});



// HOMEPAGE
$(document).ready(function() {
	$('.huge-slider').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		arrows: false
	});
});



// VIDEOS PAGE: More Videos Carousell
$(document).ready(function() {
	$('.more-videos').slick({
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 2,
		responsive: [
		{
		breakpoint: 1024,
		settings: {
				slidesToShow: 3,
				slidesToScroll: 3
			}
		},
		{
		breakpoint: 800,
		settings: {
				slidesToShow: 2,
				slidesToScroll: 2
			}
		},
		{
			breakpoint: 600,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}]
	});
});



// MANIFIESTO SINGLE PAGE: Submenu
$(document).ready(function() {
	$('.manifiesto-submenu').slick({
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 2,
		responsive: [
		{
		breakpoint: 1024,
		settings: {
				slidesToShow: 3,
				slidesToScroll: 3
			}
		},
		{
		breakpoint: 600,
		settings: {
				slidesToShow: 2,
				slidesToScroll: 2
			}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}]
	});
});



// MANIFIESTO SINGLE PAGE: Trigger submenu
$(document).ready( function (){
	$(".expand-manifiesto-submenu").click(function(){
		$(".manifiesto-submenu").toggleClass("expandSubmenu");
	});
});



// LTR SCROLL
$(document).ready(function () {
	var $horizontalManifiestoScroll = $('.ltr-scroll');
	var $horizontalHomeScroll = $('.ltr-scroll-home');
	var bodyHeightManifiesto = $horizontalManifiestoScroll.outerWidth();
	var bodyHeightHome = $horizontalHomeScroll.outerWidth() + 7000;
	var bodyWidth = $('body').outerWidth();

	var headerHeight = $('header').outerHeight();

	if ( $('div').hasClass('ltr-scroll') ) {
		$('body').css({ 'height' : bodyHeightManifiesto });
	} else if ( $('div').hasClass('ltr-scroll-home') ) {
		$('body').css({ 'height' : bodyHeightHome });
		//$('body').addClass('noMargin');
		$('.ltr-scroll-home .main-content').css({'margin-top' : headerHeight });
		$('.ltr-scroll-home .featured-content, .ltr-scroll-home .main-content').css({ 'width' : bodyWidth });
	}


		if ( bodyWidth > 800 ) {
			$(window).scroll(function () {
				var s = $(this).scrollTop(),
					d = $(document).height(),
					c = $(this).height();
				scrollPercent = (s / (d - c));
				var positionM = (scrollPercent * ($(document).width() - $horizontalManifiestoScroll.outerWidth()));
				var positionH = (scrollPercent * ($(document).width() - $horizontalHomeScroll.outerWidth()));

				$horizontalManifiestoScroll.css({ 'left': positionM });
				$horizontalHomeScroll.css({ 'left': positionH  });
			});
		} else {
			$('body').css({ 'height' : 'auto' });
		}
});
