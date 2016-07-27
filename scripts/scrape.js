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
			
			
			if (image == null){
				image = '<img src="/images/chiropractor1.jpg" alt="spinal health image" class="random_image_rpl">';
			} else {
				var secureDL = image.replace("http:", "https:");
				//console.log("SECURE DOWNLOAD: :" + secureDL);
				image = secureDL;
			}
			var title = $(this).find('.item-title').text().trim();
			var body = $(this).find('.item-excerpt').html();

			result[i] = [title];
			result[i].push(image);
			result[i].push(body);


		});
		cb(result);
		//console.log("BLAAAAH");
		//console.log(result);
	});
}
//scrape();
module.exports = scrape;
