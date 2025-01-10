var helpVisibility = false;

function helpPopup() {
    if (helpVisibility != true) {
        document.getElementById("help-popup").classList.add("show");
        helpVisibility = true;
    } else {
        document.getElementById("help-popup").classList.remove("show");
        helpVisibility = false;
    }
}

function rotate() {
    const str = document.getElementById("rotating").innerHTML;
    const chars = str.split("");
    chars.sort(() => 0.5 - Math.random());
    document.getElementById("rotating").innerHTML = chars.join("");
}

setInterval(rotate, 50)
