function submitClicked() {
	var email = $("#email").val();
	$("#email").val('');

	if (validateEmail(email)){
		console.log("email is valid");
		$( "#signupdiv" ).fadeOut( 500, function() {
			$( "#thankyou" ).fadeIn( 500, function() {});
		});
		$.ajax({
			method: 'POST',
			dataType: "json",
			url: "/saveEmail/" + email, 
			data: {},
			success: function(result){
	        	console.log(result);
	        }
		});
	}
	else {
		$("#msg").text('This email isn\'t valid.');
	}
}

function validateEmail(email) {
    // var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    // return re.test(email);
    return true;
}

function showSignUp() {
	if($('#msg').css('display') == 'block'){ 
		$( "#msg" ).fadeOut( 500, function() {
			$( "#signupdiv" ).fadeIn( 500, function() {});
		});
	} else if ($('#sponsorsdiv').css('display') == 'block') {
		$( "#sponsorsdiv" ).fadeOut( 500, function() {
			$( "#signupdiv" ).fadeIn( 500, function() {});
		});
	} else if ($('#thankyou').css('display') == 'block') {
		$( "#thankyou" ).fadeOut( 500, function() {
			$( "#signupdiv" ).fadeIn( 500, function() {});
		});
	}
}

function showSponsor() {
	if($('#msg').css('display') == 'block'){ 
		$( "#msg" ).fadeOut(400, function() {
			$( "#sponsorsdiv" ).fadeIn( 400, function() {});
		});
	} else if ($('#signupdiv').css('display') == 'block') {
		$( "#signupdiv" ).fadeOut(400, function() {
			$( "#sponsorsdiv" ).fadeIn( 400, function() {});
		});
	} else if ($('#thankyou').css('display') == 'block') {
		$( "#thankyou" ).fadeOut( 400, function() {
			$( "#sponsorsdiv" ).fadeIn( 400, function() {});
		});
	}
}