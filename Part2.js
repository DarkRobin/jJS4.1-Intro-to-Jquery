$(document).on('ready', function() {

	$('p').on('mouseover', function(){
		$(this).css('color', 'pink');
	});
  
	$('p').on('mouseout', function(){
		$(this).css('color', 'black');
	});

	$('h1, h2, h3').append('!!!');

	$('a').on('click', function(){
		var window = confirm("You sure you want to do that?");
		if(window){
				alert("Sweet!");
				return true;
		}
		else{
				$(this).hide();
				return false;
		}
			
	});	
});