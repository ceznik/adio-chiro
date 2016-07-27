$(document).ready(function() {
	//alert("ready to render back news...");
	var options = [
	    {selector: '.article-image', offset: 200, callback: function(el){
	    	Materialize.fadeInImage($(el).closest('img'));
	    } },
	    {selector: '.article-text', offset: 200, callback: function(el) {
	      Materialize.showStaggeredList($(el));
	    } },
  	];
  Materialize.scrollFire(options);

});