
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


// var port = process.env.PORT || 3000;

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

// 


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


/////////API ROUTES SHOPSTYLE PRODCUTS///////////////////

//get route for ShopStyle api all products
// app.get('/api/products/', function(req, res){
// 	var products = [];
// 	request('http://api.shopstyle.com/api/v2/products?pid=' + apiKey, function(error, response, body){
// 		body = JSON.parse(body);
// 		// console.log(body);
// 		body.products.forEach(function(product){
// 			productObj = {
// 			name: product.brandedName,
// 			price: product.priceLabel,
// 			retailer: product.retailer.name,
// 			description: product.description, 
// 			url: product.clickUrl
// 		};
// 		products.push(productObj);
// 	});
// 		console.log("products route");
// 		res.send(products);

// 	});
// });


//get route for ShopStyle api dresses - returns 50 dresses(max per api) and makes sure price is ,$150
// app.get('/api/products/dresses', function(req, res){
// 	var dresses = [];
// 	request('http://api.shopstyle.com/api/v2/products?pid=' + apiKey + '&fts=dress&offset=0&limit=50&fl=p7&fl=p8&fl=p9&fl=p10', function(error, response, body){
// 		body = JSON.parse(body);
// 		// console.log(body);
// 		body.products.forEach(function(product){
// 			dressObj = {
// 			name: product.brandedName,
// 			price: product.priceLabel,
// 			retailer: product.retailer.name,
// 			description: product.description, 
// 			url: product.clickUrl,
// 			image: product.image.sizes.IPhone.url
// 		};
// 		dresses.push(dressObj);
// 	});
		
// 		res.send(dresses);

// 	});
// });

app.listen(process.env.PORT || 3000, function() {
	console.log("server listening on port 3000" );
});

// app.listen(port, function() {
// 	console.log('Server started on', port);
// });

