/*jshint esversion: 6 */

var express = require('express');
var Dress = require('../models/dress');
var router = express.Router();

//routes ending with dress

router.route('/dress')
.post((req, res) => {

	var dress = new Dress({
			name: req.body.brandedName,
			price: req.body.priceLabel,
			retailer: req.body.retailer.name,
			description: req.body.description, 
			url: req.body.clickUrl
	});

	dress.save((err) => {
		if (err) {
			return res.send(err);
		}

		return res.json({message:'New dress created!'});
	});
	});
.get((req, res) => {
	Dress.find({}).sort
});


module.exports = router;


