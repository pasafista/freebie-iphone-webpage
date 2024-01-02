document.addEventListener('DOMContentLoaded', function() {
    var deadline = new Date();
    deadline.setDate(deadline.getDate() + 3); // Set deadline 3 days from now

    function getTimeRemaining(endtime) {
        var total = Date.parse(endtime) - Date.parse(new Date());
        var seconds = Math.floor((total / 1000) % 60);
        var minutes = Math.floor((total / 1000 / 60) % 60);
        var hours = Math.floor((total / (1000 * 60 * 60)) % 24);
        var days = Math.floor(total / (1000 * 60 * 60 * 24));
        return {
            total,
            days,
            hours,
            minutes,
            seconds
        };
    }

    function initializeClock(id, endtime) {
        var clock = document.getElementById(id);
        var daysSpan = clock.querySelector('.days');
        var hoursSpan = clock.querySelector('.hours');
        var minutesSpan = clock.querySelector('.minutes');
        var secondsSpan = clock.querySelector('.seconds');

        function updateClock() {
            var t = getTimeRemaining(endtime);

            daysSpan.innerHTML = t.days;
            hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
            minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
            secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

            if (t.total <= 0) {
                clearInterval(timeinterval);
            }
        }

        updateClock();
        var timeinterval = setInterval(updateClock, 1000);
    }

    initializeClock('timer', deadline);

    // Display today's date and the date 3 days from now
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); // January is 0!
    var yyyy = today.getFullYear();
    var threeDaysFromNow = new Date(today);
    threeDaysFromNow.setDate(today.getDate() + 3);

    today = mm + '/' + dd + '/' + yyyy;
    threeDaysFromNow = (threeDaysFromNow.getMonth() + 1) + '/' + String(threeDaysFromNow.getDate()).padStart(2, '0') + '/' + threeDaysFromNow.getFullYear();

    // Update the content of the info2 div
    var info2Div = document.querySelector('.info2');
    info2Div.innerHTML = "Deadline: The giveaway starts on " + today + ". Winner will be announced on " + threeDaysFromNow + ".";
});
