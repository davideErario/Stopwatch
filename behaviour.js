const stopwatch = document.getElementById("stopwatch");

var hr = 0;
var min = 0;
var sec = 0;
var stop = true;

function startWatch() {
    if (stop == true) {
        stop = false;
        timeFlow();
        document.getElementById("playpause").className = "fas fa-pause"
    } else {
        stop = true;
        document.getElementById("playpause").className = "fas fa-play"
    }
}

function timeFlow() {
    if (stop == false) {
        sec = parseInt(sec);
        min = parseInt(min);
        hr = parseInt(hr);

        sec = sec + 1;

        if (sec == 60) {
            min = min + 1;
            sec = 0;
        }

        if (min == 60) {
            hr = hr + 1;
            min = 0;
            sec = 0;
        }

        if (sec < 10 || sec == 0) {
            sec = "0" + sec;
        }

        if (min < 10 || min == 0) {
            min = "0" + min;
        }

        if (hr < 10 || hr == 0) {
            hr = "0" + hr;
        }

        stopwatch.innerHTML = hr + ":" + min + ":" + sec;

        setTimeout("timeFlow()", 1000);
    }
}

function resetWatch() {
    stopwatch.innerHTML = "00:00:00";
    stop = true;
    hr = 0;
    min = 0;
    sec = 0;
    document.getElementById("playpause").className = "fas fa-play"
}