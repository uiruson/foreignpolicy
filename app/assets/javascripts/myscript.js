$(function() {
	
	var pathname = window.location.pathname;
	//alert(pathname);

	if(!(pathname == '/')){
		$('#carousel-example-generic').hide();
		$('.contactUsContainer').hide();
		$('.productDisplayContainer').show();
		$('#logoBanner').hide();
		$('#shopnowBanner').hide();
	}

	//GOOGLE MAP
	var map;
	function initialize() {
	  var mapOptions = {
	    zoom: 18,
	    center: new google.maps.LatLng(49.286139, -123.126979)
	  };
	  map = new google.maps.Map(document.getElementById('map-canvas'),
	      mapOptions);
	}

	google.maps.event.addDomListener(window, 'load', initialize);

	//CONTACT US TOGGLE BOTTON
	$('.contactUsButton').click(function(){
		$('#aboutWebstore').toggle();
		$('#subscribeForm').toggle();
		$('#webstoreAddress').toggle();
		$('.map-wrapper').toggle();
	})

	$(".contactUsButton").hover(function() {
        $(this).animate({opacity: 1.0}, 500);
    }, function() {
        $(this).animate({opacity: 0.3}, 500);
    });

    $("#logoBanner").hover(function() {
        $(this).animate({opacity: 0.5}, 500);
    }, function() {
        $(this).animate({opacity: 1}, 500);
    });

    $("#shopnowBanner").hover(function() {
        $(this).animate({opacity: 0.5}, 500);
    }, function() {
        $(this).animate({opacity: 1}, 500);
    });

});//jQuery is loaded

