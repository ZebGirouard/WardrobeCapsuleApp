var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var PantSchema = new Schema ({
		name: String,
		price: String,
		retailer: String, 
		url: String,
		image: String
	});

var Pant = mongoose.model('Pant', PantSchema);

module.exports = Pant;