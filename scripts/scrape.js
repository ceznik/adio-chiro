var request = require('request');
var cheerio = require('cheerio');

var url = "http://www.chironexus.net/";

var scrape = function(cb){
	request(url, function(error, response,html){
		var $ = cheerio.load(html,{
			normalizeWhitespace: true
		});
		if (error) throw error;
		var result = {};

		$('article').each(function(i, element){

			var image = $(this).find('.item-thumb').html();
			var title = $(this).find('.item-title').text().trim();
			var body = $(this).find('.item-excerpt').html();

			result[i] = [title];
			result[i].push(image);
			result[i].push(body);


		});
			cb(result);
	});
}

module.exports = scrape;
