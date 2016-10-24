var infoUrl = 'http://iam.vordem.mx/api/v1/pages/';

$.getJSON( infoUrl, function( data ) {
	var items = [];
	$.each( data.pages, function( key, val ) {
		var useTitle = val.meta.type;

		useTitle = useTitle.replace(/\./g,' ');
		useTitle = useTitle.split(" ", 2);
		var firstWord = useTitle[0];

		items.push( "<li id='" + key + "'>" + useTitle + "</li>" );
		var lista1 = '<div style="background-color:blue; height: 20px; padding: 10px;">' + firstWord +  '</div>';
		var lista2 = '<div style="background-color:red; height: 20px; padding: 10px;">' + firstWord +  '</div>';
		if ( firstWord === "series" ) {
			$("body").append(lista1);
		} else {
			$("body").append(lista2);
		}
	});
});
