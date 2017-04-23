var springDresses = [];
var $dressName;
var $dressDescrip;
var $dressImage;
var $dressUrl;

$(document).ready(function() {
  console.log('spring.js loaded!');

//pull the selected spring dresses onto the spring capsule page
$.ajax({
	method: 'GET',
	url:'api/dresses',
	success:  dressSuccess, 
	error: handleError
});

//pull the selected spring tops onto the spring capsule page
$.ajax({
	method: 'GET',
	url:'api/tops',
	success:  topSuccess, 
	error: handleError
});
});

function topSuccess(json) {
	console.log("top success!");
	var allTops = json;
	console.log(allTops);

	var topOneName = allTops[1].name;
	var topOnePrice = allTops[1].price;
	var topOneUrl= allTops[1].url;
	var topOneImage = allTops[1].image;

	$('.top1').find('.card-img-top').attr("src", topOneImage);
	$('.top1').find('.card-text').text(topOnePrice);
	$('.top1').find('.card-title').text(topOneName);
	$('.top1').find('.btn').attr("href", topOneUrl);

	var topTwoName = allTops[2].name;
	var topTwoPrice = allTops[2].price;
	var topTwoUrl= allTops[2].url;
	var topTwoImage = allTops[2].image;

	$('.top2').find('.card-img-top').attr("src", topTwoImage);
	$('.top2').find('.card-text').text(topTwoPrice);
	$('.top2').find('.card-title').text(topTwoName);
	$('.top2').find('.btn').attr("href", topTwoUrl);

	var topThreeName = allTops[11].name;
	var topThreePrice = allTops[11].price;
	var topThreeUrl= allTops[11].url;
	var topThreeImage = allTops[11].image;

	$('.top3').find('.card-img-top').attr("src", topThreeImage);
	$('.top3').find('.card-text').text(topThreePrice);
	$('.top3').find('.card-title').text(topThreeName);
	$('.top3').find('.btn').attr("href", topThreeUrl);


	var topFourName = allTops[17].name;
	var topFourPrice = allTops[17].price;
	var topFourUrl= allTops[17].url;
	var topFourImage = allTops[17].image;

	$('.top4').find('.card-img-top').attr("src", topFourImage);
	$('.top4').find('.card-text').text(topFourPrice);
	$('.top4').find('.card-title').text(topFourName);
	$('.top4').find('.btn').attr("href", topFourUrl);
}



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


	var dressFourName = allDresses[3].name;
	var dressFourPrice = allDresses[3].price;
	var dressFourUrl= allDresses[3].url;
	var dressFourImage = allDresses[3].image;

	$('.dress4').find('.card-img-top').attr("src", dressFourImage);
	$('.dress4').find('.card-text').text(dressFourPrice);
	$('.dress4').find('.card-title').text(dressFourName);
	$('.dress4').find('.btn').attr("href", dressFourUrl);
}

function handleError(e) {
  console.log('uh oh, error');
}


