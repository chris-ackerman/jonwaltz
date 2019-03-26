// THIS CALLS FOUNDATION, THE FRAMEWORK THAT HELPS FORMAT THE CONTENT
$(document).foundation()

// THIS CALLS THE FUNCTION THAT DICTATES THE ANIMATION, AS WELL AS SETS A 2-SECOND TIMER FOR THE PRELOADER ANIMATION
window.onload = function() {
    var preloader = $('.preloader');
    preloader.fadeOut(3000);
}

// THIS FUNCTION STARTS AND STOPS THE MUSIC WHEN YOU CLICK ON THE PICTURE IN THE TOP LEFT
function StartOrStop() {
    var audie = document.getElementById("music");

    if (audie.paused == false) {
        document.getElementById("newest").style.borderColor="black";

        console.log("black border");
        audie.pause();
    }
    else if (audie.paused == true) {
        document.getElementById("newest").style.borderColor="white";

        console.log("white border");
        audie.play();
    }
}


// THIS FUNCTION CLOSES THE DIV THAT MAKES THE SCREEN BLACK WHEN SHOWING A NEW JWALTZ VIDEO
function closeNewVideo() {
    $('#newVideo').fadeOut('slow');
    var video = $("#video-player").attr("src");
    $("#video-player").attr("src","");
    $("#video-player").attr("src",video);
}












