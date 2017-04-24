var express = require('express');
var router = express.Router();
// Parses information from POST


var bodyParser = require('body-parser');

var mongoose     = require('mongoose');
// var db = require('./models');

// Used to manipulate POST methods
var methodOverride = require('method-override');
var passport = require("passport");
var usersController = require('../controllers/users');
var staticsController = require('../controllers/statics');
// var clothesController = require('../controllers/clothes');

function authenticatedUser(req, res, next){
	 // If the user is authenticated, then we continue the execution
	if (req.isAuthenticated()) return next();
	 // Otherwise the request is always redirected to the home page
	res.redirect('/');
}

//CLOTHING DATABASE ROUTING////  OFF FOR NOW UNTIL I GET THE CORRECT CONTROLLER ROUTE IN PLACE
//dresses
// router.route('/api/dresses')
//   .get(clothesController.allDresses);

// router.route('/api/dresses/:id')
//   .get(clothesController.dressById);

// //tops
// router.route('/api/tops')
//   .get(clothesController.allTops);


//HOME AND SEASON PAGE ROUTING///////

router.route('/')
  .get(staticsController.home);

router.route('/spring')
  .get(staticsController.spring);

router.route('/summer')
  .get(staticsController.summer);

  router.route('/winter')
  .get(staticsController.winter);

  router.route('/fall')
  .get(staticsController.fall);

//LOGIN PASSPORT ROUTING/////

router.route('/signup')
  .get(usersController.getSignup)
  .post(usersController.postSignup);

router.route('/login')
  .get(usersController.getLogin)
  .post(usersController.postLogin);

router.route("/logout")
  .get(usersController.getLogout);


module.exports = router;