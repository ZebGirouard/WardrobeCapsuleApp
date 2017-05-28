
require('dotenv').config();
// Sets up Express
var express = require('express');
var app = express();
var request = require('request');
var router = express.Router();


var db = require('./models');
//set up apiKey
var apiKey = process.env.API_KEY;

//Sets up bodyParser
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//set up passport
var mongoose     = require('mongoose');
var passport     = require('passport');
var flash        = require('connect-flash');
var morgan       = require('morgan');
var cookieParser = require('cookie-parser');
var session      = require('express-session');

// mongoose.connect('mongodb://localhost/local-authentication-with-passport'); 

app.use(morgan('dev')); 
app.use(cookieParser());

app.set('views', './views');
app.engine('ejs', require('ejs').renderFile);
app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));

app.use(session({ secret: 'WDI-GENERAL-ASSEMBLY-EXPRESS' })); 
app.use(passport.initialize());
app.use(passport.session()); 
app.use(flash()); 

require('./config/passport')(passport);

app.use(function(req, res, next){
	res.locals.currentUser = req.user;
	next();
});



var routes = require('./config/routes');
app.use(routes);


// DB Page Endpoints//////

//get all dresses and hide from user a dress that they've deleted
app.get('/api/dresses', function allDresses(req, res) {
	db.Dress.find({}, function(err, data){
		// res.json(data);
		// console.log(req.user);
		id = "58fa85790ba66e8532d76545";
		function hiddenUser(dress) {
			return dress.hiddenFromUser.indexOf(id) === -1;
		}
		var dresses = data.filter(hiddenUser);
		res.json(dresses);
	});
});

//get dresses by Id
app.get('/api/dresses/:id', function dressById(req, res) {
  db.Dress.findOne({_id: req.params.id }, function(err, data) {
    res.json(data);
  });
});


// delete dress
app.delete('/api/dresses/:id', function (req, res) {
  // get dress id from url params (`req.params`)
  console.log('dresses delete', req.params);
  var dressId = req.params.id;
  console.log(req.params.id);
  // find the index of the dress we want to remove
  db.Dress.findOneAndRemove({ _id: dressId }, function (err, deletedDress) {
  	if (err) console.log(err);
    res.json(deletedDress);
  });
});

//update a dress
app.put('/api/dresses/:id', function (req, res){
	console.log('updating dress id', req.params.id);
	console.log(req.params.id);

	db.Dress.findOne({ _id: req.params.id }, function(err, foundDress){
		if(err) {console.log('error', err);}
		foundDress.dressname = req.body.name;
		foundDress.price = req.body.price;
		foundDress.retailer = req.body.retailer;
		foundDress.description = req.body.description;
		foundDress.url = req.body.url;
		foundDress.image = req.body.image;
		foundDress.hiddenFromUser = req.body.hiddenFromUser;
		foundDress.save(function(err, saved){
			if(err) {console.log('error', err);}
			res.json(saved);
		});
	});
});

//get all tops
app.get('/api/tops', function allTops(req, res){
	db.Top.find({}, function (err, data){
		res.json(data);
	});
});

//get all women's pants
app.get('/api/pants', function allPants (req, res){
	db.Pant.find({}, function (err, data) {
		res.json(data);
	});
});

//get all shoes
app.get('/api/shoes', function allShoes (req, res){
	db.Shoe.find({}, function (err, data) {
		res.json(data);
	});
});


app.listen(process.env.PORT || 3000, function() {
	console.log("server listening on port 3000" );
});


