//DECLARATION
var express  		= require('express');
var ejs 		= require('ejs');
var bodyParser 		= require('body-parser');
//var exValidator 	= require('express-validator');
var application 	= express();
var expressSession 	= require('express-session');
var cookieParser 	= require('cookie-parser');
var login 		    = require('./controllers/login');
var logout 		    = require('./controllers/logout');
var home 		    = require('./controllers/home');
var home_manager    = require('./controllers/home_manager');

var application 	= express();

//CONFIGURATION
application.set('view engine', 'ejs');


//MIDDLEWARES
application.use(bodyParser.urlencoded({extended: false}));
application.use(expressSession({secret: 'my top secret password', saveUninitialized: true, resave: false}));
application.use(cookieParser());
//application.use(exValidator());
application.use('/login', login);
application.use('/logout', logout);
application.use('/home', home);
application.use('/home_manager', home_manager);


//ROUTING
application.get('/', function(req, res){
	res.send('Welcome to express web server...');
});


application.get('/setcookie', function(req, res){
	res.cookie('my_cookie', 'sdhdgshjdbahdbahjsdbshbd');
	res.send('done!');
});

application.get('/viewcookie', function(req, res){
	
	res.send(req.cookies['my_cookie']);
});


application.get('/rmcookie', function(req, res){
	res.clearCookie('my_cookie');
	res.send('removed!');
});


//SERVER STARTUP
application.listen(2000, function(){
	console.log('server started at 2000...');
});
