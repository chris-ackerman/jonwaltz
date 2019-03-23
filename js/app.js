// THIS CALLS FOUNDATION, THE FRAMEWORK THAT HELPS FORMAT THE CONTENT
$(document).foundation()

// THIS CALLS THE FUNCTION THAT DICTATES THE ANIMATION, AS WELL AS SETS A 2-SECOND TIMER FOR THE PRELOADER ANIMATION
window.onload = function() {
    display_src();
    var preloader = $('.preloader');
    preloader.fadeOut(2000);
}

// THIS FUNCTION CHANGES THE ACCENT COLOR BASED ON THE CURRENT SET ANIMATION, TAKING TIME AS A VARIABLE
function subscribe() {
    console.log("this is working 1"),
    c = new Date;
    d = c.getHours();
    console.log(d);
    // sunrise
    if (d >= 6 && d < 8) {
        $('.email').css('background-color', '#EA95B2');
    }
    // morning
    else if (d >= 8 && d < 11 ) {
        $('.email').css('background-color', '#B7D863');
    }
    // afternoon
    else if (d >= 11 && d < 17) {
        $('.email').css('background-color', '#34DEDD');
    }
    // evening
    else if (d >= 17 && d < 18 ) {
        $('.email').css('background-color', '#D7B377');
    }
    // sunset
    else if (d >= 18 && d < 20) {
        $('.email').css('background-color', '#CB2BA9');
    }
    // midnight
    else if (d >= 20 && d <= 23 || d >= 0 && d < 6) {
        $('.email').css('background-color', '#AA21B9');
    }
}

// THIS FUNCTION CALLS THE SIMPLE WEATHER API TO GET THE CURRENT FORECAST IN MEMPHIS, AND CHOOSES THE APPROPRIATE ANIMATION
function display_src() {
    $.simpleWeather({
        location: "Memphis, TN",
        woeid: "",
        success: function(a) {
            html0 = a.text, html = html0.toLowerCase();
            console.log(html);
            var b = "",
                c = new Date,
                d = c.getHours();
            d >= 20 || d < 6 ? b = html.includes("cloudy") || html.includes("cold") ? "JW Animations/midnight_cloudy.mp4" : html.includes("dust") || html.includes("foggy") || html.includes("haze") || html.includes("smoky") ? "JW Animations/midnight_fog.mp4" : html.includes("hail") || html.includes("sleet") ? "JW Animations/midnight_hail.mp4" : html.includes("thunderstorms") || html.includes("thundershowers") || html.includes("isolated") ? "JW Animations/midnight_lightning.mp4" : html.includes("snow") && 0 == html.includes("rain") || html.includes("snow") && html.includes("sleet") || html.includes("flurries") || html.includes("blowing") ? "JW Animations/midnight_snow.mp4" : html.includes("tropical storm") || html.includes("rain and snow") || html.includes("rain and sleet") || html.includes("drizzle") || html.includes("rain") || html.includes("showers") && 0 == html.includes("thundershowers") ? "JW Animations/midnight_rain.mp4" : html.includes("night") || html.includes("sunny") || html.includes("day") || html.includes("hot") ? "JW Animations/midnight_sunny.mp4" : html.includes("tornado") || html.includes("hurricane") || html.includes("blustery") || html.includes("windy") ? "JW Animations/midnight_windy.mp4" : "JW Animations/midnight_sunny.mp4" : d >= 6 && d < 8 ? b = html.includes("cloudy") || html.includes("cold") ? "JW Animations/sunrise_cloudy.mp4" : html.includes("dust") || html.includes("foggy") || html.includes("haze") || html.includes("smoky") ? "JW Animations/sunrise_fog.mp4" : html.includes("hail") || html.includes("sleet") ? "JW Animations/sunrise_hail.mp4" : html.includes("thunderstorms") || html.includes("thundershowers") || html.includes("isolated") ? "JW Animations/sunrise_lightning.mp4" : html.includes("snow") && 0 == html.includes("rain") || html.includes("snow") && html.includes("sleet") || html.includes("flurries") || html.includes("blowing") ? "JW Animations/sunrise_snow.mp4" : html.includes("tropical storm") || html.includes("rain and snow") || html.includes("rain and sleet") || html.includes("drizzle") || html.includes("rain") || html.includes("showers") && 0 == html.includes("thundershowers") ? "JW Animations/sunrise_rain.mp4" : html.includes("night") || html.includes("sunny") || html.includes("day") || html.includes("hot") ? "JW Animations/sunrise_sunny.mp4" : html.includes("tornado") || html.includes("hurricane") || html.includes("blustery") || html.includes("windy") ? "JW Animations/sunrise_windy.mp4" : "JW Animations/afternoon_sunny.mp4" : d >= 8 && d < 11 ? b = html.includes("cloudy") || html.includes("cold") ? "JW Animations/morning_cloudy.mp4" : html.includes("dust") || html.includes("foggy") || html.includes("haze") || html.includes("smoky") ? "JW Animations/morning_fog.mp4" : html.includes("hail") || html.includes("sleet") ? "JW Animations/morning_hail.mp4" : html.includes("thunderstorms") || html.includes("thundershowers") || html.includes("isolated") ? "JW Animations/morning_lightning.mp4" : html.includes("snow") && 0 == html.includes("rain") || html.includes("snow") && html.includes("sleet") || html.includes("flurries") || html.includes("blowing") ? "JW Animations/morning_snow.mp4" : html.includes("tropical storm") || html.includes("rain and snow") || html.includes("rain and sleet") || html.includes("drizzle") || html.includes("rain") || html.includes("showers") && 0 == html.includes("thundershowers") ? "JW Animations/morning_rain.mp4" : html.includes("night") || html.includes("sunny") || html.includes("day") || html.includes("hot") ? "JW Animations/morning_sunny.mp4" : html.includes("tornado") || html.includes("hurricane") || html.includes("blustery") || html.includes("windy") ? "JW Animations/morning_windy.mp4" : "JW Animations/afternoon_sunny.mp4" : d >= 11 && d < 17 ? b = html.includes("cloudy") || html.includes("cold") ? "JW Animations/afternoon_cloudy.mp4" : html.includes("dust") || html.includes("foggy") || html.includes("haze") || html.includes("smoky") ? "JW Animations/afternoon_fog.mp4" : html.includes("hail") || html.includes("sleet") ? "JW Animations/afternoon_hail.mp4" : html.includes("thunderstorms") || html.includes("thundershowers") || html.includes("isolated") ? "JW Animations/afternoon_lightning.mp4" : html.includes("snow") && 0 == html.includes("rain") || html.includes("snow") && html.includes("sleet") || html.includes("flurries") || html.includes("blowing") ? "JW Animations/afternoon_snow.mp4" : html.includes("tropical storm") || html.includes("rain and snow") || html.includes("rain and sleet") || html.includes("drizzle") || html.includes("rain") || html.includes("showers") && 0 == html.includes("thundershowers") ? "JW Animations/afternoon_rain.mp4" : html.includes("night") || html.includes("sunny") || html.includes("day") || html.includes("hot") ? "JW Animations/afternoon_sunny.mp4" : html.includes("tornado") || html.includes("hurricane") || html.includes("blustery") || html.includes("windy") ? "JW Animations/afternoon_windy.mp4" : "JW Animations/afternoon_sunny.mp4" : d >= 17 && d < 18 ? b = html.includes("cloudy") || html.includes("cold") ? "JW Animations/evening_cloudy.mp4" : html.includes("dust") || html.includes("foggy") || html.includes("haze") || html.includes("smoky") ? "JW Animations/evening_fog.mp4" : html.includes("hail") || html.includes("sleet") ? "JW Animations/evening_hail.mp4" : html.includes("thunderstorms") || html.includes("thundershowers") || html.includes("isolated") ? "JW Animations/evening_lightning.mp4" : html.includes("snow") && 0 == html.includes("rain") || html.includes("snow") && html.includes("sleet") || html.includes("flurries") || html.includes("blowing") ? "JW Animations/evening_snow.mp4" : html.includes("tropical storm") || html.includes("rain and snow") || html.includes("rain and sleet") || html.includes("drizzle") || html.includes("rain") || html.includes("showers") && 0 == html.includes("thundershowers") ? "JW Animations/evening_rain.mp4" : html.includes("night") || html.includes("sunny") || html.includes("day") || html.includes("hot") ? "JW Animations/evening_sunny.mp4" : html.includes("tornado") || html.includes("hurricane") || html.includes("blustery") || html.includes("windy") ? "JW Animations/evening_windy.mp4" : "JW Animations/evening_sunny.mp4" : d >= 18 && d < 20 && (b = html.includes("cloudy") || html.includes("cold") ? "JW Animations/sunset_cloudy.mp4" : html.includes("dust") || html.includes("foggy") || html.includes("haze") || html.includes("smoky") ? "JW Animations/sunset_fog.mp4" : html.includes("hail") || html.includes("sleet") ? "JW Animations/sunset_hail.mp4" : html.includes("thunderstorms") || html.includes("thundershowers") || html.includes("isolated") ? "JW Animations/sunset_lightning.mp4" : html.includes("snow") && 0 == html.includes("rain") || html.includes("snow") && html.includes("sleet") || html.includes("flurries") || html.includes("blowing") ? "JW Animations/sunset_snow.mp4" : html.includes("tropical storm") || html.includes("rain and snow") || html.includes("rain and sleet") || html.includes("drizzle") || html.includes("rain") || html.includes("showers") && 0 == html.includes("thundershowers") ? "JW Animations/sunset_rain.mp4" : html.includes("night") || html.includes("sunny") || html.includes("day") || html.includes("hot") ? "JW Animations/sunset_sunny.mp4" : html.includes("tornado") || html.includes("hurricane") || html.includes("blustery") || html.includes("windy") ? "JW Animations/sunset_windy.mp4" : "JW Animations/sunset_sunny.mp4"), document.getElementById("my-video").src = b;
        }
    })
}

// THIS FUNCTION STARTS AND STOPS THE MUSIC WHEN YOU CLICK ON THE PICTURE IN THE TOP LEFT
function StartOrStop() {
    var audie = document.getElementById("music");
    if (audie.paused == false) {
        document.getElementById("newest").style.borderColor="black";
        document.getElementById("play-button").style.display="none";
        console.log("black border");
        audie.pause();
    }
    else if (audie.paused == true) {
        document.getElementById("newest").style.borderColor="white";
        document.getElementById("play-button").style.display="";
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












