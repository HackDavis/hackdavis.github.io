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
		$( "#msg" ).fadeOut( 500, function() {
			$( "#sponsorsdiv" ).fadeIn( 500, function() {});
		});
	} else if ($('#signupdiv').css('display') == 'block') {
		$( "#signupdiv" ).fadeOut( 500, function() {
			$( "#sponsorsdiv" ).fadeIn( 500, function() {});
		});
	} else if ($('#thankyou').css('display') == 'block') {
		$( "#thankyou" ).fadeOut( 500, function() {
			$( "#sponsorsdiv" ).fadeIn( 500, function() {});
		});
	}
}

function submitEmail() {
	$( "#signupdiv" ).fadeOut( 500, function() {
		$( "#thankyou" ).fadeIn( 500, function() {});
	});
}