$(document).ready(function(){
	console.log('client.js is loaded!');

$('#springClick').click(function(event){
	$.ajax({
		type: 'GET',
		url: 'api/products',
		dataType: 'json',
		success: function(products){
				console.log(products);
		}

	});
});



	

});

