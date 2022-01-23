var start = document.getElementById('start')
var reset = document.getElementById('reset')

var m = document.getElementById('minute')
var s = document.getElementById('second')

//store a reference to the variable
var startTimer = null;


function timer() {
    /* s.value = s.value < 10 ? '0' + s.value : s.value; */

    if(m.value == 0 && s.value == 0) {
        m.value = 0
        s.value = 0
    } else if(s.value != 0) {
        s.value--;
    } else if(m.value != 0 && s.value == 0) {
        s.value = 59;
        m.value--;
    } if (s.value < 10) {
        s.value = '0' + s.value
    }
    return 
}

function stopTimer() {
    clearInterval(startTimer)
}

start.addEventListener("click", () => {
    isTimerRunning = true
    //initialize the variable startTimer
    function startInterval() {
        startTimer = setInterval(() => {
            timer()
        }, 1000)
    }

    startInterval()
})

reset.addEventListener("click", () => {
    if(m.value != 0 || s.value != 0) {
        m.value = 0
        s.value = 0
        stopTimer()
    }
})