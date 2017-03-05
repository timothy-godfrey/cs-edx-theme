$(document).ready(function() {

	//------- GOOGLE MAPS API  ---------//
	//------- Create Map Area with Custom Marker Icon  ---------//
	//------- Adapted by Heartburst Digital - heartburst.com.au ---------//

	// CENTRE OF THE MAP 
	// Coordinates (Geocode) for the center of the map
	// Visit http://www.gpsvisualizer.com/geocode to convert an address to geocode
	
	var latlng = new google.maps.LatLng(-37.85750,145.45429);

	// MAP SETTINGS
	var options = {
		zoom: 14, // The initial zoom level of the map (0 = far, 20 = too close)
		center: latlng,
		mapTypeId: google.maps.MapTypeId.ROADMAP, // Define the map type ROADMAP/SATELLITE/HYBRID/TERRAIN
		scrollwheel: false,
		zoomControl: true,
		overviewMapControl: false,
		streetViewControl: false,
		mapTypeControl: false,
		keyboardShortcuts: false,
		backgroundColor: '#FFF'
	};
	
	// INITIALIZE THE MAP
	// 'locationMap' is the ID of the DIV/Element to contain the map
	var map = new google.maps.Map(document.getElementById('locationMap'), options);

	// CUSTOMISE THE MARKER ICON
	// Icon Path:
	var image = new google.maps.MarkerImage('/websites/mdcs/templates/mdcs/img/map-icon.png',
		//Icon Size (Width, Height)
		new google.maps.Size(70, 49),
		// Icon Position (x,y) - Use this to adjust the position of the icon
		new google.maps.Point(0,0)
	);

	// ADD THE CUSTOM MARKER
	// Geocode for the position of the marker (Usually the same as the centre of the map as above)
	var marker1 = new google.maps.Marker({
		position: new google.maps.LatLng(-37.85750,145.45429),
		map: map,
		icon: image // Remove this line and the proceeding comma to use default pin
	});

});
