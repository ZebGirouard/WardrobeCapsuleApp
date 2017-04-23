var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var TopSchema = new Schema ({
		name: String,
		price: String,
		retailer: String, 
		url: String,
		image: String
	});

var Top = mongoose.model('Top', TopSchema);

module.exports = Top;