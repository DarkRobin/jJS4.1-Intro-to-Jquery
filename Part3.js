$(document).on('ready', function() {
  

  $('.big').on('click', function(){
  		var popinfo = $('<div>')
  			.text('Hey this is a pop up window. WOW!')
  			.addClass('pop')
  			.css({
  				
  				fontsize: 30
  				
  			});

  		$('body').append('popinfo');
  		



  });
});