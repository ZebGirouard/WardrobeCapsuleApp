// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.

require('dotenv').config();

var express = require('express');
var app = express();
var mongoose = require('mongoose');
var request = require('request');

//set up apiKey
var apiKey = process.env.API_KEY;

//Sets up bodyParser
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
//require models 
var db = require('./models');



//get route for ShopStyle api dresses - returns 50 dresses(max per api) and makes sure price is ,$150
// app.get('/api/products/dresses', function(req, res){
// 	console.log("function running");

request('http://api.shopstyle.com/api/v2/products?pid=' + apiKey + '&fts=dress&offset=0&limit=50&fl=p7&fl=p8&fl=p9&fl=p10', function(error, response, body){
	var dressList = [];
	body = JSON.parse(body);
	// console.log(body);
	body.products.forEach(function(product){
		dressObj = {
		name: product.brandedName,
		price: product.priceLabel,
		retailer: product.retailer.name,
		description: product.description, 
		url: product.clickUrl, 
		image: product.image.sizes.IPhone
		};
		dressList.push(dressObj);
		console.log(dressObj);
	});

	db.Dress.remove({}, function(err, dresses){
		// console.log(dressList);
		if (err) {
			console.log('error occurred in remove', err);
		} else {
			console.log('removed all dresses');
		}
	});
		//create new records based on dress array
		db.Dress.create(dressList, function(err, dresses){
			if (err) { return console.log('err', err); }
			console.log("created", dressList.length, "dresses");
			process.exit();
		});

});





// var dressList = [
// {
// 		name: 'Gucci Dress',
// 		price: '$200',
// 		retailer: 'Nordstrom',
// 		description: 'description of product', 
// 		url: 'url to product'
// },
// {
// 		name: 'Jersey Dress',
// 		price: '$300',
// 		retailer: 'Shopbop',
// 		description: 'description of dress1', 
// 		url: 'url to product'
// },

// {
// 		name: 'Janky Dress',
// 		price: '$100',
// 		retailer: 'Nordstrom',
// 		description: 'description of dress', 
// 		url: 'url to product'
// }
// ];

// db.Dress.remove({}, function(err, dresses){
// 	console.log(dressList);
// 	if (err) {
// 		console.log('error occurred in remove', err);
// 	} else {
// 		console.log('removed all dresses');
// 	}
// });
// 		//create new records based on dress array
// db.Dress.create(dressList, function(err, dresses){
// 			if (err) { return console.log('err', err); }
// 			console.log("created", dressList.length, "dresses");
// 			process.exit();
// 		});











