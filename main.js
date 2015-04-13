$(document).on('ready', function() {

$(".topo").on("click", function(event){

	var offset = $(this).offset();
	var x = (event.pageX - offset.left);
	var y = (event.pageY - offset.top);

	console.log(x);
	console.log(y);

  	$('.pin')
  		.css('position','absolute')
  		.css('top', y)
  		.css('left', x)
  		.show();

  });










  
});