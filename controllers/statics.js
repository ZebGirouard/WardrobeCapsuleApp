// // GET /

// module.exports = function(app) {
// 	app.get('/', function(req, res){
// 		res.render('index');
// 	});

// 	app.get('/spring', function(req, res){
// 		res.render('spring');
// 	});
// };


function home(req, res) {  
  res.render('index');
}

function spring(req, res){
	res.render('spring');
}

module.exports = {
  home: home,
  spring: spring
};