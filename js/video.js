const video = document.querySelector("#player1");

window.addEventListener("load", function() {
	console.log("Good job opening the window");
	/*// "player 1" is the id 
	video =  */
	video.autoplay = false;
	video.loop = false;
	console.log('autoplay is set to '+ video.autoplay);
	console.log('loop is set to '+ video.loop);
});


// play video and update volumne when "Play Video" button pressed
document.querySelector("#play").addEventListener("click", function() {
	video.play();
	console.log("Play Video");
	let currVol = document.querySelector("#slider").value;
	
	console.log("volume level " +currVol);
	document.querySelector("#volume").innerText = currVol;
});


// pause video when "Pause Video" button pressed
document.querySelector("#pause").addEventListener("click", function() {
	video.pause();
	console.log("Paused Video");
});

// slow down video speed by 10% when button is clicked 
document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate *= 0.9;
	console.log("Playback speed: " + video.playbackRate);
});

// speed up video speed by 90 times when button is clicked 
document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate /= 0.9;
	console.log("Playback speed: " + video.playbackRate);
});

// Advance the current video by 10 seconds. If the video length has been exceeded go back to the start of the video - no farther.

document.querySelector("#skip").addEventListener("click", function() {
	video.currentTime += 10;
	if (video.currentTime >= video.duration){
		video.currentTime = 0;
		// video.play();
		console.log('This is the end of the line buckaroo')
	}
	console.log("Current location: " + video.currentTime);
	// don't need else because that's implied with setting the skip forward
});

// Mute/unmute the video and update the text in the button
document.querySelector("#mute").addEventListener("click", function() {
	let muteButtonText = document.querySelector("#mute").innerText;
	// video.volume = 0
	if (muteButtonText == 'Mute'){
		video.muted = true;
		document.querySelector("#mute").innerText = 'Unmute';
	}
	else {
		video.muted = false;
		document.querySelector("#mute").innerText = 'Mute';
	}
	console.log("Silence button says: " + muteButtonText);
});

// Change volume based on slider value and update volumne text information
// using change would only update slider when clicked released
document.querySelector("#slider").addEventListener("input", function() {
	let newVol = document.querySelector("#slider").value;
	video.volumne = newVol;
	document.querySelector("#volume").innerText = newVol;

	console.log('current slider set to: ' + newVol);
});

// use OldSchool class on video
document.querySelector("#vintage").addEventListener("click", function() {
	video.style.filter = "grayscale(100%)";
	console.log("Video in old school mode");
	// don't need else because that's implied with setting the skip forward
});

// Revert back to original colors
document.querySelector("#orig").addEventListener("click", function() {
	video.style.filter = "grayscale(0%)";
	console.log("Video in original mode");
	// don't need else because that's implied with setting the skip forward
});
