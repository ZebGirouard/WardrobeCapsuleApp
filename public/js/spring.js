var allDresses = [];
var $card;

$(document).ready(function() {
  console.log('spring.js loaded!');

  $card = $('.card');

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

//pull the selected spring pants onto the spring capsule page
$.ajax({
	method: 'GET',
	url:'api/pants',
	success:  pantSuccess, 
	error: handleError
});

//pull the selected spring shoes onto the spring capsule page
$.ajax({
	method: 'GET',
	url:'api/shoes',
	success:  shoeSuccess, 
	error: handleError
});

//delete the dress item upon click of delete button
$card.on('click', '.deleteBtn', function() {
    console.log('clicked delete button to', '/api/dresses/'+$(this).attr('data-id'));
  	$(this).closest('.card').html('');

    $.ajax({
      method: 'DELETE',
      url: '/api/dresses/'+$(this).attr('data-id'),
      success: deleteDressSuccess,
      error: deleteError
    });
  });


});

function deleteDressSuccess(json) {
  var dressDelete = json;
  console.log(json);
  var dressId = dressDelete._id;
  console.log('delete dress', dressId);
  // find the dress with the correct ID and remove it from the array
  for(var index = 0; index < allDresses.length; index++) {
    if(allDresses[index]._id === dressId) {
      allDresses.splice(index, 1);
      break;  // we found our dress - no reason to keep searching (this is why we didn't use forEach)
    }
  
  }
}


function shoeSuccess(json) {
	console.log("shoe success!");
	var allshoes = json;
	// console.log(allshoes);

	var shoeOneName = allshoes[10].name;
	var shoeOnePrice = allshoes[10].price;
	var shoeOneUrl= allshoes[10].url;
	var shoeOneImage = allshoes[10].image;

	$('.shoe1').find('.card-img-top').attr("src", shoeOneImage);
	$('.shoe1').find('.card-text').text(shoeOnePrice);
	$('.shoe1').find('.card-title').text(shoeOneName);
	$('.shoe1').find('.btn').attr("href", shoeOneUrl);

	var shoeTwoName = allshoes[11].name;
	var shoeTwoPrice = allshoes[11].price;
	var shoeTwoUrl= allshoes[11].url;
	var shoeTwoImage = allshoes[11].image;

	$('.shoe2').find('.card-img-top').attr("src", shoeTwoImage);
	$('.shoe2').find('.card-text').text(shoeTwoPrice);
	$('.shoe2').find('.card-title').text(shoeTwoName);
	$('.shoe2').find('.btn').attr("href", shoeTwoUrl);

	var shoeThreeName = allshoes[34].name;
	var shoeThreePrice = allshoes[34].price;
	var shoeThreeUrl= allshoes[34].url;
	var shoeThreeImage = allshoes[34].image;

	$('.shoe3').find('.card-img-top').attr("src", shoeThreeImage);
	$('.shoe3').find('.card-text').text(shoeThreePrice);
	$('.shoe3').find('.card-title').text(shoeThreeName);
	$('.shoe3').find('.btn').attr("href", shoeThreeUrl);


	var shoeFourName = allshoes[38].name;
	var shoeFourPrice = allshoes[38].price;
	var shoeFourUrl= allshoes[38].url;
	var shoeFourImage = allshoes[38].image;

	$('.shoe4').find('.card-img-top').attr("src", shoeFourImage);
	$('.shoe4').find('.card-text').text(shoeFourPrice);
	$('.shoe4').find('.card-title').text(shoeFourName);
	$('.shoe4').find('.btn').attr("href", shoeFourUrl);
}

function pantSuccess(json) {
	console.log("pant success!");
	var allpants = json;
	console.log(allpants);

	var pantOneName = allpants[10].name;
	var pantOnePrice = allpants[10].price;
	var pantOneUrl= allpants[10].url;
	var pantOneImage = allpants[10].image;

	$('.pant1').find('.card-img-top').attr("src", pantOneImage);
	$('.pant1').find('.card-text').text(pantOnePrice);
	$('.pant1').find('.card-title').text(pantOneName);
	$('.pant1').find('.btn').attr("href", pantOneUrl);

	var pantTwoName = allpants[11].name;
	var pantTwoPrice = allpants[11].price;
	var pantTwoUrl= allpants[11].url;
	var pantTwoImage = allpants[11].image;

	$('.pant2').find('.card-img-top').attr("src", pantTwoImage);
	$('.pant2').find('.card-text').text(pantTwoPrice);
	$('.pant2').find('.card-title').text(pantTwoName);
	$('.pant2').find('.btn').attr("href", pantTwoUrl);

	var pantThreeName = allpants[34].name;
	var pantThreePrice = allpants[34].price;
	var pantThreeUrl= allpants[34].url;
	var pantThreeImage = allpants[34].image;

	$('.pant3').find('.card-img-top').attr("src", pantThreeImage);
	$('.pant3').find('.card-text').text(pantThreePrice);
	$('.pant3').find('.card-title').text(pantThreeName);
	$('.pant3').find('.btn').attr("href", pantThreeUrl);


	var pantFourName = allpants[38].name;
	var pantFourPrice = allpants[38].price;
	var pantFourUrl= allpants[38].url;
	var pantFourImage = allpants[38].image;

	$('.pant4').find('.card-img-top').attr("src", pantFourImage);
	$('.pant4').find('.card-text').text(pantFourPrice);
	$('.pant4').find('.card-title').text(pantFourName);
	$('.pant4').find('.btn').attr("href", pantFourUrl);
}

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

	var dressOneId = allDresses[0]._id;
	var dressOneName = allDresses[0].name;
	var dressOnePrice = allDresses[0].price;
	var dressOneUrl= allDresses[0].url;
	var dressOneImage = allDresses[0].image;
	console.log(dressOneId + "is dress one id");

	$('.dress1').find('.card-img-top').attr("src", dressOneImage);
	$('.dress1').find('.card-text').text(dressOnePrice);
	$('.dress1').find('.card-title').text(dressOneName);
	$('.dress1').find('.btn').attr("href", dressOneUrl);
	$('.dress1').find('.deleteBtn').attr("data-id", dressOneId);

	var dressTwoId = allDresses[1]._id;
	var dressTwoName = allDresses[1].name;
	var dressTwoPrice = allDresses[1].price;
	var dressTwoUrl= allDresses[1].url;
	var dressTwoImage = allDresses[1].image;

	$('.dress2').find('.card-img-top').attr("src", dressTwoImage);
	$('.dress2').find('.card-text').text(dressTwoPrice);
	$('.dress2').find('.card-title').text(dressTwoName);
	$('.dress2').find('.btn').attr("href", dressTwoUrl);

	var dressThreeId = allDresses[11]._id;
	var dressThreeName = allDresses[11].name;
	var dressThreePrice = allDresses[11].price;
	var dressThreeUrl= allDresses[11].url;
	var dressThreeImage = allDresses[11].image;

	$('.dress3').find('.card-img-top').attr("src", dressThreeImage);
	$('.dress3').find('.card-text').text(dressThreePrice);
	$('.dress3').find('.card-title').text(dressThreeName);
	$('.dress3').find('.btn').attr("href", dressThreeUrl);


	var dressFourId = allDresses[3]._id;
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

function deleteError(e) {
  console.log('uh oh, delete error');
}


