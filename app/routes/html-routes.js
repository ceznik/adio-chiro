var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport('smtps://adiochiropractor1%40gmail.com:jameskimm@smtp.gmail.com');

var path = require('path');

var chironews = require('../../controllers/chironews.js');


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

    app.post('/contact', function(req, res) {
        var name = req.body.name;
        var email = req.body.email;
        var message = req.body.message;
        var mailOptions = {
            sender: email,
            to: "adiochiropractor1@gmail.com",
            subject: name + ' | New message !',
            // text: message + " this is the user's email " + email,
            html: "<p>This is the message:</p>"+ message+ "<br><br><br><p>You have received a new Email from: <br><br>" + email+" </p>"
        }
        transporter.sendMail(mailOptions, function(error, response) {
            if (error) {
                console.log(error);
            } else {
                console.log(mailOptions);
                console.log(email);
                res.redirect('/');
            }
        });
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

