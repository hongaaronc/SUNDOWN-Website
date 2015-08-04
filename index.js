checkScrollPosition = function () {
    if (document.getElementById("parallax").scrollTop >= 1000) {
        var backgrounds = document.getElementsByClassName("background");
        for (var i = 0; i < backgrounds.length; i++) {
            backgrounds[i].style.visibility = "visible";
        }
        var intro = document.getElementsByClassName("intro");
        for (var i = 0; i < intro.length; i++) {
            intro[i].style.visibility = "hidden";
        }
    }
    else {
        var backgrounds = document.getElementsByClassName("background");
        for (var i = 0; i < backgrounds.length; i++) {
            backgrounds[i].style.visibility = "hidden";
        }

        var intro = document.getElementsByClassName("intro");
        for (var i = 0; i < intro.length; i++) {
            intro[i].style.visibility = "visible";
        }
    }
    document.getElementById("parallax").scrollLeft = 0;
}

open_image = function () {
    
}