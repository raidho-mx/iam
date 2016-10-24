// Manifiesto Slider
// $(document).ready(function(){
// 	$('.manifiesto-slider').slick({
// 		infinite: true,
// 		slidesToShow: 1,
// 		slidesToScroll: 1,
// 		arrows: false,
// 		dots: true,
// 		adaptiveHeight: true,
// 		//appendDots: $('.manifiesto-slide-dots'),
// 		dotsClass: 'manifiesto-slide-dots'
// 	});
// });


// Manifiesto Slider Navigation
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
	var breadcrumbsHeight = $(".nd-nav").outerHeight();
	var totalHeaderHeight = headerHeight + breadcrumbsHeight;
	$("body, .manifiesto-modal").css({"margin-top" : totalHeaderHeight });
});


// When Document is resized:
$(window).on('resize', function(){
	var headerHeight = $("header").outerHeight();
	var breadcrumbsHeight = $(".nd-nav").outerHeight();
	var totalHeaderHeight = headerHeight + breadcrumbsHeight;
	$("body").css({"margin-top" : totalHeaderHeight });
	$(".manifiesto-slider-wrapper").css({"top" : headerHeight});
	$(".manifiesto-slider-wrapper .up").css({ 'top' : headerHeight });
	$(".nd-nav").css({ 'top' : headerHeight });
});


// Trigger Menu
$(document).ready(function(){
	var expadedNav = $("#expandedHeight").outerHeight();
	$(".expanded-nav").css({"margin-top": - expadedNav});
	$(".menu").click(function(){
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



$(window).scroll(function(){
	//variables
	var m1 = $("#manifiesto1").outerHeight();
	var m2 = $("#manifiesto2").outerHeight();
	//var m3 = $("#manifiesto3").outerHeight();
	var scroll = $(window).scrollTop();
	console.log(scroll);
	// /var m1m3 = m1 + m3;
	//accionados
	$("body").css({ 'height' : '2000px' });
	$("#manifiesto3").outerHeight();
	$("#manifiesto2").css({ 'margin-top' : m1 + 100 });
	$("#manifiesto2").css({ 'position' : 'fixed' });
	console.log(scroll);
	if ( scroll >= 0 && scroll < 299 ){
		//no hagas nada aqui
		$("#mainQuote").css({ 'margin-top' : '0' });
		$("#mainQuote").css({ 'opacity' : '1' });
		$("#manifiesto3").css({ 'margin-top' : m1, 'opacity' : '0' });
	} else if ( scroll >= 300 && scroll < 1200 ) {
		//primer disparo
		$("#mainQuote").css({ 'margin-top' : - m1 });
		$("#mainQuote").css({ 'opacity' : '0' });
		$("#manifiesto2").css({ 'opacity' : '1' });
		$("#manifiesto2").css({ 'margin-top' : '0' });
		$("#manifiesto2").css({ 'position' : 'fixed', 'z-index' : '3', 'top' : '0', 'width' : '100%' });
		$("#manifiesto3").css({ 'margin-top' : m1, 'opacity' : '0' });
		if ( scroll >= 300 && scroll < 650 ) {
			// show first slide
			$("#mSlide1").css({ 'left' : '0', 'opacity' : '1' });
			$("#mSlide2").css({ 'left' : '800px', 'opacity' : '0' });
			$("#mSlide3").css({ 'left' : '800px', 'opacity' : '0' });
		} else if ( scroll >= 651 && scroll < 950 ) {
			// show second slide
			$("#mSlide2").css({ 'left' : '0', 'opacity' : '1' });
			$("#mSlide1").css({ 'opacity' : '0', 'left' : '-800px' });
			$("#mSlide3").css({ 'opacity' : '0', 'left' : '800px' });
		} else if ( scroll >= 951 && scroll < 1200 ) {
			// show third slide
			$("#mSlide2").css({ 'left' : '-800px', 'opacity' : '0' });
			$("#mSlide3").css({ 'left' : '0', 'opacity' : '1' });
		} else {
			$("#mSlide3").css({ 'left' : '0', 'opacity' : '1' });
		}
	} else if ( scroll >= 1201 && scroll < 1400  ) {
		//segundo disparo
		$("#manifiesto2").css({ 'opacity' : '0' });
		$("#manifiesto2").css({ 'margin-top' : - m1 });
		$("#manifiesto3").css({ 'margin-top' : '0' });
		$("#manifiesto3").css({ 'position' : 'relative', 'z-index' : '3', 'top' : '0', 'width' : '100%', 'opacity' : '1'});
	} else {
		//tercer disparo
		$("#manifiesto2").css({ 'opacity' : '0' });
		$("#manifiesto2").css({ 'margin-top' : - m1 });
		$("#manifiesto3").css({ 'margin-top' : '0' });
		$("#manifiesto3").css({ 'position' : 'relative', 'z-index' : '3', 'top' : '0', 'width' : '100%', 'opacity' : '1'});
	}
});


$(function() {
	var prevRange = -1;
	var range = -1;
	$(document).on('scroll', function() {
		var top = $(document).scrollTop();
		if (top >= 500 && top < 700) {
			range = Math.floor(top/10)-220;
		} else {
			range = -1;
		}
	$('.sliderM').each(function (){
			if(range !== prevRange) {
				prevRange = range;
				//var leftPx = (16 - range*5) + "px";
				$(this).css({ "color" : "red" });
			} else {
				$(this).css({ "color" : "black" });
			}
		});
	});
});


// Series Sub Menu
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

// ACCORDION & TOGGLE CONTENT
// jQuery(".filter-menu ul li a").click(function(event) {
// 	event.preventDefault();
// 	var $e = $(this);
// 	$(this).parent().toggleClass("display");
// 	if ($e.parent().hasClass("display")){
// 		$(this).parent().removeClass("opacity_accordion");
// 		$(this).parent().siblings().addClass("opacity_accordion");
// 	} else {
// 		$(this).parent().siblings().removeClass("opacity_accordion");
// 	}
// 	$(this).parent().siblings().removeClass("display");
// });


// Series: More Videos Carousell
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
