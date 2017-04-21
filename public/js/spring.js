var springDresses = [];
var $dressName;
var $dressDescrip;
var $dressImage;
var $dressUrl;

$(document).ready(function() {
  console.log('spring.js loaded!');

$.ajax({
	method: 'GET',
	url:'api/dresses',
	success:  dressSuccess, 
	error: handleError
});
});

function dressSuccess(json) {
	console.log("dress success!");
	var allDresses = json;
	console.log(allDresses);

	var dressOneName = allDresses[0].name;
	var dressOnePrice = allDresses[0].price;
	var dressOneUrl= allDresses[0].url;
	var dressOneImage = allDresses[0].image;

	$('.dress1').find('.card-img-top').attr("src", dressOneImage);
	$('.dress1').find('.card-text').text(dressOnePrice);
	$('.dress1').find('.card-title').text(dressOneName);
	$('.dress1').find('.btn').attr("href", dressOneUrl);

	var dressTwoName = allDresses[1].name;
	var dressTwoPrice = allDresses[1].price;
	var dressTwoUrl= allDresses[1].url;
	var dressTwoImage = allDresses[1].image;

	$('.dress2').find('.card-img-top').attr("src", dressTwoImage);
	$('.dress2').find('.card-text').text(dressTwoPrice);
	$('.dress2').find('.card-title').text(dressTwoName);
	$('.dress2').find('.btn').attr("href", dressTwoUrl);

	var dressThreeName = allDresses[4].name;
	var dressThreePrice = allDresses[4].price;
	var dressThreeUrl= allDresses[4].url;
	var dressThreeImage = allDresses[4].image;

	$('.dress3').find('.card-img-top').attr("src", dressThreeImage);
	$('.dress3').find('.card-text').text(dressThreePrice);
	$('.dress3').find('.card-title').text(dressThreeName);
	$('.dress3').find('.btn').attr("href", dressThreeUrl);


	var dressFourName = allDresses[9].name;
	var dressFourPrice = allDresses[9].price;
	var dressFourUrl= allDresses[9].url;
	var dressFourImage = allDresses[9].image;

	$('.dress4').find('.card-img-top').attr("src", dressFourImage);
	$('.dress4').find('.card-text').text(dressFourPrice);
	$('.dress4').find('.card-title').text(dressFourName);
	$('.dress4').find('.btn').attr("href", dressFourUrl);
}

function handleError(e) {
  console.log('uh oh, error');
}


