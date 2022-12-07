var min = 0;
var sec = 0;
var miliSeconds = 0;
var displayMin = document.getElementById('displayMin');
var displaySec = document.getElementById('displaySec');
var displayMiliSec = document.getElementById('displayMiliSec');

var interval;

function timer() {
    miliSeconds++;

    if (miliSeconds == 10) {
        miliSeconds = 0;
        sec++

        if (sec == 60) {
            sec = 0;
            min++
        }
    }
    displayMiliSec.innerHTML = miliSeconds;
    displaySec.innerHTML = sec;
    displayMin.innerHTML = min;
}


function startTimer() {
    interval = setInterval(function () {
        timer()
    }, 100)
}

function pauseTimer() {
    clearInterval(interval);

}

function resetTimer() {
    pauseTimer();
    min = 0;
    sec = 0;
    miliSec = 0;
    displayMiliSec.innerHTML = miliSec;
    displaySec.innerHTML = sec;
    displayMin.innerHTML = min;
}