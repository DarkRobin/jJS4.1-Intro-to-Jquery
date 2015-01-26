$(document).on('ready', function() {

//1


	$('.first-button').on('click', function(){
		console.log("WOW it worked!!");
		$('body').append('<p>Shinji Akirie must come and pilot Eva unit 01</p>');
	});
  
	$('.second-button').on('click', function(){
		$('body').append('<h1>Neo Tokyo is Under Attack!!!</h1>');

	});

	$('.third-button').on('click', function(){
		$('body').append('<ul><li>Eggs</li><li>Bread</li><li>Green</li></ul>');
	});


});