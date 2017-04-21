

function home(req, res) {  
  res.render('index');
}

function spring(req, res){
	res.render('spring');
}

function summer(req, res) {
	res.render('summer');
}

//Need to build same thing for fall/winter/summer pages


module.exports = {
  home: home,
  spring: spring,
  summer: summer
};