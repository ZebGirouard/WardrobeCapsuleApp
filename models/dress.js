var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var DressSchema = new Schema ({
		name: String,
		price: String,
		retailer: String,
		description: String, 
		url: String,
		image: String
	});

var Dress = mongoose.model('Dress', DressSchema);

module.exports = Dress;