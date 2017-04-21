var express = require('express');
var router = express.Router();
// Parses information from POST
var bodyParser = require('body-parser');
// Used to manipulate POST methods
var methodOverride = require('method-override');
var passport = require("passport");
var usersController = require('../controllers/users');
var staticsController = require('../controllers/statics');

function authenticatedUser(req, res, next){
	 // If the user is authenticated, then we continue the execution
	if (req.isAuthenticated()) return next();
	 // Otherwise the request is always redirected to the home page
	res.redirect('/');
}



//HOME AND SEASON PAGE ROUTING///////

router.route('/')
  .get(staticsController.home);

router.route('/spring')
  .get(staticsController.spring);

router.route('/summer')
  .get(staticsController.summer);

//LOGIN PASSPORT ROUTING/////

router.route('/signup')
  .get(usersController.getSignup)
  .post(usersController.postSignup);

router.route('/login')
  .get(usersController.getLogin)
  .post(usersController.postLogin);

router.route("/logout")
  .get(usersController.getLogout);

router.route("/secret")
	.get(authenticatedUser, usersController.secret);

module.exports = router;