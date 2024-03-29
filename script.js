var scrollTotal = 1000;
var scrolled = 0; // A variable to keep track of how far we've scrolled.
var fractionScrolled = scrolled / scrollTotal;

var triangle = document.getElementById('next-triangle');
triangle.addEventListener("click", triangleClickHandler, false);

// You can read more about the mousewheel event at https://developer.mozilla.org/en-US/docs/DOM/DOM_event_reference/mousewheel
if (document.addEventListener) {
	document.addEventListener("mousewheel", MouseWheelHandler, false);
}


var waypoints = document.getElementsByClassName('waypoint');
for (i = 0; i < waypoints.length; i++) {
	// Here we attach a handler to the click event for every waypoint,
	// https://developer.mozilla.org/en-US/docs/Web/Reference/Events/click
	waypoints[i].addEventListener("click", waypointClickHandler, false);
}

function updateWaypoints() {
	fractionScrolled = scrolled / scrollTotal;

	// 0 <= fractionScrolled <= 1, so *10 gives us 10; Math.floor rounds down
	var whichWaypoint = Math.max(0, Math.floor(fractionScrolled * 10) - 1);

	for (i = 0; i < 10; i++) {
		// Notice we constructed our li#id names to make this easy
		var currentWaypoint = document.getElementById('waypoint-' + i);
		
		if ( i == whichWaypoint ) {
			currentWaypoint.classList.add('active-waypoint');
		}
		
		else {
			currentWaypoint.classList.remove('active-waypoint');
		}
	}

	// Seek to the proportional time of the 38s clip of Bey's "Countdown"
	document.getElementById('Countdown').currentTime = fractionScrolled * 20.0;
	
	if (scrolled<250){
		console.log("1st");
		document.getElementById('first').setAttribute('style','img: ./mask_spin00991.psd');
	}
}

function waypointClickHandler(e) {
	console.log('click');
	for (i = 0; i < waypoints.length; i++) {
		if (waypoints[i] === this) {
			scrolled = (i+1)*100;
			updateWaypoints();
			console.log(scrolled);
		}
	
	}
}





function MouseWheelHandler(e) {
	// This function is called every time there's a mousewheelevent

	var rawScrolled = Math.max(-1, Math.min(1, e.wheelDelta));
	scrolled = Math.min(Math.max(0, scrolled - rawScrolled), scrollTotal);

	document.getElementsByTagName('header')[0].innerHTML = scrolled;
	if (scrolled>100){
 				document.getElementById('first').setAttribute('style', 'left: 50px', 'show_image(./2.tif)');
 				//document.getElementById('first').setAttribute('style','color: black;');
 			}
 			
 			if (scrolled>300){
 				document.getElementById('first').setAttribute('style','visibility:hidden;');
 				document.getElementById('second').setAttribute('style', 'left: 50px','background-image: img(./2.tif)');
 				
 			}
	
	updateWaypoints();}
	

function triangleClickHandler(e) {
 	console.log('Tclick');
 	
 		if (triangle === this) {
 			scrolled = scrolled+100;
 			if (scrolled>100){
 				document.getElementById('first').setAttribute('style','background-image: )');
 				document.getElementById('first').setAttribute('style','color: black;');
 			}
 			
 			if (scrolled>300){
 				document.getElementById('first').setAttribute('style','visibility:hidden;');
 				document.getElementById('second').setAttribute('style','background-image: ./2.tif)');
 				
 			}
 			updateWaypoints();
 			console.log(scrolled);
		}
}

function scrolltransition(e) {
	if (scrolled < 250) {

	};

}
