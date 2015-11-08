function submitClicked() {
	var email = $("#inp").val();
	$("#inp").val('');

	if (validateEmail(email)){
		console.log("email is valid");
		$.ajax({
			method: 'POST',
			dataType: "json",
			url: "/saveEmail/" + email, 
			data: {},
			success: function(result){
	        	console.log(result);
	        }
		});
		$("#msg").text('Thanks for submitting!');
	}
	else {
		$("#msg").text('This email isn\'t valid.');
		//console.log("email is not valid");
	}
}

function validateEmail(email) {
    var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    return re.test(email);
}