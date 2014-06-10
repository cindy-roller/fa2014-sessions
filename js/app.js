/* Tell TopCoat what page to show by default, as well as 
   initialize it after the content has been loaded. */
 
   
// The function below cannot be accessed anywhere else   
$(document).ready(function (){
	// All our logic will go here
	// The following line is required.
	var app = new TopcoatTouch(); // Initialize Topcoat
	app.goTo("home");
	getLocation();	// call the function from w3schools
});	   

/* Code obtained from w3schools 
   The geolocation object must be supported by the browser you're using for 
   this to work. The getCurrentPosition() function is defined in the browser. */
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition,showError);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
    var latlon = position.coords.latitude+","+position.coords.longitude;

    var img_url = "http://maps.googleapis.com/maps/api/staticmap?center="
    +latlon+"&zoom=15&size=400x300&sensor=false";
  /* document.getElementById("mapholder").innerHTML = "<img src='"+img_url+"'>"; */
  
  /* Use jQuery instead of dom function */
  $("#map-holder").html("<img src='"+img_url+"'>");
}

function showError(error) {
    switch(error.code) {
        case error.PERMISSION_DENIED:
            x.innerHTML = "User denied the request for Geolocation."
            break;
        case error.POSITION_UNAVAILABLE:
            x.innerHTML = "Location information is unavailable."
            break;
        case error.TIMEOUT:
            x.innerHTML = "The request to get user location timed out."
            break;
        case error.UNKNOWN_ERROR:
            x.innerHTML = "An unknown error occurred."
            break;
    }
}
