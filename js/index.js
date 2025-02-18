var introvisible = true;

function checkScrollPosition() {
    if (document.getElementById("parallax").scrollTop >= 1000) {
        if (introvisible) {
            var backgrounds = document.getElementsByClassName("background");
            for (var i = 0; i < backgrounds.length; i++) {
                backgrounds[i].style.visibility = "visible";
            }
            var intro = document.getElementsByClassName("intro");
            for (var i = 0; i < intro.length; i++) {
                intro[i].style.visibility = "hidden";
            }
            introvisible = false;
        }
    }
    else {
        if (!introvisible) {
            var backgrounds = document.getElementsByClassName("background");
            for (var i = 0; i < backgrounds.length; i++) {
                backgrounds[i].style.visibility = "hidden";
            }

            var intro = document.getElementsByClassName("intro");
            for (var i = 0; i < intro.length; i++) {
                intro[i].style.visibility = "visible";
            }
            introvisible = true;
        }
    }
    document.getElementById("parallax").scrollLeft = 0;
}

function image_open(mySource) {
    document.getElementById('viewer').style.visibility = 'visible';
    document.getElementById('viewer').style.opacity = '1';
    document.getElementById('viewer').style.filter = 'alpha(opacity=100)';
    myURL = mySource.style.backgroundImage.slice(4, -1).replace("\"", "").replace("\"", "");
    myURL = mySource.src;
    document.getElementById('viewer_image').style.borderColor = mySource.style.borderColor;
    document.getElementById('viewer_image').src = myURL;
    document.getElementById('viewer_link').href = myURL;
}
function image_close() {
    document.getElementById('viewer').style.opacity = '0';
    document.getElementById('viewer').style.filter = 'alpha(opacity=0)';
    document.getElementById('viewer').style.visibility = 'hidden';
}
