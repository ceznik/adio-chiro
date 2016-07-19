$(document).ready(function() {
	$('.card').hide();
	//alert("ready to render back news...");
	$.getJSON('/check', function(data) {
		mongoData = data;
		//insert article data
		alert("got the data");
	});
});