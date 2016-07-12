var path = require('path');

module.exports = function(app){

	// HTML GET Requests
	// Below code handles when users "visit" a page. 
	// In each of the below cases the user is shown an HTML page of content
	// ---------------------------------------------------------------------------

	app.get('/', function(req, res){
		res.sendFile(path.join(__dirname + '/../public/index.html'));
	});

	app.get('/backhealth', function(req, res){
		res.sendFile(path.join(__dirname + '/../public/backhealth.html'));
	});

	app.get('/contact', function(req, res){
		res.sendFile(path.join(__dirname + '/../public/contact.html'));
	});

	app.get('/testimonials', function(req, res){
		res.sendFile(path.join(__dirname + '/../public/testimonial.html'));
	});

	app.get('/newpatient', function(req, res){
		res.sendFile(path.join(__dirname + '/../public/NewPatient.html'));
	});

	app.get('/newsletter', function(req, res){
		res.sendFile(path.join(__dirname + '/../public/Newsletter.html'));
	});

	// If no matching route is found default to home
	app.use(function(req, res){
		res.sendFile(path.join(__dirname + '/../public/index.html'));
	});

}