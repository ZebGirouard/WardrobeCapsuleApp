

function home(req, res) {  
  res.render('index');
}

function spring(req, res){
	res.render('spring');
}

//Need to build same thing for fall/winter/summer pages


module.exports = {
  home: home,
  spring: spring
};