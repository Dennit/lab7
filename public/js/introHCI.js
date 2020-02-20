'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
});

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	// your code here
	console.log( "Clicked button");
	$(".likeCtr").click( sendDate);
}
function sendDate(){
	console.log( "Sent data")
	ga( "send", "event", 'like', 'click');

}