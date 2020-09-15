var y = new Date().getTime();

var countDownDate = new Date("Dec 6, 2020").getTime();

setInterval(time, 1000)

function time() {


    var current = new Date().getTime();


    var difference = countDownDate - current;


    var days = Math.floor(difference / (1000 * 60 * 60 * 24));
    var hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((difference % (1000 * 60)) / 1000);
    // var milliseconds = Math.floor((difference % 1000) / 100);


    document.getElementById("timer").innerHTML = days + "d " + hours + "h " +
        minutes + "m " + seconds + "s ";


    if (difference < 0) {
        clearInterval(time);
        document.getElementById("timer").innerHTML = "HAPPY BIRTHDAY!";
    }
}