var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var path = require('path');
var app = express();
var PORT = process.env.PORT || 3000; 	// set the port

var logger = require('morgan');
var mongoose = require('mongoose');


//some basic config
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));
app.use(logger('dev'));


app.use(express.static(path.join(__dirname, '/app/public')));

mongoose.connect('mongodb://localhost/chirodata');
var db = mongoose.connection;

db.on('error', function(err) {
    console.log('Mongoose connection error: ', err);
});

db.once('open', function() {
    console.log('Mongoose connection successful.');
});


app.use(methodOverride('_method'));
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({
	defaultLayout: 'backnews'
}));
app.set('view engine', 'handlebars');


//ROUTES
require('./app/routes/html-routes.js')(app);


app.listen(PORT, function(){
	console.log('App listening on PORT ' + PORT);
});                                                  

