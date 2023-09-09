function delay(milliseconds){
    return new Promise(resolve => {
        setTimeout(resolve, milliseconds);
    });
}

for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        playSound(this.textContent);
        buttonAnimation(this.textContent);
    })
}

addEventListener("keydown", function(event) {
    playSound(event.key);
    buttonAnimation(event.key);
})

function playSound(input) {
    switch (input) {
        case "w":
            var sound = new Audio("./sounds/crash.mp3");
            break;
        case "a":
            var sound = new Audio("./sounds/kick-bass.mp3");
            break;
        case "s":
            var sound = new Audio("./sounds/snare.mp3");
            break;
        case "d":
            var sound = new Audio("./sounds/tom-1.mp3");
            break;
        case "j":
            var sound = new Audio("./sounds/tom-2.mp3");
            break;
        case "k":
            var sound = new Audio("./sounds/tom-3.mp3");
            break;
        case "l":
            var sound = new Audio("./sounds/tom-4.mp3");
            break;
        default:
            console.log(input);
            break;
    }
    sound.play();
}

function buttonAnimation(input) {
    document.querySelector("." + input).classList.add("pressed");
    setTimeout(() => {
        document.querySelector("." + input).classList.remove("pressed");
    }, 100);
}
