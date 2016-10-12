$(document).ready(function(){
	// SCROLLBAR
	$('.scroll-pane').jScrollPane();
});

// $(window).scroll(function() {
// 	var header = $('#header-nav').outerHeight();
// 	var featuredContent = $('#stick-header').offset().top;
// 	var contenedor = featuredContent - header;
// 	if ( $(window).scrollTop() < contenedor) {
// 		$("#header-nav").addClass("fixBottomNav");
// 		$("#header-nav").removeClass("fixTopNav");
// 	} else {
// 		$("#header-nav").removeClass("fixBottomNav");
// 		$("#header-nav").addClass("fixTopNav");
// 	}
// });


// Manifiesto Slider
$(document).ready(function(){
	$('.manifiesto-slider').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		dots: true,
		adaptiveHeight: true,
		//appendDots: $('.manifiesto-slide-dots'),
		dotsClass: 'manifiesto-slide-dots'
	});
});

//Second navigation for slider
//$('.sliderM').each(function(i){
	//$(this).attr('id', 'mSlide'+ (i+1));
	// $(".manifiesto-slides ul").each( function(){
	// 	$(this).append("<li><a href='#mSlide"+ (i+1) + "'>"+ (i+1) +"</a></li>");
	//});
//});



// Margin Top Body
$(window).on('resize', function(){
	var headerHeight = $("header").outerHeight();
	var breadcrumbsHeight = $(".nd-nav").outerHeight();
	var totalHeaderHeight = headerHeight + breadcrumbsHeight;
	$("body").css({"margin-top" : totalHeaderHeight });
	$(".manifiesto-slider-wrapper").css({"top" : headerHeight});
	$(".manifiesto-slider-wrapper .up").css({ 'top' : headerHeight });
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
});

$(function() {
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
	var m3 = $("#manifiesto3").outerHeight();
	var scroll = $(window).scrollTop();
	var m1m3 = m1 + m3;
	//accionados
	$("body").css({ 'height' : m1m3 });
	$("#manifiesto3").outerHeight();
	$("#manifiesto2").css({ 'margin-top' : m1 + 100 });
	$("#manifiesto2").css({ 'position' : 'fixed' });
	console.log(scroll);
	if ( scroll <= 300 ){
		//no hagas nada aqui
		$("#mainQuote").css({ 'margin-top' : '0' });
		$("#mainQuote").css({ 'opacity' : '1' });
	} else if ( scroll <= 500 ) {
		//primer disparo
		$("#mainQuote").css({ 'margin-top' : - m1 });
		$("#mainQuote").css({ 'opacity' : '0' });
		$("#manifiesto2").css({ 'margin-top' : '0' });
		$("#manifiesto2").css({ 'position' : 'fixed', 'z-index' : '3', 'top' : '0', 'width' : '100%' });
	} else if ( scroll <= 999 ) {
		//primer disparo
		$("#mainQuote").css({ 'margin-top' : - m1 });
		$("#mainQuote").css({ 'opacity' : '0' });
		$("#manifiesto2").css({ 'margin-top' : '0' });
		$("#manifiesto2").css({ 'position' : 'fixed', 'z-index' : '3', 'top' : '0', 'width' : '100%' });
	} else if ( scroll > 1000 ) {
		//segundo disparo
		$("#manifiesto2").css({ 'margin-top' : -m1, 'position' : 'relative' });
	}
});


// // SHOW RTL SLIDES
// $(window).scroll(function(){
// 	var scroll = $(window).scrollTop();
// 	if ( scroll < 450 ){
// 		//no hagas nada aqui
// 		$("#two").css({ "margin-left" : "2000px" });
// 		$("#three").css({ "margin-left" : "2000px" });
// 	} else if ( scroll < 550 ) {
// 		//primer disparo
// 		$("#two").css({ "margin-left" : "0" });
// 		$("#three").css({ "margin-left" : "2000px" });
// 	} else if ( scroll < 650 ) {
// 		//primer disparo
// 		$("#two").css({ "margin-left" : "0" });
// 		$("#three").css({ "margin-left" : "0" });
// 		$("#four").css({ "margin-left" : "2000px" });
// 	} else if ( scroll < 750 ) {
// 		//primer disparo
// 		$("#two").css({ "margin-left" : "0" });
// 		$("#three").css({ "margin-left" : "0" });
// 		$("#four").css({ "margin-left" : "0" });
// 		$("#five").css({ "margin-left" : "2000px" });
// 	} else if ( scroll < 850 ) {
// 		//primer disparo
// 		$("#two").css({ "margin-left" : "0" });
// 		$("#three").css({ "margin-left" : "0" });
// 		$("#four").css({ "margin-left" : "0" });
// 		$("#five").css({ "margin-left" : "0" });
// 		$("#six").css({ "margin-left" : "2000px" });
// 	} else {
// 		$("#two").css({ "margin-left" : "0" });
// 		$("#three").css({ "margin-left" : "0" });
// 		$("#four").css({ "margin-left" : "0" });
// 		$("#five").css({ "margin-left" : "0" });
// 		$("#six").css({ "margin-left" : "0" });
// 	}
// });


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

// Series: More Videos Carousell
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
