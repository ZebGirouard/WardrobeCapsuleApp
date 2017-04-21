var LocalStrategy = require('passport-local').Strategy;
var User = require('../models/user');

module.exports = function(passport) {

	passport.serializeUser(function(user, callback){
		callback(null, user.id);
	});

	passport.deserializeUser(function(id, callback){
		User.findById(id, function(err, user){
			callback(err, user);
		});
	});

	passport.use('local-signup', new LocalStrategy({
		usernameField: 'email',
		passwordField: 'password',
		passReqToCallback : true
	}, function(req, email, password, callback) {
		//find a user with this e-mail
	User.findOne({'local.email': email}, function(err, user) {
		if(err) return callback(err);

		//if there is already a user with this email
		if(user) {
			return callback(null, false, req.flash('signupMessage', 'This email has already been used.'));
		} else {
			//there is no user registered with this email
			//create a new user
			var newUser = new User();
			newUser.local.email = email;
			newUser.local.password = newUser.encrypt(password);

			newUser.save(function(err){
				if(err) throw err;
				return callback(null, newUser);
			});
		}
	});
	}));

	passport.use('local-logins', new LocalStrategy ({
		usernameField: 'email',
		passwordField: 'password',
		passReqToCallback: true
	}, function(req, email, password, callback) {
		User.findOne({'local.email': email}, function(err, user) {
			if(err) {return callback(err);}

			if(!user) {
				return callback(null, false, req.flash('loginMessage', 'No user found.  Go to SignUp page to register.'));
			}
			if(!user.validPassword(password)) {
				return callback(null, false, req.flash('loginMessage', 'Oops! Wrong password'));
			}
			return callback(null, user);
		});
	}));
};