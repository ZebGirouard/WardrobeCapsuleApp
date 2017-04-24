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



//get route for ShopStyle api dresses - returns 50 dresses(max per api) and makes sure price is less than $200

// request('http://api.shopstyle.com/api/v2/products?pid=' + apiKey + '&fts=dress&offset=0&limit=50&fl=p7&fl=p8&fl=p9&fl=p10', function(error, response, body){
// 	var dressList = [];
// 	body = JSON.parse(body);
// 	// console.log(body);
// 	body.products.forEach(function(product){
// 		dressObj = {
// 		name: product.brandedName,
// 		price: product.priceLabel,
// 		retailer: product.retailer.name,
// 		description: product.description, 
// 		url: product.clickUrl, 
// 		image: product.image.sizes.IPhone.url
// 		};
// 		dressList.push(dressObj);
// 		// console.log(dressList);
// 	});

// 	db.Dress.remove({}, function(err, dresses){
// 		// console.log(dressList);
// 		if (err) {
// 			console.log('error occurred in remove', err);
// 		} else {
// 			console.log('removed all dresses');
// 		}
// 	});
// 		//create new records based on dress array
// 		db.Dress.create(dressList, function(err, dresses){
// 			if (err) { return console.log('err', err); }
// 			console.log("created", dressList.length, "dresses");
// 			process.exit();
// 		});

// });

// get route for ShopStyle api tops - returns 50 tops(max per api) and makes sure price is less than $200

// request('http://api.shopstyle.com/api/v2/products?pid=' + apiKey + '&fts=top&offset=0&limit=50&fl=p7&fl=p8&fl=p9&fl=p10', function(error, response, body){
// 	var topList = [];
// 	body = JSON.parse(body);
// 	// console.log(body);
// 	body.products.forEach(function(product){
// 		topObj = {
// 		name: product.brandedName,
// 		price: product.priceLabel,
// 		retailer: product.retailer.name,
// 		description: product.description, 
// 		url: product.clickUrl, 
// 		image: product.image.sizes.IPhone.url
// 		};
// 		topList.push(topObj);
	
// 	});

// 	db.Top.remove({}, function(err, tops){
// 		// console.log(dressList);
// 		if (err) {
// 			console.log('error occurred in remove', err);
// 		} else {
// 			console.log('removed all tops');
// 		}
// 	});
// 		//create new records based on dress array
// 		db.Top.create(topList, function(err, tops){
// 			if (err) { return console.log('err', err); }
// 			console.log("created", topList.length, "tops");
// 			process.exit();
// 		});

// });

// // get route for ShopStyle api pants - returns 50 pants(max per api) and makes sure price is less than $150

// request('http://api.shopstyle.com/api/v2/products?pid=' + apiKey + '&fts=womens-pants&offset=0&limit=50&fl=p7&fl=p8&fl=p9&fl=p10', function(error, response, body){
// 	var pantList = [];
// 	body = JSON.parse(body);
// 	// console.log(body);
// 	body.products.forEach(function(product){
// 		pantObj = {
// 		name: product.brandedName,
// 		price: product.priceLabel,
// 		retailer: product.retailer.name,
// 		description: product.description, 
// 		url: product.clickUrl, 
// 		image: product.image.sizes.IPhone.url
// 		};
// 		pantList.push(pantObj);
	
// 	});

// 	db.Pant.remove({}, function(err, pants){
// 		// console.log(dressList);
// 		if (err) {
// 			console.log('error occurred in remove', err);
// 		} else {
// 			console.log('removed all pants');
// 		}
// 	});
// 		//create new records based on dress array
// 		db.Pant.create(pantList, function(err, pants){
// 			if (err) { return console.log('err', err); }
// 			console.log("created", pantList.length, "pants");
// 			process.exit();
// 		});

// });

// // get route for ShopStyle api shoes - returns 50 shoes(max per api) and makes sure price is less than $150(supposed to do this - its not)

// request('http://api.shopstyle.com/api/v2/products?pid=' + apiKey + '&fts=womens-shoes&offset=0&limit=50&fl=p7&fl=p8&fl=p9&fl=p10', function(error, response, body){
// 	var shoeList = [];
// 	body = JSON.parse(body);
// 	// console.log(body);
// 	body.products.forEach(function(product){
// 		shoeObj = {
// 		name: product.brandedName,
// 		price: product.priceLabel,
// 		retailer: product.retailer.name,
// 		description: product.description, 
// 		url: product.clickUrl, 
// 		image: product.image.sizes.IPhone.url
// 		};
// 		shoeList.push(shoeObj);
	
// 	});

// 	db.Shoe.remove({}, function(err, shoes){
		
// 		if (err) {
// 			console.log('error occurred in remove', err);
// 		} else {
// 			console.log('removed all shoes');
// 		}
// 	});
// 		//create new records based on dress array
// 		db.Shoe.create(shoeList, function(err, shoes){
// 			if (err) { return console.log('err', err); }
// 			console.log("created", shoeList.length, "shoes");
// 			process.exit();
// 		});

// });








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











