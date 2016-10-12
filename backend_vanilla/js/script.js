var infoUrl = 'http://iam-platform.herokuapp.com/api/v1/pages/';
// $.getJSON( infoUrl, function( data ) {
// 	var items = [];
//
// 	$.each( data, function( key, val ) {
// 		var items = [];
// 		items.push( "<li id='" + key + "'>" + val + "</li>" );
// 	});
//
// 	var lista = '<div style="background-color:red; height: 20px; padding: 10px;">' + val.title + '</div>';
//
//
// 	$("body").append(lista);
// });



$.getJSON( infoUrl, function( data ) {
	var items = [];
	$.each( data, function( key, val ) {
		items.push( "<li id='" + key + "'>" + val + "</li>" );
	});

$( "<ul/>", { "class": "my-new-list", html: items.join( "" ) }).appendTo( "body" );
});


// $.getJSON( infoUrl, function(result){
//         $.each(result, function(i, field){
//             $("div").append(field + " ");
//         });
//     });
