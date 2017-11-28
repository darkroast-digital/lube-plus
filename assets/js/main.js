// ======================================================================
//
// Cards
//
// ======================================================================

$('.container').on('mouseenter', function () {
	$('.card').toggleClass('flipped');
});
$('.container').on('mouseleave', function () {
	$('.card').toggleClass('flipped');
});

// ======================================================================
//
// Slider
//
// ======================================================================

$(document).on('ready', function () {
	$(".testimonials").slick({
		arrows: false,
		dots: true,
		infinite: true,
		autoplay: true,
		slidesToShow: 1,
		slidesToScroll: 1
	});

	$('.slick-dots button').empty();
});

// ======================================================================
//
// Contact
//
// ======================================================================

//FORM =======================================

$(function() {

    // Get the form
    var form = $('#form');
    
    // Get the messages
    var formMessages = $('.form-messages');
    
    // Set up an event listener for the contact form
    $(form).submit(function(e) {
        // Stop the browser from submitting the form
        e.preventDefault();
        
        // Serialize the form data
        var formData = $(form).serialize();
        
        // Submit form with AJAX
        $.ajax({
            type: 'Post',
            url: $(form).attr('action'),
            data: formData
        })
        .done(function(response) {
            // Make sure that the formMessages div has the 'success' class
            $(formMessages).removeClass('error');
            $(formMessages).addClass('success');
            
            // Set the message test
            $(formMessages).text(response);
            
            // Clear the form
            $('#form input').val('');
            $('#form textarea').val('');
        })
        .fail(function(data) {
            // Make sure that the formMessages div has the 'error' class
            $(formMessages).removeClass('success');
            $(formMessages).addClass('error');
            
            // Set the message text
            if (data.responseText !== '') {
                $(formMessages).text(data.responseText);
            } else {
                $(formMessages).text('Ooops! An error occured and your message could not be sent.');
            }
            
        })
        
    });
    
});

// ======================================================================
//
// Parallax
//
// ======================================================================

// makes the parallax elements
function parallaxIt() {

	// create variables
	var $fwindow = $(window);
	var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

	// on window scroll event
	$fwindow.on('scroll resize', function () {
		scrollTop = window.pageYOffset || document.documentElement.scrollTop;
	});

	// for each of content parallax element
	$('[data-type="content"]').each(function (index, e) {
		var $contentObj = $(this);
		var fgOffset = parseInt($contentObj.offset().top);
		var yPos;
		var speed = ($contentObj.data('speed') || 1);

		$fwindow.on('scroll resize', function () {
			yPos = fgOffset - scrollTop / speed;

			$contentObj.css('top', yPos);
		});
	});

	// for each of background parallax element
	$('[data-type="background"]').each(function () {
		var $backgroundObj = $(this);
		var bgOffset = parseInt($backgroundObj.offset().top);
		var yPos;
		var coords;
		var speed = ($backgroundObj.data('speed') || 0);

		$fwindow.on('scroll resize', function () {
			yPos = -((scrollTop - bgOffset) / speed);
			coords = '50% ' + yPos + 'px';

			$backgroundObj.css({
				backgroundPosition: coords
			});
		});
	});

	// triggers winodw scroll for refresh
	$fwindow.trigger('scroll');
};

parallaxIt();


// ======================================================================
//
// Tabs
//
// ======================================================================

$(function () {
	$('.tabs__nav li').first().addClass('active');
	$('.tab__drawer').first().addClass('active');
	$('.tab__content').hide().first().show();

	// when tabs are tabs
	$('.tabs__nav li').click(function () {

		$('.tab__content').hide();
		var activeTab = $(this).attr('rel');
		$('#' + activeTab).fadeIn();

		$('.tabs__nav li').removeClass('active');
		$(this).addClass('active');

		$('.tab__drawer').removeClass('active');
		$('.tab__drawer[rel^="' + activeTab + '"]').addClass('active');

	});

	// when tabs are accordions
	$('.tab__drawer').click(function () {

		$('.tab__drawer').removeClass('active');
		$(this).addClass('active');

		$('.tab__content').slideUp({
			duration: 400
		});
		var a_activeTab = $(this).attr('rel');
		$('#' + a_activeTab).slideDown({
			duration: 400
		});

		$('.tabs__nav li').removeClass('active');
		$('.tabs__nav li[rel^="' + a_activeTab + '"]').addClass('active');

	});

});

$(function () {

	$('.modal__trigger').click(function (e) {
		e.preventDefault();

		var activeModal = $(this).attr('href');
		$('#' + activeModal).addClass('is--open');
		$('.overlay').addClass('is--open');

	});

	$('.modal__close, .overlay').click(function () {
		var modal = $('.modal.is--open');

		modal.removeClass('is--open');
		$('.overlay').removeClass('is--open');

	});

});

// ======================================================================
//
// Accordion
//
// ======================================================================

$(function () {
	$('.accordion__title').first().addClass('active');
	$('.accordion__content').hide().first().show();

	$('.accordion__title').on('click', function () {

		$(this).addClass('active').siblings('.accordion__title').removeClass('active');
		$(this).next('.accordion__content').slideDown({
			duration: 400
		}).siblings('.accordion__content').slideUp({
			duration: 400
		});
	});
});

//

var random_places = [
  ['WindsorAirport', 42.265451, -82.960574, 4],
  ['Chattam', 42.382224, -82.195090, 4],
  ['Emeryville', 42.297765, -82.761438, 4],
  ['WindsorHoward', 42.286849, -83.013193, 4],
  ['WindsorTechumseh', 42.305816, -82.977827, 4],
  ['Amherstburg', 42.102808, -83.110045, 4]
];

function initialize() {

  var markers = [];
  var map = new google.maps.Map(document.getElementById('map-canvas'), {
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    panControl: false
  });

  var styles = [{
    featureType: "all",
    elementType: "labels",
    stylers: [
      { visibility: "off" }
    ]
  }];

  map.setOptions({styles: styles});
  
  // Show initial location at Sydney — can be changed to detect user location
  var defaultBounds = new google.maps.LatLngBounds(
      new google.maps.LatLng(42.314937, -83.036363),
      new google.maps.LatLng(42.214937, -83.036362));
  map.fitBounds(defaultBounds);

 
  var input = /** @type {HTMLInputElement} */(
      document.getElementById('input'));
  map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

  var searchBox = new google.maps.places.SearchBox(
    /** @type {HTMLInputElement} */(input));



  // [START region_getplaces]
  // Listen for the event fired when the user selects an item from the
  // pick list. Retrieve the matching places for that item.
  google.maps.event.addListener(searchBox, 'places_changed', function() {
    var places = searchBox.getPlaces();

    for (var i = 0, marker; marker = markers[i]; i++) {
      marker.setMap(null);
    }

    // For each place, get the icon, place name, and location.
    markers = [];
    var bounds = new google.maps.LatLngBounds();

    for (var i = 0, place; place = places[i]; i++) {
      var image = {
        url: place.icon,
        size: new google.maps.Size(71, 71),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(17, 34),
        scaledSize: new google.maps.Size(25, 25)
      };

      // Create a marker for each place.
      var marker = new google.maps.Marker({
        map: map,
        icon: image,
        title: place.name,
        position: place.geometry.location
      });

      markers.push(marker);

      bounds.extend(place.geometry.location);

      if (place.geometry.viewport) {
        map.fitBounds(place.geometry.viewport);
      } else {
        map.setCenter(place.geometry.location);
        map.setZoom(2);  // Why 17? Because it looks good.
      }
    }

    

  });
  // [END region_getplaces]

  var place_markers = [];

  // Bias the SearchBox results towards places that are within the bounds of the
  // current map's viewport.

  // Make markers show if they are inside visible bounds
  google.maps.event.addListener(map, 'bounds_changed', function() {
      
    var bounds = map.getBounds();
    searchBox.setBounds(bounds);
    
    // Remove out of bounds markers
    for (var k = 0; k < place_markers.length; k++) {
      var one_marker = place_markers[k];
      if (!bounds.contains(one_marker.getPosition())) {
        one_marker.setMap(null);
      }
    }

    // Create markers which should be visible
    for (var i = 0; i < random_places.length; i++) {
      var placeLatLng = random_places[i];
      
      var myLatLng = new google.maps.LatLng(placeLatLng[1], placeLatLng[2]);
      if ( bounds.contains(myLatLng) ) {

        
        var marker = new google.maps.Marker({
          position: myLatLng,
          map: map,
          title: placeLatLng[0],

        });
        place_markers.push(marker);
      }
    };
    // end places markers
  });
}



google.maps.event.addDomListener(window, 'load', initialize);

// ======================================================================
//
// Menu
//
// ======================================================================

$(function () {
	var trigger = $('.menu__trigger');
	var menu = $('.menu');
	
	trigger.click(function () {
		$(this).toggleClass('is--open');
		menu.toggleClass('is--open');
	});
	
});

$('.card__container').on('click', function () {
  $(this).find('.card').toggleClass('flipped');
});