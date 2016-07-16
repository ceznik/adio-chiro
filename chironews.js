var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var logger = require('morgan');

var mongoose = require('mongoose');
var request = require('request');
var cheerio = require('cheerio');

app.use(logger('dev'));
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(express.static('public'));

mongoose.connect('mongodb://localhost/chiro');
var db = mongoose.connection;

db.on('error', function(err) {
    console.log('Mongoose connection error: ', err);
});

db.once('open', function() {
    console.log('Mongoose connection successful.');
});

var Article = require('./models/Article.js');

var url = "http://www.chironexus.net/";

request(url, function(error, response,html){
	var $ = cheerio.load(html,{
		normalizeWhitespace: true
	});
//'<section class="section-category">...</section>'
	if (error) throw error;

	$('article').each(function(i, element){
		var result = {};

		result.image = $(this).find('.item-thumb').html();
		result.title = $(this).find('.item-title').text();
		result.body = $(this).find('.item-excerpt').html();

		console.log("Result: " , result);
	})
})