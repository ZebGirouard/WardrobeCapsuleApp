

function home(req, res) {  
  res.render('index');
}

function spring(req, res){
	res.render('spring');
}

function summer(req, res) {
	res.render('summer');
}

function fall(req, res) {
	res.render('fall');
}

function winter(req, res) {
	res.render('winter');
}

//Need to build same thing for fall/winter/summer pages


module.exports = {
  home: home,
  spring: spring,
  summer: summer, 
  winter: winter,
  fall: fall,
};