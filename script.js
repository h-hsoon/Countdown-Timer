$(document).ready(function () {
    let timer;
    let minutes = 25;
    let seconds = 0;
    let isRunning = false;

    function updateTimeDisplay() {
        $('#time-display').text(
            `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
        );
    }

    function startTimer() {
        clearInterval(timer);
        timer = setInterval(function () {
            if (seconds === 0) {
                if (minutes === 0) {
                    clearInterval(timer);
                    $('#alarm-sound')[0].play();
                    isRunning = false;
                } else {
                    minutes--;
                    seconds = 59;
                }
            } else {
                seconds--;
            }
            updateTimeDisplay();
        }, 1000);
        isRunning = true;
    }

    $('#start-btn').click(function () {
        if (!isRunning) {
            startTimer();
        }
    });

    $('#reset-btn').click(function () {
        clearInterval(timer);
        minutes = parseInt($('#time-input').val());
        seconds = 0;
        updateTimeDisplay();
        isRunning = false;
    });

    $('#stop-btn').click(function () {
        clearInterval(timer);
        isRunning = false;
    });

    updateTimeDisplay();
});
