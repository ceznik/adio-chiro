var scrape = require('../scripts/scrape.js');

var Article = require('../models/Article.js');

//export this function as "fetch"
exports.fetch = function(){
	//console.log("hit fetch--------------");
	scrape(function(data){
		var obj = data; 
		//console.log("DATA");
		//console.log(obj);
		for (var i in obj) {
			addIfNotFound(i);

		}
		function addIfNotFound(current) {
			Article.findOne({
				'article': obj[current].title
			}, function(err, res){
				if (err) {
					console.log(err);
				}
				if (res === null){
					var article = new Article({
						title:obj[current][0],
						image:obj[current][1],
						body:obj[current][2]
					});
					article.save(function(err, doc){
						if(err){
						console.log(err);
						} else {
						console.log(doc);
						}	
		//check to see if entry exist in DB, add if it doesn't
			//console.log("fetching");	
			// });
					});
				}
			});
		}
	});
}

exports.check = function(cb) {
  //get scraped data, sort starting from most recent
  Article.find()
    .sort({
      _id: -1
    })
    .exec(function(err, doc) {
      //once finished, pass the list into the callback function
      cb(doc);
    });
};
//fetch();
