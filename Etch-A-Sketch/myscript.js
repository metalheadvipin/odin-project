
	$('#submit').click(function(event){
		event.preventDefault();
		var boxes = $('#boxes').val();
		var container = $('#container');



		for ($var i=0; i< boxes; i++){
			container += '<div class="gridBoxes"></div>';
		}
});

