var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/wardrobe-app");
// mongoose.connect('mongodb://localhost/local-authentication-with-passport'); 


module.exports.User = require("./user.js");
module.exports.Dress = require("./dress.js");






