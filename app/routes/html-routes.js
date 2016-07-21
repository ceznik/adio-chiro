var path = require('path');

var chironews = require('../../controllers/chironews.js');

var testnews = [
{}];

module.exports = function(app){

	// HTML GET Requests
	// Below code handles when users "visit" a page. 
	// In each of the below cases the user is shown an HTML page of content
	// ---------------------------------------------------------------------------

	app.get('/', function(req, res){
		res.sendFile(path.join(__dirname + '/../public/index.html'));
	});

	app.get('/backhealth', function(req, res){
		//insert code here that fetches data at random intervals
		chironews.check(function(data){
			console.log(data);
			res.render('index', {data});
		});
	});

	app.get('/contact', function(req, res){
		res.sendFile(path.join(__dirname + '/../public/contact.html'));
	});

	app.get('/testimonials', function(req, res){
		res.sendFile(path.join(__dirname + '/../public/testimonial.html'));
	});

	app.get('/patientcenter', function(req, res){
		res.sendFile(path.join(__dirname + '/../public/patientcenter.html'));
	});

	// If no matching route is found default to home
	app.use(function(req, res){
		res.sendFile(path.join(__dirname + '/../public/index.html'));
		
	});

}