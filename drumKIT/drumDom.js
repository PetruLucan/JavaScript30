window.addEventListener("keydown", playSound);
var keys = document.querySelectorAll(".key");
keys.forEach(key => key.addEventListener("transitionend", removeTransition));


function playSound(e) {
    var audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    var key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (!audio) return;
    // console.log(key);
    audio.currentTime = 0;
    audio.play()
    key.classList.add("playing")
}
function removeTransition(e) {
    if (e.propertyName !== "transform") return;
    console.log(e.propertyName);
    this.classList.remove("playing")
}

