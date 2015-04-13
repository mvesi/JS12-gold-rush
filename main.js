$(document).on('ready', function() {




$(".topo").on("click", function(event){

	var offset = $(this).offset();
	var x = (event.pageX - offset.left);
	var y = (event.pageY - offset.top);

	console.log(x);
	console.log(y);

	var pin = $('<img class="pin" src="pin-locator.png">');
	var note = $('<textarea class="note">Enter a note here</textarea>');

$('.container').append(pin);
$('.container').append(note);
	
  	$(pin)
  		.css('position','absolute')
  		.css('top', y)
  		.css('left', x)
  		.show()
  		.on("click",function(){
  			$(this).hide();
  		});

  	 $(note)
  		.css('position','absolute')
  		.css('top', y+30)
  		.css('left', x+30)
  		.show()
  		.on("blur",function(){
  			var userNote = $(this).val();
  			$(this).hide();
  			console.log(userNote);
  		});




  });

//Doesn't work.  Just testing out the hover effect

// var testBox = $('<div class="div-box"></div>');

// $(pin).on("hover",function(){
// 	$(testBox).show();
// });

  
});