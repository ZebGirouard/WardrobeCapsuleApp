var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ShoeSchema = new Schema ({
		name: String,
		price: String,
		retailer: String, 
		url: String,
		image: String
	});

var Shoe = mongoose.model('Shoe', ShoeSchema);

module.exports = Shoe;