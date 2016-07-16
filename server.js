var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');

var app = express();
var PORT = process.env.PORT || 3000; 	// set the port
var staticContentFolder;

//some basic config
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
// app.use(bodyParser.json({type:'application/vnd.api+json'}));

// session
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}))

app.use(express.static(__dirname + '/public'));

app.listen(PORT,function() {
	console.log('App listening on PORT: '+ PORT);
});

app.get('/', function (req, res){
	res.send("this is my contact page");
})

app.post('/asdf', function(req, res){
	console.log('this is working');
	console.log(req.body);


})
var path = require('path');



var app = express();
var PORT = process.env.PORT || 8080;



// Sets up the Express app to handle data parsing


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));


app.use(express.static(path.join(__dirname, '/app/public')));



//ROUTES
require('./app/routes/html-routes.js')(app);


app.listen(PORT, function(){
	console.log('App listening on PORT ' + PORT);
});                                                  

