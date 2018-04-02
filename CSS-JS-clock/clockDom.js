var secondsHand = document.querySelector(".seconds-hand");
var minsHand = document.querySelector(".minutes-hand");
var hourHand = document.querySelector(".hours-hand");

function setDate(){
    var now = new Date();

    var seconds = now.getSeconds();
    var secondsDegrees = ((seconds / 60) * 360) + 90;
    secondsHand.style.transform = `rotate(${secondsDegrees}deg)`;

    var minutes = now.getMinutes();
    var minutesDegrees = ((minutes / 60) * 360) + 90;
    minsHand.style.transform = `rotate(${minutesDegrees}deg)`;
    
    var hours = now.getHours();
    var hoursDegrees = ((hours / 12) * 360) + 90;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

setInterval(setDate, 1000);